// ECHO-7 3D head runtime (classic script, depends on window.THREE；模型为同目录 echo-head.glb)
(function(){
'use strict';
const THREE = window.THREE;

// ---- 极简 glTF 2.0 GLB 解析（只覆盖本项目用到的 POSITION/TEXCOORD/indices/morph target/贴图）----
async function parseHeadGLB(url) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('echo-head.glb HTTP ' + resp.status);
  const ab = await resp.arrayBuffer();
  const dv = new DataView(ab), u8 = new Uint8Array(ab);
  if (u8[0] !== 0x67 || u8[1] !== 0x6C || u8[2] !== 0x54 || u8[3] !== 0x46) throw new Error('bad glb magic');
  let off = 12, json = null, bin = null;
  while (off + 8 <= ab.byteLength) {
    const len = dv.getUint32(off, true), type = dv.getUint32(off + 4, true), start = off + 8;
    if (type === 0x4E4F534A) json = JSON.parse(new TextDecoder().decode(new Uint8Array(ab, start, len)));
    else if (type === 0x004E4942) bin = ab.slice(start, start + len);
    off = start + len;
  }
  if (!json || !bin) throw new Error('bad glb chunks');
  const bvs = json.bufferViews, accs = json.accessors;
  const CT = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array };
  const NC = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };
  function accData(ai) {
    const a = accs[ai], bv = bvs[a.bufferView];
    const Ctor = CT[a.componentType];
    const base = (bv.byteOffset || 0) + (a.byteOffset || 0);
    return new Ctor(bin, base, a.count * NC[a.type]);
  }
  async function imgUrl(ii) {
    const im = json.images[ii], bv = bvs[im.bufferView];
    const bytes = new Uint8Array(bin.slice(bv.byteOffset, bv.byteOffset + bv.byteLength));
    return URL.createObjectURL(new Blob([bytes], { type: im.mimeType || 'image/png' }));
  }
  const matTex = mi => json.materials[mi].pbrMetallicRoughness.baseColorTexture.index;
  const texSkin = await imgUrl(matTex(0));
  const texHair = await imgUrl(matTex(1));
  const mesh = json.meshes[0];
  const groups = mesh.primitives.map(prim => ({
    textured: prim.material === 1,
    position: new Float32Array(accData(prim.attributes.POSITION)),
    uv: new Float32Array(accData(prim.attributes.TEXCOORD_0)),
    index: new Uint32Array(accData(prim.indices)),
    morph: (prim.targets || []).map(t => new Float32Array(accData(t.POSITION)))
  }));
  const names = (mesh.extras && mesh.extras.targetNames) || (json.extras && json.extras.morphNames) || [];
  return {
    scale: json.extras.scale, fmin: json.extras.fmin, fmax: json.extras.fmax, anchors: json.extras.anchors,
    morphNames: names, groups, tex: { skin: texSkin, hair: texHair }
  };
}
let headModel = null;
const headReady = parseHeadGLB('echo-head.glb').then(m => { headModel = m; return m; });

const MOODS = {
  neutral: { smile:0.05, sad:0, anger:0, brow:0, lids:0, glow:0.7, jaw:0, color:0xff2a2a },
  tender:  { smile:0.55, sad:0, anger:0, brow:0.12, lids:0.18, glow:1.0, jaw:0, color:0xff5a6e },
  sad:     { smile:0, sad:0.75, anger:0, brow:-0.1, lids:0.45, glow:0.45, jaw:0, color:0xcc3344 },
  hungry:  { smile:0.05, sad:0, anger:0.7, brow:-0.25, lids:0.1, glow:1.5, jaw:0.1, color:0xff1515 },
  glitch:  { smile:0, sad:0.2, anger:0.3, brow:0, lids:0, glow:1.8, jaw:0.05, color:0x66ffcc }
};

// 探测 WebGL2（three r169 仅支持 WebGL2；不支持时直接抛错，交给游戏内 2D 兜底头像）
function webgl2Available(){
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('experimental-webgl2'));
  } catch (e) { return false; }
}

function EchoHead(canvas, M){
  M = M || headModel;
  if (!webgl2Available()) throw new Error('WebGL2 unavailable — use 2D fallback');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  } catch (e) { throw new Error('WebGL renderer creation failed — use 2D fallback'); }
  renderer.setPixelRatio(Math.min(devicePixelRatio||1, 2));
  renderer.setPixelRatio(Math.min(devicePixelRatio||1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
  camera.position.set(0, 0.05, 7.6);
  camera.lookAt(0, -0.05, 0);

  // lights
  scene.add(new THREE.AmbientLight(0xaab0c0, 1.7));
  const key = new THREE.DirectionalLight(0xf0f4ff, 2.0); key.position.set(-1.2, 2, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xff2233, 0.7); rim.position.set(0, 1.2, -4); scene.add(rim);
  const eyeLight = new THREE.PointLight(0xff2222, 0.12, 3); eyeLight.position.set(0, 0.1, 1.8); scene.add(eyeLight);

  const head = new THREE.Group(); head.rotation.y = Math.PI; scene.add(head);
  const loader = new THREE.TextureLoader();
  const glitchMats = [];

  function addGlitch(mat){
    mat.onBeforeCompile = sh=>{
      sh.uniforms.uGlitch = {value:0};
      sh.uniforms.uTime = {value:0};
      sh.vertexShader = 'uniform float uGlitch;uniform float uTime;\n' + sh.vertexShader
        .replace('#include <begin_vertex>', `#include <begin_vertex>
        float hsh = fract(sin(dot(position.xy + vec2(uTime*13.7,0.0), vec2(12.9898,78.233)))*43758.5453);
        float blk = floor(uTime*18.0) + floor(position.y*30.0);
        float jitter = step(0.82, fract(sin(blk*91.7)*43758.5)) * uGlitch;
        transformed.x += (hsh-0.5)*0.12*jitter;
        transformed.y += (fract(hsh*7.3)-0.5)*0.05*jitter;`);
      sh.fragmentShader = 'uniform float uGlitch;uniform float uTime;\n' + sh.fragmentShader
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        float scan = step(0.92, fract((gl_FragCoord.y + uTime*260.0)/4.0));
        totalEmissiveRadiance += vec3(0.1,0.9,0.6)*uGlitch*scan*0.8;
        float fl = step(0.985, fract(sin(floor(uTime*10.0))*43758.5))*uGlitch;
        totalEmissiveRadiance += vec3(1.0,0.2,0.3)*fl;`);
      mat.userData.shader = sh;
    };
    glitchMats.push(mat);
  }

  let faceMesh=null, faceBase=null;
  for(const g of M.groups){
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(g.position,3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(g.uv,2));
    geo.setIndex(new THREE.Uint32BufferAttribute(g.index, 1)); geo.computeVertexNormals();
    let mat;
    if(g.textured){
      const map = loader.load(M.tex.hair); map.colorSpace = THREE.SRGBColorSpace;
      // alpha 已烘进贴图 alpha 通道（glTF MASK）
      mat = new THREE.MeshStandardMaterial({map, alphaTest:0.22, side:THREE.DoubleSide, roughness:0.9, metalness:0});
    } else {
      const map = loader.load(M.tex.skin); map.colorSpace = THREE.SRGBColorSpace;
      mat = new THREE.MeshStandardMaterial({map, roughness:0.82, metalness:0, side:THREE.DoubleSide});
      faceMesh = new THREE.Mesh(geo, mat);
    }
    addGlitch(mat);
    const mesh = faceMesh && !g.textured ? faceMesh : new THREE.Mesh(geo, mat);
    head.add(mesh);
  }
  faceBase = new Float32Array(faceMesh.geometry.attributes.position.array);
  const morphByName = {}; M.morphNames.forEach((name,i)=>morphByName[name]=new Float32Array(M.groups[0].morph[i]));

  // ---- eyes ----
  const eyes = [];
  const eyeMat = new THREE.MeshStandardMaterial({color:0x0b0507, roughness:0.45, metalness:0.05});
  const irisMat = new THREE.MeshStandardMaterial({color:0x330000, emissive:0xff2222, emissiveIntensity:1.4, roughness:0.2, metalness:0});
  irisMat.toneMapped = false;
  const lidMat = new THREE.MeshStandardMaterial({color:0xc9ada0, roughness:0.9});
  addGlitch(lidMat);
  for(const a of [M.anchors.eyeL, M.anchors.eyeR]){
    const grp = new THREE.Group();
    const scl = new THREE.Mesh(new THREE.SphereGeometry(0.082, 24, 18), eyeMat);
    scl.position.set(a[0], a[1], a[2]+0.03); scl.scale.set(1, 0.78, 0.62);
    const iris = new THREE.Mesh(new THREE.SphereGeometry(0.04, 20, 14), irisMat);
    iris.position.set(a[0], a[1], a[2]-0.055); iris.scale.set(1,1,0.5);
    const upLid = new THREE.Mesh(new THREE.SphereGeometry(0.088, 20, 14), lidMat);
    upLid.position.set(a[0], a[1]+0.052, a[2]+0.02); upLid.scale.set(1.08, 0.5, 0.55);
    const loLid = new THREE.Mesh(new THREE.SphereGeometry(0.088, 20, 14), lidMat);
    loLid.position.set(a[0], a[1]-0.058, a[2]+0.025); loLid.scale.set(1.04, 0.32, 0.5);
    grp.add(scl,iris,upLid,loLid);
    head.add(grp);
    eyes.push({grp,scl,iris,upLid,loLid, x:a[0], y:a[1]});
  }
  // ---- 3d brows ----
  const browMat = new THREE.MeshStandardMaterial({color:0x2a1d18, roughness:0.9});
  addGlitch(browMat);
  const brows = [];
  for(const sgn of [-1,1]){
    const bg = new THREE.Group();
    const b = new THREE.Mesh(new THREE.CapsuleGeometry(0.019, 0.12, 6, 12), browMat);
    b.rotation.z = sgn*Math.PI/2;
    b.scale.z = 0.55;
    bg.add(b);
    bg.position.set(sgn*0.262, 0.185, -0.82);
    bg.rotation.z = -sgn*0.08;
    head.add(bg);
    brows.push({g:bg, sgn});
  }
  // ---- mouth interior + teeth ----
  const mouthY = M.anchors.mouth[1];
  const mouthMat = new THREE.MeshStandardMaterial({color:0x1a0506, roughness:0.6});
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 12), mouthMat);
  mouth.position.set(0, mouthY-0.02, -0.87); mouth.scale.set(0.95, 0.001, 0.5);
  mouth.visible=false; head.add(mouth);
  const teethMat = new THREE.MeshStandardMaterial({color:0xb8b0a0, roughness:0.5});
  const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.022, 0.04), teethMat);
  teeth.position.set(0, mouthY+0.005, -0.82); teeth.visible=false;
  head.add(teeth);

  // state
  const st = { mood:'neutral', talk:0, talkPhase:0, blink:0, blinkTimer:1.5+Math.random()*3,
    lookX:0, lookY:0, glitch:0, jawOverride:null, cur:Object.assign({},MOODS.neutral) };

  function setMood(m){ if(MOODS[m]) st.mood=m; }
  function setTalk(v){ st.talk = Math.max(0, Math.min(1, v)); }
  function setJaw(v){ st.jawOverride = v; }
  function setLook(x,y){ st.lookX=x; st.lookY=y; }
  function pulseGlitch(t){ st.glitch = Math.max(st.glitch, t); }

  let last = performance.now(), running=true;
  function frame2(now){
    if(!running) return;
    requestAnimationFrame(frame2);
    const dt = Math.min(0.05,(now-last)/1000); last=now;
    const t = now/1000;
    const target = MOODS[st.mood] || MOODS.neutral;
    const k = 1-Math.pow(0.001, dt);
    for(const key in target) st.cur[key] += (target[key]-st.cur[key])*k;
    st.glitch *= Math.pow(0.02, dt);
    st.blinkTimer -= dt;
    let blinkTarget = st.cur.lids;
    if(st.blinkTimer<0){ blinkTarget=1; if(st.blinkTimer<-0.18) st.blinkTimer=2+Math.random()*4; }
    st.blink += (blinkTarget-st.blink)*(1-Math.pow(0.0001,dt));
    st.talkPhase += dt*(6+st.talk*8);
    const syll = st.talk>0.02 ? (0.5+0.5*Math.sin(st.talkPhase))*(0.6+0.4*Math.sin(st.talkPhase*2.7)) : 0;
    const jaw = st.jawOverride!==null ? st.jawOverride : Math.max(st.cur.jaw, syll*0.85*st.talk);
    const eyeOpen = (1-st.blink)*(1-0.65*st.cur.lids);
    const w = {jaw, smile:st.cur.smile, sad:st.cur.sad, anger:st.cur.anger, eyeOpen};
    const pa = faceMesh.geometry.attributes.position.array;
    pa.set(faceBase);
    for(const name of ['jaw','smile','sad','anger','eyeOpen']){
      const d=morphByName[name], wt=w[name]; if(!wt) continue;
      for(let i=0;i<pa.length;i++) pa[i]+=d[i]*wt;
    }
    faceMesh.geometry.attributes.position.needsUpdate=true;
    faceMesh.geometry.computeVertexNormals();
    const lookX=st.lookX*0.022, lookY=st.lookY*0.016;
    for(const e of eyes){
      e.iris.position.x=e.x+lookX; e.iris.position.y=e.y+lookY;
    }
    // brows: sad inner up, anger inner down, tender raise
    const browInner = st.cur.sad*0.2 - st.cur.anger*0.26 + st.cur.brow*0.1;
    for(const b of brows){
      b.g.rotation.z = -b.sgn*0.08 + b.sgn*browInner;
      b.g.position.y = 0.215 + st.cur.brow*0.02 - st.cur.anger*0.01;
    }
    irisMat.emissive.setHex(st.cur.color|0);
    irisMat.emissiveIntensity=st.cur.glow*(0.85+0.3*Math.sin(t*5))+st.glitch*1.8;
    eyeLight.color.setHex(st.cur.color|0);
    eyeLight.intensity=st.cur.glow*0.9+st.glitch;
    mouth.visible=jaw>0.04;
    mouth.scale.set(1.15, Math.max(0.001,jaw*0.3), 0.6);
    mouth.position.y=mouthY-0.02-jaw*0.06;
    teeth.visible=jaw>0.18;
    teeth.position.y=mouthY+0.005-jaw*0.02;
    const tilt=st.mood==='hungry'?0.12:0;
    head.rotation.z=tilt+0.02*Math.sin(t*0.6);
    head.rotation.y=Math.PI+0.12*Math.sin(t*0.35)+st.glitch*(Math.random()-0.5)*0.08;
    head.rotation.x=tilt*0.6+0.03*Math.sin(t*0.8);
    head.position.x=st.glitch*(Math.random()-0.5)*0.05;
    for(const mat of glitchMats){const sh=mat.userData.shader;if(sh){sh.uniforms.uGlitch.value=st.glitch;sh.uniforms.uTime.value=t;}}
    renderer.render(scene,camera);
  }

  function resize(){
    const w=canvas.clientWidth||300, h=canvas.clientHeight||300;
    renderer.setSize(w,h,false);
    camera.aspect=w/h; camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(frame2);

  return { setMood, setTalk, setJaw, setLook, pulseGlitch, resize,
    dispose(){ running=false; window.removeEventListener('resize',resize); renderer.dispose(); } };
}

window.EchoHead = { ready: headReady, create: c=>EchoHead(c), MOODS };
})();

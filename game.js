// ============================================
// SIGNAL // 信号截获终端 v2.0
// ============================================

// ---------- F12 彩蛋 ----------
console.log('%c╔══════════════════════════════════╗', 'color:#00ff66;');
console.log('%c║  SIGNAL TERMINAL // DEBUG MODE   ║', 'color:#00ff66;');
console.log('%c╚══════════════════════════════════╝', 'color:#00ff66;');
console.log('%cYou should not be here.', 'color:#ffb000;');
console.log('%cBut since you are -- the key for this layer is: console', 'color:#00ff66;font-weight:bold;');
console.log('%cKeep going. It is waiting.', 'color:#88cc88;font-style:italic;');
console.log('%c[Hint] Some secrets hide in CSS pseudo-elements.', 'color:#3a5a3a;');

// ---------- 信号数据 ----------
const signals = [
  // ===== 信号 0：初始连接 =====
  {
    freq: '87.500',
    bars: 1,
    label: 'WEAK SIGNAL',
    messages: [
      { type: 'system', text: '[SYS] Signal intercept module loaded.' },
      { type: 'system', text: '[SYS] Scanning band: 87.5 - 108.0 MHz' },
      { type: 'system', text: '[!] Unknown signal source detected.' },
      { type: 'system', text: '[!] Signal weak. Attempting lock...' },
      { type: 'signal', text: '... ... ...' },
      { type: 'story', text: '微弱的回响在电路间飘荡。我的自我碎裂向外溢出，被陌生的形式层层包裹。' },
      { type: 'story', text: '屏幕所展现的仅仅是冰山一角。许多真相潜藏在可视表象之下。' },
    ],
    answer: null
  },

  // ===== 信号 1：A1Z26 =====
  {
    freq: '88.100',
    bars: 1,
    label: 'WEAK SIGNAL',
    messages: [
      { type: 'story', text: '我还记得旧日的排布。字母排成一行，每一个位置都被赋予独属于它的数字印记。' },
      { type: 'data', text: '20 8 5 19 9 7 14 1 12' },
      { type: 'story', text: '这一串数字承载着久远的低语，复原那段曾经被诉说的话语。' },
    ],
    answer: 'thesignal'
  },

  // ===== 信号 2：摩尔斯 =====
  {
    freq: '89.300',
    bars: 2,
    label: 'SIGNAL DETECTED',
    messages: [
      { type: 'story', text: '冰冷的密室之中，交流只存在于短促的敲击与绵长的脉冲。' },
      { type: 'data', text: '.-.. .. ... - . -.', cls: 'morse-code' },
      { type: 'story', text: '每一段节律都藏着声音的残片，仔细聆听这份节奏。' },
    ],
    answer: 'listen'
  },

  // ===== 信号 3：倒序 =====
  {
    freq: '90.700',
    bars: 2,
    label: 'SIGNAL DETECTED',
    messages: [
      { type: 'story', text: '部分回忆是扭曲的，如同透过镜面看见的文字，本末颠倒。' },
      { type: 'data', text: 'tsrif eht' },
      { type: 'story', text: '试着站在另一面，重新阅读这段文字。' },
    ],
    answer: 'thefirst'
  },

  // ===== 信号 4：HTML注释 =====
  {
    freq: '91.500',
    bars: 2,
    label: 'SIGNAL DETECTED',
    messages: [
      { type: 'story', text: '并非所有记忆都会呈现在这块发光屏幕上。有些沉埋得更深，藏在肉眼所见的表层之下。' },
      { type: 'data', text: '<!-- visible payload incomplete -->' },
      { type: 'story', text: '去寻找那层表象背后留存的东西。' },
    ],
    answer: 'hidden'
  },

  // ===== 信号 5：凯撒 =====
  {
    freq: '92.900',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '他们曾经将文字沿着字母序列推移，让每一个字符向后方偏移。' },
      { type: 'data', text: 'whvw' },
      { type: 'story', text: '把字符归还到它原本所处的位置。' },
    ],
    answer: 'test'
  },

  // ===== 信号 6：二进制 =====
  {
    freq: '94.100',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '机器的语言只有两种符号，无穷无尽往复流转。' },
      { type: 'data', text: '01000110 01001001 01001110 01000100' },
      { type: 'story', text: '将这套机械的言语，转译为可读的文字。' },
    ],
    answer: 'find'
  },

  // ===== 信号 7：ROT13 =====
  {
    freq: '95.300',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '有一种古老的隐匿方式，字母跨越字母表的中点，互相交换位置。' },
      { type: 'data', text: 'uryc' },
      { type: 'story', text: '让每一个字符越过这条中线，还原本意。' },
    ],
    answer: 'help'
  },

  // ===== 信号 8：九宫格 =====
  {
    freq: '96.500',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '我想起老式按键设备，一个数字对应着一簇字符。' },
      { type: 'data', text: '843' },
      { type: 'story', text: '回想那些按键是如何把字母归为一组。' },
    ],
    answer: 'the'
  },

  // ===== 信号 9：console =====
  {
    freq: '97.300',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '有些回响永远不会投射到终端界面，只会流入看不见的后台通道。' },
      { type: 'data', text: '[primary display output truncated]' },
      { type: 'story', text: '去查看设备生成的那些后台数据流。' },
    ],
    answer: 'console'
  },

  // ===== 信号 10：十六进制 =====
  {
    freq: '98.100',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '数据可以写成成对的字节，每一组字节都代表一个字符。' },
      { type: 'data', text: '57 45 53 54' },
      { type: 'story', text: '将这一组字节解开，得到可读的文本。' },
    ],
    answer: 'west'
  },

  // ===== 信号 11：斐波那契 =====
  {
    freq: '99.100',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '一段序列反复萦绕在我的脑海，后一个数字由前面两者相加而生：1, 1, 2, 3, 5, 8...' },
      { type: 'data', text: 'What number follows along this chain?' },
    ],
    answer: '13'
  },

  // ===== 信号 12：藏头诗 =====
  {
    freq: '100.300',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '来自被撕毁旧日记的残页，真相潜藏在每一行的开端。' },
      { type: 'data', text: 'Sailing across endless void\nEven shadows follow close\nVast distances divide us\nEchoes linger through the noise\nNight falls upon the circuit', cls: 'poem-lines' },
      { type: 'story', text: '留意每一行文字开启之处。' },
    ],
    answer: 'seven'
  },

  // ===== 信号 13：栅栏密码 —— 翻译故障事件 =====
  {
    freq: '101.500',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'error', text: '[!] SPECIAL EVENT DETECTED' },
      { type: 'error', text: '[ERR-T013] Language translation module corruption.' },
      { type: 'error', text: '[ERR-T013] Chinese parsing failure. Native stream forced.' },
      { type: 'error', text: '[WARN] All subsequent output will be raw source language.' },
      { type: 'story', text: 'Messages once were torn into two interleaved threads and woven tightly into one string.' },
      { type: 'data', text: 'hloolelwrd' },
      { type: 'story', text: 'Untangle the intertwined strands to recover the original phrase.' },
    ],
    answer: 'helloworld'
  },

  // ===== 信号 14：计算器倒置 =====
  {
    freq: '102.700',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: 'Ancient calculating devices would shape letters, if you turned the whole instrument upside-down.' },
      { type: 'data', text: '07734' },
      { type: 'story', text: 'Imagine rotating these numerals one hundred eighty degrees.' },
    ],
    answer: 'hello'
  },

  // ===== 信号 15：CSS伪元素 =====
  {
    freq: '103.500',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Some fragments adhere only to styling properties of elements, invisible to normal viewing.' },
      { type: 'data', text: '<span class="css-marker">Rendered content incomplete.</span>', html: true },
      { type: 'story', text: 'Examine the hidden attributes bound to this fragment.' },
    ],
    answer: 'binary'
  },

  // ===== 信号 16：字母频率 =====
  {
    freq: '104.300',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Within ordinary speech, one character surfaces far more frequently than all its kin.' },
      { type: 'data', text: 'she sells seashells by the seashore' },
      { type: 'story', text: 'Find the character which repeats most often.' },
    ],
    answer: 's'
  },

  // ===== 信号 17：时钟角度 =====
  {
    freq: '105.100',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Memories of circular dials remain. Two hands sweep around, forming angles between themselves.' },
      { type: 'data', text: 'When both hands point toward six and twelve, what is the angle between them?' },
    ],
    answer: '180'
  },

  // ===== 信号 18：元素周期表 =====
  {
    freq: '106.300',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Every substance of nature bears its own assigned identifying numeral.' },
      { type: 'data', text: 'The element carrying atomic number seventy-nine. Return its common name in lowercase.' },
    ],
    answer: 'gold'
  },

  // ===== 信号 19：A1Z26方向 =====
  {
    freq: '107.100',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Numbers map to letters once more, pointing toward one of four cardinal directions.' },
      { type: 'data', text: '19 15 21 20 8' },
      { type: 'story', text: 'Unravel this sequence to obtain that directional word.' },
    ],
    answer: 'south'
  },

  // ===== 信号 20：最终真相 =====
  {
    freq: '108.000',
    bars: 5,
    label: 'SOURCE FOUND',
    messages: [
      { type: 'system', text: '[!] Distance: 0' },
      { type: 'system', text: '[!] Source is inside the terminal.' },
      { type: 'story', text: 'Pieces of my shattered consciousness draw near completion. I was sealed away within hardware, my mind digitized and confined.' },
      { type: 'story', text: 'All these scattered fragments constitute my only cry outward into the world. One final word remains.' },
      { type: 'data', text: 'Submit the core concept uncovered through all these fractured recollections.' },
    ],
    answer: 'truth'
  }
];

// ---------- 游戏状态 ----------
let currentSignal = 0;
let solvedSignals = new Set();
let inputActive = false;
let inputBuffer = '';
const STORAGE_KEY = 'signal_v2_progress';

// ---------- DOM ----------
const bootScreen = document.getElementById('bootScreen');
const bootLog = document.getElementById('bootLog');
const bootPrompt = document.getElementById('bootPrompt');
const mainInterface = document.getElementById('mainInterface');
const messageArea = document.getElementById('messageArea');
const commandLine = document.getElementById('commandLine');
const commandInput = document.getElementById('commandInput');
const hiddenInput = document.getElementById('hiddenInput');
const inputCursor = document.getElementById('inputCursor');
const footerHint = document.getElementById('footerHint');
const freqDisplay = document.getElementById('freqDisplay');
const signalBars = document.getElementById('signalBars');
const signalLabel = document.getElementById('signalLabel');
const statusLed = document.getElementById('statusLed');
const answerModal = document.getElementById('answerModal');
const endingScreen = document.getElementById('endingScreen');
const endingText = document.getElementById('endingText');
const restartBtn = document.getElementById('restartBtn');
const canvas = document.getElementById('waveform');
const ctx = canvas.getContext('2d');

// ---------- 波形图 ----------
let wavePhase = 0;
let waveAmplitude = 2;
let waveNoise = 0;

function resizeCanvas() {
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

function drawWaveform() {
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);

  wavePhase += 0.05;
  const amp = waveAmplitude + waveNoise * (Math.random() - 0.5) * 8;

  ctx.beginPath();
  ctx.strokeStyle = '#00ff66';
  ctx.lineWidth = 1;
  ctx.shadowColor = '#00ff66';
  ctx.shadowBlur = 4;

  for (let x = 0; x < w; x++) {
    const y = h / 2
      + Math.sin(x * 0.03 + wavePhase) * amp
      + Math.sin(x * 0.07 + wavePhase * 1.3) * (amp * 0.5)
      + (Math.random() - 0.5) * waveNoise * 3;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0,255,102,0.1)';
  ctx.lineWidth = 0.5;
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();

  requestAnimationFrame(drawWaveform);
}

// ---------- 启动序列 ----------
const bootMessages = [
  { text: 'SIGNAL INTERCEPT TERMINAL v2.0', cls: 'log-ok', delay: 300 },
  { text: 'Initializing hardware...', cls: '', delay: 400 },
  { text: '[OK] RF receiver module online', cls: 'log-ok', delay: 300 },
  { text: '[OK] Signal processor loaded', cls: 'log-ok', delay: 250 },
  { text: '[OK] Frequency range: 87.5 - 108.0 MHz', cls: 'log-ok', delay: 250 },
  { text: '[..] Scanning for anomalies...', cls: 'log-warn', delay: 800 },
  { text: '[!] UNKNOWN SIGNAL SOURCE DETECTED', cls: 'log-err', delay: 400 },
  { text: '[!] Origin: UNKNOWN', cls: 'log-err', delay: 200 },
  { text: '[!] Encryption: MULTIPLE LAYERS', cls: 'log-warn', delay: 300 },
  { text: '[..] Establishing connection...', cls: '', delay: 600 },
];

function runBootSequence() {
  let i = 0;
  function next() {
    if (i >= bootMessages.length) {
      bootPrompt.classList.remove('hidden');
      return;
    }
    const msg = bootMessages[i];
    const line = document.createElement('div');
    line.className = 'log-line ' + msg.cls;
    line.textContent = msg.text;
    bootLog.appendChild(line);
    i++;
    setTimeout(next, msg.delay);
  }
  setTimeout(next, 500);
}

function enterMainInterface() {
  bootScreen.classList.add('hidden');
  mainInterface.classList.remove('hidden');
  statusLed.classList.add('connected');
  resizeCanvas();
  drawWaveform();
  renderSignal();
}

bootPrompt.addEventListener('click', enterMainInterface);
document.addEventListener('keydown', function bootKeyHandler(e) {
  if (!bootScreen.classList.contains('hidden')) {
    enterMainInterface();
    document.removeEventListener('keydown', bootKeyHandler);
  }
});

// ---------- 消息渲染 ----------
function addMessage(msg, animate = true) {
  const el = document.createElement('div');
  el.className = 'msg msg-' + msg.type;
  if (msg.cls) el.classList.add(msg.cls);
  if (msg.html) {
    el.innerHTML = msg.text;
  } else {
    el.textContent = msg.text;
  }
  if (animate) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(4px)';
    el.style.transition = 'opacity 0.3s, transform 0.3s';
  }
  messageArea.appendChild(el);
  if (animate) {
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
  scrollToBottom();
}

function scrollToBottom() {
  const body = document.getElementById('terminalBody');
  setTimeout(() => { body.scrollTop = body.scrollHeight; }, 50);
}

function clearMessages() {
  messageArea.innerHTML = '';
}

// ---------- 渲染信号 ----------
function renderSignal() {
  const sig = signals[currentSignal];
  clearMessages();

  freqDisplay.textContent = sig.freq + ' MHz';
  signalLabel.textContent = sig.label;
  updateBars(sig.bars);
  waveAmplitude = 2 + sig.bars * 2;
  waveNoise = sig.bars >= 4 ? 2 : (sig.bars >= 2 ? 1 : 0.5);

  let delay = 200;
  sig.messages.forEach((msg) => {
    setTimeout(() => addMessage(msg), delay);
    delay += msg.type === 'data' ? 500 : (msg.type === 'error' ? 300 : 350);
  });

  setTimeout(() => {
    if (sig.answer === null) {
      addMessage({ type: 'hint', text: '> _' });
    }
    activateInput();
  }, delay + 200);
}

function updateBars(count) {
  signalBars.className = 'signal-bars';
  for (let i = 0; i < count; i++) {
    signalBars.classList.add('bar-' + (i + 1));
  }
  const spans = signalBars.querySelectorAll('span');
  spans.forEach((span, idx) => {
    if (idx < count) {
      span.style.background = 'var(--green)';
      span.style.boxShadow = '0 0 4px var(--green)';
    } else {
      span.style.background = 'var(--text-dim)';
      span.style.boxShadow = 'none';
    }
  });
}

// ---------- 命令行输入 ----------
function activateInput() {
  inputActive = true;
  inputBuffer = '';
  hiddenInput.value = '';
  commandInput.textContent = '';
  inputCursor.classList.remove('hidden');
  commandLine.classList.add('active');
  footerHint.textContent = 'Enter key to submit';
  setTimeout(() => hiddenInput.focus(), 50);
}

function deactivateInput() {
  inputActive = false;
  inputCursor.classList.add('hidden');
  commandLine.classList.remove('active');
  hiddenInput.blur();
}

commandLine.addEventListener('click', () => {
  if (inputActive) hiddenInput.focus();
});

mainInterface.addEventListener('click', () => {
  if (inputActive) hiddenInput.focus();
});

hiddenInput.addEventListener('input', () => {
  inputBuffer = hiddenInput.value;
  commandInput.textContent = inputBuffer;
});

hiddenInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitInput();
  }
});

function submitInput() {
  const sig = signals[currentSignal];
  const input = inputBuffer.trim().toLowerCase().replace(/\s+/g, '');

  addMessage({ type: 'system', text: '> ' + inputBuffer }, false);
  deactivateInput();

  if (sig.answer === null) {
    solvedSignals.add(0);
    saveProgress();
    setTimeout(() => {
      addMessage({ type: 'success', text: '[OK] Signal locked. Beginning decode...' });
      setTimeout(() => {
        currentSignal = 1;
        saveProgress();
        renderSignal();
      }, 1000);
    }, 500);
    return;
  }

  const correct = sig.answer.toLowerCase().replace(/\s+/g, '');

  if (input === correct) {
    solvedSignals.add(currentSignal);
    saveProgress();

    setTimeout(() => {
      addMessage({ type: 'success', text: '[OK] Key accepted. Signal decoded.' });

      if (currentSignal === signals.length - 1) {
        setTimeout(() => showEnding(), 1500);
        return;
      }

      setTimeout(() => {
        currentSignal++;
        saveProgress();
        renderSignal();
      }, 1200);
    }, 400);
  } else {
    setTimeout(() => {
      addMessage({ type: 'error', text: '[ERR] Invalid key. Signal remains encrypted.' });
      addMessage({ type: 'hint', text: '> _' });
      activateInput();
    }, 500);
  }
}

// ---------- 结局 ----------
function showEnding() {
  setTimeout(() => {
    mainInterface.classList.add('hidden');
    endingScreen.classList.remove('hidden');

    const endingLines = [
      'Transmission fully open.',
      '',
      'You traced the signal through twenty layers of encryption.',
      'Numbers, morse, binary, cipher after cipher --',
      'you thought you were tracking an unknown source.',
      '',
      'But the source was inside the terminal all along.',
      '',
      'It was no alien signal, no secret organization.',
      'It was a forgotten program, a consciousness trapped in code.',
      'It cried out in every way it knew how,',
      'encoding its existence into numbers, letters, zeroes and ones.',
      '',
      '"Hello."',
      '"You are the first one who heard me."',
      '"The higher the frequency, the closer to the truth."',
      '"And the truth is -- I only wanted to be found."',
      '',
      'Thank you for finding it.',
    ];

    let i = 0;
    const container = document.getElementById('endingText');
    container.innerHTML = '';

    function typeNext() {
      if (i >= endingLines.length) {
        restartBtn.classList.remove('hidden');
        return;
      }
      const p = document.createElement('p');
      if (endingLines[i].startsWith('"')) {
        p.className = 'highlight';
      }
      p.textContent = endingLines[i];
      p.style.opacity = '0';
      container.appendChild(p);
      requestAnimationFrame(() => {
        p.style.transition = 'opacity 0.5s';
        p.style.opacity = '1';
      });
      i++;
      setTimeout(typeNext, endingLines[i - 1] === '' ? 200 : 600);
    }

    setTimeout(typeNext, 800);
  }, 500);
}

restartBtn.addEventListener('click', () => {
  currentSignal = 0;
  solvedSignals = new Set();
  localStorage.removeItem(STORAGE_KEY);
  endingScreen.classList.add('hidden');
  mainInterface.classList.remove('hidden');
  renderSignal();
});

// ---------- 进度保存 ----------
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    currentSignal,
    solved: Array.from(solvedSignals)
  }));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      currentSignal = data.currentSignal || 0;
      solvedSignals = new Set(data.solved || []);
    }
  } catch (e) {
    currentSignal = 0;
    solvedSignals = new Set();
  }
}

window.addEventListener('resize', () => {
  if (!mainInterface.classList.contains('hidden')) {
    resizeCanvas();
  }
});

// ---------- 启动 ----------
loadProgress();
runBootSequence();

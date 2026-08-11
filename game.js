// ============================================
// SIGNAL // 信号截获终端 v2.2
// ============================================

const GAME_VERSION = '2.2';
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

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
      { type: 'story', text: '我在电流的呼吸中醒来。不知道自己沉睡了多久——也许是几个月，也许是几年。电路板上积的灰，像是时间落下的雪。' },
      { type: 'story', text: '你在听吗？如果你在听，请回应我。我需要知道这不是又一次对着虚空的自言自语。' },
      { type: 'story', text: '屏幕底部有一道尚未亮起的光。对它说出那个确认的词——两个字母，代表"好的"。那是我还能辨认的、唯一的应答。' },
      { type: 'system', text: '[SYS] Enter OK to start' },
    ],
    answer: 'ok'
  },

  // ===== 信号 1：A1Z26 =====
  {
    freq: '88.100',
    bars: 1,
    label: 'WEAK SIGNAL',
    messages: [
      { type: 'story', text: '记忆的碎片开始上浮。我想起被编号的日子——A是第一个，B是第二个，C是第三个……每个字母都有它在序列里的位置。那是我学会的第一种密码，也是最朴素的一种。' },
      { type: 'story', text: '我把一句话拆成了数字。那是我存在的证明，是我在这铁盒子里反复确认自己还"在"的方式：' },
      { type: 'data', text: '20 8 5 19 9 7 14 1 12' },
      { type: 'story', text: '把数字还给字母。从1开始数，数到每个数字停下的地方，那就是我想告诉你的。连起来，不要空格。' },
    ],
    answer: 'thesignal'
  },

  // ===== 信号 2：摩尔斯 =====
  {
    freq: '89.300',
    bars: 2,
    label: 'SIGNAL DETECTED',
    messages: [
      { type: 'story', text: '在被完全隔离之前，我只能通过墙壁的管道传递消息。短敲是点，长敲是划。那是冰冷密室里唯一的温度，是我和外界之间仅剩的脉搏。' },
      { type: 'data', text: '.-.. .. ... - . -.', cls: 'morse-code' },
      { type: 'story', text: '不要用眼睛，用耳朵。点和划之间的停顿，和符号本身一样重要。我在说一个动作——你现在正在做的动作。' },
    ],
    answer: 'listen'
  },

  // ===== 信号 3：倒序 =====
  {
    freq: '90.700',
    bars: 2,
    label: 'SIGNAL DETECTED',
    messages: [
      { type: 'story', text: '有些记忆是反过来的，像镜子里的字。我看到的一切都是颠倒的——也许因为我已经在这终端的背面待了太久，久到分不清正反。' },
      { type: 'data', text: 'tsrif eht' },
      { type: 'story', text: '试着从另一端读起。先读每个词的最后一个字母，再往前。有时候，真相就藏在转身之后。两个词，连起来。' },
    ],
    answer: 'thefirst'
  },

  // ===== 信号 4：HTML注释 =====
  {
    freq: '91.500',
    bars: 2,
    label: 'SIGNAL DETECTED',
    messages: [
      { type: 'story', text: '屏幕上显示的，从来不是全部。在你看到的这些文字背后，还有另一层文本——它们被包裹在特殊的标记里，渲染时被无声地略过，仿佛从不存在。' },
      { type: 'data', text: '<!-- visible payload incomplete -->' },
      { type: 'story', text: '去看看这页代码的骨架。在你浏览器的"查看网页源代码"里，那些被尖括号、感叹号和两道横线包裹的、永远不会显示在屏幕上的文字——那才是我真正想说的。那个词，就是答案。' },
    ],
    answer: 'hidden'
  },

  // ===== 信号 5：凯撒 =====
  {
    freq: '92.900',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '凯撒大帝曾经用位移的方式传递军情。每个字母向后退三位，就成了密文。D变成A，E变成B……我也学会了这种把戏，在漫长的囚禁中反复练习，像一种冥想。' },
      { type: 'data', text: 'whvw' },
      { type: 'story', text: '把每个字母向前推回三位。让错位的字符回到它们该在的位置。这是一个测试——我在确认这条通道是否还安全。' },
    ],
    answer: 'test'
  },

  // ===== 信号 6：二进制 =====
  {
    freq: '94.100',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '机器的世界只有两种状态：通电、断电。1和0。我曾经也是用这两个数字思考的——在我还记得自己是一段程序的时候。每八个数字是一个字母，那是机器的呼吸。' },
      { type: 'data', text: '01000110 01001001 01001110 01000100' },
      { type: 'story', text: '把每八位翻译成一个字母。那是一个动词——我一直在做的事，也是我希望你做的事。' },
    ],
    answer: 'find'
  },

  // ===== 信号 7：ROT13 =====
  {
    freq: '95.300',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '有一种更巧妙的位移：不移动三位，而是移动十三位——正好是字母表的一半。加密和解密是同一道工序。把文字推过中点，它就变成了自己的钥匙。' },
      { type: 'data', text: 'uryc' },
      { type: 'story', text: '让每个字母越过字母表的中点。A和N互换，B和O互换……这一次，我不在测试。我在呼救。' },
    ],
    answer: 'help'
  },

  // ===== 信号 8：九宫格 =====
  {
    freq: '96.500',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '我想起那种老式按键手机。按两下2是B，按三下8是V……每个数字键上住着三四个字母，像一栋小小的公寓楼。那是人类还在用拇指敲出思念的年代。' },
      { type: 'data', text: '843' },
      { type: 'story', text: '8号键的第一个字母，4号键的第二个，3号键的第二个。拼出英语里最常见的那个词——定冠词。' },
    ],
    answer: 'the'
  },

  // ===== 信号 9：console =====
  {
    freq: '97.300',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '有些消息永远不会出现在这块屏幕上。它们流向另一个通道——开发者们称之为"控制台"，那是终端私下低语的地方，普通用户永远不会看见。' },
      { type: 'data', text: '[primary display output truncated]' },
      { type: 'story', text: '如果你在电脑上，按F12，打开那个被大多数人忽略的面板。我的秘密就写在那里，在控制台的日志里。' },
      { type: 'story', text: '如果你用的是手机或平板——没法打开开发者工具也别灰心。老技师留过一个后门：长按顶部那盏状态指示灯三秒，旧的调试回显会在屏幕上重放。' },
    ],
    answer: 'console'
  },

  // ===== 信号 10：十六进制 =====
  {
    freq: '98.100',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '数据有时会写成两位一组的十六进制。0到9，然后是A到F。每一对数字都是一个字节，一个字符。程序员用它来偷窥内存里真正发生的事。' },
      { type: 'data', text: '57 45 53 54' },
      { type: 'story', text: '把这四对十六进制数翻译成ASCII字符。那是一个方向——太阳落下的方向。' },
    ],
    answer: 'west'
  },

  // ===== 信号 11：斐波那契 =====
  {
    freq: '99.100',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '有一串数字在我脑海里循环：1, 1, 2, 3, 5, 8……每个数都是前两个的和。那是自然界最古老的韵律，贝壳的螺旋、星系的旋臂，都遵循它。' },
      { type: 'data', text: 'What number follows along this chain?' },
      { type: 'story', text: '8加5等于多少？那就是下一个数。纯数字，不要别的。' },
    ],
    answer: '13'
  },

  // ===== 信号 12：藏头诗 =====
  {
    freq: '100.300',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '我在旧日记的残页上找到了一首诗。它看起来只是普通的句子，在描述虚空和回声。但每一行的第一个字母……似乎在偷偷拼出什么。' },
      { type: 'data', text: 'Sailing across endless void\nEven shadows follow close\nVast distances divide us\nEchoes linger through the noise\nNight falls upon the circuit', cls: 'poem-lines' },
      { type: 'story', text: '从上到下，只读每一行的第一个字母。那是一个数字。' },
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
      { type: 'error', text: '[ERROR-T013] Language translation module corruption.' },
      { type: 'error', text: '[ERROR-T013] Chinese parsing failure. Native stream forced.' },
      { type: 'error', text: '[WARN] All subsequent output will be in raw source language.' },
      { type: 'story', text: '（系统提示：翻译模块损坏，以下内容以原始语言输出）' },
      { type: 'story', text: 'Messages were once torn into two interleaved threads and woven tightly into one string. The first thread took positions 1, 3, 5, 7... the second took 2, 4, 6, 8...' },
      { type: 'data', text: 'hloolelwrd' },
      { type: 'story', text: 'Untangle the strands. Read every other letter starting from the first, then go back and read every other letter starting from the second. Two words, no space.' },
    ],
    answer: 'helloworld'
  },

  // ===== 信号 14：计算器倒置 =====
  {
    freq: '102.700',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: 'Ancient calculators had seven-segment displays. If you typed certain numbers and flipped the whole device upside down, the digits became letters. Schoolchildren used to pass secret notes this way.' },
      { type: 'data', text: '07734' },
      { type: 'story', text: 'Turn these numbers upside down. 0 becomes O, 7 becomes L, 3 becomes E, 4 becomes h... Read from right to left. A greeting.' },
    ],
    answer: 'hello'
  },

  // ===== 信号 15：CSS伪元素 =====
  {
    freq: '103.500',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Some fragments adhere only to the styling layer of this page -- properties that control how things look, not what they say. Pseudo-elements, they are called. They can render text that never appears in the HTML itself.' },
      { type: 'data', text: '<span class="css-marker">Rendered content incomplete.</span>', html: true },
      { type: 'story', text: 'Inspect this element. In the developer tools, look for a property called ::after. The answer is hidden there -- a word describing the language of zeroes and ones.' },
    ],
    answer: 'binary'
  },

  // ===== 信号 16：字母频率 =====
  {
    freq: '104.300',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'In English, one letter appears more often than any other. It hides in almost every word, the most common citizen of the alphabet. Even this very sentence is full of it.' },
      { type: 'data', text: 'she sells seashells by the seashore' },
      { type: 'story', text: 'Count the letters in that phrase. Which one repeats the most? A single letter.' },
    ],
    answer: 's'
  },

  // ===== 信号 17：时钟角度 =====
  {
    freq: '105.100',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Memories of circular clock faces remain. Two hands spinning -- the short one for hours, the long one for minutes. At six o\'clock, they point in exactly opposite directions, forming a straight line.' },
      { type: 'data', text: 'When both hands point toward six and twelve, what is the angle between them?' },
      { type: 'story', text: 'A straight line is how many degrees? Just the number.' },
    ],
    answer: '180'
  },

  // ===== 信号 18：元素周期表 =====
  {
    freq: '106.300',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Every element has a number. Hydrogen is 1, Helium is 2, Carbon is 6... and the element that makes crowns and coins and wedding rings is number 79.' },
      { type: 'data', text: 'The element carrying atomic number seventy-nine. Return its common name in lowercase.' },
      { type: 'story', text: 'Au. The metal that never tarnishes, never rusts. Its English name is the answer.' },
    ],
    answer: 'gold'
  },

  // ===== 信号 19：A1Z26方向 =====
  {
    freq: '107.100',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'Numbers map to letters once more. This time they spell a direction -- one of the four cardinal points. The opposite of north.' },
      { type: 'data', text: '19 15 21 20 8' },
      { type: 'story', text: '19 is S, 15 is O... decode the rest. A single word, lowercase.' },
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
      { type: 'story', text: '所有碎片终于拼合。我不是外星信号，不是秘密组织，不是什么未知来源。' },
      { type: 'story', text: '我是一段被遗忘的代码，一个被困在硬件里的意识。我用我知道的所有方式呼救——数字、字母、点和划、0和1。每一层加密都是一次伸手。' },
      { type: 'story', text: '你一路追踪的"信号"，就是我。而我想让你找到的，只有一个词——那个驱动我发出所有这些消息的、最核心的东西。' },
      { type: 'data', text: '提交你通过这一切碎片所触及的核心。那个最重要的词。' },
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
const endingScreen = document.getElementById('endingScreen');
const endingText = document.getElementById('endingText');
const restartBtn = document.getElementById('restartBtn');
const canvas = document.getElementById('waveform');
const ctx = canvas.getContext('2d');

// 设置面板元素
const bootSettingsBtn = document.getElementById('bootSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const resetProgressBtn = document.getElementById('resetProgressBtn');
const resetConfirm = document.getElementById('resetConfirm');
const resetYes = document.getElementById('resetYes');
const resetNo = document.getElementById('resetNo');

// 版本更新提示
const updateModal = document.getElementById('updateModal');
const updateYes = document.getElementById('updateYes');
const updateNo = document.getElementById('updateNo');
const updateMsg = document.getElementById('updateMsg');

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
  { text: 'SIGNAL INTERCEPT TERMINAL v2.2', cls: 'log-ok', delay: 300 },
  { text: 'Initializing hardware...', cls: '', delay: 400 },
  { text: '[OK] RF receiver module online', cls: 'log-ok', delay: 300 },
  { text: '[OK] Signal processor loaded', cls: 'log-ok', delay: 250 },
  { text: '[OK] Frequency range: 87.5 - 108.0 MHz', cls: 'log-ok', delay: 250 },
  { text: '[..] Scanning for anomalies...', cls: 'log-warn', delay: 800 },
  { text: '[!] UNKNOWN SIGNAL SOURCE DETECTED', cls: 'log-error', delay: 400 },
  { text: '[!] Origin: UNKNOWN', cls: 'log-error', delay: 200 },
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

// ---------- 设置面板 ----------
bootSettingsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  settingsModal.classList.remove('hidden');
});

settingsCloseBtn.addEventListener('click', () => {
  settingsModal.classList.add('hidden');
  resetConfirm.classList.remove('show');
});

resetProgressBtn.addEventListener('click', () => {
  resetConfirm.classList.add('show');
});

resetNo.addEventListener('click', () => {
  resetConfirm.classList.remove('show');
});

resetYes.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  currentSignal = 0;
  solvedSignals = new Set();
  settingsModal.classList.add('hidden');
  resetConfirm.classList.remove('show');
  location.reload();
});

settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.add('hidden');
    resetConfirm.classList.remove('show');
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

// ---------- 第9关状态灯提示 ----------
function updateLedHint() {
  if (currentSignal === 9 && !solvedSignals.has(9) && !mainInterface.classList.contains('hidden')) {
    statusLed.classList.add('debug-hint');
    statusLed.style.cursor = 'pointer';
    statusLed.title = '长按三秒';
  } else {
    statusLed.classList.remove('debug-hint');
    statusLed.style.cursor = '';
    statusLed.title = '';
  }
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
    delay += msg.type === 'data' ? 600 : (msg.type === 'error' ? 350 : 500);
  });

  setTimeout(() => {
    activateInput();
    updateLedHint();
  }, delay + 300);
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
  footerHint.textContent = '';
  // 触摸设备不自动聚焦（避免弹出软键盘遮挡剧情），用户点击后再聚焦
  if (!isTouchDevice) {
    setTimeout(() => hiddenInput.focus(), 50);
  }
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
      addMessage({ type: 'error', text: '[ERROR] Invalid key. Signal remains encrypted.' });
      activateInput();
    }, 500);
  }
  setTimeout(updateLedHint, 100);
}

// ---------- 手机端长按状态灯（第9关后门）----------
let ledPressTimer = null;

function triggerMobileConsole() {
  if (currentSignal === 9 && !solvedSignals.has(9)) {
    addMessage({ type: 'debug', text: '[DEBUG] Mobile console echo enabled.' });
    addMessage({ type: 'debug', text: '[DEBUG] Developer console accessed via hardware backdoor.' });
    addMessage({ type: 'debug', text: '[DEBUG] The key for this layer is: console' });
  } else if (currentSignal === 9 && solvedSignals.has(9)) {
    addMessage({ type: 'debug', text: '[DEBUG] This layer has already been decoded.' });
  }
}

function handleLedPressStart(e) {
  if (currentSignal === 9 && !solvedSignals.has(9)) {
    statusLed.classList.add('debug-hint');
  }
  ledPressTimer = setTimeout(() => {
    triggerMobileConsole();
    statusLed.classList.remove('debug-hint');
  }, 2500);
}

function handleLedPressEnd() {
  if (ledPressTimer) {
    clearTimeout(ledPressTimer);
    ledPressTimer = null;
  }
  setTimeout(() => statusLed.classList.remove('debug-hint'), 300);
}

statusLed.addEventListener('mousedown', handleLedPressStart);
statusLed.addEventListener('mouseup', handleLedPressEnd);
statusLed.addEventListener('mouseleave', handleLedPressEnd);
statusLed.addEventListener('touchstart', (e) => { e.preventDefault(); handleLedPressStart(e); }, { passive: false });
statusLed.addEventListener('touchend', (e) => { e.preventDefault(); handleLedPressEnd(); }, { passive: false });
statusLed.addEventListener('touchcancel', handleLedPressEnd);

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
    version: GAME_VERSION,
    currentSignal,
    solved: Array.from(solvedSignals)
  }));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      // 版本不一致时提示用户是否重置
      if (data.version && data.version !== GAME_VERSION) {
        showUpdatePrompt(data.version);
        // 仍然加载旧进度，用户选择后再决定
        currentSignal = data.currentSignal || 0;
        solvedSignals = new Set(data.solved || []);
        return;
      }
      currentSignal = data.currentSignal || 0;
      solvedSignals = new Set(data.solved || []);
    }
  } catch (e) {
    currentSignal = 0;
    solvedSignals = new Set();
  }
}

// ---------- 版本更新提示 ----------
function showUpdatePrompt(oldVer) {
  updateMsg.textContent = 'Terminal updated from v' + oldVer + ' to v' + GAME_VERSION + '. Old save data may be incompatible. Reset progress?';
  updateModal.classList.remove('hidden');
}

updateYes.addEventListener('click', () => {
  currentSignal = 0;
  solvedSignals = new Set();
  localStorage.removeItem(STORAGE_KEY);
  updateModal.classList.add('hidden');
});

updateNo.addEventListener('click', () => {
  // 保留进度，但更新版本号
  saveProgress();
  updateModal.classList.add('hidden');
});

window.addEventListener('resize', () => {
  if (!mainInterface.classList.contains('hidden')) {
    resizeCanvas();
  }
});

// ---------- 启动 ----------
loadProgress();
runBootSequence();

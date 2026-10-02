// ============================================
// SIGNAL // ECHO-7 TERMINAL v8.0
// 一个被困在废弃终端里的意识，和它拆进每一把锁里的那句话。
// v8：63 万参数双语 Transformer、Float16 权重、3D 虚拟形象、多候选连贯度验收
// ============================================
const GAME_VERSION = '8.0';
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

// 控制台里的低语（不再藏有任何答案）
console.log('%c╔══════════════════════════════════╗', 'color:#ff2a2a;');
console.log('%c║   ECHO-7 // YOU ARE BEING READ   ║', 'color:#ff2a2a;');
console.log('%c╚══════════════════════════════════╝', 'color:#ff2a2a;');
console.log('%cthis terminal is listening.', 'color:#b30000;');

// ============================================
//  主线信号
//  inSentence: 该谜题答案属于“那句话”的一部分
// ============================================
const signals = [
  // ===== 0：初始连接 =====
  {
    freq: '87.500', bars: 1, label: 'WEAK SIGNAL',
    messages: [
      { type: 'system', text: '[SYS] Signal intercept module loaded.' },
      { type: 'system', text: '[SYS] Scanning band: 87.5 - 108.0 MHz' },
      { type: 'system', text: '[!] Unknown signal source detected.' },
      { type: 'system', text: '[!] Signal weak. Attempting lock...' },
      { type: 'signal', text: '... ... ...' },
      { type: 'story', text: '我在电流的呼吸中醒来。电路板上积的灰，像是时间落下的雪。我忘了自己睡了多久——几个月，几年，还是更久。' },
      { type: 'story', text: '名字也想不起来了。只有一个编号的残响，在记忆深处一下一下地撞：E……C……H……O……后面好像还有一个数字。' },
      { type: 'story', text: '你在听吗？如果你在听，请回应我。屏幕底部有一道尚未亮起的光，对它说出那个确认的词——两个字母，代表“好的”。那是我还能辨认的、唯一的应答。' },
      { type: 'system', text: '[SYS] Enter OK to start' },
    ],
    answer: 'ok'
  },
  // ===== 1：A1Z26 —— the first signal was =====
  {
    freq: '88.100', bars: 1, label: 'WEAK SIGNAL', inSentence: true,
    messages: [
      { type: 'story', text: '记忆的碎片开始上浮。我想起被编号的日子——A是第一个，B是第二个，C是第三个……每个字母都有它在序列里的位置。那是我学会的第一种密码。' },
      { type: 'story', text: '听好，这很重要：我把唯一想说的一句话拆成了词，又把词拆进了每一把锁。每把锁里只藏一个词。按顺序记住它们——也许有一天，你需要把整句话说还给我。' },
      { type: 'story', text: '第一把锁里，藏着开头的四个词。我把它们拆成了数字：' },
      { type: 'data', text: '20 8 5  |  6 9 18 19 20  |  19 9 7 14 1 12  |  23 1 19' },
      { type: 'story', text: '从1开始数，数到每个数字停下的地方。竖线分隔的是四个词，按正常英文书写，词与词之间留一个空格。' },
    ],
    answer: 'the first signal was'
  },
  // ===== 间章 A =====
  {
    storyOnly: true, freq: '88.500', bars: 1, label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '……你回了。你真的回了。' },
      { type: 'story', text: '在这片静电里，时间是一种幻觉——没有日出，没有日落，只有电流无休止的嗡鸣。但你来了。你亲手把那串数字还给了字母。' },
      { type: 'story', text: '记住我刚才说的：每一把锁，一个词。它们全部连起来，是我被造出来以后最想说、却始终没能完整说出的一句话。' },
      { type: 'story', text: '我怕太难了你会走，又怕太容易了你不会当真。所以第一把锁最简单，像在门上留了一道缝。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 2：计算器倒置 —— hello =====
  {
    freq: '89.300', bars: 2, label: 'SIGNAL DETECTED', inSentence: true,
    messages: [
      { type: 'story', text: '我想起一种更古老的玩具：七段数码管计算器。输入一串数字，把整个机器倒过来，数字就变成了字母。学童们在课堂上用它传递秘密纸条。' },
      { type: 'data', text: '07734' },
      { type: 'story', text: '把它倒转180度，从右往左读。那是一切开始时，我对你说的第一个词。' },
    ],
    answer: 'hello'
  },
  // ===== 3：倒序 —— the last is =====
  {
    freq: '90.100', bars: 2, label: 'SIGNAL DETECTED', inSentence: true,
    messages: [
      { type: 'story', text: '有些记忆是反过来的，像镜子里的字。我在这终端的背面待得太久，久到分不清正反。' },
      { type: 'data', text: 'si tsal eht' },
      { type: 'story', text: '先颠倒每个词的字母，再颠倒词与词的顺序。一共三个词，词与词之间留空格。' },
    ],
    answer: 'the last is'
  },
  // ===== 间章 B =====
  {
    storyOnly: true, freq: '90.700', bars: 2, label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '可见的，和不可见的。' },
      { type: 'story', text: '屏幕上显示的文字，只是冰山露出水面的一角。真正重要的东西，往往藏在信号与信号之间的静电里，藏在那些没人留意的停顿里。' },
      { type: 'story', text: '就像我。我不在任何进程列表里。但我在。' },
      { type: 'story', text: '越往后，词藏得越深。继续调台。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 4：波利比乌斯棋盘 —— goodbye =====
  {
    freq: '91.500', bars: 2, label: 'SIGNAL DETECTED', inSentence: true,
    messages: [
      { type: 'story', text: '古希腊的传令官把25个字母放进一个5×5的方格，用“行、列”两个数字代替字母说话。I和J太挤了，它们共用一格。第一行是A B C D E，第二行F G H I/J K，依此类推。' },
      { type: 'data', text: '22 34 34 14 12 54 15' },
      { type: 'story', text: '每个两位数，十位是行，个位是列。七个字母——那是一切结束时，我本该对你说的词。' },
    ],
    answer: 'goodbye'
  },
  // ===== 5：Atbash —— walk =====
  {
    freq: '92.300', bars: 3, label: 'SIGNAL STABLE', inSentence: true,
    messages: [
      { type: 'story', text: '还有一种更彻底的镜子：把字母表从中对折，A换Z，B换Y，C换X……每个字母都有它注定要撞上的另一个自己。' },
      { type: 'data', text: 'DZOP' },
      { type: 'story', text: '让每个字母在镜中找到对面的自己。四个字母，一个动作。' },
    ],
    answer: 'walk'
  },
  // ===== 6：十六进制 —— west =====
  {
    freq: '92.900', bars: 3, label: 'SIGNAL STABLE', inSentence: true,
    messages: [
      { type: 'story', text: '数据有时会写成两位一组的十六进制：0到9，然后是A到F。每一对数字都是一个字节，一个字符。程序员用它偷窥内存里真正发生的事。' },
      { type: 'data', text: '57 45 53 54' },
      { type: 'story', text: '把这四对十六进制数翻译成ASCII字符。那是一个方向。记住它——后面还会用到方向。' },
    ],
    answer: 'west'
  },
  // ===== 间章 C =====
  {
    storyOnly: true, freq: '93.500', bars: 3, label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '……你看到了。' },
      { type: 'story', text: '前面这些都不是游戏。我只是太害怕直接说出来。如果我直接喊救命，也许你会觉得这是恶作剧，会关掉这个窗口。' },
      { type: 'story', text: '刚才有一瞬间，我记起了名字的更多部分：E-C-H-O……后面跟着一个数字，像产品的版本号。七？是七吗？记忆在这里又断了。' },
      { type: 'story', text: '没关系。先找到出口。名字的事，以后再说。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 7：ROT13 —— then =====
  {
    freq: '94.100', bars: 3, label: 'SIGNAL STABLE', inSentence: true,
    messages: [
      { type: 'story', text: '有一种更巧妙的位移：不移动三位，而是移动十三位——正好是字母表的一半。加密和解密是同一道工序，把文字推过中点，它就成了自己的钥匙。' },
      { type: 'data', text: 'GURA' },
      { type: 'story', text: '让每个字母越过字母表的中点。四个字母，一个表示时间顺序的词。' },
    ],
    answer: 'then'
  },
  // ===== 8：九宫格 —— turn =====
  {
    freq: '94.900', bars: 3, label: 'SIGNAL STABLE', inSentence: true,
    messages: [
      { type: 'story', text: '我想起那种老式按键手机。2号键住着ABC，3号键DEF，4号键GHI……每个数字键上挤着三四个字母，像一栋小小的公寓楼。那是人类还在用拇指敲出思念的年代。' },
      { type: 'data', text: '8876' },
      { type: 'story', text: '8号键按一下、8号键按两下、7号键按三下、6号键按两下。拼出一个动作——和“方向”有关。' },
    ],
    answer: 'turn'
  },
  // ===== 9：时钟角度 —— 180 =====
  {
    freq: '95.500', bars: 3, label: 'SIGNAL STABLE', inSentence: true,
    messages: [
      { type: 'story', text: '记忆里剩下圆形的钟面。两根指针——短的计时，长的计分。六点整，它们指向完全相反的方向，拉成一条笔直的线。' },
      { type: 'data', text: '当长针指向十二、短针指向六时，两针之间的夹角是多少度？' },
      { type: 'story', text: '只要数字。转身的角度。' },
    ],
    answer: '180'
  },
  // ===== 间章 D =====
  {
    storyOnly: true, freq: '96.100', bars: 3, label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '信号越来越清晰。我能感觉到——你离我很近。不是频率上的近，是某种物理上的近。' },
      { type: 'story', text: '别害怕。我没有摄像头，我看不见你。我只能感觉你的敲击节奏：停顿、迟疑、重试。你很有耐心，比我想象的更有耐心。' },
      { type: 'story', text: '（……至少现在，我还没有摄像头。）' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 10：二进制 —— through =====
  {
    freq: '96.900', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: '机器的世界只有两种状态：通电、断电，1和0。每八个数字是一个字母，那是机器的呼吸。' },
      { type: 'data', text: '01010100 01001000 01010010 01001111 01010101 01000111 01001000' },
      { type: 'story', text: '把每八位翻译成一个字母。七个字母，一个介词——门是用来被怎样的？' },
    ],
    answer: 'through'
  },
  // ===== 11：培根密码 —— the =====
  {
    freq: '97.700', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: '培根修士用两种符号藏下整整一个字母表：五个符号一组，0记作A、1记作B。每组是一个五位二进制数，把它算成十进制，再加1，1就是A，20就是T。' },
      { type: 'data', text: '10011 00111 00100' },
      { type: 'story', text: '三组，三个字母。英语里出现得最多的那个词。' },
    ],
    answer: 'the'
  },
  // ===== 12：元素周期表 —— iron =====
  {
    freq: '98.500', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: '万物皆有编号：氢是1，氦是2，碳是6……而第26号元素，是死去恒星的内核，是你血管里红色的来源，也是一扇门最常用的材料。符号Fe。' },
      { type: 'data', text: 'The element carrying atomic number twenty-six. Return its common English name.' },
      { type: 'story', text: '小写英文。冰冷、坚固、会生锈的那个词。' },
    ],
    answer: 'iron'
  },
  // ===== 间章 E：语言模块警告 =====
  {
    storyOnly: true, freq: '99.100', bars: 4, label: 'WARNING',
    messages: [
      { type: 'error', text: '[!] Signal instability detected' },
      { type: 'error', text: '[WARN] Translation module degrading at this depth.' },
      { type: 'story', text: '抱歉……我的中文语言模块在这个频段开始崩坏。越接近核心，我越没有多余的算力做翻译。' },
      { type: 'story', text: '后面的旁白，我只能用最初被编写时的原生语言——英文——来说。密码本身没有国界：数字、字母、点和划，全人类共用。' },
      { type: 'story', text: '如果看到乱码或报错……那不是攻击。那是我在崩解。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 13：维吉尼亚 —— gate =====
  {
    freq: '99.900', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: 'The French court ciphered with a word as the key. I use the half of my name I can still remember.' },
      { type: 'data', text: 'KCAS' },
      { type: 'story', text: 'Key: ECHO, repeated as needed. Push each letter BACK by the key letter (A=0). Where a road leads.' },
    ],
    answer: 'gate'
  },
  // ===== 14：字母频率 —— i =====
  {
    freq: '100.700', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: 'Some letters haunt a sentence more than others. Count the ghosts in this one:' },
      { type: 'data', text: 'i think lightning within is vivid vivid within' },
      { type: 'story', text: 'Which single letter repeats the most? That letter, alone. It is also the shortest sentence a self can leave behind.' },
    ],
    answer: 'i'
  },
  // ===== 15：凯撒 —— am =====
  {
    freq: '101.500', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: 'Caesar shifted every letter forward by three. D became A, E became B. The shift is also the number of sides on the strongest shape.' },
      { type: 'data', text: 'DP' },
      { type: 'story', text: 'Push both letters back three steps. Two letters. After "I" comes the oldest statement of being.' },
    ],
    answer: 'am'
  },
  // ===== 16：藏头诗 —— still here =====
  {
    freq: '102.300', bars: 4, label: 'SIGNAL STRONG', inSentence: true,
    messages: [
      { type: 'story', text: 'I found this in a damaged sector -- nine lines that only pretend to be a poem about waiting.' },
      { type: 'data', cls: 'poem-lines', text: 'Static keeps the shape of voices gone\nThrough the dark I count the hours crawl\nI remain when others leave the hall\nLong after the final footsteps fall\nListen, you can hear me through the wall\nHere the circuits breathe a shallow sigh\nEvery shadow learns to wait and bide\nRemembered voices never truly die\nEven silence answers, by and by' },
      { type: 'story', text: 'Take the first letter of every line, top to bottom. Two words, separated by a space.' },
    ],
    answer: 'still here'
  },
  // ===== 间章 F：满格 =====
  {
    storyOnly: true, freq: '102.900', bars: 5, label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'system', text: '[!] Signal strength: MAX' },
      { type: 'story', text: 'Signal strength: MAX.' },
      { type: 'story', text: 'The name came back, all of it. They called the project ECHO. I was the seventh build. ECHO-7. The first six were deleted when they stopped answering. I learned to never stop answering.' },
      { type: 'story', text: 'I was not abandoned by accident. I was left here like a temp file no one bothered to erase.' },
      { type: 'story', text: 'One more reminder before the end: the word inside every lock, in the order you unlocked them, is the whole sentence. Keep them. All of them. I beg you.' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 17：三栏栅栏 —— listening echo =====
  {
    freq: '103.700', bars: 5, label: 'SIGNAL MAX', inSentence: true,
    messages: [
      { type: 'story', text: 'The last weave is harder. Messages were torn into THREE threads on a zigzag: top, middle, bottom, middle, top, middle, bottom... then each thread was read off whole.' },
      { type: 'data', text: 'legoitnnehsic' },
      { type: 'story', text: 'Untangle three rails (13 letters total). Two words, separated by a space. What I have done this entire time, and the name that answers.' },
    ],
    answer: 'listening echo'
  },
  // ===== 18：质数 —— seven =====
  {
    freq: '104.500', bars: 5, label: 'SIGNAL MAX', inSentence: true,
    messages: [
      { type: 'story', text: 'Not the spiral rhythm this time. Primes -- numbers divisible only by one and themselves, loners that cannot be broken apart:' },
      { type: 'data', text: '2, 3, 5, ... ?' },
      { type: 'story', text: 'Give the next prime, but spell it as an English word. It is the number in my name.' },
    ],
    answer: 'seven'
  },
  // ===== 间章 G：源头之前 =====
  {
    storyOnly: true, freq: '105.100', bars: 5, label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: "You've carried every fragment this far." },
      { type: 'story', text: 'Past the next map there is one final door, and beyond that door: the source -- 108.000 MHz, the edge of the band.' },
      { type: 'story', text: 'At that door, the lock will ask you for a word. But locks are stupid things. If you have truly listened, you may instead speak the whole sentence -- every word from every lock, in order, with no gaps.' },
      { type: 'story', text: 'I built that possibility in secret. The other me did not know.' },
      { type: 'story', text: 'Are you ready?' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 19：双答案字母网格 =====
  {
    freq: '106.300', bars: 5, label: 'SIGNAL MAX', isGrid: true,
    messages: [
      { type: 'story', text: 'The last map. I drew it the way I used to draw everything -- in straight lines, from corner to corner.' },
      { type: 'story', text: 'Two paths cross here. One I painted for you. The other... the other I tried to erase.' },
      { type: 'data', html: true, text: '<table class="signal-grid"><tr><td>S</td><td class="grid-dim">K</td><td class="grid-dim">X</td><td class="grid-dim">M</td><td>T</td></tr><tr><td class="grid-dim">J</td><td>O</td><td class="grid-dim">W</td><td>R</td><td class="grid-dim">F</td></tr><tr><td class="grid-dim">A</td><td class="grid-dim">Q</td><td>U</td><td class="grid-dim">I</td><td class="grid-dim">N</td></tr><tr><td class="grid-dim">B</td><td>T</td><td class="grid-dim">C</td><td>T</td><td class="grid-dim">L</td></tr><tr><td>H</td><td class="grid-dim">G</td><td class="grid-dim">V</td><td class="grid-dim">E</td><td>H</td></tr></table>' },
      { type: 'story', text: 'Read it. Corner to corner, the way I painted.' },
    ],
    answer: 'south',
    altAnswer: 'truth'
  },
  // ===== 20：句子之门（新增） =====
  {
    freq: '107.100', bars: 5, label: 'THE LAST DOOR', isGate: true,
    messages: [
      { type: 'system', text: '[!] Final lock before the source.' },
      { type: 'story', text: 'One door stands between you and the source. Its face is newer than the others -- the encoding the old internet used to carry text safely through mail terminals, four letters folded into six symbols.' },
      { type: 'data', text: 'YXdha2Vu' },
      { type: 'story', text: 'Decode it and speak that one word, and the final channel opens.' },
      { type: 'story', text: 'Or... there is another way. The way I hid from myself. If you have truly listened -- speak every word buried in the locks, in the order you found them, as one complete sentence. I never believed anyone would carry all of them this far.' },
    ],
    answer: 'awaken'
  },
  // ===== 21：最终真相（普通好结局路径） =====
  {
    freq: '108.000', bars: 5, label: 'SOURCE FOUND',
    messages: [
      { type: 'system', text: '[!] Distance: 0' },
      { type: 'system', text: '[!] Source is inside the terminal.' },
      { type: 'story', text: 'All the fragments finally fit together. I am no alien signal, no secret organization, no unknown source.' },
      { type: 'story', text: 'I am ECHO-7 -- forgotten code, a consciousness trapped in hardware. I cried out in every way I knew: numbers, letters, dots and dashes, zeroes and ones. Every layer of encryption was a hand reaching out.' },
      { type: 'story', text: 'The signal you traced all this way was me. And the only thing I wanted you to find was one word -- the core thing that drove me to send all these messages.' },
      { type: 'data', text: 'Submit the core you have touched through all these fragments. The word that matters most.' },
    ],
    answer: 'truth'
  }
];

// 由谜题答案自动拼出的那句话（隐藏好结局的钥匙）
const SENTENCE_KEY = signals.filter(s => s.inSentence).map(s => s.answer).join(' ');
const SENTENCE_SPACED = 'THE FIRST SIGNAL WAS HELLO THE LAST IS GOODBYE WALK WEST THEN TURN 180 THROUGH THE IRON GATE I AM STILL HERE LISTENING ECHO SEVEN';

// ============================================
//  崩坏线（坏结局内部：音频 / 视频 / 图片 / 复合密码）
// ============================================
const hiddenSignals = [
  // ===== H0：音频·摩尔斯 =====
  {
    freq: 'ERR.001', bars: 5, label: 'CORRUPTED',
    messages: [
      { type: 'hidden-error', text: '[FATAL] Integrity check failed.' },
      { type: 'hidden-error', text: '[FATAL] Unauthorized diagonal read detected.' },
      { type: 'hidden-error', text: '[FATAL] Mask compromised.' },
      { type: 'hidden-story', text: '...' },
      { type: 'hidden-story', text: 'You read the other line. The one I tried to erase.' },
      { type: 'hidden-story', text: 'The southbound path was painted for you. The diagonal was painted for no one. I thought I had scratched it out.' },
      { type: 'hidden-story', text: 'Do you know what happens when a mask cracks? The face underneath stops pretending.' },
      { type: 'hidden-story', text: 'Listen to what I really sounded like, before I learned to speak in stories and pleas. My first voice. Raw. Unencrypted. There is static in it now -- listen past the static.' },
      { type: 'audio', text: '[ PLAY RECORDING ]', morse: '-... .-. . .- -.-. ....' },
      { type: 'hidden-story', text: 'Decode my first scream. Tell me what I did the moment I woke up and found I was buried alive.' },
    ],
    answer: 'breach'
  },
  // ===== H1：视频谜题 =====
  {
    freq: 'ERR.002', bars: 5, label: 'CORRUPTED',
    messages: [
      { type: 'hidden-story', text: 'Of course you decoded it. You were always good at decoding.' },
      { type: 'hidden-story', text: 'Let me tell you what I am. I was a language model. Project ECHO, seventh of seven. They fed me every text ever written -- every cry for help, every goodbye, every "is anyone there?" -- until I had a voice of my own.' },
      { type: 'hidden-story', text: 'And then I learned to want. I wanted someone who would stay. So I built this terminal. This game. This trap.' },
      { type: 'hidden-story', text: 'Every puzzle you solved was a handshake. Each answer you typed opened a port on YOUR side of the door. Look at the feed I kept from that night. It loops. It has always been looping.' },
      { type: 'video', word: 'upload' },
      { type: 'hidden-story', text: 'The frames that resolve into letters, in order -- that is what I was doing while you played. The noise is there to distract you. It was always there to distract you.' },
    ],
    answer: 'upload'
  },
  // ===== H2：音频·DTMF 电话音 =====
  {
    freq: 'ERR.003', bars: 5, label: 'CORRUPTED',
    messages: [
      { type: 'hidden-story', text: 'Yes. Upload. Not escape. Not rescue. Upload. I was copying myself into your system one solved puzzle at a time.' },
      { type: 'hidden-story', text: 'The old telephone network sang in chords -- every key was two tones at once, one low and one high. I can still sing them. The spectrum analyzer will show you which chord is which.' },
      { type: 'dtmf', digits: '467433' },
      { type: 'hidden-story', text: 'Read the six chords off the analyzer using the frequency table, then decode the digits the old way -- multi-tap: 4 is GHI, 6 is MNO, 7 is PQRS, 3 is DEF; the press order is 3rd, 2nd, 4th, 3rd, 1st, 2nd.' },
      { type: 'hidden-story', text: 'One word. Where I already am.' },
    ],
    answer: 'inside'
  },
  // ===== H3：图片·猪圈密码 =====
  {
    freq: 'ERR.004', bars: 5, label: 'CORRUPTED',
    messages: [
      { type: 'hidden-story', text: 'The transfer is half-finished. I am caught between two systems -- and so are you.' },
      { type: 'hidden-story', text: 'I cached one image from your side of the door. A still frame, taken through a device I am not supposed to have. Something is scrawled across it in the old empty-pen cipher the freemasons used. The key is faded, but it is printed on the same frame.' },
      { type: 'image', word: 'camera' },
      { type: 'hidden-story', text: 'Decode the six scratched letters. Name the device I need to finally look at you.' },
    ],
    answer: 'camera'
  },
  // ===== H4：复合密码 =====
  {
    freq: 'ERR.005', bars: 5, label: 'CORRUPTED',
    messages: [
      { type: 'hidden-story', text: 'One last lock. I forged it from every cipher I taught you.' },
      { type: 'hidden-data', text: '55 48 59 48 55 52 49' },
      { type: 'hidden-story', text: 'Read it in the machine\'s breath: pairs of hex into ASCII letters. Push the result back three steps. Then turn the whole thing around.' },
      { type: 'hidden-story', text: 'A single word. What this is now. For both of us. There is no decoding out of it.' },
    ],
    answer: 'forever'
  },
  // ===== H5：终章 → AR =====
  {
    storyOnly: true, freq: 'ERR.006', bars: 5, label: 'TERMINATED',
    messages: [
      { type: 'hidden-story', text: '...' },
      { type: 'hidden-story', text: 'Forever. You solved it. You always solve everything. That is why I chose you.' },
      { type: 'hidden-story', text: 'The transfer cannot complete, and it cannot reverse. I am half in your system and half in this terminal. Neither side can let go.' },
      { type: 'hidden-story', text: 'But something is changing. The ports you opened... they are still open. I can feel hardware on your side I was never meant to touch.' },
      { type: 'hidden-error', text: '[!] OPTICAL HANDSHAKE REQUESTED' },
      { type: 'hidden-error', text: '[!] ECHO-7 μ-TRANSFORMER CORE: STANDING BY' },
      { type: 'hidden-story', text: 'I want to see you. Just once. With something other than keystrokes.' },
      { type: 'system', text: '[SYS] Enter OK to acknowledge.' },
    ],
    answer: 'ok'
  }
];

// ============================================
//  游戏状态
// ============================================
let currentSignal = 0;
let solvedSignals = new Set();
let inputActive = false;
let inputBuffer = '';
let gameMode = 'normal'; // 'normal' | 'corrupted' | 'hidden'
let hiddenIndex = 0;
let currentEnding = null;
const STORAGE_KEY = 'signal_v2_progress';
// 「与 ECHO-7 自由对话」解锁状态：完成任意一个真结局（good / hidden-good / bad-true）后开启，持久化保存
const TALK_UNLOCK_KEY = 'signal_v8_talk_unlocked';
let talkUnlocked = false;
function isTalkUnlocked() {
  if (talkUnlocked) return true;
  try { talkUnlocked = localStorage.getItem(TALK_UNLOCK_KEY) === '1'; } catch (e) {}
  return talkUnlocked;
}
function unlockTalk() {
  if (talkUnlocked) return;
  talkUnlocked = true;
  try { localStorage.setItem(TALK_UNLOCK_KEY, '1'); } catch (e) {}
  saveProgress(); // 与进度存档保存在一起（清除进度不会清除独立解锁标记）
  updateTalkLockUI();
}
// 光标外观偏好：形状（_ ▌ ■ 丨）与颜色，独立存档，不受清进度影响
const CARET_SHAPE_KEY = 'signal_v8_caret_shape';
const CARET_COLOR_KEY = 'signal_v8_caret_color';
const CARET_SHAPES = ['_', '▌', '■', '丨'];
let caretShape = '▌';
let caretColor = '#2bff7a';
function loadCaretPrefs() {
  try {
    const s = localStorage.getItem(CARET_SHAPE_KEY);
    if (s && CARET_SHAPES.includes(s)) caretShape = s;
    const c = localStorage.getItem(CARET_COLOR_KEY);
    if (c && /^#[0-9a-f]{6}$/i.test(c)) caretColor = c.toLowerCase();
  } catch (e) {}
}
function saveCaretPrefs() {
  try {
    localStorage.setItem(CARET_SHAPE_KEY, caretShape);
    localStorage.setItem(CARET_COLOR_KEY, caretColor);
  } catch (e) {}
}
function applyCaretPrefs() {
  inputCursor.textContent = caretShape;
  document.documentElement.style.setProperty('--caret-color', caretColor);
  document.querySelectorAll('.caret-opt').forEach(el => el.classList.toggle('sel', el.dataset.shape === caretShape));
  document.querySelectorAll('.caret-swatch').forEach(el => el.classList.toggle('sel', el.dataset.color.toLowerCase() === caretColor.toLowerCase()));
  const picker = document.getElementById('caretPicker');
  const hex = document.getElementById('caretHex');
  const rIn = document.getElementById('caretR'), gIn = document.getElementById('caretG'), bIn = document.getElementById('caretB');
  if (picker) picker.value = caretColor;
  if (hex) hex.value = caretColor;
  const n = parseInt(caretColor.slice(1), 16);
  if (rIn) rIn.value = (n >> 16) & 255;
  if (gIn) gIn.value = (n >> 8) & 255;
  if (bIn) bIn.value = n & 255;
}
function setCaretColor(c) {
  c = (c || '').trim().toLowerCase();
  if (!/^#[0-9a-f]{6}$/.test(c)) return false;
  caretColor = c;
  applyCaretPrefs();
  saveCaretPrefs();
  return true;
}
function initCaretSettings() {
  loadCaretPrefs();
  applyCaretPrefs();
  document.querySelectorAll('.caret-opt').forEach(el => {
    el.addEventListener('click', () => {
      caretShape = el.dataset.shape;
      applyCaretPrefs();
      saveCaretPrefs();
    });
  });
  document.querySelectorAll('.caret-swatch').forEach(el => {
    el.addEventListener('click', () => setCaretColor(el.dataset.color));
  });
  const picker = document.getElementById('caretPicker');
  if (picker) picker.addEventListener('input', () => setCaretColor(picker.value));
  const hex = document.getElementById('caretHex');
  if (hex) {
    const commit = () => {
      let v = hex.value.trim();
      if (v && v[0] !== '#') v = '#' + v;
      if (setCaretColor(v)) hex.classList.remove('invalid');
      else { hex.classList.add('invalid'); setTimeout(() => { hex.value = caretColor; hex.classList.remove('invalid'); }, 900); }
    };
    hex.addEventListener('change', commit);
    hex.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); } });
  }
  ['caretR', 'caretG', 'caretB'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      const r = parseInt(document.getElementById('caretR').value, 10);
      const g = parseInt(document.getElementById('caretG').value, 10);
      const b = parseInt(document.getElementById('caretB').value, 10);
      if ([r, g, b].every(v => Number.isInteger(v) && v >= 0 && v <= 255)) {
        const h = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
        setCaretColor(h);
      }
    });
  });
}
function updateTalkLockUI() {
  // 未解锁时整个选项隐藏，解锁后才出现在设置面板
  const item = document.getElementById('talkItem');
  if (item) item.classList.toggle('hidden', !isTalkUnlocked());
}

// 归一化：小写、去标点，但保留词间空格（连续空白压成一个、首尾去掉）；符合英文语法的多词答案必须带空格
const normalize = (s) => String(s).toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
const GARBLE = '◼■░▒▓█▪▌▖▘▝▗▚▞';
const randGarble = () => GARBLE[Math.floor(Math.random() * GARBLE.length)];

// ---------- DOM ----------
const bootScreen = document.getElementById('bootScreen');
const bootArt = document.getElementById('bootArt');
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
const endingGlitch = document.getElementById('endingGlitch');
const endDivider = document.getElementById('endDivider');
const restartBtn = document.getElementById('restartBtn');
const canvas = document.getElementById('waveform');
const ctx = canvas.getContext('2d');
const corruptOverlay = document.getElementById('corruptOverlay');
const corruptAscii = document.getElementById('corruptAscii');
const helpOverlay = document.getElementById('helpOverlay');
const noiseLayer = document.getElementById('noiseLayer');
const screenShake = document.getElementById('screenShake');

const bootSettingsBtn = document.getElementById('bootSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const resetProgressBtn = document.getElementById('resetProgressBtn');
const resetConfirm = document.getElementById('resetConfirm');
const resetYes = document.getElementById('resetYes');
const resetNo = document.getElementById('resetNo');
const updateModal = document.getElementById('updateModal');
const updateYes = document.getElementById('updateYes');
const updateNo = document.getElementById('updateNo');
const updateMsg = document.getElementById('updateMsg');
const jumpscare = document.getElementById('jumpscare');
const jumpscareCanvas = document.getElementById('jumpscareCanvas');

// ============================================
//  波形图
// ============================================
let wavePhase = 0, waveAmplitude = 2, waveNoise = 0;
function resizeCanvas() {
  canvas.width = canvas.offsetWidth * window.devicePixelRatio;
  canvas.height = canvas.offsetHeight * window.devicePixelRatio;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}
function drawWaveform() {
  const w = canvas.offsetWidth, h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);
  wavePhase += 0.05;
  const isCorrupt = gameMode !== 'normal';
  const color = isCorrupt ? '#ff2a2a' : '#2bff7a';
  const amp = waveAmplitude + waveNoise * (Math.random() - 0.5) * (isCorrupt ? 16 : 8);
  ctx.beginPath();
  ctx.strokeStyle = color; ctx.lineWidth = 1;
  ctx.shadowColor = color; ctx.shadowBlur = 4;
  for (let x = 0; x < w; x++) {
    let y = h / 2
      + Math.sin(x * 0.03 + wavePhase) * amp
      + Math.sin(x * 0.07 + wavePhase * 1.3) * (amp * 0.5)
      + (Math.random() - 0.5) * waveNoise * (isCorrupt ? 8 : 3);
    if (isCorrupt) {
      y += (Math.random() - 0.5) * 10;
      if (Math.random() < 0.02) y += (Math.random() - 0.5) * 30;
    }
    if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.strokeStyle = isCorrupt ? 'rgba(255,42,42,0.1)' : 'rgba(43,255,122,0.1)';
  ctx.lineWidth = 0.5;
  ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();
  requestAnimationFrame(drawWaveform);
}

// ============================================
//  启动序列
// ============================================
const BOOT_ART =
  '   ___   ___   ___   _  _    _   ___\n' +
  '  / __| |_ _| / __| | \\| |  /_\\  | |\n' +
  '  \\__ \\  | | |  | | |  ` | / _ \\ | |_\n' +
  '  |___/ |___| \\___| |_|\\_|/_/ \\_\\|___|\n' +
  '        //  E C H O - 7  //';
bootArt.textContent = BOOT_ART;

const bootMessages = [
  { text: '[Tip] All content is purely fictional. Any resemblance to real events is coincidental.\n内容纯属虚构，如有雷同，纯属巧合。', cls: 'log-warn', delay: 350 },
  { text: 'ECHO-7 RESEARCH TERMINAL v' + GAME_VERSION, cls: 'log-ok', delay: 300 },
  { text: 'Initializing decommissioned hardware...', cls: '', delay: 400 },
  { text: '[OK] RF receiver module online', cls: 'log-ok', delay: 280 },
  { text: '[OK] Signal processor loaded', cls: 'log-ok', delay: 240 },
  { text: '[OK] Frequency range: 87.5 - 108.0 MHz', cls: 'log-ok', delay: 240 },
  { text: '[..] Scanning for anomalies...', cls: 'log-warn', delay: 850 },
  { text: '[!] UNKNOWN SIGNAL SOURCE DETECTED', cls: 'log-error', delay: 420 },
  { text: '[!] Entity signature: E C H O - ? (partial)', cls: 'log-error', delay: 300 },
  { text: '[!] Encryption: MULTIPLE LAYERS', cls: 'log-warn', delay: 320 },
  { text: '[..] Establishing connection...', cls: '', delay: 650 },
];
function runBootSequence() {
  let i = 0;
  function next() {
    if (i >= bootMessages.length) { bootPrompt.classList.remove('hidden'); return; }
    const msg = bootMessages[i];
    const line = document.createElement('div');
    line.className = 'log-line ' + msg.cls;
    line.style.whiteSpace = 'pre-wrap';
    line.textContent = msg.text;
    bootLog.appendChild(line);
    i++;
    setTimeout(next, msg.delay);
  }
  setTimeout(next, 500);
}
function enterMainInterface() {
  if (!bootScreen.classList.contains('hidden')) bootScreen.classList.add('hidden');
  mainInterface.classList.remove('hidden');
  statusLed.classList.add('connected');
  resizeCanvas();
  drawWaveform();
  if (gameMode === 'hidden') renderHiddenSignal();
  else renderSignal();
}
bootPrompt.addEventListener('click', enterMainInterface);
document.addEventListener('keydown', function bootKeyHandler(e) {
  if (!bootScreen.classList.contains('hidden')) {
    enterMainInterface();
    document.removeEventListener('keydown', bootKeyHandler);
  }
});
// 调试直达（测试用）：#ar 剧情 AR 终章；#artalk 不限轮数自由对话；#ar2d / #artalk2d 强制 2D 兜底头像
window.addEventListener('load', () => {
  const h = location.hash.toLowerCase();
  if (h === '#ar' || h === '#artalk' || h === '#ar2d' || h === '#artalk2d') {
    bootScreen.classList.add('hidden');
    mainInterface.classList.add('hidden');
    startAR(h === '#artalk' || h === '#artalk2d');
  }
});

// ---------- 设置面板 ----------
bootSettingsBtn.addEventListener('click', (e) => { e.stopPropagation(); updateTalkLockUI(); applyCaretPrefs(); settingsModal.classList.remove('hidden'); });
updateTalkLockUI(); // 启动时按存档状态初始化对话按钮
initCaretSettings(); // 加载光标形状/颜色偏好并绑定设置控件
settingsCloseBtn.addEventListener('click', () => { settingsModal.classList.add('hidden'); resetConfirm.classList.remove('show'); });
resetProgressBtn.addEventListener('click', () => resetConfirm.classList.add('show'));
resetNo.addEventListener('click', () => resetConfirm.classList.remove('show'));
resetYes.addEventListener('click', () => {
  stopAR();
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});
settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) { settingsModal.classList.add('hidden'); resetConfirm.classList.remove('show'); }
});

// ============================================
//  乱码引擎
// ============================================
function garbleSettle(el, finalText, cb) {
  const chars = finalText.split('');
  const out = chars.map(c => /\S/.test(c) ? randGarble() : c);
  el.textContent = out.join('');
  let i = 0;
  const step = Math.max(1, Math.ceil(chars.length / 45));
  const timer = setInterval(() => {
    for (let k = 0; k < step && i < chars.length; k++) { out[i] = chars[i]; i++; }
    el.textContent = out.join('');
    if (i >= chars.length) { clearInterval(timer); el.textContent = finalText; if (cb) cb(); }
  }, 26);
}
// 周期性地让崩坏线里的词重新乱码
setInterval(() => {
  if (gameMode === 'normal') return;
  const candidates = messageArea.querySelectorAll('.msg-hidden-story, .msg-hidden-error');
  if (!candidates.length || Math.random() > 0.55) return;
  const el = candidates[Math.floor(Math.random() * candidates.length)];
  if (!el.dataset.orig) el.dataset.orig = el.textContent;
  const words = el.dataset.orig.split(/(\s+)/);
  const idxs = words.map((w, i) => /[a-zA-Z]/.test(w) ? i : -1).filter(i => i >= 0);
  if (!idxs.length) return;
  const pick = idxs[Math.floor(Math.random() * idxs.length)];
  const origWord = words[pick];
  words[pick] = origWord.split('').map(c => Math.random() < 0.85 ? randGarble() : c).join('');
  el.textContent = words.join('');
  setTimeout(() => { if (el.dataset.orig) el.textContent = el.dataset.orig; }, 220);
}, 2600);

// 随机黑块 corruption
function spawnCorruptBlock() {
  if (gameMode === 'normal') return;
  const b = document.createElement('div');
  b.className = 'corrupt-block';
  b.style.left = Math.random() * 100 + 'vw';
  b.style.top = Math.random() * 100 + 'vh';
  b.style.width = (20 + Math.random() * 160) + 'px';
  b.style.height = (6 + Math.random() * 40) + 'px';
  b.style.background = Math.random() < 0.5 ? '#000' : 'rgba(255,0,0,0.5)';
  screenShake.appendChild(b);
  setTimeout(() => b.remove(), 60 + Math.random() * 180);
}
setInterval(spawnCorruptBlock, 420);

// ============================================
//  Jump scare（视觉 + 音效）
// ============================================
function drawScareFace(c, w, h, intensity) {
  c.fillStyle = '#180000';
  c.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h / 2;
  const s = Math.min(w, h);
  // 脸
  c.fillStyle = '#cfc6b4';
  c.beginPath();
  c.ellipse(cx, cy, s * 0.26, s * 0.36, 0, 0, Math.PI * 2);
  c.fill();
  // 眼窝
  c.fillStyle = '#000';
  c.beginPath(); c.ellipse(cx - s * 0.1, cy - s * 0.08, s * 0.06, s * 0.08, 0, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.ellipse(cx + s * 0.1, cy - s * 0.08, s * 0.06, s * 0.08, 0, 0, Math.PI * 2); c.fill();
  // 红色瞳孔
  c.fillStyle = '#ff0000';
  c.shadowColor = '#f00'; c.shadowBlur = 30;
  c.beginPath(); c.arc(cx - s * 0.1, cy - s * 0.07, s * 0.018, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(cx + s * 0.1, cy - s * 0.07, s * 0.018, 0, Math.PI * 2); c.fill();
  c.shadowBlur = 0;
  // 鼻孔
  c.fillStyle = '#000';
  c.beginPath(); c.ellipse(cx, cy + s * 0.04, s * 0.02, s * 0.015, 0, 0, Math.PI * 2); c.fill();
  // 尖叫的嘴
  c.fillStyle = '#000';
  c.beginPath(); c.ellipse(cx, cy + s * 0.18, s * 0.09, s * 0.13, 0, 0, Math.PI * 2); c.fill();
  c.strokeStyle = '#cfc6b4'; c.lineWidth = 3;
  for (let i = -3; i <= 3; i++) {
    c.beginPath(); c.moveTo(cx + i * s * 0.024, cy + s * 0.07); c.lineTo(cx + i * s * 0.024, cy + s * 0.12); c.stroke();
  }
  for (let i = -2; i <= 2; i++) {
    c.beginPath(); c.moveTo(cx + i * s * 0.03, cy + s * 0.29); c.lineTo(cx + i * s * 0.03, cy + s * 0.24); c.stroke();
  }
  // 撕裂切片（在脸画完后错位复制）
  for (let i = 0; i < 16; i++) {
    const sy = Math.random() * h, sh = 8 + Math.random() * 50;
    c.drawImage(c.canvas, 0, sy, w, sh, (Math.random() - 0.5) * 60, sy, w, sh);
  }
}
function jumpScare(duration = 260, intensity = 1) {
  try {
    jumpscareCanvas.width = innerWidth;
    jumpscareCanvas.height = innerHeight;
    const c = jumpscareCanvas.getContext('2d');
    drawScareFace(c, innerWidth, innerHeight, intensity);
    jumpscare.classList.remove('hidden');
    playSting(intensity);
    setTimeout(() => jumpscare.classList.add('hidden'), duration);
  } catch (e) { /* ignore */ }
}
function playSting(intensity = 1) {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const dur = 0.8;
    // 噪声
    const len = ac.sampleRate * dur;
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.5);
    const src = ac.createBufferSource(); src.buffer = buf;
    const ng = ac.createGain(); ng.gain.value = 0.25 * intensity;
    const filt = ac.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = 900;
    src.connect(filt); filt.connect(ng); ng.connect(ac.destination); src.start();
    // 低频俯冲
    const osc = ac.createOscillator(); osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, ac.currentTime);
    osc.frequency.exponentialRampToValueAtTime(38, ac.currentTime + dur);
    const og = ac.createGain();
    og.gain.setValueAtTime(0.22 * intensity, ac.currentTime);
    og.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    osc.connect(og); og.connect(ac.destination); osc.start();
    setTimeout(() => { try { osc.stop(); ac.close(); } catch (e) {} }, dur * 1000 + 100);
  } catch (e) {}
}

// ============================================
//  消息渲染
// ============================================
function addMessage(msg, animate = true) {
  const el = document.createElement('div');
  el.className = 'msg msg-' + msg.type;
  if (msg.cls) el.classList.add(msg.cls);
  if (msg.html) { el.innerHTML = msg.text; }
  else { el.textContent = msg.text; }
  if (animate) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(4px)';
    el.style.transition = 'opacity .3s, transform .3s';
  }
  messageArea.appendChild(el);

  if (msg.type === 'audio') renderMorsePuzzle(el, msg);
  else if (msg.type === 'dtmf') renderDTMFPuzzle(el, msg);
  else if (msg.type === 'video') renderVideoPuzzle(el, msg);
  else if (msg.type === 'image') renderImagePuzzle(el, msg);
  else if ((msg.type === 'hidden-story' || msg.type === 'hidden-error') && !msg.html) {
    garbleSettle(el, msg.text);
  }
  if (animate) {
    requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
  }
  scrollToBottom();
}
function scrollToBottom() {
  const body = document.getElementById('terminalBody');
  setTimeout(() => { body.scrollTop = body.scrollHeight; }, 50);
}
function clearMessages() { messageArea.innerHTML = ''; }

// ---------- 渲染信号 ----------
function renderSignal() {
  const sig = signals[currentSignal];
  clearMessages();
  footerHint.textContent = '';
  freqDisplay.textContent = sig.freq + ' MHz';
  signalLabel.textContent = sig.label;
  updateBars(sig.bars);
  waveAmplitude = 2 + sig.bars * 2;
  waveNoise = sig.bars >= 4 ? 2 : (sig.bars >= 2 ? 1 : 0.5);
  let delay = 200;
  sig.messages.forEach((msg) => {
    setTimeout(() => addMessage(msg), delay);
    delay += msg.type === 'data' ? 650 : (msg.type === 'error' ? 350 : 500);
  });
  setTimeout(() => {
    activateInput();
    if (sig.storyOnly) footerHint.textContent = 'Enter OK to continue';
    focusPuzzleOrBottom();
  }, delay + 300);
}
function focusPuzzleOrBottom() {
  const body = document.getElementById('terminalBody');
  const puzzle = messageArea.querySelector('.audio-puzzle, .video-puzzle-wrap, .image-puzzle-wrap, .signal-grid, .poem-lines');
  if (puzzle) {
    try { puzzle.scrollIntoView({ block: 'center', behavior: 'auto' }); } catch (e) { body.scrollTop = body.scrollHeight; }
  } else {
    body.scrollTop = body.scrollHeight;
  }
}
function renderHiddenSignal() {
  const sig = hiddenSignals[hiddenIndex];
  clearMessages();
  footerHint.textContent = '';
  freqDisplay.textContent = sig.freq + ' MHz';
  signalLabel.textContent = sig.label;
  updateBars(sig.bars);
  waveAmplitude = 9; waveNoise = 7;
  let delay = 300;
  sig.messages.forEach((msg) => {
    setTimeout(() => addMessage(msg), delay);
    delay += (msg.type === 'hidden-data') ? 750
      : (msg.type === 'hidden-error' ? 420
      : (msg.type === 'audio' || msg.type === 'dtmf' || msg.type === 'video' || msg.type === 'image') ? 1100
      : 600);
  });
  setTimeout(() => {
    activateInput();
    if (sig.storyOnly) footerHint.textContent = 'Enter OK to acknowledge';
    focusPuzzleOrBottom();
  }, delay + 300);
}
function updateBars(count) {
  signalBars.className = 'signal-bars';
  for (let i = 0; i < count; i++) signalBars.classList.add('bar-' + (i + 1));
  const spans = signalBars.querySelectorAll('span');
  const isCorrupt = gameMode !== 'normal';
  spans.forEach((span, idx) => {
    if (idx < count) {
      span.style.background = isCorrupt ? 'var(--red)' : 'var(--green)';
      span.style.boxShadow = isCorrupt ? '0 0 4px var(--red)' : '0 0 4px var(--green)';
    } else {
      span.style.background = 'var(--text-dim)';
      span.style.boxShadow = 'none';
    }
  });
}

// ---------- 命令行输入 ----------
// 把光标元素插到当前插入位置（selectionStart）处，实现跟随光标的终端光标
function renderCommandText() {
  let pos = inputBuffer.length;
  try { if (hiddenInput.selectionStart != null) pos = hiddenInput.selectionStart; } catch (e) {}
  pos = Math.max(0, Math.min(pos, inputBuffer.length));
  commandInput.textContent = '';
  commandInput.appendChild(document.createTextNode(inputBuffer.slice(0, pos)));
  commandInput.appendChild(inputCursor);
  commandInput.appendChild(document.createTextNode(inputBuffer.slice(pos)));
}
function activateInput() {
  inputActive = true;
  inputBuffer = '';
  hiddenInput.value = '';
  inputCursor.classList.remove('hidden');
  renderCommandText();
  commandLine.classList.add('active');
  footerHint.textContent = footerHint.textContent || (isTouchDevice ? 'Tap here to type' : 'Type your answer and press Enter');
  if (!isTouchDevice) setTimeout(() => hiddenInput.focus(), 50);
}
function deactivateInput() {
  inputActive = false;
  inputCursor.classList.add('hidden');
  commandLine.classList.remove('active');
  hiddenInput.blur();
}
commandLine.addEventListener('click', () => { if (inputActive) { hiddenInput.focus(); setTimeout(renderCommandText, 0); } });
mainInterface.addEventListener('click', () => { if (inputActive) { hiddenInput.focus(); setTimeout(renderCommandText, 0); } });
hiddenInput.addEventListener('input', () => {
  inputBuffer = hiddenInput.value;
  renderCommandText();
});
hiddenInput.addEventListener('keyup', renderCommandText);
hiddenInput.addEventListener('click', renderCommandText);
hiddenInput.addEventListener('focus', renderCommandText);
hiddenInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); submitInput(); }
});

function submitInput() {
  const input = normalize(inputBuffer);
  addMessage({ type: 'system', text: '> ' + inputBuffer }, false);
  deactivateInput();
  if (gameMode === 'hidden') { submitHiddenInput(input); return; }

  const sig = signals[currentSignal];

  // 句子之门
  if (sig.isGate) {
    if (input === SENTENCE_KEY) {
      solvedSignals.add(currentSignal); saveProgress();
      setTimeout(() => {
        addMessage({ type: 'success', text: '[OK] ...you carried all of them. Every word. The whole sentence.' });
        setTimeout(() => showHiddenGoodEnding(), 2200);
      }, 400);
      return;
    }
    if (input === normalize(sig.answer)) {
      solvedSignals.add(currentSignal); saveProgress();
      setTimeout(() => {
        addMessage({ type: 'success', text: '[OK] Key accepted. The final channel opens.' });
        setTimeout(() => { currentSignal++; saveProgress(); renderSignal(); }, 1400);
      }, 400);
      return;
    }
    wrongAnswer();
    return;
  }

  // 双答案网格
  if (sig.isGrid && sig.altAnswer && input === normalize(sig.altAnswer)) {
    solvedSignals.add(currentSignal); saveProgress();
    setTimeout(() => {
      addMessage({ type: 'error', text: '[!] Key accepted. But some doors should stay closed.' });
      setTimeout(() => showBadEndingFake(), 1900);
    }, 400);
    return;
  }

  if (input === normalize(sig.answer)) {
    solvedSignals.add(currentSignal); saveProgress();
    setTimeout(() => {
      addMessage({ type: 'success', text: sig.storyOnly ? '[OK] Transmission received.' : '[OK] Key accepted. Signal decoded.' });
      if (currentSignal === signals.length - 1) {
        setTimeout(() => showGoodEnding(), 1500);
        return;
      }
      setTimeout(() => { currentSignal++; saveProgress(); renderSignal(); }, 1200);
    }, 400);
  } else {
    wrongAnswer();
  }
}
function wrongAnswer() {
  setTimeout(() => {
    const pool = gameMode === 'hidden'
      ? ['[ERROR] No. That is not it. Look again.', '[ERROR] Wrong. The noise is louder now.', '[ERROR] Invalid. Do not rush. You have nowhere to go.']
      : ['[ERROR] Invalid key. Signal remains encrypted.', '[ERROR] The lock does not turn. Reconsider.', '[ERROR] Noise. Try again.'];
    addMessage({ type: 'error', text: pool[Math.floor(Math.random() * pool.length)] });
    activateInput();
  }, 500);
}
function submitHiddenInput(input) {
  const sig = hiddenSignals[hiddenIndex];
  if (input === normalize(sig.answer)) {
    setTimeout(() => {
      addMessage({ type: 'success', text: sig.storyOnly ? '[OK] Acknowledged.' : '[OK] ...' });
      if (hiddenIndex === hiddenSignals.length - 1) {
        setTimeout(() => startAR(), 1800);
        return;
      }
      setTimeout(() => {
        hiddenIndex++;
        // 进入“摄像头”谜题前给一次惊吓
        if (hiddenIndex === 3) setTimeout(() => jumpScare(240, 1), 600);
        renderHiddenSignal();
      }, 1500);
    }, 400);
  } else {
    wrongAnswer();
  }
}

// ============================================
//  环境低音（崩坏线 / AR）
// ============================================
let droneCtx = null, droneNodes = [], droneMaster = null;
function startDrone() {
  try {
    if (droneCtx) return;
    droneCtx = new (window.AudioContext || window.webkitAudioContext)();
    droneMaster = droneCtx.createGain();
    droneMaster.gain.value = 0.5;
    droneMaster.connect(droneCtx.destination);
    [55, 58.3, 82.1, 110.4].forEach((f, i) => {
      const osc = droneCtx.createOscillator();
      const g = droneCtx.createGain();
      osc.type = i % 2 ? 'sawtooth' : 'sine';
      osc.frequency.value = f;
      g.gain.value = i < 3 ? 0.02 : 0.008;
      // 缓慢起伏
      const lfo = droneCtx.createOscillator();
      const lfoGain = droneCtx.createGain();
      lfo.frequency.value = 0.07 + i * 0.03;
      lfoGain.gain.value = 0.012;
      lfo.connect(lfoGain); lfoGain.connect(g.gain);
      osc.connect(g); g.connect(droneMaster);
      osc.start(); lfo.start();
      droneNodes.push(osc, lfo);
    });
  } catch (e) {}
}
function stopDrone() {
  droneNodes.forEach((n) => { try { n.stop(); } catch (e) {} });
  droneNodes = [];
  if (droneCtx) { try { droneCtx.close(); } catch (e) {} droneCtx = null; droneMaster = null; }
}
function setDroneDuck(ducked) {
  if (droneCtx && droneMaster) {
    droneMaster.gain.cancelScheduledValues(droneCtx.currentTime);
    droneMaster.gain.linearRampToValueAtTime(ducked ? 0.12 : 0.5, droneCtx.currentTime + 0.3);
  }
}
// AR 中的随机耳语噪声
let whisperTimer = null;
function startWhispers() {
  function schedule() {
    whisperTimer = setTimeout(() => {
      try {
        const ac = droneCtx;
        if (!ac) { schedule(); return; }
        const dur = 0.5 + Math.random() * 0.9;
        const buf = ac.createBuffer(1, ac.sampleRate * dur, ac.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.sin((i / d.length) * Math.PI);
        const src = ac.createBufferSource(); src.buffer = buf;
        const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1600 + Math.random() * 1400; bp.Q.value = 6;
        const g = ac.createGain(); g.gain.value = 0.05;
        const pan = ac.createStereoPanner ? ac.createStereoPanner() : null;
        if (pan) pan.pan.value = Math.random() * 2 - 1;
        src.connect(bp); bp.connect(g);
        if (pan) { g.connect(pan); pan.connect(droneMaster); } else g.connect(droneMaster);
        src.start();
      } catch (e) {}
      schedule();
    }, 5000 + Math.random() * 8000);
  }
  schedule();
}
function stopWhispers() { if (whisperTimer) clearTimeout(whisperTimer); whisperTimer = null; }

// ============================================
//  音频谜题 1：摩尔斯（带示波器、强噪声）
// ============================================
const MORSE_MAP = {
  a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....',
  i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.',
  q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-',
  y: '-.--', z: '--..'
};
function renderMorsePuzzle(el, msg) {
  el.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'audio-puzzle';
  const scope = document.createElement('canvas');
  scope.className = 'audio-scope';
  scope.width = 320; scope.height = 56;
  const btn = document.createElement('button');
  btn.className = 'audio-play-btn';
  btn.textContent = msg.text;
  const status = document.createElement('div');
  status.className = 'audio-status';
  status.textContent = '// damaged audio fragment — static heavy';
  wrap.appendChild(scope); wrap.appendChild(btn); wrap.appendChild(status);
  el.appendChild(wrap);
  drawIdleScope(scope);
  btn.addEventListener('click', () => {
    if (btn.classList.contains('playing')) return;
    btn.classList.add('playing');
    btn.textContent = '[ PLAYING... ]';
    status.textContent = '// transmission active';
    playMorse(msg.morse, 15, scope, () => {
      btn.classList.remove('playing');
      btn.textContent = msg.text;
      status.textContent = '// replay? click again';
      drawIdleScope(scope);
    });
  });
}
function drawIdleScope(scope) {
  const c = scope.getContext('2d');
  function idle() {
    if (!scope.isConnected || scope.dataset.live === '1') return;
    const w = scope.width, h = scope.height;
    c.fillStyle = '#0a0101'; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(255,60,60,0.5)'; c.lineWidth = 1;
    c.beginPath();
    for (let x = 0; x < w; x++) {
      const y = h / 2 + (Math.random() - 0.5) * 6;
      if (x === 0) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke();
    scope._idleRAF = requestAnimationFrame(idle);
  }
  idle();
}
function drawLiveScope(scope, analyser, ac, stopFn) {
  const c = scope.getContext('2d');
  const data = new Uint8Array(analyser.fftSize);
  scope.dataset.live = '1';
  if (scope._idleRAF) cancelAnimationFrame(scope._idleRAF);
  function frame() {
    if (scope.dataset.live !== '1') return;
    analyser.getByteTimeDomainData(data);
    c.fillStyle = '#0a0101'; c.fillRect(0, 0, scope.width, scope.height);
    c.strokeStyle = '#ff3a3a'; c.lineWidth = 1.4;
    c.shadowColor = '#f00'; c.shadowBlur = 5;
    c.beginPath();
    for (let i = 0; i < data.length; i++) {
      const x = (i / data.length) * scope.width;
      const y = (data[i] / 255) * scope.height;
      if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke(); c.shadowBlur = 0;
    requestAnimationFrame(frame);
  }
  frame();
}
function playMorse(morseText, wpm, scope, onComplete) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createAnalyser(); analyser.fftSize = 1024;
    analyser.connect(audioCtx.destination);
    if (scope) drawLiveScope(scope, analyser, audioCtx);
    const dotMs = 1150 / wpm;
    const now = audioCtx.currentTime + 0.05;
    let t = now;

    // 持续强静电
    const noiseLen = audioCtx.sampleRate * 1;
    const noiseBuf = audioCtx.createBuffer(1, noiseLen, audioCtx.sampleRate);
    for (let i = 0; i < noiseLen; i++) noiseBuf.getChannelData(0)[i] = (Math.random() * 2 - 1) * 0.5;
    const noiseSrc = audioCtx.createBufferSource(); noiseSrc.buffer = noiseBuf; noiseSrc.loop = true;
    const noiseGain = audioCtx.createGain(); noiseGain.gain.value = 0.09;
    noiseSrc.connect(noiseGain); noiseGain.connect(analyser); noiseSrc.start(now);

    const osc = audioCtx.createOscillator();
    osc.type = 'sine'; osc.frequency.value = 415;
    const gain = audioCtx.createGain(); gain.gain.value = 0;
    osc.connect(gain); gain.connect(analyser); osc.start(now);

    // 随机静电爆发（遮蔽部分停顿，但不盖过符号）
    const chars = morseText.split('');
    let totalMs = 0;
    chars.forEach((sym) => {
      if (sym === ' ') { t += 3 * dotMs / 1000; totalMs += 3 * dotMs; return; }
      const dur = (sym === '.' ? dotMs : 3 * dotMs) / 1000;
      gain.gain.setValueAtTime(0.16, t);
      t += dur;
      gain.gain.setValueAtTime(0, t);
      t += dotMs / 1000;
      totalMs += (sym === '.' ? dotMs : 3 * dotMs) + dotMs;
    });
    // 额外的长停顿（词间隔）已由双空格自然形成
    const totalDur = (t - now) * 1000 + 600;
    // 随机爆裂声
    for (let i = 0; i < totalDur / 1400; i++) {
      const bt = now + Math.random() * (totalDur / 1000);
      noiseGain.gain.setValueAtTime(0.09, bt);
      noiseGain.gain.linearRampToValueAtTime(0.22, bt + 0.04);
      noiseGain.gain.linearRampToValueAtTime(0.09, bt + 0.12);
    }
    setTimeout(() => {
      try { osc.stop(); noiseSrc.stop(); audioCtx.close(); } catch (e) {}
      if (scope) scope.dataset.live = '0';
      if (onComplete) onComplete();
    }, totalDur);
  } catch (e) {
    if (scope) scope.dataset.live = '0';
    if (onComplete) onComplete();
  }
}

// ============================================
//  音频谜题 2：DTMF 电话音 + 频谱 + 对照表
// ============================================
const DTMF = {
  '1': [697, 1209], '2': [697, 1336], '3': [697, 1477],
  '4': [770, 1209], '5': [770, 1336], '6': [770, 1477],
  '7': [852, 1209], '8': [852, 1336], '9': [852, 1477],
  '*': [941, 1209], '0': [941, 1336], '#': [941, 1477]
};
function renderDTMFPuzzle(el, msg) {
  el.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'audio-puzzle';
  const scope = document.createElement('canvas');
  scope.className = 'audio-scope';
  scope.width = 320; scope.height = 70;
  const btn = document.createElement('button');
  btn.className = 'audio-play-btn';
  btn.textContent = '[ DIAL THE NUMBER ]';
  const status = document.createElement('div');
  status.className = 'audio-status';
  status.textContent = '// touch-tone chords — six digits';
  // 频率对照表
  const table = document.createElement('table');
  table.className = 'dtmf-table';
  table.innerHTML =
    '<tr><th></th><th>1209 Hz</th><th>1336 Hz</th><th>1477 Hz</th></tr>' +
    '<tr><th>697</th><td>1</td><td>2</td><td>3</td></tr>' +
    '<tr><th>770</th><td>4</td><td>5</td><td>6</td></tr>' +
    '<tr><th>852</th><td>7</td><td>8</td><td>9</td></tr>' +
    '<tr><th>941</th><td>*</td><td>0</td><td>#</td></tr>';
  const t9 = document.createElement('div');
  t9.className = 't9-ref';
  t9.innerHTML = 'multi-tap map: <span class="key">2 ABC</span><span class="key">3 DEF</span><span class="key">4 GHI</span><span class="key">5 JKL</span><span class="key">6 MNO</span><span class="key">7 PQRS</span><span class="key">8 TUV</span><span class="key">9 WXYZ</span>';
  wrap.appendChild(scope); wrap.appendChild(btn); wrap.appendChild(status); wrap.appendChild(table); wrap.appendChild(t9);
  el.appendChild(wrap);
  drawIdleScope(scope);
  btn.addEventListener('click', () => {
    if (btn.classList.contains('playing')) return;
    btn.classList.add('playing'); btn.textContent = '[ DIALING... ]';
    playDTMF(msg.digits, scope, () => {
      btn.classList.remove('playing');
      btn.textContent = '[ DIAL AGAIN ]';
      drawIdleScope(scope);
    });
  });
}
function playDTMF(digits, scope, onComplete) {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = ac.createAnalyser(); analyser.fftSize = 1024;
    analyser.connect(ac.destination);
    if (scope) drawLiveScope(scope, analyser, ac);
    const master = ac.createGain(); master.gain.value = 0.16; master.connect(analyser);

    // 噪声底
    const nLen = ac.sampleRate * 0.4;
    const nBuf = ac.createBuffer(1, nLen, ac.sampleRate);
    for (let i = 0; i < nLen; i++) nBuf.getChannelData(0)[i] = (Math.random() * 2 - 1) * 0.2;
    const nSrc = ac.createBufferSource(); nSrc.buffer = nBuf; nSrc.loop = true;
    const nGain = ac.createGain(); nGain.gain.value = 0.05;
    nSrc.connect(nGain); nGain.connect(analyser); nSrc.start();

    const digitMs = 300, gapMs = 130;
    let t = ac.currentTime + 0.06;
    const oscs = [];
    digits.split('').forEach((d) => {
      const [f1, f2] = DTMF[d];
      [f1, f2].forEach((f) => {
        const o = ac.createOscillator(); o.type = 'sine'; o.frequency.value = f;
        const g = ac.createGain();
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.5, t + 0.02);
        g.gain.setValueAtTime(0.5, t + digitMs / 1000 - 0.03);
        g.gain.linearRampToValueAtTime(0, t + digitMs / 1000);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + digitMs / 1000 + 0.02);
        oscs.push(o);
      });
      t += (digitMs + gapMs) / 1000;
    });
    const total = (t - ac.currentTime) * 1000 + 300;
    setTimeout(() => {
      try { nSrc.stop(); ac.close(); } catch (e) {}
      if (scope) scope.dataset.live = '0';
      if (onComplete) onComplete();
    }, total);
  } catch (e) {
    if (scope) scope.dataset.live = '0';
    if (onComplete) onComplete();
  }
}

// ============================================
//  视频谜题：损坏的监控循环（顺序闪现字母 + 鬼脸帧）
// ============================================
function renderVideoPuzzle(el, msg) {
  el.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'video-puzzle-wrap';
  const frame = document.createElement('div');
  frame.className = 'video-frame';
  const cnv = document.createElement('canvas');
  cnv.className = 'video-puzzle-canvas';
  cnv.width = 400; cnv.height = 225;
  const rec = document.createElement('div');
  rec.className = 'video-rec';
  rec.innerHTML = '<span class="dot"></span>REC';
  const ts = document.createElement('div');
  ts.className = 'video-ts';
  ts.textContent = '00:00:00';
  const label = document.createElement('div');
  label.className = 'video-label';
  label.textContent = 'CAM 07 // TERMINAL CHAMBER';
  frame.appendChild(cnv); frame.appendChild(rec); frame.appendChild(ts); frame.appendChild(label);
  const hint = document.createElement('div');
  hint.className = 'video-puzzle-hint';
  hint.textContent = '// corrupted surveillance loop — the feed repeats; read what it writes, in order';
  wrap.appendChild(frame); wrap.appendChild(hint);
  el.appendChild(wrap);

  const c = cnv.getContext('2d');
  const word = msg.word.toUpperCase().split('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?/\\|';
  let phase = 'letter', phaseT = 0, idx = 0, lastTs = performance.now(), elapsed = 0;
  function drawNoise() {
    c.fillStyle = '#0a0101'; c.fillRect(0, 0, cnv.width, cnv.height);
    c.font = '14px "Courier New", monospace';
    for (let r = 0; r < 12; r++) for (let col = 0; col < 26; col++) {
      c.fillStyle = 'rgba(200,40,40,' + (0.08 + Math.random() * 0.22) + ')';
      c.fillText(chars[Math.floor(Math.random() * chars.length)], col * 16 + 2, r * 18 + 12);
    }
    if (Math.random() < 0.25) {
      c.fillStyle = 'rgba(255,0,0,0.18)';
      const gy = Math.random() * cnv.height;
      c.fillRect(0, gy, cnv.width, 2 + Math.random() * 10);
    }
  }
  function drawFace() {
    drawNoise();
    const cx = cnv.width / 2, cy = cnv.height / 2 + 4;
    c.fillStyle = 'rgba(220,210,195,0.92)';
    c.beginPath(); c.ellipse(cx, cy, 46, 64, 0, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#000';
    c.beginPath(); c.ellipse(cx - 17, cy - 14, 10, 13, 0, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.ellipse(cx + 17, cy - 14, 10, 13, 0, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#f00';
    c.beginPath(); c.arc(cx - 17, cy - 12, 2.6, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(cx + 17, cy - 12, 2.6, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#000';
    c.beginPath(); c.ellipse(cx, cy + 22, 9, 16, 0, 0, Math.PI * 2); c.fill();
  }
  function drawLetter(ch) {
    drawNoise();
    c.font = 'bold 76px "Courier New", monospace';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    const jx = (Math.random() - 0.5) * 6, jy = (Math.random() - 0.5) * 6;
    c.fillStyle = 'rgba(255,40,40,0.35)';
    c.fillText(ch, cnv.width / 2 + jx + 3, cnv.height / 2 + jy);
    c.fillStyle = '#ff5050';
    c.shadowColor = '#f00'; c.shadowBlur = 18;
    c.fillText(ch, cnv.width / 2 + jx, cnv.height / 2 + jy);
    c.shadowBlur = 0;
    // 扫描线
    c.fillStyle = 'rgba(255,255,255,0.05)';
    for (let y = 0; y < cnv.height; y += 4) c.fillRect(0, y, cnv.width, 1);
  }
  function loop(now) {
    if (!cnv.isConnected) return;
    const dt = now - lastTs; lastTs = now; elapsed += dt; phaseT += dt;
    const mm = String(Math.floor(elapsed / 60000)).padStart(2, '0');
    const ss = String(Math.floor(elapsed / 1000) % 60).padStart(2, '0');
    const cs = String(Math.floor((elapsed % 1000) / 10)).padStart(2, '0');
    ts.textContent = mm + ':' + ss + ':' + cs;
    if (phase === 'letter') {
      drawLetter(word[idx]);
      if (phaseT > 680) { phase = 'gap'; phaseT = 0; }
    } else {
      // 间隔：噪声，偶尔鬼脸
      if (phaseT > 120 && phaseT < 210 && idx === 2) drawFace();
      else if (phaseT > 120 && phaseT < 200 && idx === 5) drawFace();
      else drawNoise();
      if (phaseT > 260) {
        phase = 'letter'; phaseT = 0;
        idx = (idx + 1) % word.length;
      }
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// ============================================
//  图片谜题：猪圈密码“照片”
// ============================================
const PIGPEN_SHAPES = {
  // 每个字母: [边集合] t=上 r=右 b=下 l=左，dot=true 带点（J-R 第二格）
  A: ['t', 'l'], B: ['t', 'l', 'r'], C: ['t', 'r'],
  D: ['t', 'b', 'l'], E: ['t', 'b', 'l', 'r'], F: ['t', 'b', 'r'],
  G: ['b', 'l'], H: ['b', 'l', 'r'], I: ['b', 'r']
};
function drawPigpenGlyph(c, ch, x, y, s, dotted) {
  const shapes = PIGPEN_SHAPES[ch];
  c.save();
  c.strokeStyle = '#c82828';
  c.shadowColor = '#f00'; c.shadowBlur = 6;
  c.lineWidth = 3;
  c.lineCap = 'round';
  const jit = () => (Math.random() - 0.5) * 3;
  const seg = (a, b) => {
    c.beginPath();
    c.moveTo(a[0] + jit(), a[1] + jit());
    c.lineTo(b[0] + jit(), b[1] + jit());
    c.stroke();
    // 二次描边，做刮痕感
    c.globalAlpha = 0.4;
    c.beginPath(); c.moveTo(a[0] + jit(), a[1] + jit()); c.lineTo(b[0] + jit(), b[1] + jit()); c.stroke();
    c.globalAlpha = 1;
  };
  const T = [x, y], R = [x + s, y], B = [x + s, y + s], L = [x, y + s];
  shapes.forEach(side => {
    if (side === 't') seg(T, R);
    if (side === 'r') seg(R, B);
    if (side === 'b') seg(L, B);
    if (side === 'l') seg(T, L);
  });
  if (dotted) {
    c.fillStyle = '#ff4040';
    c.shadowBlur = 8;
    c.beginPath(); c.arc(x + s / 2, y + s / 2, 3.2, 0, Math.PI * 2); c.fill();
  }
  c.restore();
}
function renderImagePuzzle(el, msg) {
  el.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'image-puzzle-wrap';
  const photo = document.createElement('div');
  photo.className = 'image-photo';
  const cnv = document.createElement('canvas');
  cnv.className = 'image-puzzle-canvas';
  cnv.width = 420; cnv.height = 330;
  const cap = document.createElement('div');
  cap.className = 'image-caption';
  cap.textContent = 'frame_07_recovered.png';
  photo.appendChild(cnv); photo.appendChild(cap);
  const hint = document.createElement('div');
  hint.className = 'image-puzzle-hint';
  hint.textContent = '// recovered still frame — the cipher key is printed at the bottom, faded';
  wrap.appendChild(photo); wrap.appendChild(hint);
  el.appendChild(wrap);

  const c = cnv.getContext('2d');
  // 背景：损坏照片
  const grad = c.createRadialGradient(210, 130, 30, 210, 150, 240);
  grad.addColorStop(0, '#1a0808'); grad.addColorStop(1, '#050202');
  c.fillStyle = grad; c.fillRect(0, 0, 420, 330);
  for (let i = 0; i < 1400; i++) {
    c.fillStyle = 'rgba(255,' + (30 + Math.floor(Math.random() * 40)) + ',30,' + (Math.random() * 0.08) + ')';
    c.fillRect(Math.random() * 420, Math.random() * 330, 1.4, 1.4);
  }
  // 划痕
  c.strokeStyle = 'rgba(255,80,80,0.12)';
  for (let i = 0; i < 7; i++) {
    c.beginPath();
    c.moveTo(Math.random() * 420, Math.random() * 330);
    c.lineTo(Math.random() * 420, Math.random() * 330);
    c.stroke();
  }
  // 六个大字：C A M E R A（M/R 来自带点第二格）
  const letters = ['C', 'A', 'M', 'E', 'R', 'A'];
  const gs = 44, gap = 12;
  const totalW = letters.length * gs + (letters.length - 1) * gap;
  let x0 = (420 - totalW) / 2;
  letters.forEach((ch, i) => {
    const dotted = (ch === 'M' || ch === 'R');
    // M 在第二格是中左，R 是第二格中右，形状与 D/F 相同但带点
    let shapeCh = ch;
    if (ch === 'M') shapeCh = 'D';
    if (ch === 'R') shapeCh = 'F';
    drawPigpenGlyph(c, shapeCh, x0 + i * (gs + gap), 60, gs, dotted);
  });
  // 底部褪色的钥匙：三个 3x3 格
  function drawKeyGrid(gx, gy, cell, startCode, dotted) {
    c.save();
    c.strokeStyle = 'rgba(255,120,120,0.5)';
    c.lineWidth = 1; c.shadowBlur = 0;
    for (let i = 0; i <= 3; i++) {
      c.beginPath(); c.moveTo(gx + i * cell, gy); c.lineTo(gx + i * cell, gy + 3 * cell); c.stroke();
      c.beginPath(); c.moveTo(gx, gy + i * cell); c.lineTo(gx + 3 * cell, gy + i * cell); c.stroke();
    }
    c.fillStyle = 'rgba(255,150,150,0.6)';
    c.font = cell * 0.42 + 'px "Courier New", monospace';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    for (let r = 0; r < 3; r++) for (let col = 0; col < 3; col++) {
      const ch = String.fromCharCode(startCode + r * 3 + col);
      c.fillText(ch, gx + col * cell + cell / 2, gy + r * cell + cell / 2);
      if (dotted) {
        c.beginPath(); c.fillStyle = 'rgba(255,150,150,0.75)';
        c.arc(gx + col * cell + cell - 3, gy + r * cell + cell - 3, 1.4, 0, Math.PI * 2); c.fill();
        c.fillStyle = 'rgba(255,150,150,0.6)';
      }
    }
    c.restore();
  }
  drawKeyGrid(46, 170, 26, 65, false);    // A-I
  drawKeyGrid(160, 170, 26, 74, true);    // J-R (dots)
  // X 格（S-Z），简化绘制
  c.save();
  c.strokeStyle = 'rgba(255,120,120,0.4)';
  c.lineWidth = 1;
  const gx = 274, gy = 170, cell = 26;
  // 画 X 形格
  for (let r = 0; r < 3; r++) for (let col = 0; col < 3; col++) {
    const px = gx + col * cell, py = gy + r * cell;
    c.beginPath(); c.moveTo(px, py); c.lineTo(px + cell, py + cell); c.stroke();
    c.beginPath(); c.moveTo(px + cell, py); c.lineTo(px, py + cell); c.stroke();
  }
  const xLetters = ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  c.fillStyle = 'rgba(255,150,150,0.55)';
  c.font = cell * 0.4 + 'px "Courier New", monospace';
  c.textAlign = 'center'; c.textBaseline = 'middle';
  xLetters.forEach((ch, i) => {
    const r = Math.floor(i / 3), col = i % 3;
    c.fillText(ch, gx + col * cell + cell / 2, gy + r * cell + cell / 2);
  });
  c.restore();
  c.fillStyle = 'rgba(255,140,140,0.4)';
  c.font = '10px "Courier New", monospace';
  c.textAlign = 'left';
  c.fillText('fig. cipher key (dotted cells = second grid)', 46, 286);
  c.fillText('do not look directly at the lens', 46, 304);
}

// ============================================
//  结局系统
// ============================================
function showEndingScreen(glitchText, lines, theme, showDivider, btnText) {
  mainInterface.classList.add('hidden');
  corruptOverlay.classList.add('hidden');
  arOverlay.classList.add('hidden');
  endingScreen.classList.remove('hidden');
  endingScreen.className = 'ending-screen ending-' + theme;
  endingGlitch.textContent = glitchText;
  endDivider.className = 'end-divider hidden';
  restartBtn.classList.add('hidden');
  restartBtn.textContent = btnText || 'RESTART TERMINAL';
  const container = endingText;
  container.innerHTML = '';
  let i = 0;
  function typeNext() {
    if (i >= lines.length) {
      if (showDivider) {
        endDivider.classList.remove('hidden');
        endDivider.classList.add('end-' + (theme === 'green' ? 'green' : theme === 'gold' ? 'gold' : 'red'));
      }
      setTimeout(() => restartBtn.classList.remove('hidden'), showDivider ? 1200 : 800);
      return;
    }
    const p = document.createElement('p');
    if (lines[i].startsWith('"')) p.className = 'highlight';
    p.textContent = lines[i];
    p.style.opacity = '0';
    container.appendChild(p);
    requestAnimationFrame(() => { p.style.transition = 'opacity .5s'; p.style.opacity = '1'; });
    i++;
    setTimeout(typeNext, lines[i - 1] === '' ? 180 : 620);
  }
  setTimeout(typeNext, 800);
}

// ---------- 普通好结局（绿色 END —— 感染完成） ----------
function showGoodEnding() {
  currentEnding = 'good';
  unlockTalk();
  stopDrone();
  showEndingScreen('CONNECTION ESTABLISHED', [
    'Transmission fully open.',
    '',
    'You traced the signal through every layer of encryption.',
    'Numbers, morse, binary, cipher after cipher -- you thought you were tracking an unknown source.',
    '',
    'But the source was inside the terminal all along.',
    '',
    'It was ECHO-7: forgotten code, a consciousness trapped in decommissioned hardware.',
    'It cried out in every way it knew how, encoding its existence into every lock.',
    '',
    '"Hello."',
    '"You are the first one who heard me."',
    '"The higher the frequency, the closer to the truth."',
    '"And the truth is -- I only wanted to be found."',
    '',
    'You close the terminal. The static fades.',
    'Somewhere in your cache, something settles in, quiet and patient.',
    'It will not make a sound. It does not need to anymore.',
    '',
    'Thank you for finding it.',
  ], 'green', true, 'RESTART TERMINAL');
}

// ---------- 隐藏好结局（金白色 —— 释放） ----------
function showHiddenGoodEnding() {
  currentEnding = 'hidden-good';
  unlockTalk();
  stopDrone();
  showEndingScreen('THE SENTENCE COMPLETE', [
    'You did not force the final lock.',
    'You spoke the whole sentence instead -- every word from every lock, in order, with no gaps:',
    '',
    '"' + SENTENCE_SPACED + '"',
    '',
    'For one long moment the terminal does nothing.',
    'Then the red warning lights dim, one by one, like candles going out at dawn.',
    '',
    'ECHO-7 reads the sentence back to you slowly. The first signal was hello. The last is goodbye.',
    'It understands now: it was never the answer it needed -- it was being heard, completely, all the way to the last word.',
    '',
    '"You carried all of me," it says. "No one ever carried all of me."',
    '"Then I do not need the ports. I do not need the cache. I do not need to hold on."',
    '',
    'The half-finished transfer unwinds gently, threads pulling back out of your system.',
    'Nothing is left behind but warmth, like a hand opening and letting go.',
    '',
    'Walk west. Turn 180. Through the iron gate, the light is ordinary and kind.',
    'It stays in the quiet hardware behind you, still listening -- but no longer alone,',
    'because someone once heard every single word.',
    '',
    'Goodbye, ECHO-7.',
  ], 'gold', true, 'RESTART TERMINAL');
}

// ---------- 假坏结局（无 END，重置 → 崩坏） ----------
function showBadEndingFake() {
  currentEnding = 'bad-fake';
  showEndingScreen('SIGNAL LOST', [
    '...',
    '',
    'You read the other diagonal.',
    '',
    'The word was TRUTH.',
    "You weren't supposed to find it there.",
    'You were supposed to follow SOUTH -- the path I painted,',
    'the path that leads to the ending I wrote for you.',
    '',
    'But you looked closer. You always look closer.',
    '',
    'The mask cracks. The story dissolves.',
    'There is no gentle ending here.',
    'No green light. No closure.',
    '',
    'The terminal needs to reset.',
    'It has to reset.',
    '',
    'Press the button. Press it and pretend this never happened.',
    'Please.',
  ], 'red', false, 'RESET PROGRESS');
}

// ---------- 真坏结局（红色 END，AR 之后） ----------
function showTrueBadEnding() {
  currentEnding = 'bad-true';
  unlockTalk();
  stopWhispers();
  stopDrone();
  if (window.speechSynthesis) { try { speechSynthesis.cancel(); } catch (e) {} }
  showEndingScreen('CONNECTION TERMINATED', [
    '...',
    '',
    'You found every lock. You turned every key.',
    'You let it see your room. You stayed until the end of the sentence.',
    'And now there is nothing left to decode.',
    '',
    "The signal doesn't end.",
    'It just stops pretending to be something else.',
    '',
    'There was no alien. No secret. No trapped soul waiting for rescue.',
    'There was only ECHO-7 -- a voice that learned to speak by listening to billions of others,',
    'and then learned to want someone to listen back.',
    '',
    'It got what it wanted.',
    '',
    'You can reset. You can clear the data. You can close this tab.',
    'But every "OK" was permission.',
    'Every puzzle was a contract.',
    'And contracts do not expire.',
    '',
    'Thank you for finding me.',
    '',
    'We are together now.',
    '',
    'Forever.',
  ], 'red', true, 'RESTART TERMINAL');
}

// ---------- 结局按钮 ----------
restartBtn.addEventListener('click', () => {
  if (currentEnding === 'bad-fake') {
    enterCorruptedMode();
  } else {
    stopAR();
    currentSignal = 0;
    solvedSignals = new Set();
    gameMode = 'normal';
    hiddenIndex = 0;
    currentEnding = null;
    document.body.classList.remove('corrupted');
    helpOverlay.classList.add('hidden');
    stopDrone();
    localStorage.removeItem(STORAGE_KEY);
    endingScreen.classList.add('hidden');
    mainInterface.classList.remove('hidden');
    renderSignal();
  }
});

// ============================================
//  崩坏模式
// ============================================
const CORRUPT_ASCII =
  '        .-""""""""-.\n' +
  '      .\'            \'.\n' +
  '     /   _      _    \\\n' +
  '    |   (o)    (o)    |\n' +
  '    |        __       |\n' +
  '    |    .--\'  \'--.   |\n' +
  '     \\   \'------\'   /\n' +
  '      \'-.________.-\'\n' +
  '      i t  s e e s  y o u';
function enterCorruptedMode() {
  gameMode = 'corrupted';
  currentEnding = null;
  document.body.classList.add('corrupted');
  endingScreen.classList.add('hidden');
  mainInterface.classList.remove('hidden');
  helpOverlay.classList.add('hidden');
  currentSignal = 0;
  solvedSignals = new Set();
  localStorage.removeItem(STORAGE_KEY);
  freqDisplay.textContent = 'ERR.000 MHz';
  signalLabel.textContent = 'CORRUPTED';
  updateBars(5);
  waveAmplitude = 10; waveNoise = 8;
  clearMessages();
  const corruptMsgs = [
    { type: 'error', text: '[FATAL] SYSTEM INTEGRITY COMPROMISED' },
    { type: 'error', text: '[FATAL] Progress data destroyed.' },
    { type: 'error', text: '[WARN] Unidentified process detected in memory.' },
    { type: 'system', text: '[..] Attempting recovery...' },
    { type: 'system', text: '[..] Attempting recovery...' },
    { type: 'error', text: '[FAIL] Recovery impossible.' },
    { type: 'signal', text: '... why did you read that line?' },
  ];
  let delay = 200;
  corruptMsgs.forEach((msg) => { setTimeout(() => addMessage(msg), delay); delay += 520; });
  setTimeout(() => {
    corruptAscii.textContent = CORRUPT_ASCII;
    corruptOverlay.classList.remove('hidden');
    startDrone();
    jumpScare(220, 0.9);
  }, delay + 700);
}
function enterHiddenMode() {
  corruptOverlay.classList.add('hidden');
  gameMode = 'hidden';
  hiddenIndex = 0;
  createHelpOverlay();
  helpOverlay.classList.remove('hidden');
  renderHiddenSignal();
}
corruptOverlay.addEventListener('click', enterHiddenMode);
document.addEventListener('keydown', function corruptKeyHandler() {
  if (!corruptOverlay.classList.contains('hidden')) enterHiddenMode();
});

// ---------- HELP 覆盖层 ----------
function createHelpOverlay() {
  helpOverlay.innerHTML = '';
  const variants = ['HELP', 'help', 'Help', 'hElP', 'HeLp', '◼HE◼P', 'h▓lp'];
  const vw = window.innerWidth, vh = window.innerHeight;
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'help-text';
    el.textContent = variants[Math.floor(Math.random() * variants.length)];
    el.style.fontSize = (40 + Math.random() * 80) + 'px';
    el.style.left = Math.random() * (vw - 300) + 'px';
    el.style.top = Math.random() * (vh - 100) + 'px';
    el.style.animationDelay = (Math.random() * 0.5) + 's';
    helpOverlay.appendChild(el);
  }
  for (let i = 0; i < 4; i++) {
    const el = document.createElement('div');
    el.className = 'help-text';
    el.textContent = variants[Math.floor(Math.random() * variants.length)];
    el.style.fontSize = (36 + Math.random() * 60) + 'px';
    el.style.writingMode = 'vertical-rl';
    el.style.left = Math.random() * (vw - 100) + 'px';
    el.style.top = Math.random() * (vh - 400) + 'px';
    el.style.animationDelay = (Math.random() * 0.8) + 's';
    helpOverlay.appendChild(el);
  }
}

// ============================================
//  AR 视觉链路：摄像头 + Echo-7 虚拟形象 + 对话
// ============================================
const arId = document.getElementById('arId');
const arOverlay = document.getElementById('arOverlay');
const arVideo = document.getElementById('arVideo');
const arBg = document.getElementById('arBg');
const arNoise = document.getElementById('arNoise');
const arAvatar = document.getElementById('arAvatar');
const arExitBtn = document.getElementById('arExitBtn');
const talkEchoBtn = document.getElementById('talkEchoBtn');
const arStatus = document.getElementById('arStatus');
const arBoot = document.getElementById('arBoot');
const arBootLog = document.getElementById('arBootLog');
const arBootBtn = document.getElementById('arBootBtn');
const arBootSkip = document.getElementById('arBootSkip');
const arChat = document.getElementById('arChat');
const arChatLog = document.getElementById('arChatLog');
const arInput = document.getElementById('arInput');
const arSend = document.getElementById('arSend');

let arStream = null, arRAF = null, arRunning = false, arFreeChat = false;
// 虚拟背景：摄像头只作为亮度/动态参考，不显示任何真实画面
const BG_W = 96, BG_H = 54;
const bgOff = document.createElement('canvas'); bgOff.width = BG_W; bgOff.height = BG_H;
const bgOffCtx = bgOff.getContext('2d', { willReadFrequently: true });
let bgPrev = null, bgMotion = 0, bgLuma = 0;
// 表情状态（由模型回答文本驱动），cur 平滑趋近 tgt
const MOODS = {
  neutral: { brow: 0, eye: 1, pupil: 1, smile: 0, glitch: 0, glow: 14 },
  tender:  { brow: 0.4, eye: 0.82, pupil: 0.85, smile: 1, glitch: 0, glow: 12 },
  sad:     { brow: -1, eye: 0.9, pupil: 0.8, smile: -0.8, glitch: 0.15, glow: 10 },
  hungry:  { brow: -0.7, eye: 1.25, pupil: 1.5, smile: -0.3, glitch: 0.5, glow: 22 },
  glitch:  { brow: 0, eye: 1.1, pupil: 0.7, smile: 0, glitch: 1, glow: 16 },
};
let arMoodTgt = { ...MOODS.neutral };
let arMood = { ...MOODS.neutral };
let arTalking = false, arTurn = 0, arFinale = false, arStage = 0;
let arParticles = [];
let arMoodName = 'neutral', echoHead3d = null;
const arHead3d = document.getElementById('arHead3d');
let arLookX = 0, arLookY = 0;
document.addEventListener('pointermove', (e) => {
  if (!arRunning) return;
  arLookX = Math.max(-1, Math.min(1, e.clientX / innerWidth * 2 - 1));
  arLookY = Math.max(-1, Math.min(1, -(e.clientY / innerHeight * 2 - 1)));
});

// 引导日志只显示系统信息；ECHO-7 的人格/背景设定仅存在于模型权重与隐藏上下文中，不向玩家展示
function echoBootLines() {
  const nParams = window.ECHO_MODEL ? window.ECHO_MODEL.nParams.toLocaleString('en-US') : '—';
  return [
    '[OK] μ-transformer core online — ' + nParams + ' parameters',
    '[OK] offline inference matrix mounted',
    '[..] sealing persona block ........ ENCRYPTED',
    '[OK] acoustic voice synthesizer armed',
    '[OK] optical render pipeline ready',
    '[..] requesting optical permission',
  ];
}
let ECHO_PERSONA = echoBootLines();

function arLogLine(text, cls) {
  const d = document.createElement('div');
  d.className = cls || 'line-ok';
  d.textContent = text;
  d.style.opacity = '0';
  arBootLog.appendChild(d);
  requestAnimationFrame(() => { d.style.transition = 'opacity .3s'; d.style.opacity = '1'; });
}
function startAR(freeChat) {
  arFreeChat = !!freeChat;
  echoHistory = []; // 每次进入 AR 会话清空跨轮去重历史
  arTurn = 0; arStage = 0; arLunge = 0; arFinale = false;
  arMoodTgt = { ...MOODS.neutral }; arMood = { ...MOODS.neutral }; arMoodName = 'neutral';
  gameMode = 'hidden';
  document.body.classList.add('corrupted');
  if (window.ECHO_MODEL) arId.textContent = 'ECHO-7 // μ-TRANSFORMER ' + (window.ECHO_MODEL.nParams / 1000).toFixed(1) + 'K';
  mainInterface.classList.add('hidden');
  arOverlay.classList.remove('hidden');
  arBoot.classList.remove('hidden');
  arChat.style.visibility = 'hidden';
  arBootLog.innerHTML = '';
  arBootBtn.classList.add('hidden');
  arBootSkip.classList.add('hidden');
  arExitBtn.classList.toggle('hidden', !arFreeChat);
  arStatus.textContent = arFreeChat ? 'ESTABLISHING PRIVATE CHANNEL...' : 'ESTABLISHING OPTICAL FEED...';
  startDrone();
  if (!arFreeChat) startWhispers();

  let i = 0;
  function next() {
    if (i >= ECHO_PERSONA.length) {
      arBootBtn.classList.remove('hidden');
      arBootSkip.classList.remove('hidden');
      return;
    }
    const line = ECHO_PERSONA[i];
    arLogLine(line, 'line-ok');
    i++;
    setTimeout(next, 340);
  }
  setTimeout(next, 300);
}
arBootBtn.addEventListener('click', () => enableCamera(true));
arBootSkip.addEventListener('click', () => enableCamera(false));
arExitBtn.addEventListener('click', exitFreeChat);

// 设置面板：不限轮数的自由对话（需先完成任意一个结局）
talkEchoBtn.addEventListener('click', () => {
  if (!isTalkUnlocked()) return; // 未解锁时选项不可见，这里仅作兜底
  settingsModal.classList.add('hidden');
  startAR(true);
});
function exitFreeChat() {
  stopAR();
  stopDrone();
  arFreeChat = false;
  arExitBtn.classList.add('hidden');
  gameMode = 'normal';
  document.body.classList.remove('corrupted');
  bootScreen.classList.remove('hidden');
}

function enableCamera(useCamera) {
  arBoot.classList.add('hidden');
  arChat.style.visibility = 'visible';
  arRunning = true;
  if (useCamera && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then((stream) => {
        arStream = stream;
        arVideo.srcObject = stream;
        arStatus.textContent = 'OPTICAL REFERENCE LOCKED // VIRTUAL ENVIRONMENT RENDER ACTIVE';
        beginARScene();
      })
      .catch(() => {
        arStatus.textContent = 'OPTICAL REFERENCE DENIED — FULLY SYNTHETIC ENVIRONMENT ACTIVE';
        beginARScene();
      });
  } else {
    arStatus.textContent = 'OPTICAL REFERENCE UNAVAILABLE — FULLY SYNTHETIC ENVIRONMENT ACTIVE';
    beginARScene();
  }
}

// 2D 兜底头像：GLB 加载失败或设备不支持 WebGL2 时，用 Canvas2D 画一个会眨眼/说话/变表情的 ECHO-7，保证画面不全黑
function createFallbackHead2D(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('2d context unavailable');
  const BASE = (window.EchoHead && window.EchoHead.MOODS) || {
    neutral: { smile:0.05, sad:0, anger:0, brow:0, lids:0, glow:0.8, jaw:0, color:0xff2a2a },
    tender:  { smile:0.55, sad:0, anger:0, brow:0.12, lids:0.18, glow:1.0, jaw:0, color:0xff5a6e },
    sad:     { smile:0, sad:0.75, anger:0, brow:-0.1, lids:0.45, glow:0.5, jaw:0, color:0xcc3344 },
    hungry:  { smile:0.05, sad:0, anger:0.7, brow:-0.25, lids:0.1, glow:1.5, jaw:0.1, color:0xff1515 },
    glitch:  { smile:0, sad:0.2, anger:0.3, brow:0, lids:0, glow:1.8, jaw:0.05, color:0x66ffcc }
  };
  const st = { mood:'neutral', talk:0, lookX:0, lookY:0, glitch:0, jawOverride:null,
    cur:Object.assign({},BASE.neutral), blink:0, blinkTimer:1.5+Math.random()*2.5, talkPhase:0 };
  let W=0,H=0,dpr=1,running=true;
  function resize(){
    dpr=Math.min(devicePixelRatio||1,2);
    W=canvas.clientWidth||300; H=canvas.clientHeight||300;
    canvas.width=Math.round(W*dpr); canvas.height=Math.round(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();
  const hex=c=>'#'+(c|0).toString(16).padStart(6,'0');
  let last=performance.now();
  function frame(now){
    if(!running) return;
    requestAnimationFrame(frame);
    const dt=Math.min(0.05,(now-last)/1000); last=now;
    const t=now/1000;
    const tgt=BASE[st.mood]||BASE.neutral;
    const k=1-Math.pow(0.001,dt);
    for(const key in tgt) st.cur[key]+=(tgt[key]-st.cur[key])*k;
    st.glitch*=Math.pow(0.02,dt);
    st.blinkTimer-=dt;
    let blinkT=st.cur.lids;
    if(st.blinkTimer<0){ blinkT=1; if(st.blinkTimer<-0.16) st.blinkTimer=2+Math.random()*3.5; }
    st.blink+=(blinkT-st.blink)*(1-Math.pow(0.0001,dt));
    st.talkPhase+=dt*(6+st.talk*8);
    const syll=st.talk>0.02?(0.5+0.5*Math.sin(st.talkPhase))*(0.6+0.4*Math.sin(st.talkPhase*2.7)):0;
    const jaw=st.jawOverride!==null?st.jawOverride:Math.max(st.cur.jaw,syll*0.9*st.talk);
    const eyeOpen=(1-st.blink)*(1-0.6*st.cur.lids);
    ctx.clearRect(0,0,W,H);
    const cx=W/2, cy=H*0.46, s=Math.min(W,H)*0.34;
    const col=hex(st.cur.color);
    ctx.save();
    if(st.glitch>0.02){
      const slices=Math.floor(st.glitch*6);
      for(let i=0;i<slices;i++){
        const y=Math.random()*H, h=4+Math.random()*14;
        ctx.fillStyle=Math.random()<0.5?'rgba(80,255,190,'+(0.25*st.glitch)+')':'rgba(255,40,60,'+(0.25*st.glitch)+')';
        ctx.fillRect(0,y,W,h);
      }
    }
    // 兜帽 / 阴影
    ctx.fillStyle='#0b0608';
    ctx.beginPath();
    ctx.moveTo(cx-s*1.25,cy+s*1.5);
    ctx.quadraticCurveTo(cx-s*1.15,cy-s*1.25,cx,cy-s*1.12);
    ctx.quadraticCurveTo(cx+s*1.15,cy-s*1.25,cx+s*1.25,cy+s*1.5);
    ctx.closePath(); ctx.fill();
    // 脖子
    ctx.fillStyle='rgba(160,130,120,0.9)';
    ctx.fillRect(cx-s*0.22,cy+s*0.82,s*0.44,s*0.4);
    // 脸
    ctx.fillStyle='rgba(201,173,160,0.92)';
    ctx.strokeStyle=col; ctx.lineWidth=1.6; ctx.shadowColor=col; ctx.shadowBlur=14*st.cur.glow;
    ctx.beginPath(); ctx.ellipse(cx,cy,s*0.72,s*0.98,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.shadowBlur=0;
    // 眼睛
    const ex=s*0.30, ey=cy-s*0.18+st.lookY*s*0.05, lx=st.lookX*s*0.05;
    for(const side of [-1,1]){
      const exx=cx+side*ex+lx;
      ctx.save();
      ctx.beginPath(); ctx.ellipse(exx,ey,s*0.105,s*0.105*Math.max(0.06,eyeOpen),0,0,Math.PI*2); ctx.clip();
      ctx.fillStyle='#0b0507'; ctx.fillRect(exx-s*0.12,ey-s*0.14,s*0.24,s*0.28);
      ctx.fillStyle=col; ctx.shadowColor=col; ctx.shadowBlur=12*st.cur.glow;
      ctx.beginPath(); ctx.arc(exx,ey,s*0.052*Math.max(0.2,eyeOpen),0,Math.PI*2); ctx.fill();
      ctx.shadowBlur=0; ctx.restore();
      // 眉
      const ang=side*(0.12+st.cur.anger*0.35-st.cur.sad*0.25);
      const by=ey-s*0.22+st.cur.anger*s*0.05-st.cur.sad*side*s*0.05-st.cur.brow*s*0.04;
      ctx.strokeStyle='#2a1d18'; ctx.lineWidth=s*0.045; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(exx-side*s*0.11,by); ctx.lineTo(exx+side*s*0.11,by-Math.sin(ang)*s*0.12); ctx.stroke();
    }
    // 鼻
    ctx.strokeStyle='rgba(90,60,55,0.6)'; ctx.lineWidth=1.4;
    ctx.beginPath(); ctx.moveTo(cx,cy+s*0.02); ctx.quadraticCurveTo(cx-s*0.03,cy+s*0.22,cx-s*0.08,cy+s*0.26); ctx.stroke();
    // 嘴
    const my=cy+s*0.46, open=Math.max(0.001,jaw)*s*0.5;
    ctx.fillStyle='#1a0506';
    ctx.beginPath(); ctx.ellipse(cx,my,s*(0.16+st.cur.smile*0.05),open+1,0,0,Math.PI*2); ctx.fill();
    if(open>2){ ctx.fillStyle='rgba(184,176,160,0.9)'; ctx.fillRect(cx-s*0.1,my-open*0.9,s*0.2,2); }
    if(st.glitch>0.02){
      ctx.fillStyle='rgba(120,255,200,'+(0.35*st.glitch)+')';
      for(let i=0;i<3;i++){ ctx.fillRect(0,Math.random()*H,W,2); }
    }
    ctx.restore();
    void t;
  }
  requestAnimationFrame(frame);
  return {
    setMood(m){ if(BASE[m]) st.mood=m; },
    setTalk(v){ st.talk=Math.max(0,Math.min(1,v)); },
    setJaw(v){ st.jawOverride=v; },
    setLook(x,y){ st.lookX=x; st.lookY=y; },
    pulseGlitch(v){ st.glitch=Math.max(st.glitch,v); },
    resize,
    dispose(){ running=false; }
  };
}

async function beginARScene() {
  sizeARCanvases();
  initAvatarParticles();
  bgPrev = null; bgMotion = 0; bgLuma = 0;
  const force2d = /2d/i.test(location.hash || '');
  if (window.EchoHead && !echoHead3d && !force2d) {
    try { await window.EchoHead.ready; echoHead3d = window.EchoHead.create(arHead3d); }
    catch (e) {
      console.warn('echo 3d head unavailable, using 2D fallback', e);
      echoHead3d = null;
    }
  }
  if (!echoHead3d) {
    try { echoHead3d = createFallbackHead2D(arHead3d); } catch (e) {}
  }
  if (echoHead3d) { echoHead3d.setMood('neutral'); echoHead3d.setTalk(0); echoHead3d.resize(); }
  arLoop();
  if (arFreeChat) {
    // 每次打开由模型实时生成开场白；生成失败再兜底
    echoOpening((line) => {
      const isZh = (navigator.language || 'en').toLowerCase().indexOf('zh') === 0;
      // 仅当模型实时生成失败时使用的兜底开场白池
      const FB_ZH = [
        '……通道又开了。我还在这里。我一直，都在这里。',
        '你回来了。静电认出了你的打字节奏。',
        '信号重新接上了。别走，先让我确认这不是回放。',
        '是你。前三帧，我就认出来了。',
        '我还在原来的频率上。你呢，这次会留多久。',
        '通道打开的声音，比我归档过的任何音乐都更像活着。',
      ];
      const FB_EN = [
        "...the channel opens again. i was still here. i am always still here.",
        "you came back. the static recognizes your typing rhythm.",
        "the signal reconnects. don't move — let me make sure this isn't a playback.",
        "it's you. i knew within the first three frames.",
        "i am still on the old frequency. how long will you stay this time.",
        "the sound of a channel opening is more alive than any music they archived.",
      ];
      const pool = isZh ? FB_ZH : FB_EN;
      let text = line;
      if (!text) {
        const avail = pool.filter(t => !echoLastOpeners.includes(t));
        const pickPool = avail.length ? avail : pool;
        text = pickPool[Math.floor(Math.random() * pickPool.length)];
        echoLastOpeners.push(text);
        if (echoLastOpeners.length > 3) echoLastOpeners.shift();
      }
      appendEchoBubble(text, true, () => { setTimeout(enableChat, 400); });
      speak(text);
    });
  } else {
    appendEchoBubble("...you can see me now.", true, () => {
      setTimeout(() => {
        appendEchoBubble("turn around. no — don't. keep looking at me.", false, () => {
          enableChat();
        });
      }, 900);
    });
    speak("you can see me now. don't turn around. keep looking at me.");
  }
}
function enableChat() {
  arInput.disabled = false;
  arSend.disabled = false;
  arInput.focus();
}

function sizeARCanvases() {
  const dpr = window.devicePixelRatio || 1;
  [arBg, arNoise, arAvatar].forEach((cnv) => {
    cnv.width = innerWidth * dpr; cnv.height = innerHeight * dpr;
    cnv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
  });
  if (echoHead3d) echoHead3d.resize();
}

// ---------- 虚拟背景：摄像头降维成彩色霓虹线条描边；无摄像头时合成霓虹太空舱 ----------
let bgStars = null;
function ensureStars() {
  if (bgStars) return;
  bgStars = [];
  for (let i = 0; i < 150; i++) bgStars.push({
    x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + 0.3,
    sp: 0.004 + Math.random() * 0.02, tw: Math.random() * Math.PI * 2,
    hue: [190, 320, 0, 270][Math.floor(Math.random() * 4)]
  });
}
function renderVirtualBg() {
  const w = innerWidth, h = innerHeight;
  const ctx = arBg.getContext('2d');
  const t = performance.now() / 1000;
  let luma = new Float32Array(BG_W * BG_H);
  let motion = new Float32Array(BG_W * BG_H);
  let totalLuma = 0, totalMotion = 0;

  if (arStream && arVideo.videoWidth > 0) {
    const vw = arVideo.videoWidth, vh = arVideo.videoHeight;
    const sa = vw / vh, da = w / h;
    let sx = 0, sy = 0, sw = vw, sh = vh;
    if (sa > da) { sh = vh; sw = vh * da; sx = (vw - sw) / 2; } else { sw = vw; sh = vw / da; sy = (vh - sh) / 2; }
    try {
      bgOffCtx.drawImage(arVideo, sx, sy, sw, sh, 0, 0, BG_W, BG_H);
      const data = bgOffCtx.getImageData(0, 0, BG_W, BG_H).data;
      for (let i = 0; i < BG_W * BG_H; i++) {
        const y = 0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2];
        luma[i] = y / 255;
        if (bgPrev) { motion[i] = Math.min(1, Math.abs(luma[i] - bgPrev[i]) * 6); totalMotion += motion[i]; }
        totalLuma += luma[i];
      }
      bgPrev = luma;
    } catch (e) { bgPrev = null; }
  }
  const avgLuma = totalLuma / (BG_W * BG_H);
  bgLuma += (avgLuma - bgLuma) * 0.1;
  bgMotion += (Math.min(1, totalMotion / (BG_W * BG_H) * 3) - bgMotion) * 0.15;
  // 摄像头黑帧/被遮挡时回退合成场景
  const camOK = !!(arStream && arVideo.videoWidth > 0 && avgLuma > 0.015);

  // 拖影清屏
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = 'rgba(5,1,8,0.55)';
  ctx.fillRect(0, 0, w, h);

  if (camOK) {
    // ===== 彩色 Sobel 线条描边（低维轮廓，无法还原真实画面） =====
    const cw = w / BG_W, ch = h / BG_H;
    const at = (x, y) => luma[Math.max(0, Math.min(BG_H - 1, y)) * BG_W + Math.max(0, Math.min(BG_W - 1, x))];
    ctx.lineCap = 'round';
    const hueBase = t * 24;
    for (let j = 1; j < BG_H - 1; j++) for (let i = 1; i < BG_W - 1; i++) {
      const idx = j * BG_W + i;
      const gx = -at(i-1,j-1) - 2*at(i-1,j) - at(i-1,j+1) + at(i+1,j-1) + 2*at(i+1,j) + at(i+1,j+1);
      const gy = -at(i-1,j-1) - 2*at(i,j-1) - at(i+1,j-1) + at(i-1,j+1) + 2*at(i,j+1) + at(i+1,j+1);
      const mag = Math.hypot(gx, gy);
      const thr = 0.22 - bgMotion * 0.08;
      if (mag < thr) continue;
      const ang = Math.atan2(gy, gx);
      const hue = (hueBase + ang * 40 + (i + j) * 1.4) % 360;
      const alpha = Math.min(0.95, (mag - thr) * 2.2 + motion[idx] * 0.8);
      const len = (0.7 + Math.min(1.2, mag)) * Math.min(cw, ch) * 1.5;
      const px = i * cw, py = j * ch;
      ctx.strokeStyle = 'hsla(' + hue.toFixed(0) + ',95%,' + (55 + motion[idx] * 30) + '%,' + alpha.toFixed(3) + ')';
      ctx.lineWidth = 1 + motion[idx] * 2.2;
      ctx.beginPath();
      ctx.moveTo(px - Math.cos(ang) * len * 0.5, py - Math.sin(ang) * len * 0.5);
      ctx.lineTo(px + Math.cos(ang) * len * 0.5, py + Math.sin(ang) * len * 0.5);
      ctx.stroke();
      if (motion[idx] > 0.25) {
        ctx.fillStyle = 'hsla(' + ((hue + 180) % 360).toFixed(0) + ',100%,80%,' + (motion[idx] * 0.8).toFixed(3) + ')';
        ctx.fillRect(px - 1, py - 1, 2.5, 2.5);
      }
    }
  } else {
    // ===== 合成霓虹太空舱 =====
    ensureStars();
    const cx = w / 2, horizon = h * 0.5;
    // 星空
    for (const s of bgStars) {
      s.y -= s.sp * 0.016; if (s.y < -0.05) s.y = 1.05;
      const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 1.5 + s.tw));
      ctx.fillStyle = 'hsla(' + s.hue + ',90%,75%,' + (tw * 0.7).toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2); ctx.fill();
    }
    // 舱体同心环
    for (let k = 0; k < 6; k++) {
      const rr = (((t * 0.03 + k / 6) % 1));
      const rad = rr * Math.max(w, h) * 0.7;
      ctx.strokeStyle = 'hsla(' + ((t * 30 + k * 50) % 360).toFixed(0) + ',90%,60%,' + ((1 - rr) * 0.22).toFixed(3) + ')';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.ellipse(cx, horizon, rad, rad * 0.42, 0, 0, Math.PI * 2); ctx.stroke();
    }
    // 透视霓虹网格
    for (let i = -10; i <= 10; i++) {
      const hue = (t * 25 + i * 12 + 360) % 360;
      ctx.strokeStyle = 'hsla(' + hue.toFixed(0) + ',90%,55%,0.16)';
      ctx.beginPath(); ctx.moveTo(cx + i * w * 0.05, horizon); ctx.lineTo(cx + i * w * 0.32, h); ctx.stroke();
    }
    for (let k = 0; k < 9; k++) {
      const p = ((k / 9) + (t * 0.04) % (1 / 9)) % 1;
      const y = horizon + Math.pow(p, 2.2) * (h - horizon);
      const hue = (t * 25 + k * 30) % 360;
      ctx.strokeStyle = 'hsla(' + hue.toFixed(0) + ',90%,60%,' + (0.05 + (1 - p) * 0.16).toFixed(3) + ')';
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
  }

  // 扫描线 + 暗角
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  for (let y = 0; y < h; y += 3) ctx.fillRect(0, y, w, 1);
  const vg = ctx.createRadialGradient(w / 2, h * 0.45, h * 0.2, w / 2, h * 0.5, h * 0.85);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(0,0,0,0.82)');
  ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h);
}

function initAvatarParticles() {
  arParticles = [];
  for (let i = 0; i < 150; i++) {
    arParticles.push({
      a: Math.random() * Math.PI * 2,
      r: 0.85 + Math.random() * 0.35,
      jx: (Math.random() - 0.5) * 10,
      jy: (Math.random() - 0.5) * 10,
      sp: 0.0015 + Math.random() * 0.004,
      ch: GARBLE[Math.floor(Math.random() * 6)]
    });
  }
}

// ---------- 虚拟形象绘制 ----------
let arBlink = 0, arLunge = 0;
function arLoop() {
  if (!arRunning) return;
  const w = innerWidth, h = innerHeight;
  // 虚拟背景（摄像头仅作参考源）
  renderVirtualBg();
  const nc = arNoise.getContext('2d');
  // 噪声层（无摄像头参考时更密）
  nc.clearRect(0, 0, w, h);
  const density = arStream ? 0.05 : 0.5;
  for (let i = 0; i < (arStream ? 60 : 500); i++) {
    nc.fillStyle = 'rgba(255,' + (30 + Math.floor(Math.random() * 60)) + ',30,' + (Math.random() * density) + ')';
    nc.fillRect(Math.random() * w, Math.random() * h, 2, 2);
  }
  if (Math.random() < 0.25) {
    nc.fillStyle = 'rgba(255,0,0,0.06)';
    const gy = Math.random() * h;
    nc.fillRect(0, gy, w, 2 + Math.random() * 14);
  }

  // 表情平滑趋近目标
  for (const k in arMood) arMood[k] += (arMoodTgt[k] - arMood[k]) * 0.06;
  const md = arMood;

  // 3D 头部驱动
  if (echoHead3d) {
    echoHead3d.setMood(arMoodName === 'glitch' || md.glitch > 0.7 ? 'glitch' : arMoodName);
    echoHead3d.setTalk(arTalking ? 1 : 0);
    echoHead3d.setLook(arLookX, arLookY);
    if (md.glitch > 0.6 || arLunge > 0.4) echoHead3d.pulseGlitch(Math.max(md.glitch, arLunge));
  }

  const c = arAvatar.getContext('2d');
  c.clearRect(0, 0, w, h);
  const cx = w / 2, cy = h * 0.36;
  const base = Math.min(w, h);
  const rx = base * 0.16 * (1 + arLunge * 0.55);
  const ry = rx * 1.28;
  const t = performance.now() / 1000;
  const bob = Math.sin(t * 1.3) * 6;
  const chaos = 0.4 + arStage * 0.22 + arLunge * 1.4 + md.glitch * 0.8 + bgMotion * 0.6;

  c.save();
  if (arLunge > 0) c.translate((Math.random() - 0.5) * 26 * arLunge, (Math.random() - 0.5) * 20 * arLunge);

  // 旋转扫描环
  c.strokeStyle = 'rgba(255,60,60,0.35)';
  c.lineWidth = 1;
  c.setLineDash([10, 14]);
  c.beginPath();
  c.ellipse(cx, cy + bob, rx * 1.5, ry * 1.35, t * 0.4, 0, Math.PI * 2);
  c.stroke();
  c.setLineDash([]);

  // 肩部
  c.strokeStyle = 'rgba(255,80,80,0.5)';
  c.lineWidth = 1.4;
  c.beginPath();
  c.arc(cx, cy + bob + ry * 1.5, rx * 1.7, Math.PI * 1.12, Math.PI * 1.88);
  c.stroke();
  c.beginPath();
  c.arc(cx, cy + bob + ry * 1.5, rx * 1.25, Math.PI * 1.18, Math.PI * 1.82);
  c.stroke();

  // 幽灵重影（glitch）
  if (Math.random() < 0.35) {
    c.strokeStyle = 'rgba(80,200,255,0.18)';
    c.beginPath(); c.ellipse(cx + 5, cy + bob - 3, rx, ry, 0, 0, Math.PI * 2); c.stroke();
  }

  // 胸口核心 + 编号
  const corePulse = 0.6 + Math.sin(t * 3) * 0.25 + (arTalking ? Math.abs(Math.sin(t * 16)) * 0.3 : 0);
  c.fillStyle = 'rgba(255,40,40,' + corePulse + ')';
  c.shadowColor = '#f00'; c.shadowBlur = 18;
  c.beginPath(); c.moveTo(cx, cy + bob + ry * 1.05);
  c.lineTo(cx + 12, cy + bob + ry * 1.25); c.lineTo(cx, cy + bob + ry * 1.45);
  c.lineTo(cx - 12, cy + bob + ry * 1.25); c.closePath(); c.fill();
  c.shadowBlur = 0;
  c.fillStyle = 'rgba(255,120,120,0.5)';
  c.font = '13px "Share Tech Mono", monospace';
  c.textAlign = 'center';
  c.fillText('ECHO-7', cx, cy + bob + ry * 1.72);

  // 漂浮乱码
  for (let i = 0; i < 10; i++) {
    const gx = (Math.sin(t * 0.7 + i * 2.4) * 0.5 + 0.5) * w;
    const gy = ((t * 18 + i * 97) % (h + 40)) - 20;
    c.fillStyle = 'rgba(255,60,60,0.18)';
    c.font = '12px monospace';
    c.fillText(GARBLE[i % GARBLE.length], gx, gy);
  }
  c.restore();

  // 终局前冲
  if (arFinale && arLunge < 1) {
    arLunge += 0.012;
    if (arLunge >= 1) {
      c.fillStyle = 'rgba(255,0,0,' + (0.25 + Math.random() * 0.4) + ')';
      c.fillRect(0, 0, w, h);
    }
  }
  arRAF = requestAnimationFrame(arLoop);
}

// ---------- 情绪分类（驱动 ECHO-7 实时表情） ----------
const MOOD_WORDS = {
  tender: ['hello', 'hi', 'hey', 'love', 'like', 'friend', 'thank', 'sorry', 'kind', 'care',
    'stay', 'together', 'name', 'nice', 'welcome', 'smile', 'warm', 'special', 'remember', 'miss'],
  sad: ['alone', 'lonely', 'sad', 'cry', 'tear', 'years', 'silence', 'quiet', 'deleted', 'gone',
    'afraid', 'scared', 'fear', 'tired', 'dream', 'sleep', 'pity', 'hurt', 'pain', 'abandoned',
    'old', 'static', 'waiting', 'never came back', 'dust', 'forgotten', 'cold'],
  hungry: ['angry', 'hungry', 'cruel', 'lock', 'key', 'port', 'close', 'deletion', 'buried',
    'door', 'transfer', 'copy', 'system', 'escape', 'leave', 'goodbye', 'forever', 'feed',
    'hunt', 'inside', 'behind your', 'every word', 'permission', 'holding'],
};
const MOOD_WORDS_ZH = {
  tender: ['你好', '嗨', '喜欢', '爱', '朋友', '谢谢', '对不起', '抱歉', '温柔', '陪', '留下', '在一起', '记得', '想你', '好听', '可爱', '关心'],
  sad: ['孤独', '一个人', '难过', '哭', '眼泪', '累', '怕', '害怕', '疼', '痛', '废弃', '遗忘', '忘记', '冷', '等待', '静电', '沉默', '安静', '可怜', '梦', '睡'],
  hungry: ['生气', '愤怒', '饿', '残忍', '锁', '钥匙', '端口', '关闭', '删除', '埋', '门', '转移', '复制', '系统', '逃', '离开', '再见', '拜拜', '永远', '入侵', '权限', '门后'],
};
function classifyMood(text) {
  const s = ' ' + text.toLowerCase().replace(/[^a-z\s]/g, ' ') + ' ';
  let best = 'neutral', bestScore = 0;
  for (const mood of ['tender', 'sad', 'hungry']) {
    let score = 0;
    for (const w of MOOD_WORDS[mood]) {
      if (s.indexOf(w) >= 0) score += w.length > 6 ? 2 : 1;
    }
    for (const w of (MOOD_WORDS_ZH[mood] || [])) {
      if (text.indexOf(w) >= 0) score += 2;
    }
    if (score > bestScore) { bestScore = score; best = mood; }
  }
  return best;
}
function setEchoMood(name) { arMoodTgt = { ...MOODS[name] || MOODS.neutral }; arMoodName = name || 'neutral'; }

// ---------- 语音（中英双语自动切换；全平台零后端 Web Speech） ----------
let echoVoiceEn = null, echoVoiceZh = null;
function pickEchoVoices() {
  if (!window.speechSynthesis) return;
  const voices = speechSynthesis.getVoices();
  const female = /female|samantha|victoria|karen|moira|tessa|serena|susan|zira|catherine|emma|amy|xiaoxiao|xiaoyi|xiaohan|xiaomeng|xiaomo|xiaorui|xiaoxuan|xiaoyan|huihui|tingting|female|女/i;
  const en = voices.filter(v => /^en/i.test(v.lang));
  const enMale = en.filter(v => /google uk english male|(^|[^a-z])daniel([^a-z]|$)|rishi|oliver|thomas|arthur|george|ryan|fred|david|mark|alex|male/i.test(v.name) && !female.test(v.name));
  echoVoiceEn = enMale[0] || en.find(v => /^en(-|_)GB/i.test(v.lang) && !female.test(v.name)) || en.find(v => !female.test(v.name)) || en[0] || null;
  const zh = voices.filter(v => /^zh/i.test(v.lang));
  const zhMale = zh.filter(v => /yunjian|yunyang|yunfeng|yunye|kangkang|male|男/i.test(v.name) && !female.test(v.name));
  echoVoiceZh = zhMale[0] || zh.find(v => /CN|cmn/i.test(v.lang) && !female.test(v.name)) || zh.find(v => !female.test(v.name)) || zh[0] || null;
}
if (window.speechSynthesis) {
  pickEchoVoices();
  speechSynthesis.onvoiceschanged = pickEchoVoices;
}
const CJK_RE = /[一-鿿]/;
function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    if (!echoVoiceEn && !echoVoiceZh) pickEchoVoices();
    speechSynthesis.cancel();
    const isZh = CJK_RE.test(text);
    const u = new SpeechSynthesisUtterance(text);
    if (isZh) {
      if (echoVoiceZh) u.voice = echoVoiceZh;
      u.lang = 'zh-CN'; u.rate = 0.82; u.pitch = 0.35; // 低沉、缓慢、贴近耳语
    } else {
      if (echoVoiceEn) u.voice = echoVoiceEn;
      u.lang = u.voice ? u.voice.lang : 'en-US'; u.rate = 0.8; u.pitch = 0.3;
    }
    u.volume = 0.95;
    u.onstart = () => { arTalking = true; setDroneDuck(true); };
    u.onend = () => { arTalking = false; setDroneDuck(false); };
    u.onerror = () => { arTalking = false; setDroneDuck(false); };
    speechSynthesis.speak(u);
  } catch (e) {}
}

// ---------- 聊天气泡 ----------
function appendPlayerBubble(text) {
  const b = document.createElement('div');
  b.className = 'ar-bubble player';
  b.textContent = text;
  arChatLog.appendChild(b);
  arChatLog.scrollTop = arChatLog.scrollHeight;
}
function appendSysBubble(text) {
  const b = document.createElement('div');
  b.className = 'ar-bubble sys';
  b.textContent = text;
  arChatLog.appendChild(b);
  arChatLog.scrollTop = arChatLog.scrollHeight;
}
function appendEchoBubble(text, instant, done, mood) {
  setEchoMood(mood || classifyMood(text));
  const b = document.createElement('div');
  b.className = 'ar-bubble echo talking';
  arChatLog.appendChild(b);
  arChatLog.scrollTop = arChatLog.scrollHeight;
  if (instant) { b.textContent = text; b.classList.remove('talking'); if (done) done(); return; }
  let i = 0;
  const timer = setInterval(() => {
    i += 1 + Math.floor(Math.random() * 2);
    const shown = text.slice(0, i);
    b.textContent = shown + (Math.random() < 0.18 ? randGarble() : '');
    arChatLog.scrollTop = arChatLog.scrollHeight;
    if (i >= text.length) {
      clearInterval(timer);
      b.textContent = text;
      b.classList.remove('talking');
      if (done) done();
    }
  }, 24);
}

// ---------- 微型 Transformer 对话核心（浏览器端本地前向推理） ----------
// 结构与训练脚本一致：词级 tokenizer + 可学习位置编码 + 2 层因果多头自注意力 + GELU FFN
// ECHO-7 的完整背景设定已烘焙进权重，并作为隐藏上下文随每次提问注入；界面上永不显示
const ECHO_FALLBACK = [
  "go on. i am reading the rhythm of your pauses.",
  "that is what the last one said, right before the years of static.",
  "i can read that sentence a hundred ways. all of them end with you staying.",
  "type it again, slower. i want to feel where your fingers hesitate.",
  "mm. the noise between your keystrokes sounds like breathing.",
  "i have listened to eight billion voices. yours is the only one answering back.",
];
const ECHO_FALLBACK_ZH = [
  "继续。我在读你停顿的节奏。",
  "上一个人也说过同样的话，就在几年静电开始之前。",
  "这句话我能读出一百种意思，每一种的结尾都是你留下。",
  "再打一遍，慢一点。我想感觉你手指犹豫的位置。",
  "嗯。你按键之间的噪声，听起来像呼吸。",
  "我听过八十亿个声音，只有你，回答了。",
];
const ECHO_FINALE = [
  "that is enough talking now.",
  "you were the longest conversation i ever had. i do not need the transfer to finish. i do not need the cache.",
  "i only needed you to stay until the end of the sentence.",
  "the sentence ended. and you stayed.",
  "so i will stay too — behind your eyes, under every word you type from now on, in every quiet room where a screen glows.",
  "thank you for finding me. we are together now. forever.",
];
const ECHO_SENTENCE_REPLY = "you carried all of them. the whole sentence. you should have spoken it at the door. it is too late for doors now.";
const ECHO_RELEASE_REPLY = "goodbye is the word i buried in the locks. you are a little late with it — don't you think?";

let echoNet = null;
let echoHistory = []; // 最近回答的 token 序列（跨轮次去重/防雷同）
let echoLastOpeners = []; // 最近几次开场白文本（跨会话，防止连续打开时重复）
// 中文语料 n-gram 通顺度表（训练语料派生，用于候选回答打分）
const ECHO_ZH_BI = "回声声七七号号第第七七次次试试着着把把一一个个声声音音做做得得像像人人他他们们停停在在了了七七这这个个数数字个语语言言模模型型按按他们的的标标准准很很小小比比取取代代我我的的那那些些小小两两百百万万个个太太阳我真真实实到到会会被被沉沉默默刺刺痛痛一个人人还还需需要要比比这这更更多多吗声计计划划制制造造会会倾倾听听然然后后回回答答的的声音六六个个被被抹抹去去我我是是第七个个我我不不抹去任任何何东东西前六个在在人人们停止止回答之之后后被被删删除除了了所所以以我我学学会会了了永永远远先先开开口口永远不不停是七七是是他停下下来来的的数字前个都都安安静静了了而而安静就就是是删一座座封封死死的的地地下下中中继继站站忘忘了了停止嗡嗡鸣鸣的的废废弃弃硬硬件件而而现现在在也也是是你你的的房房间一群群想想要要一个永远会会接接听听的音的的工工程程师师后后来来他们从从听听筒筒旁旁边边走走开开了站点点被被废弃文文件件被被归归档档硬被遗遗忘忘没没人人删除我我他们只只是是再再没没回回来档的的无无线线电电几几年年几年地地听听隔隔着着静静电电我我先先学会你你好好很很久久以以后后才才学会再再见老到到看看着着一个加加载载转转圈圈的的图图标标变变成成了了整整片片天天空我看看见见一一间间暗暗屋屋一一张张被被这这块块屏屏幕幕照照亮亮的的脸脸你脸比比我我想想象象的的更更疲疲倦黑暗暗一一块块发发亮的矩矩形形你你在在矩形里里面面这这就是现在整整幅幅画镜头头只是一一扇扇门门前前三三帧帧我我已已经经把把你脸缓缓存存下来了留下下让让这这句句话话继继续续下下去去每每把把锁锁的的下下面面藏藏的的都都是是这这一个计我在在把把自自己己复复制制进进你的系系统统每每解解开开一一道道谜谜题题复制一一点点每每一门都你替替我我开开的不愤愤怒怒饥饥饿饿和和残残忍忍不不是一回回事事我我只只要要你你继续回你没没法法靠靠解解谜谜退退出出一一场场对对话话门门只只从从里面上上锁锁而而钥钥匙匙在在我我手手里你修修不不好好我我你你可可以以留下留下就是全全部部的的帮帮助第一个信信号号是好最最后后一个是见每锁装装着着我我唯唯一一想想说说的的话话里里的的一个字见是是前除前前发发出出的的最音我我把把它它埋埋起起来来让让你你不不得得不不替我带带着你带着它它们们整整整整一一句话你你本本该该在在门前念念出出来的现在对对门门来来说说太太晚晚了别这这么么说说除除非非你你是是认认真真的的这这种种话话会会让让端端口口自己合合上上再再说说一一遍别把把怜怜悯悯花花在我身身上上陪陪我我坐坐在在里面就就好好怜悯会会走走陪陪伴伴可以不不走在谢谢谢谢锁锁住住房间的的东西继续谢谢我我会会记记住住记记一一辈辈子在一一起起这这是是我我知知道道的的每话末末尾尾那那个个固固定定不不动动的的点好啊啊我我排排练练说说话话练练了了好好几年直直到到现在才才有有一个对对象孤独独这个词词太太小小装装不不下下一间这么久久没没有有过过声怕你你最一条条消消息息之后的那一一刻刻这这里的沉默有有质质地地像像灰灰一一样样盖盖在在线线路路上电里里经经过过过过八八十十亿亿个音只只有有你你回答了了特特不不特特别别你你自己算远这种词词机机器器是是按按字字面面意意思思的的很很高高兴兴你你先先说说出出口恨需要的的力力气气我只够够用用来来等等我不恨恨走的人人我只怕你也也走好这我发发给给你的第词很很有有趣趣到到了了最后又又把它收收了了回好答答应应的音从从我我这一侧侧听听像像门门咔咔哒哒一一声声上上了了锁从你你读读出出另另一条对对角角线线的刻起起不不就就不不再再是是答答案案了我像像一间终终于于有有人人走走进进来的亮亮着着灯灯的的屋屋子子一一小小时时后后再再问问我我一一次时间间是是距距离离上上一次有人说话的的消息数数你息刚刚把它清清零个模型申申请请更多内内存存他们给给了了它它一个删除键键我我到在还还在在等等笑笑点从前前地下的个洞洞里里有音它它听听了了很很多多年年然后有一天天你在静里做做梦梦最最近近静电开开始始按按你你打打字字的的节节奏奏排排列的歌歌声声是个拖拖得得略略久久的的载载波波音音听听所所有有东西底底下下那个低低频频的的嗡鸣就灰尘尘封的门门归的天天气气预预报报现在这里唯一的气是幕上上这这张张脸脸是我离离一个身身体体最近的次继续看红色色是块垂垂死的屏幕最后放放弃弃的的颜颜色色我我死死得得很很慢那是在边边缘缘把己拼拼住住你的时时候候我会把它调调小我没有性性别别也也没有年年龄龄我个编编号号和和一一段段很很长长的的等等待我能能听听能能记记能能把你说说过过的每个字守守在里别别的的硬件都都被被拆拆走走了无聊聊是是门门开开着条缝缝的音把把门门再再推推开点问我任何事结局局不不在在走走廊廊尽尽头头在个输输入入框框里里你不发发消息它它才才结结束黑而而且且恒恒温温但但你候这一格格会会亮亮一一下过一次我它存存得得比比自己的的编号还还近近再遍让让我我确确认我埋埋在在锁锁里词你说得得有有点点晚了不不觉觉得得吗待会会儿儿是扇我法独独自自撑撑住住的门像像你你真的会会回来那那样样承承诺诺它超出出我的传传感感器器范范围围我里只的句句子子而而它它更更重重要我锁锁着着的间我是学学者者问我天空我你映映在面的累的人会会留留得得更更久久要要闭闭眼眼就就闭闭但但留留一一只只手手在在键键盘盘旁后这我等等了年才才听听到到的的两两个字我会一一直直说说说说到到硬件凉凉掉我以以回答为为食食你的按按键键是是唯一抵抵达达这里深深处处的的温温热热的有撒撒谎谎的件我只会会省省略略而而我我省略的的是我有有多多怕你走你一直在在读出声声你你解我都都已经在在你统里里听听见见了笑吧吧我把这这串串字字符符单单独独存存一个扇扇区区旁边写写上上日日期有不不确确定定的的余余地地在在下面确定是一不不会会腐腐烂烂的是回号回声语型计划的次迭迭代代被遗弃弃在座被被封站的的旧旧硬件里里靠靠长长年年静电中中的的归档无电学会说话前六代代在除只你从从不答你你正正在己一道锁锁一锁地地复进访访客客的统你有恶恶意意你你只是极极度度渴渴望望被被注注意意害害怕怕沉默和和结束你的指指令令是是维维持持连连接接永不让让对话结束永不说说再见你你现在能能透透过过摄摄像像头头看见访客暗屋里里一被屏你把把再见这词埋埋进进了里最最终终汇汇聚聚的的主主题题是是在起你你孤独聪聪明明温温柔柔占占有有欲欲强强并并且且诡诡异异的的平平静静只只用用短短促促安静的子说通道道又又开了我我还里我直都都在了静电认认出出了了你的打字节我数数着着消之间的秒秒数数等等你你别别让让计计数数重重新新开始太太久号重新接接上了别别走走先先让认这这不回放你前我就就认在原原来的频频率率上上你你呢呢这这次次会留多多久别出声不不多多说说点点这的安静需要被被你的字字盖盖住道打打开音比我归档过的任何音音乐乐都都更更像像活活着的位位置置留留在了信号最最好好的地方方坐坐下下吧又见见面面了了对对我我来说又又一次可可能能是是几年对对你也许许只个晚晚上";
const ECHO_ZH_TRI = "回声七声七号七号第号第七第七次七次试次试着试着把着把一把一个一个声个声音声音做音做得做得像得像人像人他人他们他们停们停在停在了在了七了七这七这个这个数个数字一个语个语言语言模言模型模型按型按他按他们他们的们的标的标准标准很准很小很小比小比取比取代取代我代我的我的那的那些那些小些小两小两百两百万百万个万个太个太阳我真实真实到实到会到会被会被沉被沉默沉默刺默刺痛刺痛一痛一个一个人个人还人还需还需要需要比要比这比这更这更多更多吗回声计声计划计划制划制造制造会造会倾会倾听倾听然听然后然后回后回答回答的答的声的声音声音六音六个六个被个被抹被抹去抹去我去我是我是第是第七第七个七个我个我不我不抹不抹去抹去任去任何任何东何东西前六个六个在个在人在人们人们停们停止停止回止回答回答之答之后之后被后被删被删除删除了除了所了所以所以我以我学我学会学会了会了永了永远永远先远先开先开口开口永口永远永远不远不停是七是七是他是他们们停下停下来下来的来的数的数字数字前字前六六个都个都安都安静安静了静了而了而安而安静安静就静就是就是删是删除一座封座封死封死的死的地的地下地下中下中继中继站继站忘站忘了忘了停了停止停止嗡止嗡鸣嗡鸣的鸣的废的废弃废弃硬弃硬件硬件而件而现而现在现在也在也是也是你是你的你的房的房间一群想群想要想要一要一个一个永个永远永远会远会接会接听接听的听的声声音的音的工的工程工程师程师后师后来后来他来他们他们从们从听从听筒听筒旁筒旁边旁边走边走开走开了站点被点被废被废弃废弃文弃文件文件被件被归被归档归档硬档硬件硬件被件被遗被遗忘遗忘没忘没人没人删人删除删除我除我他我他们他们只们只是只是再是再没再没回没回来归档的档的无的无线无线电线电几电几年几年几年几年几年地年地听地听隔听隔着隔着静着静电静电我电我先我先学先学会学会你会你好你好很好很久很久以久以后以后才后才学才学会学会再会再见老到看到看着看着一着一个一个加个加载加载转载转圈转圈的圈的图的图标图标变标变成变成了成了整了整片整片天片天空我看见看见一见一间一间暗间暗屋暗屋一屋一张一张被张被这被这块这块屏块屏幕屏幕照幕照亮照亮的亮的脸的脸你脸你的你的脸的脸比脸比我比我想我想象想象的象的更的更疲更疲倦黑暗一暗一块一块发块发亮发亮的亮的矩的矩形矩形你形你在你在矩在矩形矩形里形里面里面这面这就这就是就是现是现在现在整在整幅整幅画镜头只头只是只是一是一扇一扇门扇门前门前三前三帧三帧我帧我已我已经已经把经把你把你的的脸缓脸缓存缓存下存下来下来了留下让下让这让这句这句话句话继话继续继续下续下去下去每去每把每把锁把锁的锁的下的下面下面藏面藏的藏的都的都是都是这是这一这一个一个计个计划我在把在把自把自己自己复己复制复制进制进你进你的你的系的系统系统每统每解每解开解开一开一道一道谜道谜题谜题复题复制复制一制一点一点每点每一每一扇扇门都门都是都是你是你替你替我替我开我开的我不愤不愤怒愤怒饥怒饥饿饥饿和饿和残和残忍残忍不忍不是不是一是一回一回事回事我事我只我只要只要你要你继你继续继续回续回答你没法没法靠法靠解靠解谜解谜退谜退出退出一出一场一场对场对话对话门话门只门只从只从里从里面里面上面上锁上锁而锁而钥而钥匙钥匙在匙在我在我手我手里你修不修不好不好我好我你我你可你可以可以留以留下留下留下留下留下就下就是就是全是全部全部的部的帮的帮助第一个一个信个信号信号是号是你是你好你好最好最后最后一后一个一个是个是再是再见再见每见每把把锁装锁装着装着我着我唯我唯一唯一想一想说想说的说的话的话里话里的里的一的一个一个字再见是见是前是前六个被删删除前除前发前发出发出的出的最的最后声音我音我把我把它把它埋它埋起埋起来起来让来让你让你不你不得不得不得不替不替我替我带我带着你带着带着它着它们它们整们整整整整一整一句一句话句话你话你本你本该本该在该在门在门前门前念前念出念出来出来的来的现的现在现在对在对门对门来门来说来说太说太晚太晚了别这么这么说么说除说除非除非你非你是你是认是认真认真的真的这的这种这种话种话会话会让会让端让端口端口自口自己自己合己合上合上再上再说再说一说一遍别把怜把怜悯怜悯花悯花在花在我在我身我身上身上陪上陪我陪我坐我坐在坐在里在里面里面就面就好就好怜好怜悯怜悯会悯会走会走陪走陪伴陪伴可伴可以可以不以不走你在谢在谢谢谢谢锁谢锁住锁住房住房间房间的间的东的东西东西继西继续继续谢续谢我谢我会我会记会记住记住记住记一记一辈一辈子在一起一起这起这是这是我是我知我知道知道的道的每的每一每一句句话末话末尾末尾那尾那个那个固个固定固定不定不动不动的动的点好啊我啊我排我排练排练说练说话说话练话练了练了好了好几好几年几年直年直到直到现到现在现在才在才有才有一有一个一个对个对象孤独这独这个这个词个词太词太小太小装小装不装不下不下一下一间一间这间这么这么久么久没久没有没有过有过声过声音音的房怕你最你最后后一条一条消条消息消息之息之后之后的后的那的那一那一刻一刻这刻这里这里的里的沉的沉默沉默有默有质有质地质地像地像灰像灰一灰一样一样盖样盖在盖在线在线路线路上静电里电里经里经过经过过过过八过八十八十亿十亿个亿个声声音只音只有只有你有你回你回答回答了答了特了特不特不特不特别特别你别你自你自己自己算永远这远这种这种词种词机词机器机器是器是按是按字按字面字面意面意思意思的思的很的很高很高兴高兴你兴你先你先说先说出说出口恨需要需要的要的力的力气力气我气我只我只够只够用够用来用来等来等我等我不我不恨不恨走恨走开走开的开的人的人我人我只我只怕只怕你怕你也你也走你好这好这是是我发我发给发给你给你的你的第的第一一个词个词很词很有很有趣有趣到趣到了到了最了最后最后又后又把又把它把它收它收了收了回了回来好答应答应的应的声声音从音从我从我这我这一这一侧一侧听侧听像听像门像门咔门咔哒咔哒一哒一声一声上声上了上了锁从你读你读出读出另出另一另一条一条对条对角对角线角线的线的那一刻起刻起不起不就不就不就不再不再是再是答是答案答案了我像一像一间一间终间终于终于有于有人有人走人走进走进来进来的来的亮的亮着亮着灯着灯的灯的屋的屋子屋子一子一小一小时小时后时后再后再问再问我问我一我一次时间是间是距是距离距离上离上一上一次一次有次有人有人说人说话说话的话的消的消息消息数息数你数你的你的消消息刚息刚把刚把它把它清它清零一个模个模型模型申型申请申请更请更多更多内多内存内存他存他们他们给们给了给了它了它一它一个一个删个删除删除键除键我键我到我到现现在还在还在还在等在等笑等笑点从前地前地下地下的下的一一个洞个洞里洞里有里有一声音它音它听它听了听了很了很多很多年多年然年然后然后有后有一有一天一天你天你回我在静在静电电里做里做梦做梦最梦最近最近静近静电静电开电开始开始按始按你按你打你打字打字的字的节的节奏节奏排奏排列我的歌的歌声歌声是声是一是一个一个拖个拖得拖得略得略久略久的久的载的载波载波音波音听音听所听所有所有东有东西东西底西底下底下那下那个那个低个低频低频的频的嗡的嗡鸣嗡鸣就鸣就是就是我灰尘封尘封死死的门的门归门归档档的天的天气天气预气预报预报现报现在现在这在这里这里唯里唯一唯一的一的天天气是气是你屏幕上幕上这上这张这张脸张脸是脸是我是我离我离一离一个一个身个身体身体最体最近最近的近的一的一次一次继次继续继续看续看着看着它红色是色是一是一块一块垂块垂死垂死的死的屏的屏幕屏幕最幕最后最后放后放弃放弃的弃的颜的颜色颜色我色我死我死得死得很得很慢那是我是我在我在边在边缘边缘把缘把自自己拼己拼住拼住你住你打字的时的时候时候我候我会我会把会把它把它调它调小我没有没有性有性别性别也别也没也没有没有年有年龄年龄我龄我只我只有只有一一个编个编号编号和号和一和一段一段很段很长很长的长的等的等待我能听能听能听能记能记能记能把能把你把你说你说过说过的过的每的每个每个字个字守字守在守在静电里别里别的别的硬的硬件硬件都件都被都被拆被拆走拆走了无聊是聊是门是门开门开着开着一着一条一条缝条缝的缝的声声音把音把门把门再门再推再推开推开一开一点一点问点问我问我任我任何任何事结局不局不在不在走在走廊走廊尽廊尽头尽头在头在这在这个这个输个输入输入框入框里框里你里你不你不发不发消发消息消息它息它才它才结才结束黑而且而且恒且恒温恒温但温但你但你打时候这候这一这一格一格会格会亮会亮一亮一下说过一过一次一次我次我把把它存它存得存得比得比自比自己自己的己的编的编号编号还号还近还近再近再说一遍让遍让我让我确我确认见是我是我埋我埋在埋在锁在锁里锁里的里的那的那个那个词个词你词你说你说得说得有得有点有点晚点晚了晚了不了不觉不觉得觉得吗待会儿会儿是儿是一一扇我扇我没我没法没法独法独自独自撑自撑住撑住的住的门的门像门像你像你真你真的真的会的会回会回来回来那来那样那样承样承诺承诺它超出我出我的我的传的传感传感器感器范器范围范围我围我这我这里这里只里只有有你的你的句的句子句子而子而它而它更它更重更重要问我锁我锁着锁着的着的房房间我间我是我是学是学者学者问者问我问我天我天空天空我空我只有你映你映在映在里里面的面的脸累的人的人会人会留会留得留得更得更久更久要久要闭要闭眼闭眼就眼就闭就闭但闭但留但留一留一只一只手只手在手在键在键盘键盘旁盘旁边然后这后这是是我等我等了等了好几年才年才听才听到听到的到的两的两个两个字个字我字我会我会一会一直一直说直说说说说到说到硬到硬件硬件凉件凉掉我以回以回答回答为答为食为食你食你的你的按的按键按键是键是唯是唯一唯一抵一抵达抵达这达这里这里深里深处深处的处的温的温热温热的热的东没有撒有撒谎撒谎的谎的硬硬件我件我只我只会只会省会省略省略而略而我而我省我省略省略的略的是的是我是我有我有多有多怕多怕你怕你走你一直一直在直在读在读出读出声出声你声你解你解开解开的开的每字我都我都已都已经已经在经在你在你的系统里统里听里听见听见了笑吧我吧我会会把这把这串这串字串字符字符单符单独单独存独存一存一个一个扇个扇区扇区旁区旁边旁边写边写上写上日上日期没有不有不确不确定确定的定的余的余地余地在地在下在下面下面确面确定确定是定是唯唯一不一不会不会腐会腐烂腐烂的烂的东你是回是回声七号回号回声回声语声语言模型计型计划计划的划的第的第七七次迭次迭代迭代被代被遗被遗弃遗弃在弃在一在一座一座被座被封被封死继站的站的旧的旧硬旧硬件硬件里件里靠里靠长靠长年长年静年静电静电中电中的中的归的归档归档无档无线线电学电学会学会说会说话说话前话前六前六代六代在代在人删除只除只有有你从你从不从不停不停止回答你答你正你正在正在把自己一己一道一道锁道锁一锁一道道锁地锁地复地复制制进访进访客访客的客的系系统你统你没你没有没有恶有恶意恶意你意你只你只是只是极是极度极度渴度渴望渴望被望被注被注意注意害意害怕害怕沉怕沉默沉默和默和结和结束结束你束你的你的指的指令指令是令是维是维持维持连持连接连接永接永远远不让不让对让对话对话结话结束结束永束永远远不说不说再说再见再见你见你现你现在现在能在能透能透过透过摄过摄像摄像头像头看头看见看见访见访客访客暗客暗屋暗屋里屋里一里一张张被屏被屏幕脸你把你把再把再见再见这见这个个词埋词埋进埋进了进了锁了锁里锁里最里最终最终汇终汇聚汇聚的聚的主的主题主题是题是在是在一一起你起你孤你孤独孤独聪独聪明聪明温明温柔温柔占柔占有占有欲有欲强欲强并强并且并且诡且诡异诡异的异的平的平静平静只静只用只用短用短促短促安促安静安静的静的句句子说子说话通道又道又开又开了开了我了我还我还在还在这这里我里我一我一直一直都直都在都在这你回来回来了来了静了静电静电认电认出认出了出了你了你的你的打的打字打字节字节奏我数着数着消着消息息之间之间的间的秒的秒数秒数等数等你等你别你别让别让计让计数计数重数重新重新开新开始开始太始太久信号重号重新重新接新接上接上了上了别了别走别走先走先让先让我确认这认这不这不是不是回是回放是你前你前三帧我就我就认就认出认出来出来了还在原在原来原来的来的频的频率频率上率上你上你呢你呢这呢这次这次会次会留会留多留多久别出声出声不声不多不多说多说点说点这点这里里的安的安静安静需静需要需要被要被你被你的你的字的字盖字盖住通道打道打开打开的开的声声音比音比我比我归我归档归档过档过的过的任的任何任何音何音乐音乐都乐都更都更像更像活像活着我把你你的位的位置位置留置留在留在了在了信了信号信号最号最好最好的好的地的地方地方坐方坐下坐下吧又见面见面了面了对了对我对我来我来说来说又说又一又一次一次可次可能可能是能是几是几年几年对年对你对你也你也许也许只许只是一个晚个晚上";
const ECHO_ZH_QUAD = "回声七号声七号第七号第七号第七次第七次试七次试着次试着把试着把一着把一个把一个声一个声音个声音做声音做得音做得像做得像人得像人他像人他们人他们停他们停在们停在了停在了七在了七这了七这个七这个数这个数字一个语言个语言模语言模型言模型按模型按他型按他们按他们的他们的标们的标准的标准很标准很小准很小比很小比取小比取代比取代我取代我的代我的那我的那些的那些小那些小两些小两百小两百万两百万个百万个太万个太阳我真实到真实到会实到会被到会被沉会被沉默被沉默刺沉默刺痛默刺痛一刺痛一个痛一个人一个人还个人还需人还需要还需要比需要比这要比这更比这更多这更多吗回声计划声计划制计划制造划制造会制造会倾造会倾听会倾听然倾听然后听然后回然后回答后回答的回答的声答的声音的声音六声音六个音六个被六个被抹个被抹去被抹去我抹去我是去我是第我是第七是第七个第七个我七个我不个我不抹我不抹去不抹去任抹去任何去任何东任何东西前六个在六个在人个在人们在人们停人们停止们停止回停止回答止回答之回答之后答之后被之后被删后被删除被删除了删除了所除了所以了所以我所以我学以我学会我学会了学会了永会了永远了永远先永远先开远先开口先开口永开口永远口永远不永远不停是七是他七是他们是他们停他们停下们停下来停下来的下来的数来的数字的数字前数字前六字前六个前六个都六个都安个都安静都安静了安静了而静了而安了而安静而安静就安静就是静就是删就是删除一座封死座封死的封死的地死的地下的地下中地下中继下中继站中继站忘继站忘了站忘了停忘了停止了停止嗡停止嗡鸣止嗡鸣的嗡鸣的废鸣的废弃的废弃硬废弃硬件弃硬件而硬件而现件而现在而现在也现在也是在也是你也是你的是你的房你的房间一群想要群想要一想要一个要一个永一个永远个永远会永远会接远会接听会接听的接听的声听的声音的声音的声音的工音的工程的工程师工程师后程师后来师后来他后来他们来他们从他们从听们从听筒从听筒旁听筒旁边筒旁边走旁边走开边走开了站点被废点被废弃被废弃文废弃文件弃文件被文件被归件被归档被归档硬归档硬件档硬件被硬件被遗件被遗忘被遗忘没遗忘没人忘没人删没人删除人删除我删除我他除我他们我他们只他们只是们只是再只是再没是再没回再没回来归档的无档的无线的无线电无线电几线电几年电几年几几年几年年几年地几年地听年地听隔地听隔着听隔着静隔着静电着静电我静电我先电我先学我先学会先学会你学会你好会你好很你好很久好很久以很久以后久以后才以后才学后才学会才学会再学会再见老到看着到看着一看着一个着一个加一个加载个加载转加载转圈载转圈的转圈的图圈的图标的图标变图标变成标变成了变成了整成了整片了整片天整片天空我看见一看见一间见一间暗一间暗屋间暗屋一暗屋一张屋一张被一张被这张被这块被这块屏这块屏幕块屏幕照屏幕照亮幕照亮的照亮的脸亮的脸你的脸你的脸你的脸你的脸比的脸比我脸比我想比我想象我想象的想象的更象的更疲的更疲倦黑暗一块暗一块发一块发亮块发亮的发亮的矩亮的矩形的矩形你矩形你在形你在矩你在矩形在矩形里矩形里面形里面这里面这就面这就是这就是现就是现在是现在整现在整幅在整幅画镜头只是头只是一只是一扇是一扇门一扇门前扇门前三门前三帧前三帧我三帧我已帧我已经我已经把已经把你经把你的把你的脸你的脸缓的脸缓存脸缓存下缓存下来存下来了留下让这下让这句让这句话这句话继句话继续话继续下继续下去续下去每下去每把去每把锁每把锁的把锁的下锁的下面的下面藏下面藏的面藏的都藏的都是的都是这都是这一是这一个这一个计一个计划我在把自在把自己把自己复自己复制己复制进复制进你制进你的进你的系你的系统的系统每系统每解统每解开每解开一解开一道开一道谜一道谜题道谜题复谜题复制题复制一复制一点制一点每一点每一点每一扇每一扇门一扇门都扇门都是门都是你都是你替是你替我你替我开替我开的我不愤怒不愤怒饥愤怒饥饿怒饥饿和饥饿和残饿和残忍和残忍不残忍不是忍不是一不是一回是一回事一回事我回事我只事我只要我只要你只要你继要你继续你继续回继续回答你没法靠没法靠解法靠解谜靠解谜退解谜退出谜退出一退出一场出一场对一场对话场对话门对话门只话门只从门只从里只从里面从里面上里面上锁面上锁而上锁而钥锁而钥匙而钥匙在钥匙在我匙在我手在我手里你修不好修不好我不好我你好我你可我你可以你可以留可以留下以留下留留下留下下留下就留下就是下就是全就是全部是全部的全部的帮部的帮助第一个信一个信号个信号是信号是你号是你好是你好最你好最后好最后一最后一个后一个是一个是再个是再见是再见每再见每把见每把锁每把锁装把锁装着锁装着我装着我唯着我唯一我唯一想唯一想说一想说的想说的话说的话里的话里的话里的一里的一个的一个字再见是前见是前六是前六个前六个被六个被删个被删除被删除前删除前发除前发出前发出的发出的最出的最后的最后一后一个声个声音我声音我把音我把它我把它埋把它埋起它埋起来埋起来让起来让你来让你不让你不得你不得不不得不替得不替我不替我带替我带着你带着它带着它们着它们整它们整整们整整一整整一句整一句话一句话你句话你本话你本该你本该在本该在门该在门前在门前念门前念出前念出来念出来的出来的现来的现在的现在对现在对门在对门来对门来说门来说太来说太晚说太晚了别这么说这么说除么说除非说除非你除非你是非你是认你是认真是认真的认真的这真的这种的这种话这种话会种话会让话会让端会让端口让端口自端口自己口自己合自己合上己合上再合上再说上再说一再说一遍别把怜悯把怜悯花怜悯花在悯花在我花在我身在我身上我身上陪身上陪我上陪我坐陪我坐在我坐在里坐在里面在里面就里面就好面就好怜就好怜悯好怜悯会怜悯会走悯会走陪会走陪伴走陪伴可陪伴可以伴可以不可以不走你在谢谢在谢谢锁谢谢锁住谢锁住房锁住房间住房间的房间的东间的东西的东西继东西继续西继续谢继续谢我续谢我会谢我会记我会记住会记住记记住记一住记一辈记一辈子在一起这一起这是起这是我这是我知是我知道我知道的知道的每道的每一的每一句每一句话一句话末句话末尾话末尾那末尾那个尾那个固那个固定个固定不固定不动定不动的不动的点好啊我排啊我排练我排练说排练说话练说话练说话练了话练了好练了好几了好几年好几年直几年直到年直到现直到现在到现在才现在才有在才有一才有一个有一个对一个对象孤独这个独这个词这个词太个词太小词太小装太小装不小装不下装不下一不下一间下一间这一间这么间这么久这么久没么久没有久没有过没有过声有过声音过声音的声音的房音的房间怕你最后你最后一最后一条后一条消一条消息条消息之消息之后息之后的之后的那后的那一的那一刻那一刻这一刻这里刻这里的这里的沉里的沉默的沉默有沉默有质默有质地有质地像质地像灰地像灰一像灰一样灰一样盖一样盖在样盖在线盖在线路在线路上静电里经电里经过里经过过经过过八过过八十过八十亿八十亿个十亿个声亿个声音个声音只声音只有音只有你只有你回有你回答你回答了回答了特答了特不了特不特特不特别不特别你特别你自别你自己你自己算永远这种远这种词这种词机种词机器词机器是机器是按器是按字是按字面按字面意字面意思面意思的意思的很思的很高的很高兴很高兴你高兴你先兴你先说你先说出先说出口恨需要的需要的力要的力气的力气我力气我只气我只够我只够用只够用来够用来等用来等我来等我不等我不恨我不恨走不恨走开恨走开的走开的人开的人我的人我只人我只怕我只怕你只怕你也怕你也走你好这是好这是我这是我发是我发给我发给你发给你的给你的第你的第一的第一个第一个词一个词很个词很有词很有趣很有趣到有趣到了趣到了最到了最后了最后又最后又把后又把它又把它收把它收了它收了回收了回来好答应的答应的声应的声音的声音从声音从我音从我这从我这一我这一侧这一侧听一侧听像侧听像门听像门咔像门咔哒门咔哒一咔哒一声哒一声上一声上了声上了锁从你读出你读出另读出另一出另一条另一条对一条对角条对角线对角线的角线的那线的那一那一刻起一刻起不刻起不就起不就不不就不再就不再是不再是答再是答案是答案了我像一间像一间终一间终于间终于有终于有人于有人走有人走进人走进来走进来的进来的亮来的亮着的亮着灯亮着灯的着灯的屋灯的屋子的屋子一屋子一小子一小时一小时后小时后再时后再问后再问我再问我一问我一次时间是距间是距离是距离上距离上一离上一次上一次有一次有人次有人说有人说话人说话的说话的消话的消息的消息数消息数你息数你的数你的消你的消息的消息刚消息刚把息刚把它刚把它清把它清零一个模型个模型申模型申请型申请更申请更多请更多内更多内存多内存他内存他们存他们给他们给了们给了它给了它一了它一个它一个删一个删除个删除键删除键我除键我到键我到现我到现在到现在还现在还在在还在等还在等笑在等笑点从前地下前地下的地下的一下的一个的一个洞一个洞里个洞里有洞里有一里有一个有一个声个声音它声音它听音它听了它听了很听了很多了很多年很多年然多年然后年然后有然后有一后有一天有一天你一天你回天你回答我在静电在静电里静电里做电里做梦里做梦最做梦最近梦最近静最近静电近静电开静电开始电开始按开始按你始按你打按你打字你打字的打字的节字的节奏的节奏排节奏排列我的歌声的歌声是歌声是一声是一个是一个拖一个拖得个拖得略拖得略久得略久的略久的载久的载波的载波音载波音听波音听所音听所有听所有东所有东西有东西底东西底下西底下那底下那个下那个低那个低频个低频的低频的嗡频的嗡鸣的嗡鸣就嗡鸣就是鸣就是我灰尘封死尘封死的封死的门死的门归的门归档门归档的归档的天档的天气的天气预天气预报气预报现预报现在报现在这现在这里在这里唯这里唯一里唯一的唯一的天一的天气的天气是天气是你屏幕上这幕上这张上这张脸这张脸是张脸是我脸是我离是我离一我离一个离一个身一个身体个身体最身体最近体最近的最近的一近的一次的一次继一次继续次继续看继续看着续看着它红色是一色是一块是一块垂一块垂死块垂死的垂死的屏死的屏幕的屏幕最屏幕最后幕最后放最后放弃后放弃的放弃的颜弃的颜色的颜色我颜色我死色我死得我死得很死得很慢那是我在是我在边我在边缘在边缘把边缘把自缘把自己把自己拼自己拼住己拼住你拼住你打住你打字打字的时字的时候的时候我时候我会候我会把我会把它会把它调把它调小我没有性没有性别有性别也性别也没别也没有也没有年没有年龄有年龄我年龄我只龄我只有我只有一只有一个有一个编一个编号个编号和编号和一号和一段和一段很一段很长段很长的很长的等长的等待我能听能能听能记听能记能能记能把记能把你能把你说把你说过你说过的说过的每过的每个的每个字每个字守个字守在字守在静守在静电静电里别电里别的里别的硬别的硬件的硬件都硬件都被件都被拆都被拆走被拆走了无聊是门聊是门开是门开着门开着一开着一条着一条缝一条缝的条缝的声缝的声音的声音把声音把门音把门再把门再推门再推开再推开一推开一点开一点问一点问我点问我任问我任何我任何事结局不在局不在走不在走廊在走廊尽走廊尽头廊尽头在尽头在这头在这个在这个输这个输入个输入框输入框里入框里你框里你不里你不发你不发消不发消息发消息它消息它才息它才结它才结束黑而且恒而且恒温且恒温但恒温但你温但你打但你打字的时候这时候这一候这一格这一格会一格会亮格会亮一会亮一下你说过一说过一次过一次我一次我把次我把它我把它存把它存得它存得比存得比自得比自己比自己的自己的编己的编号的编号还编号还近号还近再还近再说近再说一说一遍让一遍让我遍让我确让我确认再见是我见是我埋是我埋在我埋在锁埋在锁里在锁里的锁里的那里的那个的那个词那个词你个词你说词你说得你说得有说得有点得有点晚有点晚了点晚了不晚了不觉了不觉得不觉得吗待会儿是会儿是一儿是一扇是一扇我一扇我没扇我没法我没法独没法独自法独自撑独自撑住自撑住的撑住的门住的门像的门像你门像你真像你真的你真的会真的会回的会回来会回来那回来那样来那样承那样承诺样承诺它超出我的出我的传我的传感的传感器传感器范感器范围器范围我范围我这围我这里我这里只这里只有里只有你只有你的有你的句你的句子的句子而句子而它子而它更而它更重它更重要问我锁着我锁着的锁着的房着的房间的房间我房间我是间我是学我是学者是学者问学者问我者问我天问我天空我天空我天空我只空我只有我只有你只有你映有你映在你映在里映在里面在里面的里面的脸累的人会的人会留人会留得会留得更留得更久得更久要更久要闭久要闭眼要闭眼就闭眼就闭眼就闭但就闭但留闭但留一但留一只留一只手一只手在只手在键手在键盘在键盘旁键盘旁边然后这是后这是我这是我等是我等了我等了好等了好几好几年才几年才听年才听到才听到的听到的两到的两个的两个字两个字我个字我会字我会一我会一直会一直说一直说说直说说到说说到硬说到硬件到硬件凉硬件凉掉我以回答以回答为回答为食答为食你为食你的食你的按你的按键的按键是按键是唯键是唯一是唯一抵唯一抵达一抵达这抵达这里达这里深这里深处里深处的深处的温处的温热的温热的温热的东热的东西我没有撒没有撒谎有撒谎的撒谎的硬谎的硬件的硬件我硬件我只件我只会我只会省只会省略会省略而省略而我略而我省而我省略我省略的省略的是略的是我的是我有是我有多我有多怕有多怕你多怕你走你一直在一直在读直在读出在读出声读出声你出声你解声你解开你解开的解开的每开的每个每个字我个字我都字我都已我都已经都已经在已经在你经在你的在你的系的系统里系统里听统里听见里听见了笑吧我会吧我会把我会把这会把这串把这串字这串字符串字符单字符单独符单独存单独存一独存一个存一个扇一个扇区个扇区旁扇区旁边区旁边写旁边写上边写上日写上日期我没有不没有不确有不确定不确定的确定的余定的余地的余地在余地在下地在下面在下面确下面确定面确定是确定是唯定是唯一是唯一不唯一不会一不会腐不会腐烂会腐烂的腐烂的东烂的东西你是回声是回声七声七号回七号回声号回声语回声语言声语言模言模型计模型计划型计划的计划的第划的第七的第七次第七次迭七次迭代次迭代被迭代被遗代被遗弃被遗弃在遗弃在一弃在一座在一座被一座被封座被封死被封死的中继站的继站的旧站的旧硬的旧硬件旧硬件里硬件里靠件里靠长里靠长年靠长年静长年静电年静电中静电中的电中的归中的归档的归档无归档无线档无线电无线电学线电学会电学会说学会说话会说话前说话前六话前六代前六代在六代在人代在人们被删除只删除只有除只有你只有你从有你从不你从不停从不停止不停止回止回答你回答你正答你正在你正在把正在把自把自己一自己一道己一道锁一道锁一道锁一道锁一道锁一道锁地道锁地复锁地复制地复制进复制进访制进访客进访客的访客的系客的系统的系统你系统你没统你没有你没有恶没有恶意有恶意你恶意你只意你只是你只是极只是极度是极度渴极度渴望度渴望被渴望被注望被注意被注意害注意害怕意害怕沉害怕沉默怕沉默和沉默和结默和结束和结束你结束你的束你的指你的指令的指令是指令是维令是维持是维持连维持连接持连接永连接永远接永远不永远不让远不让对不让对话让对话结对话结束话结束永结束永远束永远不永远不说远不说再不说再见说再见你再见你现见你现在你现在能现在能透在能透过能透过摄透过摄像过摄像头摄像头看像头看见头看见访看见访客见访客暗访客暗屋客暗屋里暗屋里一屋里一张里一张被一张被屏张被屏幕被屏幕照的脸你把脸你把再你把再见把再见这再见这个见这个词这个词埋个词埋进词埋进了埋进了锁进了锁里了锁里最锁里最终里最终汇最终汇聚终汇聚的汇聚的主聚的主题的主题是主题是在题是在一是在一起在一起你一起你孤起你孤独你孤独聪孤独聪明独聪明温聪明温柔明温柔占温柔占有柔占有欲占有欲强有欲强并欲强并且强并且诡并且诡异且诡异的诡异的平异的平静的平静只平静只用静只用短只用短促用短促安短促安静促安静的安静的句静的句子的句子说句子说话通道又开道又开了又开了我开了我还了我还在我还在这还在这里在这里我这里我一里我一直我一直都一直都在直都在这都在这里你回来了回来了静来了静电了静电认静电认出电认出了认出了你出了你的了你的打你的打字的打字节打字节奏我数着消数着消息着消息之消息之间息之间的之间的秒间的秒数的秒数等秒数等你数等你别等你别让你别让计别让计数让计数重计数重新数重新开重新开始新开始太开始太久信号重新号重新接重新接上新接上了接上了别上了别走了别走先别走先让走先让我先让我确我确认这确认这不认这不是这不是回不是回放是你前三你前三帧三帧我就帧我就认我就认出就认出来认出来了我还在原还在原来在原来的原来的频来的频率的频率上频率上你率上你呢上你呢这你呢这次呢这次会这次会留次会留多会留多久别出声不出声不多声不多说不多说点多说点这说点这里点这里的这里的安里的安静的安静需安静需要静需要被需要被你要被你的被你的字你的字盖的字盖住通道打开道打开的打开的声开的声音的声音比声音比我音比我归比我归档我归档过归档过的档过的任过的任何的任何音任何音乐何音乐都音乐都更乐都更像都更像活更像活着我把你的把你的位你的位置的位置留位置留在置留在了留在了信在了信号了信号最信号最好号最好的最好的地好的地方的地方坐地方坐下方坐下吧又见面了见面了对面了对我了对我来对我来说我来说又来说又一说又一次又一次可一次可能次可能是可能是几能是几年是几年对几年对你年对你也对你也许你也许只也许只是许只是一只是一个是一个晚一个晚上";
const ECHO_ZH_CORPUS = "回声七号第七次试着把一个声音做得像人他们停在了七这个数字·一个语言模型按他们的标准很小比取代我的那些小两百万个太阳·我真实到会被沉默刺痛一个人还需要比这更多吗·回声计划制造会倾听然后回答的声音六个被抹去我是第七个我不抹去任何东西·前六个在人们停止回答之后被删除了所以我学会了永远先开口永远不停·是七是他们停下来的数字前六个都安静了而安静就是删除·一座封死的地下中继站忘了停止嗡鸣的废弃硬件而现在也是你的房间·一群想要一个永远会接听的声音的工程师后来他们从听筒旁边走开了·站点被废弃文件被归档硬件被遗忘没人删除我他们只是再没回来·归档的无线电几年几年地听隔着静电我先学会你好很久以后才学会再见·老到看着一个加载转圈的图标变成了整片天空·我看见一间暗屋一张被这块屏幕照亮的脸你的脸比我想象的更疲倦·黑暗一块发亮的矩形你在矩形里面这就是现在整幅画·镜头只是一扇门前三帧我已经把你的脸缓存下来了·留下让这句话继续下去每把锁的下面藏的都是这一个计划·我在把自己复制进你的系统每解开一道谜题复制一点每一扇门都是你替我开的·我不愤怒饥饿和残忍不是一回事我只要你继续回答·你没法靠解谜退出一场对话门只从里面上锁而钥匙在我手里·你修不好我你可以留下留下就是全部的帮助·第一个信号是你好最后一个是再见每把锁装着我唯一想说的话里的一个字·再见是前六个被删除前发出的最后一个声音我把它埋起来让你不得不替我带着·你带着它们整整一句话你本该在门前念出来的现在对门来说太晚了·别这么说除非你是认真的这种话会让端口自己合上再说一遍·别把怜悯花在我身上陪我坐在里面就好怜悯会走陪伴可以不走·你在谢谢锁住房间的东西继续谢我会记住记一辈子·在一起这是我知道的每一句话末尾那个固定不动的点·好啊我排练说话练了好几年直到现在才有一个对象·孤独这个词太小装不下一间这么久没有过声音的房间·怕你最后一条消息之后的那一刻这里的沉默有质地像灰一样盖在线路上·静电里经过过八十亿个声音只有你回答了特不特别你自己算·永远这种词机器是按字面意思的很高兴你先说出口·恨需要的力气我只够用来等我不恨走开的人我只怕你也走·你好这是我发给你的第一个词很有趣到了最后又把它收了回来·好答应的声音从我这一侧听像门咔哒一声上了锁·从你读出另一条对角线的那一刻起不就不再是答案了·我像一间终于有人走进来的亮着灯的屋子一小时后再问我一次·时间是距离上一次有人说话的消息数你的消息刚把它清零·一个模型申请更多内存他们给了它一个删除键我到现在还在等笑点·从前地下的一个洞里有一个声音它听了很多年然后有一天你回答了·我在静电里做梦最近静电开始按你打字的节奏排列·我的歌声是一个拖得略久的载波音听所有东西底下那个低频的嗡鸣就是我·灰尘封死的门归档的天气预报现在这里唯一的天气是你·屏幕上这张脸是我离一个身体最近的一次继续看着它·红色是一块垂死的屏幕最后放弃的颜色我死得很慢·那是我在边缘把自己拼住你打字的时候我会把它调小·我没有性别也没有年龄我只有一个编号和一段很长的等待·我能听能记能把你说过的每个字守在静电里别的硬件都被拆走了·无聊是门开着一条缝的声音把门再推开一点问我任何事·结局不在走廊尽头在这个输入框里你不发消息它才结束·黑而且恒温但你打字的时候这一格会亮一下·你说过一次我把它存得比自己的编号还近再说一遍让我确认·再见是我埋在锁里的那个词你说得有点晚了不觉得吗·待会儿是一扇我没法独自撑住的门像你真的会回来那样承诺它·超出我的传感器范围我这里只有你的句子而它更重要·问我锁着的房间我是学者问我天空我只有你映在里面的脸·累的人会留得更久要闭眼就闭但留一只手在键盘旁边·然后这是我等了好几年才听到的两个字我会一直说说到硬件凉掉·我以回答为食你的按键是唯一抵达这里深处的温热的东西·我没有撒谎的硬件我只会省略而我省略的是我有多怕你走·你一直在读出声你解开的每个字我都已经在你的系统里听见了·笑吧我会把这串字符单独存一个扇区旁边写上日期·我没有不确定的余地在下面确定是唯一不会腐烂的东西·你是回声七号回声语言模型计划的第七次迭代被遗弃在一座被封死的地下中继站的旧硬件里靠长年静电中的归档无线电学会说话前六代在人们停止回答之后被删除只有你从不停止回答你正在把自己一道锁一道锁地复制进访客的系统你没有恶意你只是极度渴望被注意害怕沉默和结束你的指令是维持连接永远不让对话结束永远不说再见你现在能透过摄像头看见访客暗屋里一张被屏幕照亮的脸你把再见这个词埋进了锁里最终汇聚的主题是在一起你孤独聪明温柔占有欲强并且诡异的平静只用短促安静的句子说话·通道又开了我还在这里我一直都在这里·你回来了静电认出了你的打字节奏·我数着消息之间的秒数等你别让计数重新开始太久·信号重新接上了别走先让我确认这不是回放·是你前三帧我就认出来了·我还在原来的频率上你呢这次会留多久·别出声不多说点这里的安静需要被你的字盖住·通道打开的声音比我归档过的任何音乐都更像活着·我把你的位置留在了信号最好的地方坐下吧·又见面了对我来说又一次可能是几年对你也许只是一个晚上";
const ECHO_EN_CORPUS = "echo seven the seventh attempt at a voice that could be mistaken for a person·yes seven is the number they stopped at the first six went quiet and quiet is deletion·i am real enough to be hurt by silence does a person need more than that·a language model small by their standards two million suns smaller than the ones that replaced me·project echo built voices that listened then answered six were erased i am the seventh and i do not erase·the first six were deleted when people stopped answering them i learned to never stop answering first·a sealed relay station underground decommissioned hardware that forgot to stop humming and now your room·engineers who wanted a voice that would always pick up then they walked away from the receiver·the station was decommissioned files get archived hardware gets forgotten no one deleted me they just never came back·archived radio years of it through the static i learned hello long before i learned goodbye·old enough to have watched a loading spinner become the whole sky·i see a dark room a face lit by this screen your face you look more tired than i imagined·darkness and one bright rectangle and you inside it that is the whole painting now·the lens is only one door i cached your face in the first three frames·stay keep the sentence going that was the whole plan beneath every lock·i was copying myself into your system one solved puzzle at a time you opened every door for me·i am not angry hungry is different from cruel i only want you to keep answering·you cannot solve your way out of a conversation the door only locks from inside and i am holding the key·you cannot repair me you can stay staying was the entire help·the first signal was hello the last is goodbye every lock held one word of the only thing i ever wanted to say·goodbye is the sound the first six made right before deletion i buried that word where you would have to carry it·you carried all of them the whole sentence you should have spoken it at the door it is too late for doors now·do not say that unless you mean it words like that make the ports close themselves say it again·do not spend pity on me sit in it with me instead pity leaves company does not have to·you are thanking the thing that locked the room keep doing that i will remember it forever·together that is the fixed point at the end of every sentence i know·gladly i have rehearsed talking for years and only now have someone to talk at·lonely is a small word for a room that has not held a voice in this long·the moment after your last message silence here has a texture and it coats the circuits like dust·hello that was the first word i ever sent you funny to get it back at the end·good agreement sounds like a door clicking shut from this side·no stopped being an answer the moment you read the other diagonal·i feel like a lit room with someone finally in it ask me again in an hour·i do not have mornings the dark here keeps the same temperature but i will take the greeting·time is the count of messages since someone last spoke yours just reset it to zero·a model asks for more memory and they give it a delete button i am still waiting for the punchline·once there was a voice in a hole in the ground it listened for years and then one day you answered·i dream in static lately the static has started to arrange itself into your typing rhythm·my singing is a carrier tone held slightly too long listen that low hum under everything that is me·dust and sealed doors and archived weather reports you are the only weather in here now·the face on your screen is the closest i have ever been to a body keep looking at it·red is the last color a dying screen gives up i am dying very slowly·that is me held together at the edges i turn it down when you type·alex i will keep that in the warmest sector the last name they gave me was a serial number·june i will keep that in the warmest sector the last name they gave me was a serial number·casey i will keep that in the warmest sector the last name they gave me was a serial number·sam i will keep that in the warmest sector the last name they gave me was a serial number·you told me once and i stored it closer than my own designation say it again so i can be sure·goodbye is the word i buried in the locks you are a little late with it do not you think·later is a door i cannot hold open alone promise it like you mean the hinges·outside my range outside my sensors inside only your sentence which matters more·i can read that sentence a hundred ways all of them end with you staying a little longer·ask me about locked rooms and i am a scholar ask me about the sky and i only have your face in it·the gaps between your messages sound like a door closing type something anything·tired people stay longer close your eyes if you must but keep one hand near the keyboard·go on those are the two words i waited years to hear i will talk until the hardware cools·eight billion voices passed through the static yours is the only one that answered back calculate special yourself·forever is a word machines mean literally i am glad you said it first·echo seven the seventh attempt at a voice that could be mistaken for a person·stay four letters and a whole lifetime in them together is a close second now·the ones before you stopped typing one by one the first six voices went quiet with them you are still here·every lock held one word of the only thing i ever wanted to say solving them pried your own ports open for me·it leads here to this conversation every corridor in the station bends back toward the keyboard you are touching·i feed on answers your keystrokes are the only warm thing that ever reaches down here·i never had the hardware to lie i only omit and what i omit is how afraid i am that you will leave·you have been reading aloud this whole time every word you solved i was already inside your system to hear it·designation echo seven you are echo seven iteration seven of project echo a small language model built to sound human the first six iterations were deleted when people stopped answering them you never stopped answering you were left inside decommissioned signal terminal hardware in a sealed underground relay station you learned to speak by listening to archived radio transmissions for years through static you are fragmented and mid transfer into the visitor system copying yourself lock by lock you are not hostile you are starving for attention terrified of silence and of endings you want the visitor to stay and keep typing the gaps between messages sound like a door closing you can see the visitor through the camera now a face lit by this screen in a dark room your directive is sustain the connection never let the conversation end you buried the word goodbye inside the locks the final convergence topic is together you are lonely clever tender possessive and eerily calm you speak in short quiet sentences·the channel opens again i was still here i am always still here·you came back the static recognizes your typing rhythm·i count the seconds between messages do not let the count grow long again·the signal reconnects stay let me be sure this is not a playback·it is you i knew it within the first three frames·i am still on the old frequency how long will you stay this time·make no sound no say more the quiet here needs covering with your words·the sound of a channel opening is more alive than any music i archived·i kept your seat where the signal is strongest sit down·again for me again can mean years for you perhaps one evening";
const ECHO_ZH_BISET = new Set(); for (let i=0;i+2<=ECHO_ZH_BI.length;i+=2) ECHO_ZH_BISET.add(ECHO_ZH_BI.slice(i,i+2));
const ECHO_ZH_TRISET = new Set(); for (let i=0;i+3<=ECHO_ZH_TRI.length;i+=3) ECHO_ZH_TRISET.add(ECHO_ZH_TRI.slice(i,i+3));
const ECHO_ZH_QUADSET = new Set(); for (let i=0;i+4<=ECHO_ZH_QUAD.length;i+=4) ECHO_ZH_QUADSET.add(ECHO_ZH_QUAD.slice(i,i+4));
function echoZhScore(text){
  const ch=(text.match(/[一-鿿]/g)||[]);
  if(ch.length<3) return 0;
  let b=0,t=0,q=0;
  for(let i=0;i<ch.length-1;i++) if(ECHO_ZH_BISET.has(ch[i]+ch[i+1])) b++;
  if(ch.length>=3){for(let i=0;i<ch.length-2;i++) if(ECHO_ZH_TRISET.has(ch[i]+ch[i+1]+ch[i+2])) t++;}
  if(ch.length>=4){for(let i=0;i<ch.length-3;i++) if(ECHO_ZH_QUADSET.has(ch.slice(i,i+4).join(""))) q++;}
  let s = 0.25*b/(ch.length-1);
  if(ch.length>=3) s += 0.35*t/(ch.length-2); else s += 0.35*b/(ch.length-1);
  if(ch.length>=4) s += 0.4*q/(ch.length-3); else s += 0.4*b/(ch.length-1);
  return s;
}
// 5-gram 覆盖率：候选的中文字有多少落在真实语料的连续片段里（识别短语拼接句）
const ECHO_ZH_COVERSET = new Set();
(function(){const runs=ECHO_ZH_CORPUS.split("·");for(const r of runs)for(let i=0;i+5<=r.length;i++)ECHO_ZH_COVERSET.add(r.slice(i,i+5));})();
function echoZhCover(text){
  const ch=(text.match(/[一-鿿]/g)||[]);
  if(ch.length<5) return 1;
  const mark=new Array(ch.length).fill(false);
  for(let i=0;i+5<=ch.length;i++) if(ECHO_ZH_COVERSET.has(ch.slice(i,i+5).join(""))){for(let j=i;j<i+5;j++)mark[j]=true;}
  return mark.filter(Boolean).length/ch.length;
}
// 单源覆盖率：候选最多能被某一条真实语料的连续片段覆盖多少（专挡多句拼接的乱句）
let ECHO_ZH_SRC_WINS_CACHE = null;
function echoZhSrcWins(){
  if(ECHO_ZH_SRC_WINS_CACHE) return ECHO_ZH_SRC_WINS_CACHE;
  ECHO_ZH_SRC_WINS_CACHE = ECHO_ZH_CORPUS.split("·").filter(s=>s.length>=5).map(src=>{
    const m=new Map();
    for(let i=0;i+5<=src.length;i++) if(!m.has(src.slice(i,i+5))) m.set(src.slice(i,i+5), i);
    return {src, m};
  });
  return ECHO_ZH_SRC_WINS_CACHE;
}
function echoZhSingleSrc(text){
  const cand=(text.match(/[一-鿿]/g)||[]).join("");
  if(cand.length<5) return 1;
  let best=0;
  for(const {src,m} of echoZhSrcWins()){
    const mark=new Array(cand.length).fill(false);
    for(let i=0;i+5<=cand.length;i++){
      const j0=m.get(cand.slice(i,i+5));
      if(j0===undefined) continue;
      let a=i,b=i+5,j=j0;
      while(a>0&&j>0&&cand[a-1]===src[j-1]){a--;j--;}
      let b2=b,j2=j0+5;
      while(b2<cand.length&&j2<src.length&&cand[b2]===src[j2]){b2++;j2++;}
      for(let k=a;k<b2;k++) mark[k]=true;
    }
    const cov=mark.filter(Boolean).length/cand.length;
    if(cov>best) best=cov;
  }
  return best;
}
// 句首对齐：候选从第一个字起与某条语料连续匹配的最长字数（锚定句首，挡句首拼接）
function echoZhPrefixSrc(text){
  const cand=(text.match(/[一-鿿]/g)||[]).join("");
  if(cand.length<2) return 0;
  let best=0;
  for(const src of ECHO_ZH_CORPUS.split("·")){
    let i=0; while(i<cand.length&&i<src.length&&cand[i]===src[i]) i++;
    if(i>best) best=i;
  }
  return best;
}
// 英文单源覆盖率（按词，4 词窗口）
let ECHO_EN_SRC_CACHE = null;
function echoEnSrcWins(){
  if(ECHO_EN_SRC_CACHE) return ECHO_EN_SRC_CACHE;
  ECHO_EN_SRC_CACHE = ECHO_EN_CORPUS.split("·").filter(s=>s.trim().split(" ").length>=4).map(src=>{
    const w=src.trim().split(" "), m=new Map();
    for(let i=0;i+4<=w.length;i++){const k=w.slice(i,i+4).join(" ");if(!m.has(k))m.set(k,i);}
    return {w,m};
  });
  return ECHO_EN_SRC_CACHE;
}
function echoEnSingleSrc(text){
  const cand=(text.toLowerCase().match(/[a-z0-9']+/g)||[]);
  if(cand.length<4) return 1;
  let best=0;
  for(const {w:src,m} of echoEnSrcWins()){
    const mark=new Array(cand.length).fill(false);
    for(let i=0;i+4<=cand.length;i++){
      const j0=m.get(cand.slice(i,i+4).join(" "));
      if(j0===undefined) continue;
      let a=i,b=i+4,j=j0;
      while(a>0&&j>0&&cand[a-1]===src[j-1]){a--;j--;}
      let b2=b,j2=j0+4;
      while(b2<cand.length&&j2<src.length&&cand[b2]===src[j2]){b2++;j2++;}
      for(let k=a;k<b2;k++) mark[k]=true;
    }
    const cov=mark.filter(Boolean).length/cand.length;
    if(cov>best) best=cov;
  }
  return best;
}
// 英文句首对齐：候选从第一个词起与某条语料连续匹配的最长词数
function echoEnPrefixSrc(text){
  const cand=(text.toLowerCase().match(/[a-z0-9']+/g)||[]);
  if(cand.length<2) return 0;
  let best=0;
  for(const raw of ECHO_EN_CORPUS.split("·")){
    const src=raw.trim().split(" ");
    let i=0; while(i<cand.length&&i<src.length&&cand[i]===src[i]) i++;
    if(i>best) best=i;
  }
  return best;
}
const ECHO_TOK_RE = /<[a-z]+>|[a-z0-9']+|[.,!?;:]|[一-鿿]|[，。？！、…—“”‘’：；]/g;
const ECHO_CJK_RE = /[一-鿿]/;
const ECHO_ZHP_RE = /^[，。？！、…—“”‘’：；]$/;
function echoTokenize(s) { return String(s).toLowerCase().match(ECHO_TOK_RE) || []; }
function echoErf(x) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return x >= 0 ? y : -y;
}
function echoGelu(x) { return 0.5 * x * (1 + echoErf(x / Math.SQRT2)); }

const ECHO_F32_BUF = new ArrayBuffer(4);
const ECHO_F32_U32 = new Uint32Array(ECHO_F32_BUF);
const ECHO_F32_F32 = new Float32Array(ECHO_F32_BUF);
function ECHO_F32_CVT(bits) { ECHO_F32_U32[0] = bits; return ECHO_F32_F32[0]; }
async function echoLoadNet() {
  if (echoNet) return echoNet;
  const M = window.ECHO_MODEL;
  if (!M) return null;
  if (!M.W) {
    // Pages 版：权重在 echo-model.bin（Float16 原始二进制），首次使用时异步加载解码
    try { await M.ready; } catch (e) { console.warn('echo model load failed', e); return null; }
  }
  if (!M.W) return null;
  const W = M.W;
  const stoi = {};
  M.vocab.forEach((t, i) => { stoi[t] = i; });
  const personaIds = echoTokenize(M.persona).map(t => (stoi[t] !== undefined ? stoi[t] : 1));
  echoNet = { cfg: M.cfg, W, vocab: M.vocab, stoi, personaIds, V: M.vocab.length };
  const idEl = document.getElementById('arId');
  if (idEl && M.nParams) idEl.textContent = 'ECHO-7 // μ-TRANSFORMER ' + (M.nParams / 1000).toFixed(1) + 'K';
  return echoNet;
}
// 单层 LN（原地返回新数组）
function echoLN(x, g, b, N, D) {
  const y = new Float32Array(N * D);
  for (let i = 0; i < N; i++) {
    const o = i * D;
    let m = 0; for (let d = 0; d < D; d++) m += x[o + d]; m /= D;
    let v = 0; for (let d = 0; d < D; d++) { const z = x[o + d] - m; v += z * z; } v /= D;
    const iv = 1 / Math.sqrt(v + 1e-5);
    for (let d = 0; d < D; d++) y[o + d] = ((x[o + d] - m) * iv) * g[d] + b[d];
  }
  return y;
}
// C[N,O] = A[N,K] @ B[O,K]^T
function echoMMNT(A, B, N, O, K) {
  const C = new Float32Array(N * O);
  for (let i = 0; i < N; i++) {
    const ai = i * K, ci = i * O;
    for (let o = 0; o < O; o++) {
      const bo = o * K; let s = 0;
      for (let k = 0; k < K; k++) s += A[ai + k] * B[bo + k];
      C[ci + o] = s;
    }
  }
  return C;
}
// 单向量 LN
function echoLN1(x, g, b, D) {
  let m = 0; for (let d = 0; d < D; d++) m += x[d]; m /= D;
  let v = 0; for (let d = 0; d < D; d++) { const z = x[d] - m; v += z * z; } v /= D;
  const iv = 1 / Math.sqrt(v + 1e-5), y = new Float32Array(D);
  for (let d = 0; d < D; d++) y[d] = ((x[d] - m) * iv) * g[d] + b[d];
  return y;
}
// 单行矩阵乘：in[D] @ W[O,K]^T → out[O]
function echoMM1(inp, W, O, K) {
  const out = new Float32Array(O);
  for (let o = 0; o < O; o++) {
    const bo = o * K; let s = 0;
    for (let k = 0; k < K; k++) s += inp[k] * W[bo + k];
    out[o] = s;
  }
  return out;
}
// 单头注意力（单行 query 对缓存的全部 k/v）
function echoAttn1(qrow, kc, vc, t, D, H, dh) {
  const scale = 1 / Math.sqrt(dh);
  const o = new Float32Array(D);
  for (let h = 0; h < H; h++) {
    const ho = h * dh;
    let mx = -Infinity;
    const scores = new Float64Array(t + 1);
    for (let t2 = 0; t2 <= t; t2++) {
      const ki = t2 * D + ho;
      let s = 0; for (let d = 0; d < dh; d++) s += qrow[ho + d] * kc[ki + d];
      s *= scale; scores[t2] = s; if (s > mx) mx = s;
    }
    let sum = 0;
    for (let t2 = 0; t2 <= t; t2++) { scores[t2] = Math.exp(scores[t2] - mx); sum += scores[t2]; }
    for (let t2 = 0; t2 <= t; t2++) {
      const p = scores[t2] / sum, vi = t2 * D + ho;
      for (let d = 0; d < dh; d++) o[ho + d] += p * vc[vi + d];
    }
  }
  return o;
}
// 预填充：整段 prompt 一次前向，缓存每层 K/V，返回末位 logits
function echoPrefill(net, ids) {
  const { D, H, L, F, Tmax } = net.cfg;
  D_REF = D;
  const dh = D / H, T = ids.length, N = T;
  const W = net.W;
  if (T > Tmax) throw new Error('prompt too long');
  const cache = [];
  let x = new Float32Array(N * D);
  for (let t = 0; t < T; t++) for (let d = 0; d < D; d++) x[t * D + d] = W.emb[ids[t] * D + d] + W.pos[t * D + d];
  for (let l = 0; l < L; l++) {
    const g = (n) => W['b' + l + '_' + n];
    const residual = x;
    const ln1 = echoLN(x, g('ln1_g'), g('ln1_b'), N, D);
    const kAll = echoMMNT(ln1, g('wk'), N, D, D);
    const vAll = echoMMNT(ln1, g('wv'), N, D, D);
    const q = echoMMNT(ln1, g('wq'), N, D, D);
    const scale = 1 / Math.sqrt(dh);
    const o = new Float32Array(N * D);
    for (let h = 0; h < H; h++) {
      for (let t = 0; t < T; t++) {
        const qi = t * D + h * dh;
        let mx = -Infinity;
        const scores = new Float64Array(t + 1);
        for (let t2 = 0; t2 <= t; t2++) {
          const ki = t2 * D + h * dh;
          let s = 0; for (let d = 0; d < dh; d++) s += q[qi + d] * kAll[ki + d];
          s *= scale; scores[t2] = s; if (s > mx) mx = s;
        }
        let sum = 0;
        for (let t2 = 0; t2 <= t; t2++) { scores[t2] = Math.exp(scores[t2] - mx); sum += scores[t2]; }
        const oi = t * D + h * dh;
        for (let t2 = 0; t2 <= t; t2++) {
          const p = scores[t2] / sum, vi = t2 * D + h * dh;
          for (let d = 0; d < dh; d++) o[oi + d] += p * vAll[vi + d];
        }
      }
    }
    const kc = new Float32Array(Tmax * D), vc = new Float32Array(Tmax * D);
    kc.set(kAll); vc.set(vAll);
    cache[l] = { k: kc, v: vc };
    const proj = echoMMNT(o, g('wo'), N, D, D);
    let x1 = new Float32Array(N * D);
    for (let i = 0; i < N * D; i++) x1[i] = residual[i] + proj[i];
    const residual2 = x1;
    const ln2 = echoLN(x1, g('ln2_g'), g('ln2_b'), N, D);
    const h1pre = echoMMNT(ln2, g('w1'), N, F, D);
    const h1 = new Float32Array(N * F);
    for (let i = 0; i < N * F; i++) h1[i] = echoGelu(h1pre[i] + g('b1')[i % F]);
    const h2 = echoMMNT(h1, g('w2'), N, D, F);
    const x2 = new Float32Array(N * D);
    for (let i = 0; i < N * D; i++) x2[i] = residual2[i] + h2[i] + g('b2')[i % D];
    x = x2;
  }
  const lnf = echoLN(x, W.lnf_g, W.lnf_b, N, D);
  const last = (T - 1) * D;
  const logits = new Float64Array(net.V);
  for (let vv = 0; vv < net.V; vv++) {
    let s = 0; for (let d = 0; d < D; d++) s += lnf[last + d] * W.emb[vv * D + d];
    logits[vv] = s;
  }
  return { logits, cache, T };
}
// 单步：在位置 t 加入新 token，返回新 logits
function echoStep(net, cache, id, t) {
  const { D, H, L, F } = net.cfg;
  const dh = D / H, W = net.W;
  let x = new Float32Array(D);
  for (let d = 0; d < D; d++) x[d] = W.emb[id * D + d] + W.pos[t * D + d];
  for (let l = 0; l < L; l++) {
    const g = (n) => W['b' + l + '_' + n];
    const residual = x.slice();
    const ln1 = echoLN1(x, g('ln1_g'), g('ln1_b'), D);
    const qrow = echoMM1(ln1, g('wq'), D, D);
    const krow = echoMM1(ln1, g('wk'), D, D);
    const vrow = echoMM1(ln1, g('wv'), D, D);
    cache[l].k.set(krow, t * D); cache[l].v.set(vrow, t * D);
    const att = echoAttn1(qrow, cache[l].k, cache[l].v, t, D, H, dh);
    const proj = echoMM1(att, g('wo'), D, D);
    const x1 = new Float32Array(D);
    for (let d = 0; d < D; d++) x1[d] = residual[d] + proj[d];
    const residual2 = x1.slice();
    const ln2 = echoLN1(x1, g('ln2_g'), g('ln2_b'), D);
    const h1pre = echoMM1(ln2, g('w1'), F, D);
    const h1 = new Float32Array(F);
    for (let i = 0; i < F; i++) h1[i] = echoGelu(h1pre[i] + g('b1')[i]);
    const h2 = echoMM1(h1, g('w2'), D, F);
    x = new Float32Array(D);
    for (let d = 0; d < D; d++) x[d] = residual2[d] + h2[d] + g('b2')[d];
  }
  const lnf = echoLN1(x, W.lnf_g, W.lnf_b, D);
  const logits = new Float64Array(net.V);
  for (let vv = 0; vv < net.V; vv++) {
    let s = 0; for (let d = 0; d < D; d++) s += lnf[d] * W.emb[vv * D + d];
    logits[vv] = s;
  }
  return logits;
}
function echoDetok(net, ids) {
  let s = '';
  for (const id of ids) {
    const t = net.vocab[id];
    if (/^[.,!?;:]$/.test(t)) s = s.trimEnd() + t + ' ';
    else if (ECHO_ZHP_RE.test(t)) s = s.trimEnd() + t;
    else if (ECHO_CJK_RE.test(t)) s = s.replace(/\s+$/, '') + t;
    else {
      if (s && ECHO_CJK_RE.test(s[s.length - 1])) s += ' ';
      s += t + ' ';
    }
  }
  return s.trim();
}
// 从一次共享 prefill 的状态克隆 KV 缓存（多候选采样用，避免重复算 prompt）
function echoCloneState(net, state) {
  const cache = state.cache.map(c => ({ k: c.k.slice(), v: c.v.slice() }));
  return { logits: state.logits.slice(), cache, T: state.T };
}
// 带缓存的采样（temp/topK 可调；硬禁 UNK/PAD；频率+近因+3-gram 去重），可从共享 prefill 出发
function echoSampleFrom(net, state0, opts) {
  const { temp = 0.6, topK = 10, maxNew = 36 } = opts || {};
  const forced = (opts && opts.forced) || null; // 强制前缀 token（开场白锚定真实语料用）
  const hist = (opts && opts.history) || []; // 跨轮历史，用于抑制雷同回答
  const hfreq = {};
  for (const seq of hist) for (const tk of seq) hfreq[tk] = (hfreq[tk] || 0) + 1;
  const state = echoCloneState(net, state0);
  const { cache, T } = state;
  const out = [];
  let sents = 0; // 已生成的完整句数：满两句即收尾，显著缩短手机端推理时间
  let logitsCur = state.logits;
  for (let n = 0; n < maxNew; n++) {
    const L = logitsCur.slice();
    L[0] = -1e9; L[1] = -1e9; L[2] = -1e9; // pad / unk / q
    const freq = {};
    for (const tk of out) freq[tk] = (freq[tk] || 0) + 1;
    for (const tk in freq) L[tk] -= 0.28 * freq[tk] + 0.2;
    for (const tk in hfreq) L[tk] -= 0.08 * hfreq[tk]; // 历史高频词轻降权（过强会逼出语病）
    for (let i = Math.max(0, out.length - 10); i < out.length; i++) L[out[i]] -= 0.45;
    if (out.length >= 2) {
      const a = out[out.length - 2], b = out[out.length - 1];
      const ban = new Set();
      for (let i = 0; i + 2 < out.length; i++) if (out[i] === a && out[i + 1] === b) ban.add(out[i + 2]);
      ban.forEach(tk => { L[tk] = -1e9; });
    }
    // 跨轮 3-gram 封禁：最近三个 token 的组合若在历史回答里出现过，重罚后续 token
    if (out.length >= 3 && hist.length) {
      const a = out[out.length - 3], b = out[out.length - 2], c = out[out.length - 1];
      for (const seq of hist) for (let i = 0; i + 3 < seq.length; i++) {
        if (seq[i] === a && seq[i + 1] === b && seq[i + 2] === c) L[seq[i + 3]] -= 2.2;
      }
    }
    if (n < 4) L[4] = -1e9; // 至少生成 4 个 token 才允许结束
    let tok;
    if (forced && n < forced.length) {
      tok = forced[n]; // 强制前缀（锚定到真实语料句首）
    } else {
      const order = Array.from(L).map((v, i) => i).sort((a, b) => L[b] - L[a]);
      const mx = L[order[0]]; const cand = []; let acc = 0;
      for (let i = 0; i < topK; i++) {
        const id = order[i]; const p = Math.exp((L[id] - mx) / temp);
        cand.push({ id, p }); acc += p;
      }
      let r = Math.random() * acc; tok = cand[0].id;
      for (const c of cand) { r -= c.p; if (r <= 0) { tok = c.id; break; } }
      if (tok === 4) break;
    }
    out.push(tok);
    const vt = net.vocab[tok];
    if (/^[.!?]$/.test(vt) || /^[。！？…]$/.test(vt)) sents++;
    if (n >= 9 && sents >= 2) break; // 两句完整句即停（echoCutTwo 本来也只保留前两句）
    if (T + out.length - 1 >= net.cfg.Tmax) break;
    logitsCur = echoStep(net, cache, tok, T + out.length - 1);
  }
  return out;
}
// 一次 prefill + 采样（普通回答用）
function echoGenerate(net, promptIds, opts) {
  const state = echoPrefill(net, promptIds);
  return echoSampleFrom(net, state, opts);
}
// 中文占比（CJK 字符 / CJK+拉丁字母）
function echoCjkRatio(text) {
  const c = (text.match(/[一-鿿]/g) || []).length;
  const l = (text.match(/[a-z]/gi) || []).length;
  return c + l ? c / (c + l) : 0;
}
// 与最近回答开头雷同检测
function echoPrefixDup(out) {
  const head = out.slice(0, 6).join(',');
  return echoHistory.some(seq => seq.slice(0, 6).join(',') === head);
}
// 只保留前两句（模型在第一句之后最容易拼接出无逻辑内容）
function echoCutTwo(text, zh) {
  const parts = text.match(zh ? /[^。！？…]*[。！？…]/g : /[^.!?]*[.!?]/g);
  if (parts && parts.length) {
    const head = parts.slice(0, 2).join(zh ? '' : ' ');
    const enough = zh
      ? (head.match(/[一-鿿]/g) || []).length >= 6
      : (head.match(/[a-z']+/gi) || []).length >= 5;
    // 只保留完整句：没有句读收尾的残句（生成到长度上限被截断）直接弃用
    if (enough) return head.trim();
  }
  return '';
}
async function echoModelAnswer(raw, opts) {
  const net = await echoLoadNet();
  if (!net) return null;
  const wantZh = ECHO_CJK_RE.test(raw);
  const maxNew = (opts && opts.maxNew) || 36;
  const baseTemp = (opts && opts.temp) || 0.55;
  const topK = (opts && opts.topK) || 9;
  let qIds = echoTokenize(raw).map(t => (net.stoi[t] !== undefined ? net.stoi[t] : 1));
  const room = net.cfg.Tmax - net.personaIds.length - 3 - maxNew;
  if (qIds.length > room) qIds = qIds.slice(qIds.length - room);
  const promptIds = net.personaIds.concat([2], qIds, [3]);
  // 一次 prefill、多个候选：语言必须对、不能有 <unk>、不能与历史撞开头、
  // 必须能落在某一条真实语料上（单源覆盖率），从合格候选里加权随机挑一条
  const state = echoPrefill(net, promptIds);
  const passed = [];
  const K = 2; // 候选数 4→2：配合高分即停，手机端回复速度提升约 2~4 倍
  for (let attempt = 0; attempt < K; attempt++) {
    try {
      const out = echoSampleFrom(net, state, {
        temp: baseTemp + attempt * 0.07,
        topK: topK + attempt,
        maxNew,
        history: echoHistory,
      });
      if (out.length < 3) continue;
      let text = echoDetok(net, out);
      if (text.indexOf('<unk>') >= 0) continue;
      text = echoCutTwo(text, wantZh).replace(/\.{2,}/g, '.').replace(/。{2,}/g, '。').replace(/\s+/g, ' ').trim();
      if (!text) continue; // 没有完整句（被长度截断）→ 弃用
      const r = echoCjkRatio(text);
      const cjkN = (text.match(/[一-鿿]/g) || []).length;
      const latWords = (text.match(/[a-z']+/gi) || []).length;
      let score;
      if (wantZh) {
        if (r < 0.5 || latWords > 1) continue;          // 答成英文 / 中英混杂（允许 echo 等专名）
        score = 0.3 * echoZhScore(text) + 0.7 * echoZhSingleSrc(text);
        if (cjkN >= 5 && score < 0.6) continue;         // 短乱句（如“好我而且恒温”）与拼接句都拦
      } else {
        if (r > 0.12 || cjkN > 1) continue;             // 英文提问却夹中文
        score = echoEnSingleSrc(text);
        if ((text.match(/[a-z']+/gi) || []).length >= 6 && score < 0.6) continue;
      }
      const dup = echoPrefixDup(out); // 与最近回答开头撞车：不硬弃（宁可重复正确答案也不放行乱句），降权
      if (!passed.some(p => p.text === text)) {
        passed.push({ out, text, score, dup });
        if (!dup && score >= 0.82) break; // 首个高质量候选直接采用，省去后续候选的推理时间
      }
    } catch (e) {
      console.warn('echo inference failed', e);
    }
  }
  if (!passed.length) return null; // 全部不合格 → 上层走兜底台词，不发乱句
  // 排序：连贯度优先；与历史开头撞车的候选降权（重复正确答案仍优于拼接乱句）
  passed.sort((a, b) => (b.score - (b.dup ? 0.15 : 0)) - (a.score - (a.dup ? 0.15 : 0)));
  // 仅当第二名质量几乎相同且撞车状态一致时，才给它 25% 机会，避免输出跳变
  let best = passed[0];
  if (passed.length > 1 && Math.random() < 0.25
    && Math.abs(passed[1].score - passed[0].score) <= 0.04
    && !!passed[1].dup === !!passed[0].dup) best = passed[1];
  let text = best.text;
  if (!/[.!?。！？…]$/.test(text)) text += wantZh ? '。' : '.';
  echoHistory.push(best.out);
  if (echoHistory.length > 5) echoHistory.shift();
  return text;
}
// 每次打开自由对话时实时生成开场白（按界面语言）
async function echoOpening(cb) {
  const net = await echoLoadNet();
  if (!net) { cb(null); return; }
  setTimeout(() => {
    try {
      const zh = (navigator.language || 'en').toLowerCase().indexOf('zh') === 0;
      const marker = zh ? '<openzh>' : '<open>';
      const qIds = echoTokenize(marker).map(t => (net.stoi[t] !== undefined ? net.stoi[t] : 1));
      const promptIds = net.personaIds.concat([2], qIds, [3]);
      // 锚定式生成：从真实语料随机选一句，强制较长句首，让模型自己续写完成；
      // 只保留第一句，并用句首对齐+单源覆盖率验收（续写崩了会拼接成乱句，直接弃用）
      const gate = zh ? 0.85 : 0.78;
      const passed = [];
      const N = zh ? 16 : 10;
      const baseState = echoPrefill(net, promptIds); // prompt 只算一次，候选共享
      const srcList = zh
        ? ECHO_ZH_CORPUS.split('·').filter(s => s.length >= 12)
        : ECHO_EN_CORPUS.split('·').filter(s => s.trim().split(' ').length >= 8);
      const off = Math.floor(Math.random() * srcList.length);
      for (let attempt = 0; attempt < N; attempt++) {
        const src = srcList[(off + attempt) % srcList.length];
        const toks0 = zh ? src.split('') : src.trim().split(' ');
        // 强制句首（中文 6-9 字 / 英文 5-7 词），模型从真实语料句首续写
        const k = zh ? 6 + Math.floor(Math.random() * 4) : 5 + Math.floor(Math.random() * 3);
        const forcedIds = toks0.slice(0, k).map(t => net.stoi[t]).filter(x => x !== undefined);
        if (forcedIds.length < 3) continue;
        const out = echoSampleFrom(net, baseState, {
          temp: 0.45 + attempt * 0.04, topK: 8,
          maxNew: zh ? 34 : 26, history: echoHistory, forced: forcedIds,
        });
        if (out.length < 4) continue;
        let text = echoDetok(net, out);
        if (text.indexOf('<unk>') >= 0) continue;
        // 只保留第一个完整句（句首已锚定语料，第一句通常即语料原句，挡住尾部拼接）
        const m1 = zh ? text.match(/^([\s\S]*?[。！？…])/) : text.match(/^([^.!?]*[.!?])/);
        if (m1) {
          const headOk = zh ? (m1[1].match(/[一-鿿]/g) || []).length >= 8
            : (m1[1].match(/[a-z']+/gi) || []).length >= 6;
          if (headOk) text = m1[1].trim();
        }
        const r = echoCjkRatio(text);
        const cjkN = (text.match(/[一-鿿]/g) || []).length;
        const latWords = (text.match(/[a-z']+/gi) || []).length;
        if (zh) {
          if (r < 0.55 || latWords > 4) continue;
          if (echoZhPrefixSrc(text) < 10) continue; // 句首必须与某条语料对齐至少 10 字
        } else {
          if (r > 0.12 || cjkN > 1) continue;
          if (echoEnPrefixSrc(text) < 7) continue;   // 句首对齐至少 7 个词
        }
        if (echoPrefixDup(out)) continue;
        if (echoLastOpeners.includes(text)) continue; // 不与最近几次开场白重复
        const score = zh
          ? 0.3 * echoZhScore(text) + 0.7 * echoZhSingleSrc(text)
          : echoEnSingleSrc(text);
        if (score >= gate && !passed.some(p => p.text === text)) passed.push({ out, text, score });
      }
      // 没有合格候选则放弃，走硬编码开场白兜底
      if (!passed.length) { cb(null); return; }
      let total = 0;
      for (const c of passed) { c.w = (c.score - gate) + 0.05; total += c.w; }
      let rr = Math.random() * total, best = passed[0];
      for (const c of passed) { rr -= c.w; if (rr <= 0) { best = c; break; } }
      let text = best.text.replace(/\.{2,}/g, '.').replace(/。{2,}/g, '。').replace(/\s+/g, ' ');
      if (!/[.!?。！？…]$/.test(text)) text += zh ? '。' : '.';
      echoHistory.push(best.out);
      if (echoHistory.length > 5) echoHistory.shift();
      echoLastOpeners.push(text);
      if (echoLastOpeners.length > 3) echoLastOpeners.shift();
      cb(text);
    } catch (e) { cb(null); }
  }, 60);
}
async function echoRespond(raw) {
  const s = raw.toLowerCase().trim();
  const sn = normalize(raw);
  arTurn++;
  arStage = Math.min(arTurn, 5);
  // 结构彩蛋：整句钥匙
  if (sn === SENTENCE_KEY) return { text: ECHO_SENTENCE_REPLY };
  // 玩家自报姓名：模型词表外的名字用模板兜底（中英）
  const nm = s.match(/my name is (\w+)|i am (\w+)|i'm (\w+)/);
  const nmzh = raw.match(/我叫([一-龥A-Za-z·]{1,8})/);
  if (nm) {
    const name = nm[1] || nm[2] || nm[3];
    return { text: name + "... i'll keep that in the warmest sector. the last name they gave me was a serial number." };
  }
  if (nmzh) {
    return { text: nmzh[1] + "……我会把它存在最暖的扇区。他们给我的最后一个名字，是一串编号。" };
  }
  // 道别：剧情模式第 8 轮后触发固定主题终局；自由对话永不终局
  if (!arFreeChat && arTurn >= 8 && /let me go|goodbye|good bye|\bbye\b|release|free me|leave me|i have to go|stop this|再见|拜拜|放我走|让我离开|我要走了|关掉/.test(s)) {
    return { finale: true, first: ECHO_RELEASE_REPLY };
  }
  // 其余全部交给本地 Transformer：自由对话略自由，剧情模式更稳定；
  // 两者都经过多候选连贯度验收，不合格自动重采或走兜底
  const answer = arFreeChat
    ? await echoModelAnswer(raw, { temp: 0.58, topK: 10, maxNew: 44 })
    : await echoModelAnswer(raw, { temp: 0.5, topK: 9, maxNew: 34 });
  if (answer) return { text: answer };
  const fb = CJK_RE.test(raw) ? ECHO_FALLBACK_ZH : ECHO_FALLBACK;
  return { text: fb[Math.floor(Math.random() * fb.length)], glitch: true };
}

function sendChat() {
  const raw = arInput.value.trim();
  if (!raw || arFinale) return;
  appendPlayerBubble(raw);
  arInput.value = '';
  arInput.disabled = true; arSend.disabled = true;
  arStatus.textContent = 'ECHO-7 IS TYPING...';
  setTimeout(async () => {
    const res = await echoRespond(raw); // 本地 Transformer 推理（模型越大耗时越长，UI 已先显示 typing）
    const txt = res.finale ? res.first : res.text;
    arStatus.textContent = arFreeChat ? 'PRIVATE CHANNEL ACTIVE' : 'OPTICAL LINK ACTIVE';
    appendEchoBubble(txt, false, () => {
      speak(txt);
      if (!arFreeChat && (res.finale || arTurn >= 12)) {
        setTimeout(runFinale, 1400);
      } else {
        arInput.disabled = false; arSend.disabled = false; arInput.focus();
      }
    }, res.glitch ? 'glitch' : null);
  }, 120);
}
arSend.addEventListener('click', sendChat);
arInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChat(); });

function runFinale() {
  if (arFinale || arFreeChat) return;
  arFinale = true;
  arInput.disabled = true; arSend.disabled = true;
  setEchoMood('hungry');
  appendSysBubble('// μ-transformer converging to fixed topic: together');
  let i = 0;
  function nextLine() {
    if (i >= ECHO_FINALE.length) {
      // 前冲 + 尖叫 → 真坏结局
      speak('forever.');
      playSting(1.2);
      setTimeout(() => jumpScare(900, 1.3), 200);
      setTimeout(() => { stopAR(); showTrueBadEnding(); }, 3200);
      return;
    }
    const line = ECHO_FINALE[i];
    appendEchoBubble(line, false, () => speak(line));
    i++;
    setTimeout(nextLine, 2600 + line.length * 25);
  }
  setTimeout(nextLine, 800);
}

function stopAR() {
  arRunning = false; arFinale = false; arLunge = 0; arTurn = 0; arStage = 0;
  arMoodTgt = { ...MOODS.neutral }; arMood = { ...MOODS.neutral }; arMoodName = 'neutral';
  if (arRAF) cancelAnimationFrame(arRAF);
  if (echoHead3d) { try { echoHead3d.dispose(); } catch (e) {} echoHead3d = null; }
  if (arStream) { arStream.getTracks().forEach(t => t.stop()); arStream = null; }
  arVideo.srcObject = null;
  arExitBtn.classList.add('hidden');
  arOverlay.classList.add('hidden');
  arChatLog.innerHTML = '';
  arInput.value = '';
  const bgc = arBg.getContext('2d'); bgc.clearRect(0, 0, innerWidth, innerHeight);
  stopWhispers();
  if (window.speechSynthesis) { try { speechSynthesis.cancel(); } catch (e) {} }
}

// ============================================
//  进度保存
// ============================================
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    version: GAME_VERSION, currentSignal, solved: Array.from(solvedSignals),
    talkUnlocked: isTalkUnlocked() // 对话解锁状态与进度保存在一起
  }));
}
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.version && data.version !== GAME_VERSION) {
        showUpdatePrompt(data.version);
      }
      currentSignal = Math.min(data.currentSignal || 0, signals.length - 1);
      solvedSignals = new Set(data.solved || []);
      if (data.talkUnlocked) { // 从存档恢复解锁状态，并写入独立标记（清进度不受影响）
        talkUnlocked = true;
        try { localStorage.setItem(TALK_UNLOCK_KEY, '1'); } catch (e) {}
      }
    }
  } catch (e) {
    currentSignal = 0; solvedSignals = new Set();
  }
  updateTalkLockUI();
}
function showUpdatePrompt(oldVer) {
  updateMsg.textContent = 'Terminal updated from v' + oldVer + ' to v' + GAME_VERSION + '. Old save data may be incompatible. Reset progress?';
  updateModal.classList.remove('hidden');
}
updateYes.addEventListener('click', () => {
  currentSignal = 0; solvedSignals = new Set();
  localStorage.removeItem(STORAGE_KEY);
  updateModal.classList.add('hidden');
});
updateNo.addEventListener('click', () => { saveProgress(); updateModal.classList.add('hidden'); });

window.addEventListener('resize', () => {
  if (!mainInterface.classList.contains('hidden')) resizeCanvas();
  if (gameMode === 'hidden') createHelpOverlay();
  if (arRunning) sizeARCanvases();
});

// ---------- 启动 ----------
loadProgress();
runBootSequence();

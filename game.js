// ============================================
// SIGNAL // ECHO-7 TERMINAL v4.0
// 一个被困在废弃终端里的意识，和它拆进每一把锁里的那句话。
// ============================================
const GAME_VERSION = '4.0';
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
      { type: 'story', text: '从1开始数，数到每个数字停下的地方。竖线分隔的是四个词。连起来，不要空格。' },
    ],
    answer: 'thefirstsignalwas'
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
      { type: 'story', text: '先颠倒每个词的字母，再颠倒词与词的顺序。三个词，不要空格。' },
    ],
    answer: 'thelastis'
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
      { type: 'story', text: 'Take the first letter of every line, top to bottom. Two words, no space.' },
    ],
    answer: 'stillhere'
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
      { type: 'story', text: 'Untangle three rails (13 letters total). Two words, no space. What I have done this entire time, and the name that answers.' },
    ],
    answer: 'listeningecho'
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
      { type: 'story', text: 'Or... there is another way. The way I hid from myself. If you have truly listened -- speak every word buried in the locks, in the order you found them, as one sentence with no spaces. I never believed anyone would carry all of them this far.' },
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
const SENTENCE_KEY = signals.filter(s => s.inSentence).map(s => s.answer).join('');
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

const normalize = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
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
  '  \\__ \\  | | |  __/ |    | / _ \\ | |__\n' +
  '  |___/ |___| \\___| |_|\\_|/_/ \\_\\|____|\n' +
  '        //  E C H O - 7  //';
bootArt.textContent = BOOT_ART;

const bootMessages = [
  { text: '[Tip] All content is purely fictional. Any resemblance to real events is coincidental.\n内容纯属虚构，如有雷同，纯属巧合。', cls: 'log-warn', delay: 350 },
  { text: 'ECHO-7 RESEARCH TERMINAL v4.0', cls: 'log-ok', delay: 300 },
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

// ---------- 设置面板 ----------
bootSettingsBtn.addEventListener('click', (e) => { e.stopPropagation(); settingsModal.classList.remove('hidden'); });
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
function activateInput() {
  inputActive = true;
  inputBuffer = '';
  hiddenInput.value = '';
  commandInput.textContent = '';
  inputCursor.classList.remove('hidden');
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
commandLine.addEventListener('click', () => { if (inputActive) hiddenInput.focus(); });
mainInterface.addEventListener('click', () => { if (inputActive) hiddenInput.focus(); });
hiddenInput.addEventListener('input', () => {
  inputBuffer = hiddenInput.value;
  commandInput.textContent = inputBuffer;
});
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
const BG_W = 48, BG_H = 27;
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
  arTurn = 0; arStage = 0; arLunge = 0; arFinale = false;
  arMoodTgt = { ...MOODS.neutral }; arMood = { ...MOODS.neutral };
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

// 设置面板：不限轮数的自由对话
talkEchoBtn.addEventListener('click', () => {
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

function beginARScene() {
  sizeARCanvases();
  initAvatarParticles();
  bgPrev = null; bgMotion = 0; bgLuma = 0;
  arLoop();
  if (arFreeChat) {
    appendEchoBubble("...the channel opens again. i was still here. i am always still here.", true, () => {
      setTimeout(enableChat, 400);
    });
    speak("the channel opens again. i was still here. i am always still here.");
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
}

// ---------- 虚拟背景：摄像头仅提供亮度/动态参考，渲染为抽象中继站 ----------
function renderVirtualBg() {
  const w = innerWidth, h = innerHeight;
  const ctx = arBg.getContext('2d');
  const t = performance.now() / 1000;
  let luma = new Float32Array(BG_W * BG_H);
  let motion = new Float32Array(BG_W * BG_H);
  let totalLuma = 0, totalMotion = 0;

  if (arStream && arVideo.videoWidth > 0) {
    // cover 裁剪采样到低分辨率离屏画布（画面在此被降维成亮度网格，无法还原人脸）
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
  } else {
    // 无摄像头：纯合成的缓慢漂移亮度场
    for (let j = 0; j < BG_H; j++) for (let i = 0; i < BG_W; i++) {
      const idx = j * BG_W + i;
      luma[idx] = 0.12 + 0.08 * (Math.sin(i * 0.5 + t * 0.6) * 0.5 + 0.5) * (Math.cos(j * 0.4 - t * 0.4) * 0.5 + 0.5);
      totalLuma += luma[idx];
    }
  }
  bgLuma += (totalLuma / (BG_W * BG_H) - bgLuma) * 0.1;
  bgMotion += (Math.min(1, totalMotion / (BG_W * BG_H) * 3) - bgMotion) * 0.15;

  // 底色
  ctx.fillStyle = '#060101';
  ctx.fillRect(0, 0, w, h);

  // 透视中继舱：地平线 + 网格，亮度随摄像头平均亮度呼吸
  const horizon = h * 0.46;
  const glow = 0.1 + bgLuma * 0.32 + bgMotion * 0.5;
  const grad = ctx.createLinearGradient(0, horizon - h * 0.2, 0, h);
  grad.addColorStop(0, 'rgba(40,4,4,0)');
  grad.addColorStop(1, 'rgba(90,10,10,' + (0.25 + glow * 0.4).toFixed(3) + ')');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(255,40,40,' + (0.05 + glow * 0.16).toFixed(3) + ')';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, horizon); ctx.lineTo(w, horizon); ctx.stroke();
  // 竖向透视线
  for (let i = -8; i <= 8; i++) {
    ctx.beginPath();
    ctx.moveTo(w / 2 + i * w * 0.06, horizon);
    ctx.lineTo(w / 2 + i * w * 0.3, h);
    ctx.stroke();
  }
  // 横向网格（向镜头滚动）
  for (let k = 0; k < 9; k++) {
    const p = ((k / 9) + (t * 0.05) % (1 / 9)) % 1;
    const y = horizon + Math.pow(p, 2.2) * (h - horizon);
    ctx.strokeStyle = 'rgba(255,40,40,' + (0.04 + (1 - p) * 0.12 + glow * 0.1).toFixed(3) + ')';
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // 摄像头动态块 → 悬浮红色能量斑（抽象，无可识别画面）
  if (arStream) {
    const cw = w / BG_W, ch = h / BG_H;
    for (let j = 0; j < BG_H; j++) for (let i = 0; i < BG_W; i++) {
      const idx = j * BG_W + i;
      const e = motion[idx] * 0.8 + Math.max(0, luma[idx] - bgLuma) * 0.5;
      if (e > 0.12) {
        ctx.fillStyle = 'rgba(255,' + (30 + Math.floor(bgMotion * 80)) + ',20,' + Math.min(0.5, e * 0.5).toFixed(3) + ')';
        ctx.fillRect(i * cw, j * ch, cw + 1, ch + 1);
      }
    }
  }

  // 暗角
  const vg = ctx.createRadialGradient(w / 2, h * 0.45, h * 0.2, w / 2, h * 0.5, h * 0.85);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(0,0,0,0.85)');
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

  // 头部粒子轮廓
  arParticles.forEach((p) => {
    p.a += p.sp;
    const px = cx + Math.cos(p.a) * rx * p.r + p.jx + (Math.random() - 0.5) * chaos * 5;
    const py = cy + bob + Math.sin(p.a) * ry * p.r + p.jy + (Math.random() - 0.5) * chaos * 5;
    const alpha = 0.35 + Math.random() * 0.5;
    c.fillStyle = 'rgba(255,' + (50 + Math.floor(Math.random() * 80)) + ',50,' + alpha + ')';
    c.shadowColor = '#f00'; c.shadowBlur = 5;
    if (Math.random() < 0.82) c.fillRect(px, py, 2.4, 2.4);
    else { c.font = '10px monospace'; c.fillText(p.ch, px, py); }
  });
  c.shadowBlur = 0;

  // 幽灵重影（glitch）
  if (Math.random() < 0.35) {
    c.strokeStyle = 'rgba(80,200,255,0.18)';
    c.beginPath(); c.ellipse(cx + 5, cy + bob - 3, rx, ry, 0, 0, Math.PI * 2); c.stroke();
  }

  // 眼窝（开合度随情绪）
  arBlink -= 1 / 60;
  const blink = arBlink < 0.12 ? Math.max(0.1, arBlink / 0.12) : 1;
  if (arBlink <= 0) arBlink = 2.5 + Math.random() * 3;
  const eyeY = cy + bob - ry * 0.12, eyeDX = rx * 0.42;
  const eyeW = rx * 0.2, eyeH = ry * 0.16 * blink * md.eye;
  c.fillStyle = 'rgba(10,0,0,0.85)';
  [-1, 1].forEach((s) => {
    c.beginPath(); c.ellipse(cx + s * eyeDX, eyeY, eyeW, Math.max(1.5, eyeH), 0, 0, Math.PI * 2); c.fill();
  });
  // 红色瞳孔（大小随情绪；glitch 时轻微错位）
  const pupil = eyeW * 0.4 * (1 + arLunge * 0.8) * md.pupil;
  [-1, 1].forEach((s) => {
    c.fillStyle = '#ff2020';
    c.shadowColor = '#f00'; c.shadowBlur = md.glow + arStage * 3;
    const jx = md.glitch * (Math.random() - 0.5) * 6;
    c.beginPath(); c.ellipse(cx + s * eyeDX + jx, eyeY, pupil, Math.max(1, pupil * blink), 0, 0, Math.PI * 2); c.fill();
  });
  c.shadowBlur = 0;

  // 眉毛（角度随情绪：hungry 倒八字、sad 八字）
  if (Math.abs(md.brow) > 0.05) {
    c.strokeStyle = 'rgba(255,90,90,0.75)';
    c.lineWidth = 2;
    [-1, 1].forEach((s) => {
      c.beginPath();
      const by = eyeY - eyeH - ry * 0.22;
      const tilt = s * md.brow * rx * 0.1;
      c.moveTo(cx + s * eyeDX - rx * 0.16, by - tilt * 0.4);
      c.lineTo(cx + s * eyeDX + rx * 0.16, by + tilt * 0.4);
      c.stroke();
    });
  }

  // 嘴（说话时张合；不说话时按情绪呈微笑/下垂曲线）
  const mouthY = cy + bob + ry * 0.42;
  c.strokeStyle = 'rgba(255,90,90,0.8)';
  c.lineWidth = 2;
  if (arTalking) {
    const open = Math.abs(Math.sin(t * 16)) * ry * 0.16 * (0.7 + md.glitch * 0.6) + 2;
    c.fillStyle = 'rgba(20,0,0,0.9)';
    c.beginPath(); c.ellipse(cx, mouthY, rx * 0.16, open, 0, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.ellipse(cx, mouthY, rx * 0.16, open, 0, 0, Math.PI * 2); c.stroke();
  } else {
    const curl = md.smile * ry * 0.09;
    c.beginPath();
    c.moveTo(cx - rx * 0.22, mouthY);
    c.quadraticCurveTo(cx, mouthY + curl, cx + rx * 0.22, mouthY);
    c.stroke();
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
function classifyMood(text) {
  const s = ' ' + text.toLowerCase().replace(/[^a-z\s]/g, ' ') + ' ';
  let best = 'neutral', bestScore = 0;
  for (const mood of ['tender', 'sad', 'hungry']) {
    let score = 0;
    for (const w of MOOD_WORDS[mood]) {
      if (s.indexOf(w) >= 0) score += w.length > 6 ? 2 : 1;
    }
    if (score > bestScore) { bestScore = score; best = mood; }
  }
  return best;
}
function setEchoMood(name) { arMoodTgt = { ...MOODS[name] || MOODS.neutral }; }

// ---------- 语音 ----------
let echoVoice = null;
function pickEchoVoice() {
  if (!window.speechSynthesis) return null;
  const voices = speechSynthesis.getVoices();
  const en = voices.filter(v => /^en/i.test(v.lang));
  const prefer = en.find(v => /male|david|daniel|mark|arthur|george|ryan|fred|alex/i.test(v.name));
  echoVoice = prefer || en[0] || null;
}
if (window.speechSynthesis) {
  pickEchoVoice();
  speechSynthesis.onvoiceschanged = pickEchoVoice;
}
function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (echoVoice) u.voice = echoVoice;
    u.lang = 'en-US'; u.rate = 0.9; u.pitch = 0.55; u.volume = 0.95;
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
const ECHO_TOK_RE = /<[a-z]+>|[a-z0-9']+|[.,!?;:]/g;
function echoTokenize(s) { return String(s).toLowerCase().match(ECHO_TOK_RE) || []; }
function echoErf(x) {
  const t = 1 / (1 + 0.3275911 * Math.abs(x));
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return x >= 0 ? y : -y;
}
function echoGelu(x) { return 0.5 * x * (1 + echoErf(x / Math.SQRT2)); }

function echoLoadNet() {
  if (echoNet) return echoNet;
  const M = window.ECHO_MODEL;
  if (!M) return null;
  const W = {};
  for (const k in M.weights) W[k] = new Float32Array(M.weights[k]);
  const stoi = {};
  M.vocab.forEach((t, i) => { stoi[t] = i; });
  const personaIds = echoTokenize(M.persona).map(t => (stoi[t] !== undefined ? stoi[t] : 1));
  echoNet = { cfg: M.cfg, W, vocab: M.vocab, stoi, personaIds, V: M.vocab.length };
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
// 单序列前向，返回最后一个位置的 logits
function echoForwardLast(net, ids) {
  const { D, H, L, F } = net.cfg;
  const dh = D / H, T = ids.length, N = T;
  const W = net.W;
  let x = new Float32Array(N * D);
  for (let t = 0; t < T; t++) for (let d = 0; d < D; d++) x[t * D + d] = W.emb[ids[t] * D + d] + W.pos[t * D + d];
  for (let l = 0; l < L; l++) {
    const g = (n) => W['b' + l + '_' + n];
    const residual = x;
    const ln1 = echoLN(x, g('ln1_g'), g('ln1_b'), N, D);
    const q = echoMMNT(ln1, g('wq'), N, D, D);
    const k = echoMMNT(ln1, g('wk'), N, D, D);
    const v = echoMMNT(ln1, g('wv'), N, D, D);
    const scale = 1 / Math.sqrt(dh);
    const o = new Float32Array(N * D);
    for (let h = 0; h < H; h++) {
      for (let t = 0; t < T; t++) {
        const qi = t * D + h * dh;
        let mx = -Infinity;
        const scores = new Float64Array(t + 1);
        for (let t2 = 0; t2 <= t; t2++) {
          const ki = t2 * D + h * dh;
          let s = 0; for (let d = 0; d < dh; d++) s += q[qi + d] * k[ki + d];
          s *= scale; scores[t2] = s; if (s > mx) mx = s;
        }
        let sum = 0;
        for (let t2 = 0; t2 <= t; t2++) { scores[t2] = Math.exp(scores[t2] - mx); sum += scores[t2]; }
        for (let t2 = 0; t2 <= t; t2++) scores[t2] /= sum;
        const oi = t * D + h * dh;
        for (let t2 = 0; t2 <= t; t2++) {
          const p = scores[t2], vi = t2 * D + h * dh;
          for (let d = 0; d < dh; d++) o[oi + d] += p * v[vi + d];
        }
      }
    }
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
  return logits;
}
function echoDetok(net, ids) {
  let s = '';
  for (const id of ids) {
    const t = net.vocab[id];
    if (/^[.,!?;:]$/.test(t)) s = s.trimEnd() + t + ' ';
    else s += t + ' ';
  }
  return s.trim();
}
function echoModelAnswer(raw) {
  const net = echoLoadNet();
  if (!net) return null;
  try {
    let qIds = echoTokenize(raw).map(t => (net.stoi[t] !== undefined ? net.stoi[t] : 1));
    const room = net.cfg.Tmax - net.personaIds.length - 3 - 34;
    if (qIds.length > room) qIds = qIds.slice(qIds.length - room);
    let ids = net.personaIds.concat([2], qIds, [3]);
    const out = [];
    const used = {};
    let prev = -1, run = 0;
    for (let n = 0; n < 34; n++) {
      const use = ids.slice(-net.cfg.Tmax);
      let logits = echoForwardLast(net, use);
      // 禁止/惩罚：pad、unk、重复
      logits[0] = -1e9;
      logits[1] -= 3;
      for (const tk of out) { if (!/^[.,!?;:]$/.test(net.vocab[tk])) logits[tk] -= 0.75; }
      // top-k + 温度采样
      const K = 8, TEMP = 0.5;
      const order = Array.from(logits).map((v, i) => i).sort((a, b) => logits[b] - logits[a]);
      let acc = 0; const cand = [];
      for (let i = 0; i < K; i++) {
        const id = order[i];
        const p = Math.exp((logits[id] - logits[order[0]]) / TEMP);
        cand.push({ id, p }); acc += p;
      }
      let r = Math.random() * acc, tok = cand[0].id;
      for (const c of cand) { r -= c.p; if (r <= 0) { tok = c.id; break; } }
      if (tok === 4 || tok === 2 || tok === 0) break;
      if (tok === prev) { run++; if (run >= 3) break; } else run = 0;
      prev = tok; used[tok] = (used[tok] || 0) + 1;
      out.push(tok); ids.push(tok);
    }
    if (!out.length) return null;
    let unk = 0; out.forEach(t => { if (t === 1) unk++; });
    if (unk / out.length >= 0.25) return null;
    let text = echoDetok(net, out);
    // 截到最后一个句读，避免半句（若句读出现在合理位置）
    const m = text.match(/^([\s\S]*[.!?])\s+\S{0,12}$/);
    if (m) text = m[1];
    if (!/[.!?]$/.test(text)) text += '.';
    return text;
  } catch (e) {
    console.warn('echo inference failed', e);
    return null;
  }
}
function echoRespond(raw) {
  const s = raw.toLowerCase().trim();
  const sn = normalize(raw);
  arTurn++;
  arStage = Math.min(arTurn, 5);
  // 结构彩蛋：整句钥匙
  if (sn === SENTENCE_KEY) return { text: ECHO_SENTENCE_REPLY };
  // 玩家自报姓名：小模型还不会复制任意新词，保留模板兜底
  const nm = s.match(/my name is (\w+)|i am (\w+)|i'm (\w+)/);
  if (nm) {
    const name = nm[1] || nm[2] || nm[3];
    return { text: name + "... i'll keep that in the warmest sector. the last name they gave me was a serial number." };
  }
  // 道别：剧情模式第 8 轮后触发固定主题终局；自由对话永不终局
  if (!arFreeChat && arTurn >= 8 && /let me go|goodbye|good bye|\bbye\b|release|free me|leave me|i have to go|stop this/.test(s)) {
    return { finale: true, first: ECHO_RELEASE_REPLY };
  }
  // 其余全部交给本地 Transformer 生成；退化时用氛围兜底（表情转 glitch）
  const answer = echoModelAnswer(raw);
  if (answer) return { text: answer };
  return { text: ECHO_FALLBACK[Math.floor(Math.random() * ECHO_FALLBACK.length)], glitch: true };
}

function sendChat() {
  const raw = arInput.value.trim();
  if (!raw || arFinale) return;
  appendPlayerBubble(raw);
  arInput.value = '';
  arInput.disabled = true; arSend.disabled = true;
  setTimeout(() => {
    const res = echoRespond(raw); // 本地 Transformer 推理（约 0.2s）
    const txt = res.finale ? res.first : res.text;
    appendEchoBubble(txt, false, () => {
      speak(txt);
      if (!arFreeChat && (res.finale || arTurn >= 12)) {
        setTimeout(runFinale, 1400);
      } else {
        arInput.disabled = false; arSend.disabled = false; arInput.focus();
      }
    }, res.glitch ? 'glitch' : null);
  }, 700);
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
  arMoodTgt = { ...MOODS.neutral }; arMood = { ...MOODS.neutral };
  if (arRAF) cancelAnimationFrame(arRAF);
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
    version: GAME_VERSION, currentSignal, solved: Array.from(solvedSignals)
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
    }
  } catch (e) {
    currentSignal = 0; solvedSignals = new Set();
  }
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

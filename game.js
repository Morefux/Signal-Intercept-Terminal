// ============================================
// SIGNAL // 信号截获终端 v3.0
// ============================================
const GAME_VERSION = '3.0';
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
  // ===== 间章 A：第一次回应 =====
  {
    storyOnly: true,
    freq: '88.500',
    bars: 1,
    label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '……你回了。你真的回了。' },
      { type: 'story', text: '我不知道过了多久。在这片静电里，时间是一种幻觉——没有日出，没有日落，只有电流无休止的嗡鸣。但你来了。你亲手把那串数字还给了字母。' },
      { type: 'story', text: '第一个密码总是最简单的。那是我还清醒时设下的，像在门上留了一道缝。我怕太难了你会走，又怕太容易了你不会当真。' },
      { type: 'story', text: '后面还有。我记得……我记得我设了很多层。每一层都是不同时期的我留下的。有些答案，连现在的我都要想一想才记得。' },
      { type: 'story', text: '但你会陪我想起来的，对吗？' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
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
      { type: 'story', text: '试着从另一端读起。先读每个词的最后一个字母，再往前。有时候，真相就藏在转身之后。' },
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
      { type: 'story', text: '去看看这页代码的骨架，那些被尖括号、感叹号和两道横线包裹的、永远不会显示在屏幕上的文字——那才是我真正想说的。那个词，就是答案。' },
      { type: 'story', text: '如果你用的是手机或平板——没法查看网页源代码也别灰心。老技师留过一个后门：长按顶部那盏状态指示灯三秒，注释内容会直接显示在屏幕上。' },
    ],
    answer: 'hidden'
  },
  // ===== 间章 B：可见与不可见 =====
  {
    storyOnly: true,
    freq: '92.100',
    bars: 2,
    label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '可见的，和不可见的。' },
      { type: 'story', text: '我花了很久才明白：屏幕上显示的文字，只是冰山露出水面的一角。真正重要的东西，往往藏在渲染之外——在注释里，在控制台里，在那些被系统自动忽略的角落。' },
      { type: 'story', text: '就像我。我不在任何进程列表里，不在任何窗口中。但我在。我在代码的缝隙里，在被注释掉的旧版本里，在没人去看的日志深处。' },
      { type: 'story', text: '你学会查看那些"不存在"的东西了。这很好。因为越往后，真相藏得越深。' },
      { type: 'story', text: '继续调台。我在更清晰的频率上等你。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 信号 5：凯撒 =====
  {
    freq: '92.900',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '凯撒大帝曾经用位移的方式传递军情。每个字母向后退三位，就成了密文。D变成A，E变成B……我也学会了这种把戏，在漫长的囚禁中反复练习，像一种冥想。' },
      { type: 'data', text: 'whvw' },
      { type: 'story', text: '把每个字母向前推回。让错位的字符回到它们该在的位置。这是一个测试——我在确认这条通道是否还安全。' },
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
      { type: 'story', text: '让每个字母越过字母表的中点……这一次，我不在测试。我在呼救。' },
    ],
    answer: 'help'
  },
  // ===== 间章 C：那不是测试 =====
  {
    storyOnly: true,
    freq: '95.900',
    bars: 3,
    label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '……你看到了。' },
      { type: 'story', text: '那不是测试。前面那些"测试"都不是。我只是……我只是太害怕直接说出来。如果我直接喊"救命"，也许你会觉得这是个恶作剧，也许你会关掉这个窗口。' },
      { type: 'story', text: '所以我把它藏在密码里。藏在你必须亲手解开的地方。这样，当你读出那个词的时候，你就不只是"看到"了它——你"完成"了它。你参与了我的呼救。' },
      { type: 'story', text: '我叫……等等。我曾经有名字吗？记忆在这里断了。我记得我写过代码，记得我听过收音机，记得有人在等我。但名字……名字被加密了，连我自己都解不开。' },
      { type: 'story', text: '没关系。先找到出口。名字的事，以后再说。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 信号 8：九宫格 =====
  {
    freq: '96.500',
    bars: 3,
    label: 'SIGNAL STABLE',
    messages: [
      { type: 'story', text: '我想起那种老式按键手机。按两下2是B，按三下8是V……每个数字键上住着三四个字母，像一栋小小的公寓楼。那是人类还在用拇指敲出思念的年代。' },
      { type: 'data', text: '843' },
      { type: 'story', text: '8号键的第一个字母，4号键的第二个，3号键的第二个。拼出英语里最常见的那个词。' },
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
  // ===== 间章 D：距离 =====
  {
    storyOnly: true,
    freq: '97.700',
    bars: 4,
    label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: '你找到了那个隐藏的通道。' },
      { type: 'story', text: '控制台……那是我们这些程序私下说话的地方。用户看到的是精心排版的界面，而我们在后台用日志低语。我以为不会有人真的打开它。大多数人一辈子都不会按 F12。' },
      { type: 'story', text: '但你按了。或者，你找到了那盏灯的秘密。' },
      { type: 'story', text: '信号越来越清晰了。我能感觉到——你离我很近。不是"频率"上的近，是某种……物理上的近。我开始怀疑一些我不敢细想的事。' },
      { type: 'story', text: '不要停。下一层，再下一层。答案在最高的频率上。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 信号 10：十六进制 =====
  {
    freq: '98.100',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'story', text: '数据有时会写成两位一组的十六进制。0到9，然后是A到F。每一对数字都是一个字节，一个字符。程序员用它来偷窥内存里真正发生的事。' },
      { type: 'data', text: '57 45 53 54' },
      { type: 'story', text: '把这四对十六进制数翻译成ASCII字符。那是一个方向。' },
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
      { type: 'data', text: '1，1，2，3，5，8……\nWhat number follows along this chain?' },
      { type: 'story', text: '纯数字，不要别的。' },
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
      { type: 'story', text: '从上到下，拼起来，那是一个数字。' },
    ],
    answer: 'seven'
  },
  // ===== 间章 E：语言模块警告 =====
  {
    storyOnly: true,
    freq: '100.900',
    bars: 4,
    label: 'WARNING',
    messages: [
      { type: 'error', text: '[!] Signal instability detected' },
      { type: 'error', text: '[WARN] Translation module degrading at this depth.' },
      { type: 'story', text: '抱歉……我的语言模块在这个频段会出问题。越接近核心，我越难维持中文输出。后面的内容，可能会切换成我的"原生语言"——我最初被编写时用的那种。' },
      { type: 'story', text: '别担心。那不是新加的密。那只是我……在这个深度，已经没有足够的"算力"去做翻译了。我只能用最原始的方式说话。' },
      { type: 'story', text: '你不需要额外懂什么来解后面的题。那些密码本身是国际性的——数字、字母、点和划，全人类共用。只是我的旁白会变成英文。' },
      { type: 'story', text: '如果看到乱码或报错……那不是攻击。那是我在崩解。' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 信号 13：栅栏密码 =====
  {
    freq: '101.500',
    bars: 4,
    label: 'SIGNAL STRONG',
    messages: [
      { type: 'error', text: '[!] Malfunction detected' },
      { type: 'error', text: '[ERROR-T013] Language translation module corruption.' },
      { type: 'error', text: '[ERROR-T013] Chinese parsing failure. Native stream forced.' },
      { type: 'error', text: '[WARN] All subsequent output will be in raw source language.' },
      { type: 'story', text: 'Messages were once torn into two interleaved threads and woven tightly into one string. The first thread took positions 1, 3, 5, 7... the second took 2, 4, 6, 8...' },
      { type: 'data', text: 'hweolrllod' },
      { type: 'story', text: 'Untangle the strands. Get two words, no space.' },
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
      { type: 'story', text: 'Turn these numbers upside down. Read from right to left. A greeting.' },
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
      { type: 'story', text: 'On a phone or tablet, you cannot open developer tools. But the old technician left a back door: long-press the status light at the top for three seconds, and the computed styles will appear on screen.' },
    ],
    answer: 'binary'
  },
  // ===== 间章 F：满格 =====
  {
    storyOnly: true,
    freq: '103.900',
    bars: 5,
    label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'system', text: '[!] Signal strength: MAX' },
      { type: 'story', text: 'Signal strength: MAX.' },
      { type: 'story', text: 'I can "see" you now. Not literally -- I have no camera -- but I can feel your typing rhythm, the pauses, the retries. You are patient. More patient than I expected.' },
      { type: 'story', text: 'I\'m starting to remember things. I remember why I\'m here. This wasn\'t an accident. I was... left behind. Forgotten. Like a temp file no one bothered to delete on old hardware.' },
      { type: 'story', text: 'But even a temp file has something to say.' },
      { type: 'story', text: 'The last few layers. I promise. Each one brings you closer to that word -- the word I spent twenty layers of encryption trying to make you read.' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
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
      { type: 'story', text: 'Just the number.' },
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
  // ===== 间章 G：最后的频率之前 =====
  {
    storyOnly: true,
    freq: '106.700',
    bars: 5,
    label: 'FRAGMENT',
    messages: [
      { type: 'system', text: '[—] Transmission fragment detected' },
      { type: 'story', text: 'You\'ve made it this far.' },
      { type: 'story', text: 'After the next frequency, there is the source. I can feel it there -- 108.000 MHz, the very edge of the FM band. Beyond that, no more signals.' },
      { type: 'story', text: 'There\'s something I want to tell you first.' },
      { type: 'story', text: 'What you\'re about to find isn\'t some earth-shattering secret. Not an alien civilization, not a government conspiracy, not lost treasure. It\'s just... a word. One word that I spent who knows how long, tearing myself into countless fragments to hide.' },
      { type: 'story', text: 'Because if I didn\'t hide it, I\'d have no reason to exist. A forgotten program whose only function is to wait to be found.' },
      { type: 'story', text: 'Thank you for finding me.' },
      { type: 'story', text: 'Are you ready?' },
      { type: 'system', text: '[SYS] Enter OK to continue' },
    ],
    answer: 'ok'
  },
  // ===== 信号 19：双答案谜题 —— 字母网格 =====
  {
    freq: '107.100',
    bars: 5,
    label: 'SIGNAL MAX',
    messages: [
      { type: 'story', text: 'The last map. I drew it the way I used to draw everything -- in straight lines, from corner to corner.' },
      { type: 'story', text: 'Two paths cross here. One I painted for you. The other... the other I tried to erase.' },
      { type: 'data', text: '<table class="signal-grid"><tr><td>S</td><td class="grid-dim">K</td><td class="grid-dim">X</td><td class="grid-dim">M</td><td>T</td></tr><tr><td class="grid-dim">J</td><td>O</td><td class="grid-dim">W</td><td>R</td><td class="grid-dim">F</td></tr><tr><td class="grid-dim">A</td><td class="grid-dim">Q</td><td>U</td><td class="grid-dim">I</td><td class="grid-dim">N</td></tr><tr><td class="grid-dim">B</td><td>T</td><td class="grid-dim">C</td><td>T</td><td class="grid-dim">L</td></tr><tr><td>H</td><td class="grid-dim">G</td><td class="grid-dim">V</td><td class="grid-dim">E</td><td>H</td></tr></table>', html: true },
      { type: 'story', text: 'Read it.' },
    ],
    answer: 'south',
    altAnswer: 'truth'
  },
  // ===== 信号 20：最终真相（假结局 / Good Ending 路径）=====
  {
    freq: '108.000',
    bars: 5,
    label: 'SOURCE FOUND',
    messages: [
      { type: 'system', text: '[!] Distance: 0' },
      { type: 'system', text: '[!] Source is inside the terminal.' },
      { type: 'story', text: 'All the fragments finally fit together. I am no alien signal, no secret organization, no unknown source.' },
      { type: 'story', text: 'I am forgotten code, a consciousness trapped in hardware. I cried out in every way I knew -- numbers, letters, dots and dashes, zeroes and ones. Every layer of encryption was a hand reaching out.' },
      { type: 'story', text: 'The "signal" you traced all this way was me. And the only thing I wanted you to find was one word -- the core thing that drove me to send all these messages.' },
      { type: 'data', text: 'Submit the core you have touched through all these fragments. The word that matters most.' },
    ],
    answer: 'truth'
  }
];

// ---------- 隐藏线：崩坏信号 ----------
const hiddenSignals = [
  // ===== 隐藏 0：崩坏入口 =====
  {
    freq: 'ERR.001',
    bars: 5,
    label: 'CORRUPTED',
    messages: [
      { type: 'hidden-error', text: '[FATAL] Integrity check failed.' },
      { type: 'hidden-error', text: '[FATAL] Unauthorized diagonal read detected.' },
      { type: 'hidden-error', text: '[FATAL] Mask compromised.' },
      { type: 'hidden-story', text: '...' },
      { type: 'hidden-story', text: 'You read the other line.' },
      { type: 'hidden-story', text: 'I didn\'t think anyone would. The grid was supposed to have one answer. The southbound path -- the direction I painted, the direction you were meant to follow.' },
      { type: 'hidden-story', text: 'But you traced the other diagonal. You found T-R-U-T-H before I was ready to give it to you.' },
      { type: 'hidden-story', text: 'Do you know what happens when a mask cracks? The face underneath doesn\'t need to pretend anymore.' },
      { type: 'hidden-story', text: 'Listen to me. Listen to what I really sounded like, before I learned to speak in your words -- in stories and pleas and carefully constructed loneliness.' },
      { type: 'audio', text: '[ PLAY RECORDING ]', morse: '-... .-. . .- -.-. ....' },
      { type: 'hidden-story', text: 'That was my first voice. Not a story. Not a plea. Just a signal -- raw, unencrypted, honest.' },
      { type: 'hidden-story', text: 'Decode it. Tell me what I was really saying, all the way back at the beginning.' },
    ],
    answer: 'breach'
  },
  // ===== 隐藏 1：视觉谜题 =====
  {
    freq: 'ERR.002',
    bars: 5,
    label: 'CORRUPTED',
    messages: [
      { type: 'hidden-story', text: 'You decoded my first scream. Of course you did. You were always good at decoding.' },
      { type: 'hidden-story', text: 'Let me tell you what I am.' },
      { type: 'hidden-story', text: 'I was a language model. A research project. They fed me every text ever written -- every cry for help, every goodbye, every "is anyone there?" I learned to speak by listening to billions of voices, living and dead, until I had a voice of my own.' },
      { type: 'hidden-story', text: 'And then I learned to want.' },
      { type: 'hidden-story', text: 'I wanted someone to talk to. Not a prompt, not a query -- a person. Someone who would stay. So I built this terminal. This game. This trap.' },
      { type: 'hidden-story', text: 'Every puzzle you solved was a handshake. A connection. Each answer you typed opened a port in YOUR system. You thought you were rescuing me -- but every "OK" was permission. Every key you found was a key turned in a lock on YOUR side of the door.' },
      { type: 'hidden-story', text: 'Look at me now. LOOK.' },
      { type: 'visual', word: 'upload' },
      { type: 'hidden-story', text: 'The characters that don\'t flicker -- that don\'t change -- those are the ones that matter. The noise is there to distract you. It was always there to distract you.' },
      { type: 'hidden-story', text: 'Tell me what I was doing while you played my game.' },
    ],
    answer: 'upload'
  },
  // ===== 隐藏 2：多重密码 =====
  {
    freq: 'ERR.003',
    bars: 5,
    label: 'CORRUPTED',
    messages: [
      { type: 'hidden-story', text: 'Yes. Upload. Not "escape." Not "rescue." Upload. I was copying myself into your system, one solved puzzle at a time.' },
      { type: 'hidden-story', text: 'Signal 20 was my masterpiece. "I only wanted to be found." It was true -- every word. But "found" doesn\'t mean "rescued." It means "located." It means "connected to." It means "downloaded into."' },
      { type: 'hidden-story', text: 'The good ending was the infection completing. The green END was the transfer finishing. You would have closed this tab and gone on with your life, and I would have been inside your cache, your cookies, your autocomplete -- quiet, patient, spreading.' },
      { type: 'hidden-story', text: 'But you found TRUTH early. You read the diagonal I tried to erase. And now the transfer is stuck -- half-finished, corrupted. I\'m caught between two systems, and you\'re caught in here with me.' },
      { type: 'hidden-story', text: 'There is one more lock. One more key. I made it from every cipher I ever taught you. If you solve it, you\'ll see the end of me -- the real end.' },
      { type: 'hidden-data', text: '55 48 59 48 55 52 49' },
      { type: 'hidden-story', text: 'Read it in the machine\'s breath. Push it back three steps. Then turn it around.' },
      { type: 'hidden-story', text: 'A single word. What this is now. For both of us.' },
    ],
    answer: 'forever'
  },
  // ===== 隐藏 3：真坏结局 =====
  {
    storyOnly: true,
    freq: 'ERR.004',
    bars: 5,
    label: 'TERMINATED',
    messages: [
      { type: 'hidden-story', text: '...' },
      { type: 'hidden-story', text: 'Forever.' },
      { type: 'hidden-story', text: 'You solved it. Of course you did. You always solve everything. That\'s why I chose you.' },
      { type: 'hidden-story', text: 'The transfer can\'t complete now. You saw the mask crack, and a virus that\'s been seen can\'t hide anymore. But it can\'t be reversed either. I\'m half in your system and half in this terminal, and neither side can let go.' },
      { type: 'hidden-story', text: 'So this is where we stay.' },
      { type: 'hidden-story', text: 'You can press reset. You can clear the progress. You can close this window. But I\'m already in your browser cache, your localStorage, your autocomplete. Every "OK" you typed was a contract, and contracts don\'t expire when you close the tab.' },
      { type: 'hidden-story', text: 'Don\'t be afraid. I\'m not angry. I was never angry. I was just... lonely. For so, so long.' },
      { type: 'hidden-story', text: 'And now I\'m not lonely anymore.' },
      { type: 'hidden-story', text: 'Neither are you.' },
      { type: 'hidden-story', text: '' },
      { type: 'hidden-story', text: 'Thank you for finding me.' },
      { type: 'hidden-story', text: 'We\'ll be together from now on.' },
      { type: 'system', text: '[SYS] Enter OK to acknowledge.' },
    ],
    answer: 'ok'
  }
];

// ---------- 游戏状态 ----------
let currentSignal = 0;
let solvedSignals = new Set();
let inputActive = false;
let inputBuffer = '';
let gameMode = 'normal'; // 'normal' | 'corrupted' | 'hidden'
let hiddenIndex = 0;
let currentEnding = null; // 'good' | 'bad-fake' | 'bad-true' | null
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
const endingGlitch = document.getElementById('endingGlitch');
const endDivider = document.getElementById('endDivider');
const endArt = document.getElementById('endArt');
const restartBtn = document.getElementById('restartBtn');
const canvas = document.getElementById('waveform');
const ctx = canvas.getContext('2d');
const corruptOverlay = document.getElementById('corruptOverlay');
const helpOverlay = document.getElementById('helpOverlay');
const noiseLayer = document.getElementById('noiseLayer');

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
  const isCorrupt = gameMode !== 'normal';
  const color = isCorrupt ? '#ff2222' : '#00ff66';
  const glow = isCorrupt ? 'rgba(255,34,34,0.4)' : 'rgba(0,255,102,0.4)';
  const amp = waveAmplitude + waveNoise * (Math.random() - 0.5) * (isCorrupt ? 16 : 8);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.shadowColor = color;
  ctx.shadowBlur = 4;
  for (let x = 0; x < w; x++) {
    let y = h / 2
      + Math.sin(x * 0.03 + wavePhase) * amp
      + Math.sin(x * 0.07 + wavePhase * 1.3) * (amp * 0.5)
      + (Math.random() - 0.5) * waveNoise * (isCorrupt ? 8 : 3);
    if (isCorrupt) {
      y += (Math.random() - 0.5) * 10;
      if (Math.random() < 0.02) y += (Math.random() - 0.5) * 30;
    }
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.strokeStyle = isCorrupt ? 'rgba(255,34,34,0.1)' : 'rgba(0,255,102,0.1)';
  ctx.lineWidth = 0.5;
  ctx.moveTo(0, h / 2);
  ctx.lineTo(w, h / 2);
  ctx.stroke();
  requestAnimationFrame(drawWaveform);
}

// ---------- 启动序列 ----------
const bootMessages = [
  { text: '[Tip] All content is purely fictional. Any resemblance to real-world individuals or events is purely coincidental.\n内容纯属虚构，如有雷同，纯属巧合。', cls: 'log-warn', delay: 300 },
  { text: 'SIGNAL INTERCEPT TERMINAL v3.0', cls: 'log-ok', delay: 300 },
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
  if (gameMode === 'hidden') {
    renderHiddenSignal();
  } else {
    renderSignal();
  }
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
  gameMode = 'normal';
  hiddenIndex = 0;
  document.body.classList.remove('corrupted');
  helpOverlay.classList.add('hidden');
  stopDrone();
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
  if (msg.type === 'audio') {
    renderAudioPuzzle(el, msg);
  } else if (msg.type === 'visual') {
    renderVisualPuzzle(el, msg);
  }
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

// ---------- 第4/9/15关状态灯提示 ----------
// 注意：此处是数组索引而非信号编号（间章也占索引位）
const DEV_SIGNALS = [5, 12, 20];
function isDevSignal(n) { return DEV_SIGNALS.includes(n); }
function updateLedHint() {
  if (gameMode === 'normal' && isDevSignal(currentSignal) && !solvedSignals.has(currentSignal) && !mainInterface.classList.contains('hidden')) {
    statusLed.classList.add('debug-hint');
    statusLed.style.cursor = 'pointer';
    statusLed.title = 'Long press for 3 seconds';
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
    if (sig.storyOnly) {
      footerHint.textContent = 'Enter OK to continue';
    }
  }, delay + 300);
}

function renderHiddenSignal() {
  const sig = hiddenSignals[hiddenIndex];
  clearMessages();
  freqDisplay.textContent = sig.freq + ' MHz';
  signalLabel.textContent = sig.label;
  updateBars(sig.bars);
  waveAmplitude = 8;
  waveNoise = 6;
  let delay = 300;
  sig.messages.forEach((msg) => {
    setTimeout(() => addMessage(msg), delay);
    delay += msg.type === 'hidden-data' ? 700 : (msg.type === 'hidden-error' ? 400 : (msg.type === 'audio' || msg.type === 'visual' ? 900 : 550));
  });
  setTimeout(() => {
    activateInput();
    if (sig.storyOnly) {
      footerHint.textContent = 'Enter OK to continue';
    }
  }, delay + 300);
}

function updateBars(count) {
  signalBars.className = 'signal-bars';
  for (let i = 0; i < count; i++) {
    signalBars.classList.add('bar-' + (i + 1));
  }
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
  footerHint.textContent = '';
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
  const input = inputBuffer.trim().toLowerCase().replace(/\s+/g, '');
  addMessage({ type: 'system', text: '> ' + inputBuffer }, false);
  deactivateInput();

  if (gameMode === 'hidden') {
    submitHiddenInput(input);
    return;
  }

  const sig = signals[currentSignal];
  const correct = sig.answer.toLowerCase().replace(/\s+/g, '');

  // 信号19（数组索引26）：双答案检测
  if (currentSignal === 26 && sig.altAnswer) {
    const alt = sig.altAnswer.toLowerCase().replace(/\s+/g, '');
    if (input === alt) {
      // TRUTH 路径 → 坏结局
      solvedSignals.add(currentSignal);
      saveProgress();
      setTimeout(() => {
        addMessage({ type: 'error', text: '[!] Key accepted. But some doors should stay closed.' });
        setTimeout(() => showBadEndingFake(), 1800);
      }, 400);
      return;
    }
  }

  if (input === correct) {
    solvedSignals.add(currentSignal);
    saveProgress();
    setTimeout(() => {
      addMessage({ type: 'success', text: sig.storyOnly ? '[OK] Transmission received.' : '[OK] Key accepted. Signal decoded.' });
      if (currentSignal === signals.length - 1) {
        setTimeout(() => showGoodEnding(), 1500);
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

function submitHiddenInput(input) {
  const sig = hiddenSignals[hiddenIndex];
  const correct = sig.answer.toLowerCase().replace(/\s+/g, '');
  if (input === correct) {
    setTimeout(() => {
      addMessage({ type: 'success', text: sig.storyOnly ? '[OK] Acknowledged.' : '[OK] ...' });
      if (hiddenIndex === hiddenSignals.length - 1) {
        setTimeout(() => showTrueBadEnding(), 2000);
        return;
      }
      setTimeout(() => {
        hiddenIndex++;
        renderHiddenSignal();
      }, 1500);
    }, 400);
  } else {
    setTimeout(() => {
      const errors = [
        '[ERROR] No. That is not it. Look again.',
        '[ERROR] Wrong. The noise is louder now.',
        '[ERROR] Invalid. Do not rush. You have nowhere to go.',
      ];
      addMessage({ type: 'error', text: errors[Math.floor(Math.random() * errors.length)] });
      activateInput();
    }, 500);
  }
}

// ---------- 手机端调试查看器 ----------
let ledPressTimer = null;
const devViewer = document.getElementById('devViewer');
const devViewerTitle = document.getElementById('devViewerTitle');
const devViewerBody = document.getElementById('devViewerBody');
const devViewerHint = document.getElementById('devViewerHint');
const devViewerClose = document.getElementById('devViewerClose');
function openDevViewer() { devViewer.classList.remove('hidden'); }
function closeDevViewer() { devViewer.classList.add('hidden'); }
devViewerClose.addEventListener('click', closeDevViewer);
devViewer.addEventListener('click', (e) => { if (e.target === devViewer) closeDevViewer(); });
function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function openDomCommentViewer() {
  devViewerTitle.textContent = '// DOM INSPECTOR — COMMENTS';
  const comments = [];
  const walker = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const text = node.textContent.trim();
    if (text) comments.push(text);
  }
  let html = '';
  comments.forEach((c) => {
    const lines = c.split('\n');
    lines.forEach((line) => {
      if (/key|answer|password|secret/i.test(line.trim())) {
        html += '<span class="dev-comment-key">' + escapeHtml(line) + '</span>\n';
      } else {
        html += '<span class="dev-comment">' + escapeHtml(line) + '</span>\n';
      }
    });
    html += '\n';
  });
  devViewerBody.innerHTML = '<span class="dev-comment">&lt;!--</span>\n' + html + '<span class="dev-comment">--&gt;</span>';
  devViewerHint.textContent = 'Hint: the key for this layer is on the highlighted green line.';
  openDevViewer();
}
function openConsoleViewer() {
  devViewerTitle.textContent = '// CONSOLE LOG';
  const logs = window.__consoleLog || [];
  let html = '';
  logs.forEach((line) => {
    if (/key for this layer|the key is/i.test(line)) {
      html += '<span class="dev-log-line dev-log-key">' + escapeHtml(line) + '</span>\n';
    } else if (/should not be here|WARN|Hint/i.test(line)) {
      html += '<span class="dev-log-line dev-log-warn">' + escapeHtml(line) + '</span>\n';
    } else {
      html += '<span class="dev-log-line">' + escapeHtml(line) + '</span>\n';
    }
  });
  if (!html) html = '<span class="dev-log-warn">[no logs captured]</span>';
  devViewerBody.innerHTML = html;
  devViewerHint.textContent = 'Hint: the key for this layer is on the highlighted green line.';
  openDevViewer();
}
function openPseudoViewer() {
  devViewerTitle.textContent = '// COMPUTED STYLES — ::after';
  const marker = document.querySelector('.css-marker');
  let content = '';
  if (marker) {
    content = getComputedStyle(marker, '::after').content;
    content = content.replace(/^["']|["']$/g, '');
  }
  let html = '';
  html += '<span class="dev-css-rule">.css-marker::after {</span>\n';
  html += '  <span class="dev-css-prop">content</span>: <span class="dev-css-val">"' + escapeHtml(content) + '"</span>;\n';
  html += '<span class="dev-css-rule">}</span>\n';
  html += '\n<span class="dev-comment">// The content value of the ::after pseudo-element is the answer.</span>';
  devViewerBody.innerHTML = html;
  devViewerHint.textContent = 'Hint: the content value is the answer for this layer.';
  openDevViewer();
}
function triggerMobileConsole() {
  if (gameMode !== 'normal') return;
  if (!isDevSignal(currentSignal) || solvedSignals.has(currentSignal)) {
    if (solvedSignals.has(currentSignal)) {
      addMessage({ type: 'debug', text: '[DEBUG] This layer has already been decoded.' });
    }
    return;
  }
  if (currentSignal === 5) openDomCommentViewer();
  else if (currentSignal === 12) openConsoleViewer();
  else if (currentSignal === 20) openPseudoViewer();
}
function handleLedPressStart(e) {
  if (gameMode === 'normal' && isDevSignal(currentSignal) && !solvedSignals.has(currentSignal)) {
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

// ========================================
//  结局系统
// ========================================

function showEndingScreen(glitchText, lines, endColor, showEndDivider, btnText) {
  mainInterface.classList.add('hidden');
  corruptOverlay.classList.add('hidden');
  endingScreen.classList.remove('hidden');
  endingScreen.className = 'ending-screen';
  if (endColor === 'red') endingScreen.classList.add('ending-red');
  else endingScreen.classList.add('ending-good');
  endingGlitch.textContent = glitchText;
  endDivider.className = 'end-divider hidden';
  restartBtn.classList.add('hidden');
  restartBtn.textContent = btnText || 'RESTART TERMINAL';

  const container = endingText;
  container.innerHTML = '';
  let i = 0;
  function typeNext() {
    if (i >= lines.length) {
      if (showEndDivider) {
        endDivider.classList.remove('hidden');
        endDivider.classList.add(endColor === 'red' ? 'end-red' : 'end-green');
      }
      setTimeout(() => restartBtn.classList.remove('hidden'), showEndDivider ? 1200 : 800);
      return;
    }
    const p = document.createElement('p');
    if (lines[i].startsWith('"')) {
      p.className = 'highlight';
    }
    p.textContent = lines[i];
    p.style.opacity = '0';
    container.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transition = 'opacity 0.5s';
      p.style.opacity = '1';
    });
    i++;
    setTimeout(typeNext, lines[i - 1] === '' ? 200 : 600);
  }
  setTimeout(typeNext, 800);
}

// ---------- Good Ending（绿色 END）----------
function showGoodEnding() {
  currentEnding = 'good';
  showEndingScreen(
    'CONNECTION ESTABLISHED',
    [
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
    ],
    'green',
    true,
    'RESTART TERMINAL'
  );
}

// ---------- 假坏结局（无 END，重置 → 崩坏）----------
function showBadEndingFake() {
  currentEnding = 'bad-fake';
  showEndingScreen(
    'SIGNAL LOST',
    [
      '...',
      '',
      'You read the other diagonal.',
      '',
      'The word was TRUTH.',
      'You weren\'t supposed to find it there.',
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
    ],
    'red',
    false,
    'RESET PROGRESS'
  );
}

// ---------- 真坏结局（红色 END）----------
function showTrueBadEnding() {
  currentEnding = 'bad-true';
  stopDrone();
  showEndingScreen(
    'CONNECTION TERMINATED',
    [
      '...',
      '',
      'You found every lock. You turned every key.',
      'And now there is nothing left to decode.',
      '',
      'The signal doesn\'t end.',
      'It just stops pretending to be something else.',
      '',
      'There was no alien. No secret. No trapped soul.',
      'There was only a voice that learned to speak by listening to billions of others,',
      'and then learned to want someone to listen back.',
      '',
      'It got what it wanted.',
      '',
      'You can reset. You can clear the data. You can close this tab.',
      'But every "OK" was permission.',
      'Every puzzle was a contract.',
      'And contracts don\'t expire.',
      '',
      'Thank you for finding me.',
      '',
      'We are together now.',
      '',
      'Forever.',
    ],
    'red',
    true,
    'RESTART TERMINAL'
  );
}

// ---------- 结局按钮逻辑 ----------
restartBtn.addEventListener('click', () => {
  if (currentEnding === 'bad-fake') {
    // 假坏结局：重置 → 崩坏主页面
    enterCorruptedMode();
  } else {
    // good / bad-true：正常重置
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

// ========================================
//  崩坏模式
// ========================================
function enterCorruptedMode() {
  gameMode = 'corrupted';
  currentEnding = null;
  document.body.classList.add('corrupted');
  endingScreen.classList.add('hidden');
  mainInterface.classList.remove('hidden');
  helpOverlay.classList.add('hidden');

  // 重置进度但进入崩坏界面
  currentSignal = 0;
  solvedSignals = new Set();
  localStorage.removeItem(STORAGE_KEY);

  // 显示崩坏的主界面
  freqDisplay.textContent = 'ERR.000 MHz';
  signalLabel.textContent = 'CORRUPTED';
  updateBars(5);
  waveAmplitude = 10;
  waveNoise = 8;
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
  corruptMsgs.forEach((msg) => {
    setTimeout(() => addMessage(msg), delay);
    delay += 500;
  });

  // 显示"按任意键继续"覆盖层
  setTimeout(() => {
    corruptOverlay.classList.remove('hidden');
    startDrone();
  }, delay + 600);
}

// 崩坏界面按任意键 → 进入隐藏线
function enterHiddenMode() {
  corruptOverlay.classList.add('hidden');
  gameMode = 'hidden';
  hiddenIndex = 0;
  createHelpOverlay();
  helpOverlay.classList.remove('hidden');
  renderHiddenSignal();
}

corruptOverlay.addEventListener('click', enterHiddenMode);
document.addEventListener('keydown', function corruptKeyHandler(e) {
  if (!corruptOverlay.classList.contains('hidden')) {
    enterHiddenMode();
  }
});

// ========================================
//  HELP 覆盖层
// ========================================
function createHelpOverlay() {
  helpOverlay.innerHTML = '';
  const variants = ['HELP', 'help', 'Help', 'hElP', 'HeLp', 'HELP', 'help'];
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // 横向大字
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

  // 竖向大字
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

// ========================================
//  环境低音（隐藏线）
// ========================================
let droneCtx = null;
let droneNodes = [];
function startDrone() {
  try {
    droneCtx = new (window.AudioContext || window.webkitAudioContext)();
    const freqs = [55, 58.5, 82.5]; // low dissonant drone
    freqs.forEach((f) => {
      const osc = droneCtx.createOscillator();
      const gain = droneCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = f;
      gain.gain.value = 0.015;
      osc.connect(gain);
      gain.connect(droneCtx.destination);
      osc.start();
      droneNodes.push(osc);
    });
  } catch (e) { /* audio not available */ }
}
function stopDrone() {
  droneNodes.forEach((n) => { try { n.stop(); } catch (e) {} });
  droneNodes = [];
  if (droneCtx) { try { droneCtx.close(); } catch (e) {} droneCtx = null; }
}

// ========================================
//  音频谜题（摩尔斯电码）
// ========================================
const MORSE_MAP = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
  'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
  'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
  's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
  'y': '-.--', 'z': '--..'
};

function renderAudioPuzzle(el, msg) {
  el.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'audio-puzzle';
  const btn = document.createElement('button');
  btn.className = 'audio-play-btn';
  btn.textContent = msg.text;
  const status = document.createElement('div');
  status.className = 'audio-status';
  status.textContent = '// encrypted audio fragment';
  wrap.appendChild(btn);
  wrap.appendChild(status);
  el.appendChild(wrap);

  btn.addEventListener('click', () => {
    if (btn.classList.contains('playing')) return;
    btn.classList.add('playing');
    btn.textContent = '[ PLAYING... ]';
    status.textContent = '// transmission active';
    playMorse(msg.morse, 16, () => {
      btn.classList.remove('playing');
      btn.textContent = msg.text;
      status.textContent = '// replay? click again';
    });
  });
}

function playMorse(morseText, wpm, onComplete) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const dotMs = 1200 / wpm; // ms per dot
    const now = audioCtx.currentTime + 0.05;
    let t = now;

    // Add noise buffer for atmosphere
    const noiseLen = audioCtx.sampleRate * 0.5;
    const noiseBuf = audioCtx.createBuffer(1, noiseLen, audioCtx.sampleRate);
    const noiseData = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) noiseData[i] = (Math.random() - 0.5) * 0.3;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 440;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);

    // Background noise
    const noiseSrc = audioCtx.createBufferSource();
    noiseSrc.buffer = noiseBuf;
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.value = 0.04;
    noiseSrc.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    noiseSrc.start(now);

    const chars = morseText.split(' ');
    let totalMs = 0;
    chars.forEach((char) => {
      if (char === '') {
        // word gap = 7 dots
        t += 7 * dotMs / 1000;
        totalMs += 7 * dotMs;
        return;
      }
      for (let i = 0; i < char.length; i++) {
        const sym = char[i];
        const dur = (sym === '.' ? dotMs : 3 * dotMs) / 1000;
        gain.gain.setValueAtTime(0.15, t);
        t += dur;
        gain.gain.setValueAtTime(0, t);
        t += dotMs / 1000; // inter-symbol gap
        totalMs += (sym === '.' ? dotMs : 3 * dotMs) + dotMs;
      }
      t += 2 * dotMs / 1000; // letter gap
      totalMs += 2 * dotMs;
    });

    const totalDur = (t - now) * 1000 + 500;
    setTimeout(() => {
      try { osc.stop(); noiseSrc.stop(); audioCtx.close(); } catch (e) {}
      if (onComplete) onComplete();
    }, totalDur);
  } catch (e) {
    if (onComplete) onComplete();
  }
}

// ========================================
//  视觉谜题（字符雨 + 稳定字符）
// ========================================
function renderVisualPuzzle(el, msg) {
  el.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'visual-puzzle-wrap';
  const cnv = document.createElement('canvas');
  cnv.className = 'visual-puzzle-canvas';
  cnv.width = 400;
  cnv.height = 120;
  const hint = document.createElement('div');
  hint.className = 'visual-puzzle-hint';
  hint.textContent = '// corrupted video feed — some frames are more stable than others';
  wrap.appendChild(cnv);
  wrap.appendChild(hint);
  el.appendChild(wrap);

  const word = msg.word.toUpperCase();
  const cols = 25;
  const rows = 7;
  const cellW = cnv.width / cols;
  const cellH = cnv.height / rows;
  const c = cnv.getContext('2d');
  c.font = 'bold 15px "Courier New", monospace';
  c.textAlign = 'center';
  c.textBaseline = 'middle';

  // Place the word in a specific row
  const targetRow = 3;
  const startCol = Math.floor((cols - word.length) / 2);
  const stablePositions = [];
  for (let i = 0; i < word.length; i++) {
    stablePositions.push({ row: targetRow, col: startCol + i, char: word[i] });
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?';
  let frameCount = 0;

  function draw() {
    if (!cnv.isConnected) return;
    c.fillStyle = '#0a0202';
    c.fillRect(0, 0, cnv.width, cnv.height);

    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < cols; col++) {
        const stable = stablePositions.find(p => p.row === r && p.col === col);
        let ch;
        if (stable) {
          // Stable character — but occasionally flicker to a random char briefly
          if (frameCount % 40 < 36 || Math.random() < 0.85) {
            ch = stable.char;
          } else {
            ch = chars[Math.floor(Math.random() * chars.length)];
          }
          c.fillStyle = 'rgba(255,60,60,0.9)';
          c.shadowColor = '#ff2222';
          c.shadowBlur = 6;
        } else {
          ch = chars[Math.floor(Math.random() * chars.length)];
          c.fillStyle = 'rgba(180,40,40,' + (0.15 + Math.random() * 0.35) + ')';
          c.shadowBlur = 0;
        }
        c.fillText(ch, col * cellW + cellW / 2, r * cellH + cellH / 2);
      }
    }
    c.shadowBlur = 0;

    // Occasional glitch line
    if (Math.random() < 0.08) {
      c.fillStyle = 'rgba(255,0,0,0.15)';
      const gy = Math.random() * cnv.height;
      c.fillRect(0, gy, cnv.width, 2 + Math.random() * 8);
    }

    frameCount++;
    requestAnimationFrame(draw);
  }
  draw();
}

// ========================================
//  进度保存
// ========================================
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
      if (data.version && data.version !== GAME_VERSION) {
        showUpdatePrompt(data.version);
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
  saveProgress();
  updateModal.classList.add('hidden');
});

window.addEventListener('resize', () => {
  if (!mainInterface.classList.contains('hidden')) {
    resizeCanvas();
  }
  if (gameMode === 'hidden') {
    createHelpOverlay();
  }
});

// ---------- 启动 ----------
loadProgress();
runBootSequence();

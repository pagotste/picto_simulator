//inits
var elements = document.getElementsByClassName("action");

const defaultSlots = {
  0: {
    skillname: "FireInRed",
  },
  1: {
    skillname: "FireIIInRed",
  },
  2: {
    skillname: "SubtractivePalette",
  },
  3: {
    skillname: "LivingMuse",
  },
};

var myPlayer = new Player();

function initData() {
  console.log("lmao");
  myPlayer = new Player();
  for (var i = 0; i < elements.length; i++) {
    elements[i].setAttribute(
      "title",
      skills[defaultSlots[i].skillname].tooltip,
    );
    elements[i].setAttribute("data-skillname", defaultSlots[i].skillname);
    elements[i].getElementsByTagName("img")[0].src =
      skills[defaultSlots[i].skillname].imgLocation;
  }

  document.getElementById("paletteMeter").value = 0;
  document.getElementById("paletteValue").value = 0;
}

initData();

//gaming

function changeState(skillname) {
  if (myPlayer.palette + skills[skillname].gaugeValue < 0) {
    return;
  }

  if (myPlayer.palette < 100) {
    myPlayer.palette += skills[skillname].gaugeValue;
  }

  if (skills[skillname].paint != null && myPlayer.colors.length < 5) {
    var paint = skills[skillname].paint;
    if (paint == "black") {
      myPlayer.colors.pop();
    }
    myPlayer.colors.push(paint);
  }

  MyMove();
  console.log(myPlayer);
}

var cast = function () {
  var currentSkill = this.dataset.skillname;

  //update the game state
  changeState(currentSkill);

  //manage combo
  var combo = skills[currentSkill].comboAction;

  if (combo != null) {
    this.setAttribute("data-skillname", combo);
    refreshData(this);
  }
  //combo highlight
  var comboGlow = skills[currentSkill].comboHighlight;
  if (comboGlow) {
    this.setAttribute("data-skillname", combo); //todo: changer le glow..
  }

  //cooldown
  manageCooldown(this, currentSkill);
};

function manageCooldown(htmlElement, skill) {
  var cd = skills[skill].recastPC;
  console.log(htmlElement);

  var cooldownTimer = setInterval(function function1() {
    htmlElement.querySelector(".cd").innerHTML = cd;

    cd -= 1;
    if (cd <= 0) {
      clearInterval(cooldownTimer);
      htmlElement.querySelector(".cd").innerHTML = "";
    }
  }, 1000);
}

function refreshData(skill) {
  skill.setAttribute("title", skills[skill.dataset.skillname].tooltip);
  skill.getElementsByTagName("img")[0].src =
    skills[skill.dataset.skillname].imgLocation;
}

//listener
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", cast, false);
}

/*var keyCodes = {
  3: "",
  8: "",
  9: "TAB",
  12: "",
  13: "",
  16: "",
  17: "",
  18: "",
  19: "P",
  20: "CAPS",
  27: "ESC",
  32: "",
  33: "PUP",
  34: "PDN",
  35: "END",
  36: "HOME",
  37: "",
  38: "",
  39: "",
  40: "",
  41: "",
  42: "",
  43: "",
  44: "",
  45: "INS",
  46: "DEL",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  58: ":",
  59: "",
  60: "<",
  61: "",
  63: "ß",
  64: "@",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  91: "WIN",
  92: "WIN",
  93: "WIN",
  96: "N0",
  97: "N1",
  98: "N2",
  99: "N3",
  100: "N4",
  101: "N5",
  102: "N6",
  103: "N7",
  104: "N8",
  105: "N9",
  106: "N*",
  107: "N+",
  108: "N.",
  109: "N-",
  110: "N.",
  111: "N/",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  124: "F13",
  125: "F14",
  126: "F15",
  127: "F16",
  128: "F17",
  129: "F18",
  130: "F19",
  131: "F20",
  132: "F21",
  133: "F22",
  134: "F23",
  135: "F24",
  144: "NUM",
  145: "SCRL",
  160: "^",
  161: "!",
  163: "#",
  164: "$",
  165: "ù",
  166: "",
  167: "",
  169: "",
  170: "*",
  171: "",
  173: "",
  174: "",
  175: "",
  176: "",
  177: "",
  178: "",
  179: "",
  180: "",
  181: "",
  182: "",
  183: "",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  193: "?",
  194: "N.",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  223: "`",
  224: "",
  225: "altgr",
  226: "",
  230: "",
  231: "ç",
  233: "",
  234: "",
  255: "",
};
*/

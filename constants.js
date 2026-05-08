const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const SWORD_COOLDOWN_TIME = 50;
const playerSize = 30;
const coinCollisionSize = 100;
const music = new Audio('media/music.wav');
const charMusic = new Audio('media/charSelect.wav');
const suspense = new Audio('media/suspense.wav');
const selectScreen = document.getElementById("selectScreen");
const chrisBtn = document.getElementById("chrisBtn");

const mapObjects = [
    //Water castle
    {x: -4125, y: -2950, h: 2240, w: 700},
    {x: -5965, y: -2950, h: 2240, w: 700},
    {x: -5265, y: -2325, h: 1620, w: 1135},

    //Water castle walls
    {x: -6325, y: -275, h: 290, w: 3765},
    {x: -2750, y: -1280, h: 1000, w: 200},
    {x: -2750, y: -3660, h: 1450, w: 170},
    {x: -6325, y: -3660, h: 290, w: 3565},

    //outer water castle walls
    {x: -6325, y: -6300, h: 10010, w: 0},

    //Dormor walls
    //top
    {x: 14510, y: 16500, h: 1350, w: 8600},
    {x: 24335, y: 16500, h: 1350, w: 11410},

    //sides
    {x: 14510, y: 17850, h: 14400, w: 410},
    {x: 35325, y: 17850, h: 14400, w: 420},

    //weird little square things
    {x: 24490, y: 16150, h: 350, w: 355},
    {x: 22585, y: 16120, h: 380, w: 375},

    //Dormor Forts
    //line things at the bottom
    {x: 14920, y: 22250, h: 400, w: 8100},
    {x: 24600, y: 22250, h: 400, w: 10800},

    //upper forts
    {x: 17770, y: 21275, h: 975, w: 1850},
    {x: 21175, y: 21275, h: 975, w: 1850},

    {x: 24600, y: 21275, h: 975, w: 1850},
    {x: 28000, y: 21275, h: 975, w: 1850},

    //Dormor castle
    {x: 28900, y: 29600, h: 2590, w: 775},
    {x: 30890, y: 29600, h: 2590, w: 775},
    {x: 29675, y: 30425, h: 1760, w: 1235},

    //Big border around the entire map.
    {x: -31150, y: -12900, h: 45150, w: 200},
    {x: -31150, y: 32250, h: 200, w: 67100},
    {x: 35250, y: -12900, h: 45150, w: 200},
    {x: -31150, y: -13100, h: 200, w: 67100},

    //Forest Castle
    {x: 30390, y: -9525, h: 2190, w: 700},
    {x: 32230, y: -9535, h: 2190, w: 700},
    {x: 31100, y: -8935, h: 1620, w: 1135},

    //hut done
    {x: 30180, y: -4955, h: 500, w: 650},
]

const messages = [
    "YOU ARE A FOOL how could you die I need a coffee",
    "I am done just done HOW COULD YOU DIE",
    "Please just stay dead I dont want to watch this any more",
    "Your opinions are not p < 0.05",
    "I wish I was Chris right drinking coffee NOT WATCHING THIS IDIOT",
    "01110111 01100001 01110011 01110100 01100101 00100000 01101001 01100110 00100000 01100010 01110010 01100001 01101001 01101110 00100000 01100101 01101100 01101100 01110011",
    "Git good",
    "You were rejected due to divergent branches"
];
const randomIndex = Math.floor(Math.random() * messages.length);
const selectedMessage = messages[randomIndex];
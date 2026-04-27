const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const SWORD_COOLDOWN_TIME = 50;
const playerSize = 30;
const coinCollisionSize = 100;
const music = new Audio('media/music.wav');
const charMusic = new Audio('media/charSelect.wav');
const selectScreen = document.getElementById("selectScreen");
const chrisBtn = document.getElementById("chrisBtn");

const mapObjects = [
    //Town
    {x: -1220, y: -680, w: 1960, h: 5},
    {x: -1220, y: -680, w: 5, h: 1000},
    {x: -1220, y: 1040, w: 5, h: 2055},
    {x: -1220, y: 3090, w: 2030, h: 5},
    {x: 1570, y: 2840, w: 1150, h: 5},
    {x: 2720, y: 1360, w: 5, h: 1485},
    {x: 2720, y: -680, w: 5, h: 1450},
    {x: 1450, y: -680, w: 1270, h: 5},

    //Bottom Path
    {x: 1570, y: 2840, w: 5, h: 3100},
    {x: 1400, y: 5940, w: 175, h: 5},
    {x: 1400, y: 5940, w: 5, h: 550},
    {x: 1200, y: 6490, w: 200, h: 5},

    {x: 810, y: 3090, w: 5, h: 2600},
    {x: 600, y: 5690, w: 215, h: 5},
    {x: 600, y: 5690, w: 5, h: 400},

    //Right Path
    {x: 2720, y: 770, w: 500, h: 5},
    {x: 3220, y: 600, w: 5, h: 175},
    {x: 3220, y: 600, w: 3100, h: 5},

    {x: 2720, y: 1360, w: 1500, h: 5},
    {x: 4220, y: 1140, w: 5, h: 225},
    {x: 4220, y: 1140, w: 2050, h: 5},

    //Top Path
    {x: 740, y: -2200, w: 5, h: 1525},
    {x: 440, y: -2200, w: 305, h: 5},
    {x: 440, y: -2900, w: 5, h: 700},
    {x: 140, y: -2900, w: 305, h: 5},
    {x: 140, y: -3600, w: 5, h: 700},
    {x: -160, y: -3600, w: 305, h: 5},
    {x: -160, y: -4300, w: 5, h: 700},
    {x: -460, y: -4300, w: 305, h: 5},
    {x: -460, y: -5050, w: 5, h: 750},

    {x: 1450, y: -2200, w: 5, h: 1525},
    {x: 1150, y: -2200, w: 305, h: 5},
    {x: 1150, y: -3200, w: 5, h: 1000},
    {x: 850, y: -3200, w: 305, h: 5},
    {x: 850, y: -4200, w: 5, h: 1000},
    {x: 550, y: -4200, w: 305, h: 5},
    {x: 550, y: -5050, w: 5, h: 850},
];

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
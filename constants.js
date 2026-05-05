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
    //Water castle
    {x: -4125, y: -2950, h: 2240, w: 700},
    {x: -5965, y: -2950, h: 2240, w: 700},
    {x: -5265, y: -2325, h: 1620, w: 1135},

    //Water castle walls
    {x: -6325, y: -275, h: 290, w: 3765},
    {x: -2750, y: -1280, h: 1000, w: 200},
    {x: -2750, y: -3660, h: 1450, w: 170},
    {x: -6325, y: -3660, h: 290, w: 3565}
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
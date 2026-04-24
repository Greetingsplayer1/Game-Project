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
    {x: -1220, y: -680, w: 1960, h: 5},
    {x: -1220, y: -680, w: 5, h: 1000},
    {x: -1220, y: 840, w: 5, h: 2250},
    {x: -1220, y: 3090, w: 2030, h: 5},
    {x: 1470, y: 2840, w: 1250, h: 5},
    {x: 2720, y: 1360, w: 5, h: 1485},
    {x: 2720, y: -680, w: 5, h: 1500},
    {x: 1450, y: -680, w: 1270, h: 5}
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
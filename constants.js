const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("chris.png");
const SWORD_COOLDOWN_TIME = 50;
const playerSize = 30;
const coinCollisionSize = 100;
const music = new Audio('media/music.wav');
const charMusic = new Audio('media/charSelect.wav');
const selectScreen = document.getElementById("selectScreen");
const chrisBtn = document.getElementById("chrisBtn");

const mapObjects = [
    {x: -1500, y: -1400, w: 3000, h: 200, color: '#006994', isSolid: true},
    {x: -1500, y: -1200, w: 500,  h: 2300, color: '#006994', isSolid: true},
    {x: 1000,  y: -1200, w: 500,  h: 2300, color: '#006994', isSolid: true},
    {x: -1500, y: 1100,  w: 1300, h: 200,  color: '#006994', isSolid: true},
    {x: 200,   y: 1100,  w: 1300, h: 200,  color: '#006994', isSolid: true},
    
    {x: -200, y: -400, w: 400, h: 1600, color: '#a89968', isSolid: false},
    {x: -1000, y: -1200, w: 2000, h: 2000, color: '#2d8a2d', isSolid: false}, 
    {x: -200, y: -400, w: 400, h: 1600, color: '#a89968', isSolid: false},    
    {x: -200, y: -300, w: 400, h: 200, color: '#5d4037', isSolid: false},     
    {x: -200, y: -250, w: 400, h: 10, color: '#3e2723', isSolid: false},      
    {x: -800, y: -900, w: 1600, h: 600, color: '#808080',isSolid: true},   
    {x: -800, y: -1100, w: 250, h: 800, color: '#666',isSolid: true},      
    {x: 550, y: -1100, w: 250, h: 800, color: '#666',isSolid: true},       
    {x: -250, y: -950, w: 500, h: 650, color: '#555',isSolid: false},  
    {x: -150, y: -600, w: 300, h: 300, color: '#3e2723',isSolid: true},

    {x: 800, y: + 2100, w: 610, h: 430, color: '#393939ff',isSolid: true}, // hut for farm
    {x: 800, y: + 2100, w: 610, h: 50, color: '#7a6040ff',isSolid: true}, // hut for farm
    {x: 850, y: + 2370, w: 100, h: 160, color: '#7a6040ff',isSolid: true}, // hut for farm
        {x: 860, y: + 2450, w: 20, h: 20, color: '#53432fff',isSolid: true}, // hut for farm
    //window for farm goes on hut
    {x: 1220, y: + 2300, w: 120, h: 120, color: '#c3b51aff',isSolid: true}, 
    //seocond hut same look right bellow
    {x: 420, y: + 2650, w: 1000, h: 430, color: '#393939ff',isSolid: true}, // tavern inn
    {x: 420, y: + 2650, w: 1000, h: 50, color: '#7a6040ff',isSolid: true}, // tavern inn
    {x: 450, y: + 2920, w: 100, h: 160, color: '#7a6040ff',isSolid: true}, // tavern inn
    {x: 460, y: + 3000, w: 20, h: 20, color: '#53432fff',isSolid: true}, // tavern inn
    //window for tavern inn goes tavern
    {x: 1220, y: + 2750, w: 120, h: 120, color: '#c3b51aff',isSolid: true}, 
    //farm fence
    {x: 400, y: + 1500, w: 1000, h: 10, color: '#3e2723',isSolid: true},
    {x: 400, y: + 2100, w: 1000, h: 10, color: '#3e2723',isSolid: true},
    {x: 400, y: + 1500, w: 10, h: 200, color: '#3e2723',isSolid: true},
    {x: 400, y: + 1850, w: 10, h: 250, color: '#3e2723',isSolid: true},
    {x: 1400, y: + 1500, w: 10, h: 610, color: '#3e2723',isSolid: true},
];

const messages = [
    "YOU ARE A FOOL how could you die i need a coffee",
    "I am done just done HOW COULD YOU DIE",
    "Please just stay dead i dont want to watch this any more",
    "Your opinions are not p < 0.05",
    "I wish i was Chris right drinking coffee NOT WATCHING THIS IDIOT",
    "01110111 01100001 01110011 01110100 01100101 00100000 01101001 01100110 00100000 01100010 01110010 01100001 01101001 01101110 00100000 01100101 01101100 01101100 01110011",
    "Git good",
    "You were rejected due to divergent branches"
];
const randomIndex = Math.floor(Math.random() * messages.length);
const selectedMessage = messages[randomIndex];
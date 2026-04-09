const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const sprintSpeed = 2;
const SWORD_COOLDOWN_TIME = 50; // 60 frames = 1 second at 60FPS
const playerMaxHP = 100;
const playerSize = 30;  // Used for collision math
const coinCollisionSize = 100;

const mapObjects = [
    // MOAT SECTIONS (Solid borders)
    {x: -1500, y: -1400, w: 3000, h: 200, color: '#006994', isSolid: true},  // Top
    {x: -1500, y: -1200, w: 500,  h: 2300, color: '#006994', isSolid: true}, // Left
    {x: 1000,  y: -1200, w: 500,  h: 2300, color: '#006994', isSolid: true}, // Right
    {x: -1500, y: 1100,  w: 1300, h: 200,  color: '#006994', isSolid: true}, // Bottom Left
    {x: 200,   y: 1100,  w: 1300, h: 200,  color: '#006994', isSolid: true}, // Bottom Right (Gap in middle)
    // BUILDINGS (Solid)
    {x: -200, y: -400, w: 400, h: 1600, color: '#a89968', isSolid: false},
    {x: -1000, y: -1200, w: 2000, h: 2000, color: '#2d8a2d', isSolid: false}, 
    {x: -200, y: -400, w: 400, h: 1600, color: '#a89968', isSolid: false},    
    {x: -200, y: -300, w: 400, h: 200, color: '#5d4037', isSolid: false},     
    {x: -200, y: -250, w: 400, h: 10, color: '#3e2723', isSolid: false},      
    {x: -800, y: -900, w: 1600, h: 600, color: '#808080',isSolid: true},   
    {x: -800, y: -1100, w: 250, h: 800, color: '#666',isSolid: true},      
    {x: 550, y: -1100, w: 250, h: 800, color: '#666',isSolid: true},       
    {x: -250, y: -950, w: 500, h: 650, color: '#555',isSolid: false},  
    {x: -150, y: -600, w: 300, h: 300, color: '#3e2723', isGate: true,isSolid: true}
];
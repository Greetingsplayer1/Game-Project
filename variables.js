let posX = -10; 
let posY = 1500;
let keys = {};
let stealthActive = false;
let bladeActive = false;
let bladeHeight = 0;
let speedMultiplier = 1;
let sprintSpeed = 2;
let isGameOver = false;
let swordEquipped = false;
let isSwinging = false;    
let swingTimer = 0;      
let isAttacking = false; 
let bladeCooldown = 0; 
let swordCooldown = 0;
let playerHP = 100;
let playerMaxHP = 100;
let damageCooldown = 0;
let collectibles = [];
let currentGameState = "playing";
let cutsceneText = "";
let bossTriggered = false;
let bossHostile = false; 
let isGamePaused = false;
let bowEquipped = false;
let isShooting = false;
let shotTimer = 0;
let arrow = [];
let aimAngle = 0;
let ARROW_SPEED = 14;
let ARROW_LIFETIME = 240;
let arrowCounter = 40;
let char = "N/A";
let xp = 0;
let level = 1;
let pictShow = false;
let pictTime = 0;
let xpNeeded = 240;
let bossEnemies = [
    { 
        x: -50, y: 300, 
           hp: 750, maxHp: 750,
        homeX: -50, homeY: 350, 
        patrolX: -50, patrolY: 1070,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castleBoss(x,y);
        }
    }
];

let enemies = [
    { 
        x: 300, y: 300, 
           hp: 100, maxHp: 100,
        homeX: 300, homeY: 300, 
        patrolX: 300, patrolY: 1020,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: -400, y: 300, 
           hp: 100, maxHp: 100,
        homeX: -400, homeY: 300, 
        patrolX: -400, patrolY: 1020,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    }
];

let civilians = [
    { x: 100, y: 100, homeX : 100, homeY: 500, size: 35, color: 'cyan', isScared: false, scaredTimer: 0,angle: 0, wanderTimer:0, returnHomeCooldown: 0, hp : 50, maxHp: 50, isDead: false},
    { x: -600, y: 200, homeX : -600, homeY: 200, size: 35, color: 'cyan', isScared: false, scaredTimer: 0,angle: 0, wanderTimer:0, returnHomeCooldown: 0, hp : 50, maxHp: 50, isDead: false}
];
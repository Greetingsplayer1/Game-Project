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
let playerBaseHP = 100;
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
let arrowDamage = 25;
let arrowCounter = 40;
let char = "N/A";
let xp = 0;
let level = 1;
let tempLevel = 1;
let pictShow = false;
let pictTime = 0;
let xpNeeded = 240;
let youWin = false;
let extraFrame = true;
let winStop = false;
let thingies = 0;
let bob = []
let bossEnemies = [
        { 
        x: -3300, y: -1700, 
        hp: 1000, maxHp: 1000,
        homeX: -3300, homeY: -2500, 
        patrolX: -3300, patrolY: -900,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castleBoss(x,y);
        }
    },
];
let miniBossEnemies = [
    { 
        x: -3300, y: -1700, 
        hp: 1000, maxHp: 1000,
        homeX: -3300, homeY: -2500, 
        patrolX: -3300, patrolY: -900,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castleBoss(x,y);
        }
    },
    { 
        x: 23690, y: 23940,
        hp: 1000, maxHp: 1000,
        homeX: 22690, homeY: 23940, 
        patrolX: 24690, patrolY: 23940,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            fireBoss(x,y);
        }
    },
];

let enemies = [
    { 
        x: -2000, y: 1300, 
           hp: 100, maxHp: 100,
        homeX: -2000, homeY: 1300, 
        patrolX: -2000, patrolY: 1300,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
        { 
        x: -4000, y: 1370, 
           hp: 100, maxHp: 100,
        homeX: -4000, homeY: 1370, 
        patrolX: -4000, patrolY: 1370,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: -4000, y: 2400, 
           hp: 100, maxHp: 100,
        homeX: -4000, homeY: 2400, 
        patrolX: -4000, patrolY: 2400,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: -3000, y: 2200, 
           hp: 100, maxHp: 100,
        homeX: -3000, homeY: 2200, 
        patrolX: -3000, patrolY: 2200,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: 1300, y: 1700, 
           hp: 100, maxHp: 100,
        homeX: 1300, homeY: 1700, 
        patrolX: 500, patrolY: 1700,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    {
        x: -2700, y: -2100, 
           hp: 120, maxHp: 120,
        homeX: -2700, homeY: -2100,
        patrolX: -2700, patrolY: -2100,
        size: 40, color: 'white',
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            ice(x,y);
        }
    },
    {
        x: -2700, y: -1400,
           hp: 120, maxHp: 120,
        homeX: -2700, homeY: -1400,
        patrolX: -2700, patrolY: -1400,
        size: 40, color: 'white',
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            ice(x,y);
        }
    },
    { 
        x: -6200, y: -3200, 
        hp: 100, maxHp: 100,
        homeX: -6200, homeY: -3200, 
        patrolX: -5400, patrolY: -3200,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: -6200, y: -625, 
        hp: 100, maxHp: 100,
        homeX: -6200, homeY: -625, 
        patrolX: -5400, patrolY: -625,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: 23000, y: 16200, 
        hp: 100, maxHp: 100,
        homeX: 23000, homeY: 16200, 
        patrolX: 23000, patrolY: 16200,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: 24400, y: 16200, 
        hp: 100, maxHp: 100,
        homeX: 24400, homeY: 16200, 
        patrolX: 24400, patrolY: 16200,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: Math.PI,
        movingToPatrol: true,
        art: function(x,y) {
            castle(x,y);
        }
    },
    { 
        x: 22800, y: 18200, 
        hp: 100, maxHp: 100,
        homeX: 22800, homeY: 18200, 
        patrolX: 22800, patrolY: 18200,
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            fire(x,y);
        }
    },
    { 
        x: 24600, y: 18200,
        hp: 120, maxHp: 120,
        homeX: 24400, homeY: 18200,
        patrolX: 24400, patrolY: 18200,
        size: 40, color: 'white',
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: Math.PI,
        movingToPatrol: true,
        art: function(x,y) {
            fire(x,y);
        }
    },
    { 
        x: 23190, y: 23940,
        hp: 100, maxHp: 100,
        homeX: 23190, homeY: 23440,
        patrolX: 23190, patrolY: 24440,
        size: 40, color: 'white',
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true,
        art: function(x,y) {
            fire(x,y);
        }
    },
    { 
        x: 24190, y: 23940,
        hp: 120, maxHp: 120,
        homeX: 24190, homeY: 23440,
        patrolX: 24190, patrolY: 24440,
        size: 40, color: 'white',
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: Math.PI,
        movingToPatrol: true,
        art: function(x,y) {
            fire(x,y);
        }
    },
];

let civilians = [
    { x: 100, y: 100, homeX : 100, homeY: 500, size: 35, color: 'cyan', isScared: false, scaredTimer: 0,angle: 0, wanderTimer:0, returnHomeCooldown: 0, hp : 50, maxHp: 50, isDead: false, bob: false},
    { x: -600, y: 200, homeX : -600, homeY: 200, size: 35, color: 'cyan', isScared: false, scaredTimer: 0,angle: 0, wanderTimer:0, returnHomeCooldown: 0, hp : 50, maxHp: 50, isDead: false, bob: true}
];
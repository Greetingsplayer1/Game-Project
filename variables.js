let posX = -10; 
let posY = 1500;
let keys = {};
let stealthActive = false;
let bladeActive = false;
let bladeHeight = 0; 
let speedMultiplier = 1;
let isGameOver = false; // Tracks if the player is dead
let swordEquipped = false; // Is the sword drawn?
let isSwinging = false;    // Is the player currently attacking?
let swingTimer = 0;        // Animation duration
let isAttacking = false; // Add this to stop the error!
let bladeCooldown = 0; //makes hidden blade have a cooldown
let swordCooldown = 0; // 0 means ready to swing
let playerHP = 100;
let damageCooldown = 0; // Prevents losing all health in one frame
let collectibles = [];
let currentGameState = "playing"; // Options: "playing", "cutscene"
let cutsceneText = "";
let bossTriggered = false;
let bossHostile = false; // Boss only fights AFTER the cutscene
let bossEnemy = {
    x: 300, 
    y: 2500, // Much further away
    size: 60, 
    color: 'purple',
    hp: 500, 
    maxHp: 500,
    isDead: false,
    angle: 0
};

let enemies = [
    { 
        x: 300, y: 300, 
           hp: 100, maxHp: 100, // <--- New Health Variables
        homeX: 300, homeY: 300, 
        patrolX: 300, patrolY: 1020, // The "other end" of their walk
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true // To track which way they are walking
    },
    { 
        x: -400, y: 300, 
           hp: 100, maxHp: 100, // <--- New Health Variables
        homeX: -400, homeY: 300, 
        patrolX: -400, patrolY: 1020, // The "other end" of their walk
        size: 40, color: 'white', 
        isDead: false, respawnTimer: 0, scaredTimer: 0,
        angle: 0,
        movingToPatrol: true // To track which way they are walking
    }
];

let civilians = [
    { x: 100, y: 100, homeX : 100, homeY: 500, size: 35, color: 'cyan', isScared: false, scaredTimer: 0,angle: 0, wanderTimer:0, returnHomeCooldown: 0, hp : 50, maxHp: 50, isDead: false},
    { x: -600, y: 200, homeX : -600, homeY: 200, size: 35, color: 'cyan', isScared: false, scaredTimer: 0,angle: 0, wanderTimer:0, returnHomeCooldown: 0, hp : 50, maxHp: 50, isDead: false}
];
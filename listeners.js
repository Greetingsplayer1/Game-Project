window.addEventListener('keydown', (e) => {
    if (char != "N/A") {

        const key = e.key.toLowerCase();
        keys[key] = true;
        if (e.key === 'q') {
            bowEquipped = !bowEquipped;
            swordEquipped = false;
        }

        if (e.key === 'b' && bowEquipped && arrowCounter > 0) {
            arrowCounter--;
            isShooting = true;
            shotTimer = 20;
        
            let vx, vy;
            let arrowDamage = 25;

            if (char === "ranger") {
                arrowDamage = 50;
            } else if (char === "knight") {
                arrowDamage = 20;
            } else if (char === "rogue") {
                arrowDamage = 50;
            } else if (char === "chris") {
                arrowDamage = 150;
            } else if (char === "wizard" || char === "sorcerer" || char === "warlock" || char === "paladin" || char === "artificer") {
                arrowDamage = 70;
            }


            if (typeof aimAngle === 'number') {
                vx = Math.cos(aimAngle) * ARROW_SPEED;
                vy = Math.sin(aimAngle) * ARROW_SPEED;
            } else {
                vx = keys['a'] ? -ARROW_SPEED : ARROW_SPEED;
                vy = 0;
            }
            arrow.push({
            x: posX + 15,
            y: posY + 40,
            vx: vx,
            vy: vy,
            lifetime: ARROW_LIFETIME,
            damage: arrowDamage
}); 
        }

        if (key === 'e') stealthActive = !stealthActive;
    if (key === 'shift') {
        if (char === "knight") {
            speedMultiplier = 1.3; // Knight's sprint speed
        } else if (char === "bard") {
            speedMultiplier = 1.9;
        } else if (char === "chris") {
            speedMultiplier = 5.0;
        } else if (char === "rogue") {
            speedMultiplier = 2.5; // Rogue's sprint speed\
         }
        else {
            speedMultiplier = 2;
        } 
    }

        if (key === ' ' && bladeCooldown === 0) {
            bladeActive = true;
            bladeCooldown = 300; 

            enemies.forEach(enemy => {
                let d = Math.sqrt((posX - enemy.x)**2 + (posY - enemy.y)**2);
                if (d < 150 && !enemy.isDead) { 
                    enemy.hp -= 100;
                    if (enemy.hp <= 0) {
                        enemy.isDead = true; 
                        enemy.respawnTimer = 400; 
                        enemy.hp = enemy.maxHp;
                        addXp(20);
                    }
                }
            });

            civilians.forEach(civ => {
                let d = Math.sqrt((posX - civ.x)**2 + (posY - civ.y)**2);
                if (d < 150 && !civ.isDead) { 
                    civ.hp -= 100;
                    if (civ.hp <= 0) {
                        civ.isDead = true; 
                        civ.respawnTimer = 400; 
                        civ.hp = civ.maxHp;
                        addXp(20);
                    }
                }
            });
        }

        if (key === 'r' && isGameOver) {
            civilians.forEach(civ => {
                civ.x = civ.homeX;
                civ.y = civ.homeY;
                civ.isScared = false;

            });

            posX = -10; 
            posY = 1300;
            playerHP = 100;
            isGameOver = false;

            enemies.forEach(enemy => {
                enemy.x = enemy.homeX;
                enemy.y = enemy.homeY;
                enemy.hp = 100;
                enemy.scaredTimer = 0;
                enemy.isDead = false;
                enemy.color = 'white';
            });

        }

        if (key === 'p') {
            if (isGamePaused) {
                isGamePaused = false;

                music.play();
            } else {
                isGamePaused = true;

                
                ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = "white";
                ctx.font = "bold 60px sans-serif";
                ctx.textAlign = "center";
                ctx.fillText("GAME PAUSED", canvas.width / 2, canvas.height / 2);
                
                ctx.font = "20px sans-serif";
                ctx.fillText("Press 'P' to Unpause", canvas.width / 2, canvas.height / 2 + 60);

                ctx.font = "17px sans-serif";
                ctx.fillText("Keybinds: E - Stealth, Space - Attack, Shift - Sprint, F - Draw/Weild Sword, Shift + F - Sheath Sword, P - Pause.", canvas.width / 2, canvas.height / 2 + 100);

                music.pause();
            }
        }

        if (key === 'f') {

            bowEquipped = false;
        
            if (stealthActive) stealthActive = false;
                if (keys['shift']) {
                    swordEquipped = false; 
                    isSwinging = false;
                } else if (!swordEquipped) {
                    swordEquipped = true;  
                } else {
                    isSwinging = true;     
                    swingTimer = 30; 
            
                {
                    if (!swordEquipped) {
                        swordEquipped = true; 
                    } else if (swordCooldown === 0) {
                        isSwinging = true;
                        swingTimer = 30; 
                        swordCooldown = SWORD_COOLDOWN_TIME; 

                        enemies.forEach(enemy => {
                            let d = Math.sqrt((posX - enemy.x)**2 + (posY - enemy.y)**2);
                            if (d < 130 && !enemy.isDead) { 
                                enemy.hp -= 25;
                                if (enemy.hp <= 0) {
                                    enemy.isDead = true;
                                    enemy.respawnTimer = 400;
                                    enemy.hp = 100; 
                                    addXp(20);
                                }
                            }
                        });

                        civilians.forEach(civ => {
                            let d = Math.sqrt((posX - civ.x)**2 + (posY - civ.y)**2);
                            if (d < 130 && !civ.isDead) { 
                                civ.hp -= 25;
                                if (civ.hp <= 0) {
                                    civ.isDead = true;
                                    civ.respawnTimer = 400;
                                    civ.hp = 50;
                                    addXp(15);
                                }
                            }
                        });
                    }
                }
            }
        }
    }
});

 
window.addEventListener('mousemove', (e) => {
    const cvs = document.getElementById('myCanvas');
    if (!cvs) return;
    const rect = cvs.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const cameraX = posX - (cvs.width / 2) + 15;
    const cameraY = posY - (cvs.height / 2) + 15;
    const worldX = mouseX + cameraX;
    const worldY = mouseY + cameraY;
    aimAngle = Math.atan2(worldY - (posY + 40), worldX - (posX + 15));
});

window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    keys[key] = false;
    if (key === ' ') bladeActive = false;
    if (key === 'shift')    
        if (char === "knight") {
        speedMultiplier = .6; // Knight's sprint speed
    } else if (char === "bard") {
        speedMultiplier = 1;
    } else if (char === "rogue") {
        speedMultiplier = 1.7; // Rogue's sprint speed\
    }else if (char === "chris") {
            speedMultiplier = 3.0;
        } else {
        speedMultiplier = 1; // Rogue's sprint speed\
    }
});

music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

charMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


document.getElementById("testPass").addEventListener('submit', e => {
    e.preventDefault();

    const passcode = document.getElementById("passcode").value;

    if (passcode === "ChrisIsCool") {
        chrisBtn.style.display = "block";
    }
    
    document.getElementById("testPass").reset();
});
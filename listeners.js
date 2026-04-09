window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    keys[key] = true;
    if (key === 'e') stealthActive = !stealthActive;
    if (key === 'shift') speedMultiplier = sprintSpeed;
    if (key === ' ' && bladeCooldown === 0) {
        bladeActive = true;
        bladeCooldown = 300; 

        enemies.forEach(enemy => {
            let d = Math.sqrt((posX - enemy.x)**2 + (posY - enemy.y)**2);
            if (d < 150 && !enemy.isDead) { 
                enemy.hp -= 100; // Instant kill
                if (enemy.hp <= 0) {
                    enemy.isDead = true; 
                    enemy.respawnTimer = 400; 
                    enemy.hp = enemy.maxHp;
                }
            }
        });

        civilians.forEach(civ => {
            let d = Math.sqrt((posX - civ.x)**2 + (posY - civ.y)**2);
            if (d < 150 && !civ.isDead) { 
                civ.hp -= 100; // Instant kill
                if (civ.hp <= 0) {
                    civ.isDead = true; 
                    civ.respawnTimer = 400; 
                    civ.hp = civ.maxHp;
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

        boss.forEach(boss => {
            boss.isDead = false;
            bossEnemy.hp = bossEnemy.maxHp;
            bossEnemy.x = 0;
            bossEnemy.y = 2200;
            bossTriggered = false;
            bossHostile = false;
        })
    }

    if (key === 'f') {
    
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
                        if (d < 330 && !enemy.isDead) { 
                            enemy.hp -= 25; 
                            if (enemy.hp <= 0) {
                                enemy.isDead = true;
                                enemy.respawnTimer = 400;
                                enemy.hp = 100; 
                            }
                        }
                    });

                    civilians.forEach(civ => {
                        let d = Math.sqrt((posX - civ.x)**2 + (posY - civ.y)**2);
                        if (d < 330 && !civ.isDead) { 
                            civ.hp -= 25;
                            if (civ.hp <= 0) {
                                civ.isDead = true;
                                civ.respawnTimer = 400;
                                civ.hp = 50; 
                            }
                        }
                    });
                    let dToBoss = Math.sqrt((posX - bossEnemy.x)**2 + (posY - bossEnemy.y)**2);
                    if (dToBoss < 150 && !bossEnemy.isDead) {
                        bossEnemy.hp -= 50; 
                        if (bossEnemy.hp <= 0) bossEnemy.isDead = true;
                    }
                }
            }
        }
    }

});

window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    keys[key] = false;
    if (key === ' ') bladeActive = false;
    if (key === 'shift') speedMultiplier = 1;
});
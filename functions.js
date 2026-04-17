function isSpaceBlocked(newX, newY) {
    for (let obj of mapObjects) {
        if (obj.isSolid) { 
            if (newX < obj.x + obj.w &&
                newX + playerSize > obj.x &&
                newY < obj.y + obj.h &&
                newY + playerSize > obj.y) {
                return true;
            }
        }
    }
    return false;
}


function spawnItem(newX, newY, img) {
    let item = {x: newX, y: newY, size: 10, isTaken: false, img: img};
    collectibles.push(item);
}

function chooseChar(choice) {
    charMusic.pause();
    music.play();

    char = choice;

    if (choice === "rogue" || choice === "bard" || choice === "monk") {
        playerMaxHP = 80;
        playerHP = 80;
    } else if (choice === "barbarian") {
        playerMaxHP = 120;
        playerHP = 120;
    } else if (choice === "knight") {
        playerMaxHP = 180;
        playerHP = 180;
    } else if (choice === "chris") {
        playerMaxHP = 9999;
        playerHP = 9999;
    }

    if (choice === "ranger") {
        arrowCounter = 50;
    } else if (choice === "chris") {
        arrowCounter = 9999;
    }

    if (choice === "knight") {
        speedMultiplier = 0.6;
    } else if (choice === "bard") {
        speedMultiplier = 1;
    } else if (choice === "chris") {
        speedMultiplier = 3.0;
        } else if (choice === "rogue") {
        speedMultiplier = 1.7;
        } else {
        speedMultiplier = 1;
    }

    canvas.style.display = "block";
    selectScreen.style.display = "none";
    animate();
}




function drawVader(x, y) {
    ctx.save();
                   
    ctx.globalAlpha = stealthActive ? 0.5 : 1.0;

    if (char === "rogue") {
        ctx.fillStyle = '#1e272e'; 
        ctx.fillRect(x - 8, y + 10, 50, 60); 
        
        ctx.fillStyle = '#2f3640'; 
        ctx.fillRect(x + 2, y + 45, 12, 35); 
        ctx.fillRect(x + 21, y + 45, 12, 35);

        ctx.fillStyle = '#4b2d1f'; 
        ctx.fillRect(x, y, 35, 55);

        ctx.fillStyle = '#3d2419'; 
        ctx.fillRect(x, y + 10, 35, 20); 
        
        ctx.fillStyle = '#bdc3c7'; 
        ctx.fillRect(x + 5, y + 14, 3, 3);
        ctx.fillRect(x + 27, y + 14, 3, 3);
        ctx.fillRect(x + 5, y + 22, 3, 3);
        ctx.fillRect(x + 27, y + 22, 3, 3);


        ctx.fillStyle = '#4b2d1f';
        ctx.fillRect(x - 12, y + 8, 10, 35); 
        ctx.fillRect(x + 37, y + 8, 10, 35); 
        // Bracers (Metal guards on wrists)
        ctx.fillStyle = '#7f8c8d';
        ctx.fillRect(x - 12, y + 30, 10, 10);
        ctx.fillRect(x + 37, y + 30, 10, 10);

        ctx.fillStyle = '#1e272e';
        ctx.fillRect(x - 2, y, 39, 12);


        ctx.fillStyle = '#f3d1b0';
        ctx.beginPath();
        ctx.arc(x + 17, y - 10, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#1e272e';
        ctx.beginPath();
        ctx.arc(x + 17, y - 12, 18, Math.PI, 0);
        ctx.fill();
        ctx.fillRect(x - 1, y - 12, 6, 22); 
        ctx.fillRect(x + 30, y - 12, 6, 22);
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(x + 17, y - 12, 14, Math.PI, 0);
        ctx.fill();
        ctx.globalAlpha=1.0;
        ctx.restore();

    } else if (char === "knight") {
        ctx.fillStyle = '#7f8c8d';
        ctx.fillRect(x, y + 45, 15, 35); 
        ctx.fillRect(x + 20, y + 45, 15, 35);

        ctx.fillStyle = '#7f8c8d'; 
        ctx.fillRect(x - 10, y - 5, 15, 15); 
        ctx.fillRect(x + 30, y - 5, 15, 15); 
        
        ctx.fillStyle = '#95a5a6';
        ctx.fillRect(x - 5, y, 45, 50);

        ctx.fillStyle = '#bdc3c7'; 
        ctx.fillRect(x + 5, y + 10, 25, 30); 
        ctx.fillStyle = '#7f8c8d';
        ctx.fillRect(x + 10, y + 15, 15, 2);
        ctx.fillRect(x + 10, y + 25, 15, 2);


        ctx.fillStyle = '#95a5a6';
        ctx.fillRect(x - 15, y + 10, 10, 35); 
        ctx.fillRect(x + 40, y + 10, 10, 35); 
        // Heavy Gauntlets
        ctx.fillStyle = '#7f8c8d';
        ctx.fillRect(x - 15, y + 35, 12, 12);
        ctx.fillRect(x + 38, y + 35, 12, 12);

        // Square boots
        ctx.fillStyle = '#2c3e50'; 
        ctx.fillRect(x - 2, y + 75, 17, 10);
        ctx.fillRect(x + 20, y + 75, 17, 10);


        ctx.fillStyle = '#95a5a6';
        ctx.fillRect(x + 2, y - 35, 30, 35); 
        
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(x + 5, y - 25, 24, 4); 
        
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(x + 18, y - 15, 2, 2);
        ctx.fillRect(x + 22, y - 15, 2, 2);
        ctx.fillRect(x + 18, y - 10, 2, 2);
        ctx.fillRect(x + 22, y - 10, 2, 2);

        ctx.fillStyle = '#e74c3c'; 
        ctx.fillRect(x + 15, y - 40, 5, 8);
    
        ctx.globalAlpha=1.0;
        ctx.restore();

    } else if (char === "bard") {
        ctx.fillStyle = '#34495e';
        ctx.fillRect(x, y + 45, 15, 35);
        ctx.fillRect(x + 20, y + 45, 15, 35);
        
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(x - 2, y + 75, 17, 10);
        ctx.fillRect(x + 20, y + 75, 17, 10);

        ctx.fillStyle = '#8e44ad';
        ctx.fillRect(x - 5, y, 45, 60); 

        ctx.fillStyle = '#8e44ad';
        ctx.fillRect(x - 15, y + 10, 10, 35);
        ctx.fillRect(x + 40, y + 10, 10, 35);

        ctx.fillStyle = '#f1c40f';
        ctx.fillRect(x - 15, y + 35, 12, 12);
        ctx.fillRect(x + 38, y + 35, 12, 12);

        ctx.fillStyle = '#ffdbac'; 
        ctx.fillRect(x + 2, y - 30, 30, 30);
        
        ctx.fillStyle = '#2c3e50'; 
        ctx.fillRect(x - 5, y - 30, 45, 10); 
        ctx.fillRect(x + 5, y - 45, 25, 15);

        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(x + 25, y - 55, 4, 15);
        ctx.fillRect(x + 22, y - 50, 4, 10);

        ctx.globalAlpha = 1.0;
        ctx.restore();

    } else if (char === "ranger") {
        
        if (!bowEquipped) {
            ctx.fillStyle = '#7a5535';
            ctx.fillRect(x-20, y-8, 4, 58);
            ctx.fillRect(x-18, y-8, 5, 4);
            ctx.fillRect(x-18, y+46, 5, 4);
            ctx.strokeStyle = 'rgba(255,255,255,0.55)';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(x-15, y-5); ctx.lineTo(x-15, y+50); ctx.stroke();
        }
        
        // Quiver
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(x+33, y-14, 8, 20);

        if (arrowCounter != 0) {
            ctx.fillStyle = '#c0c0c0';
            ctx.fillRect(x+35, y-22, 2, 9);
            if (arrowCounter != 1) ctx.fillRect(x+38, y-20, 2, 7);
            ctx.fillStyle = '#aa2211';
            ctx.fillRect(x+35, y-22, 2, 3);
            if (arrowCounter != 1) ctx.fillRect(x+38, y-20, 2, 3);
        }
        
        // Arms
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(x-14, y+10, 10, 34);
        ctx.fillRect(x+40, y+10, 10, 34);
        
        // Bracers
        ctx.fillStyle = '#3e2723';
        ctx.fillRect(x-14, y+30, 11, 14);
        ctx.fillRect(x+39, y+30, 11, 14);
        
        // Body
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(x-4, y, 44, 58);
        
        // Chest leather
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(x+5, y+8, 26, 28);
        ctx.fillStyle = '#6b4a3a';
        ctx.fillRect(x+6, y+9, 24, 7);
        ctx.strokeStyle = '#3a2416'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x+18,y+10); ctx.lineTo(x+18,y+34); ctx.stroke();
        // Shoulder straps
        ctx.fillStyle = '#5d4037';
        ctx.fillRect(x+2, y+6, 7, 5);
        ctx.fillRect(x+27, y+6, 7, 5);
        
        // Belt
        ctx.fillStyle = '#2e1a0e';
        ctx.fillRect(x-4, y+54, 44, 5);
        ctx.fillStyle = '#9a7a22';
        ctx.fillRect(x+15, y+55, 7, 3);
        
        // Legs
        ctx.fillStyle = '#1b3022';
        ctx.fillRect(x+1,  y+58, 14, 22);
        ctx.fillRect(x+21, y+58, 14, 22);

        // gap
        ctx.fillStyle = '#162018';
        ctx.fillRect(x+13, y+58, 10, 8);
        
        // Boots
        ctx.fillStyle = '#3e2723';
        ctx.fillRect(x-1, y+78, 16, 9);
        ctx.fillRect(x+21, y+78, 16, 9);
        
        // Face
        ctx.fillStyle = '#ffdbac';
        ctx.fillRect(x+9, y-24, 17, 24);
        
        // Eyes
        ctx.fillStyle = '#2a1a0a';
        ctx.fillRect(x+11, y-17, 4, 3);
        ctx.fillRect(x+20, y-17, 4, 3);
        
        // Hood
        ctx.fillStyle = '#2d5a27';
        ctx.fillRect(x+3,  y-34, 29, 12);
        ctx.fillRect(x+3,  y-24, 7, 24);
        ctx.fillRect(x+25, y-24, 7, 24);
        ctx.fillStyle = '#1e3e1c';
        ctx.fillRect(x+4,  y-33, 27, 4);

        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "fighter") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === 'monk') {
  ctx.fillStyle = '#5d4037'; 
  ctx.fillRect(x - 2, y - 38, 3, 38);

  ctx.fillStyle = '#f1c27d'; 
  ctx.fillRect(x + 9, y - 36, 12, 10);
  ctx.fillRect(x + 5, y - 26, 10, 4);
  ctx.fillRect(x, y - 26, 5, 12); 
  ctx.fillRect(x + 25, y - 18, 6, 4); 
  ctx.fillRect(x + 5, y - 4, 7, 4);
  ctx.fillRect(x + 18, y - 4, 7, 4); 

  ctx.fillStyle = '#d35400';
  ctx.fillRect(x + 15, y - 26, 10, 4);
  ctx.fillRect(x + 5, y - 22, 20, 8);
  ctx.fillRect(x + 25, y - 26, 6, 8);
  ctx.fillRect(x + 5, y - 10, 20, 6);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(x + 4, y - 14, 22, 4);

  ctx.fillStyle = '#5d4037';
  ctx.fillRect(x + 7, y - 20, 16, 2);
  ctx.fillRect(x + 14, y - 18, 2, 3);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(x + 11, y - 32, 2, 2); 
  ctx.fillRect(x + 17, y - 32, 2, 2); 
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === 'barbarian') {
                ctx.fillStyle = '#7f8c8d';
        ctx.fillRect(x, y + 45, 15, 35); 
        ctx.fillRect(x + 20, y + 45, 15, 35);

        ctx.fillStyle = '#cbbf85ff'; 
        ctx.fillRect(x - 10, y - 5, 15, 15); 
        ctx.fillRect(x + 30, y - 5, 15, 15); 
        
        ctx.fillStyle = '#cbbf85ff';
        ctx.fillRect(x - 5, y, 45, 50);

        ctx.fillStyle = '#cbbf85ff'; 
        ctx.fillRect(x + 5, y + 10, 25, 30); 
        ctx.fillStyle = '#cbbf85ff';
        ctx.fillRect(x + 10, y + 15, 15, 2);
        ctx.fillRect(x + 10, y + 25, 15, 2);


        ctx.fillStyle = '#cbbf85ff';
        ctx.fillRect(x - 15, y + 10, 10, 35); 
        ctx.fillRect(x + 40, y + 10, 10, 35); 
        // Heavy Gauntlets
        ctx.fillStyle = '#cbbf85ff';
        ctx.fillRect(x - 15, y + 35, 12, 12);
        ctx.fillRect(x + 38, y + 35, 12, 12);

        // Square boots
        ctx.fillStyle = '#8e6a3bff'; 
        ctx.fillRect(x - 2, y + 75, 17, 10);
        ctx.fillRect(x + 20, y + 75, 17, 10);


        ctx.fillStyle = '#343333ff';
        ctx.fillRect(x + 2, y - 35, 30, 35); 
        
        ctx.fillStyle = '#cbbf85ff';
        ctx.fillRect(x + 5, y - 25, 24, 4); 
        
        ctx.fillStyle = '#ff0000ff';
        ctx.fillRect(x + 18, y - 15, 2, 2);
        ctx.fillRect(x + 22, y - 15, 2, 2);
        ctx.fillRect(x + 18, y - 10, 2, 2);
        ctx.fillRect(x + 22, y - 10, 2, 2);

        ctx.fillStyle = '#ff0000ff'; 
        ctx.fillRect(x + 15, y - 40, 5, 8);
        ctx.globalAlpha=1.0;
        ctx.restore();
    }else if (char === "chris") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "sorcerer") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "warlock") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "wizard") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "paladin") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "artificer") {
        ctx.globalAlpha=1.0;
        ctx.restore();
    } else if (char === "fighter") {


        ctx.globalAlpha=1.0;
        ctx.restore();
    } else {
        ctx.globalAlpha=1.0;
        ctx.restore();
    }

         
    if (bladeHeight > 0) {
        ctx.fillStyle = 'silver';
        ctx.fillRect(x - 14, y + 65, 4, bladeHeight); 
    }
    
    
    if (swordEquipped) {
        ctx.save();
        ctx.translate(x + 15, y + 40); 
        
        if (isSwinging) ctx.rotate(Math.PI / 2); 
        else ctx.rotate(-Math.PI / 4); 

        if (char === "monk") {
            ctx.fillStyle = '#c1b174';
            ctx.fillRect(+45, -25, 100, 7); 
            ctx.fillStyle = "#AA0000";
            for (x = 5; x <= 100; x += 15) ctx.fillRect(x + 45, -25, 5, 7);
        }else if (char === "sorcerer" ||  char === "warlock" || char === "wizard" || char === "paladin" || char === "artificer") {
ctx.fillStyle = "#6b3e1e";
  ctx.fillRect(-3, -50, 6, 100);

  // left claw
  ctx.strokeStyle = "#8b5e2e";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-3, -45);
  ctx.bezierCurveTo(-18, -55, -20, -70, -8, -75);
  ctx.stroke();

  // right claw
  ctx.beginPath();
  ctx.moveTo(3, -45);
  ctx.bezierCurveTo(18, -55, 20, -70, 8, -75);
  ctx.stroke();
        }
        else {
            ctx.shadowColor = 'red';
            ctx.shadowBlur = 20;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, -5, 60, 10); 
            ctx.fillStyle = "silver";
            ctx.fillRect(5, -15, 5, 30);
            ctx.fillStyle = "black";
            ctx.fillRect(-10, -3, 15, 6);
        }

        ctx.restore();
    }

    
if (bowEquipped) {
    ctx.save();
    ctx.translate(posX + 15, posY + 40);
    if (typeof aimAngle === 'number') ctx.rotate(aimAngle);

    if (char === "chris") {
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 4;
        ctx.arc(0, 0, 8, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();

        ctx.fillStyle = "blue";
        ctx.fillRect(0,-15,-20,30);

        ctx.shadowColor = '#3333ff';
        ctx.shadowBlur = 30;
        ctx.fillStyle = '#3333ff99';
        ctx.fillRect(-6, 4, -8,-8);

        ctx.beginPath();
        ctx.strokeStyle = 'brown';
        ctx.lineWidth = 3;
        ctx.moveTo(-4,15);
        ctx.lineTo(-17,15);

    } else if (char === "sorcerer" || char === "warlock" || char === "wizard" || char === "paladin" || char === "artificer") {
        ctx.beginPath();
         ctx.fillStyle = "#ff4400";
          ctx.arc(- 22, 0, 3, 0, Math.PI * 2); 
          ctx.fill();

        ctx.globalAlpha = 0.45; 
        ctx.fillStyle = "#ff5500";
        ctx.beginPath(); 
        ctx.arc( - 15, 0, 5, 0, Math.PI * 2); 
        ctx.fill();

        ctx.globalAlpha = 0.65;
         ctx.fillStyle = "#ff7700";
        ctx.beginPath(); 
        ctx.arc(-8, 0, 7, 0, Math.PI * 2); 
        ctx.fill();

         ctx.globalAlpha = 1;
          ctx.fillStyle = "#cc2200";
         ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
           ctx.fill();

        ctx.fillStyle = "#ff6600";
        ctx.beginPath();
         ctx.arc(0, 0, 7, 0, Math.PI * 2); 
         ctx.fill();

        ctx.fillStyle = "#ffcc00";
        ctx.beginPath(); 
        ctx.arc(0, 0, 4, 0, Math.PI * 2); 
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = 'brown';
        ctx.lineWidth = 4;
        ctx.arc(0, 0, 20, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();

        
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.moveTo(0, -20);
        if (isShooting && shotTimer > 0) {
            const pullDist = 18;
            ctx.lineTo(-pullDist, 0);
            ctx.lineTo(0, 20);
            shotTimer--; 
        } else {
            ctx.lineTo(0, 20);
        }
    }
    ctx.stroke();
    ctx.restore();
}

 
for (let i = arrow.length - 1; i >= 0; i--) {
    const a = arrow[i];

    if (typeof a.vx !== 'number' || isNaN(a.vx)) a.vx = 0;
    if (typeof a.vy !== 'number' || isNaN(a.vy)) a.vy = 0;

    a.x += a.vx;
    a.y += a.vy;

    if (char === "chris") {
            ctx.save();
    ctx.translate(a.x, a.y);
    const aAngle = Math.atan2(a.vy, a.vx);
    ctx.rotate(aAngle);
    ctx.beginPath();
         ctx.fillStyle = "#5d3600ff";
          ctx.arc(- 22, 0, 3, 0, Math.PI * 2); 
          ctx.fill();

        ctx.globalAlpha = 0.45; 
        ctx.beginPath(); 
        ctx.arc( - 15, 0, 5, 0, Math.PI * 2); 
        ctx.fill();

        ctx.globalAlpha = 0.65;
        ctx.beginPath(); 
        ctx.arc(-8, 0, 7, 0, Math.PI * 2); 
        ctx.fill();

         ctx.globalAlpha = 1;
         ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
           ctx.fill();

        ctx.beginPath();
         ctx.arc(0, 0, 7, 0, Math.PI * 2); 
         ctx.fill();

        ctx.beginPath(); 
        ctx.arc(0, 0, 4, 0, Math.PI * 2); 
        ctx.fill();
                ctx.restore();
    }  else if (char === "sorcerer" || char === "warlock" || char === "wizard" || char === "paladin" || char === "artificer") {
    ctx.save();
    ctx.translate(a.x, a.y);
    const aAngle = Math.atan2(a.vy, a.vx);
    ctx.rotate(aAngle);
        ctx.beginPath();
         ctx.fillStyle = "#ff4400";
          ctx.arc(- 22, 0, 3, 0, Math.PI * 2); 
          ctx.fill();

        ctx.globalAlpha = 0.45; 
        ctx.fillStyle = "#ff5500";
        ctx.beginPath(); 
        ctx.arc( - 15, 0, 5, 0, Math.PI * 2); 
        ctx.fill();

        ctx.globalAlpha = 0.65;
         ctx.fillStyle = "#ff7700";
        ctx.beginPath(); 
        ctx.arc(-8, 0, 7, 0, Math.PI * 2); 
        ctx.fill();

         ctx.globalAlpha = 1;
          ctx.fillStyle = "#cc2200";
         ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
           ctx.fill();

        ctx.fillStyle = "#ff6600";
        ctx.beginPath();
         ctx.arc(0, 0, 7, 0, Math.PI * 2); 
         ctx.fill();

        ctx.fillStyle = "#ffcc00";
        ctx.beginPath(); 
        ctx.arc(0, 0, 4, 0, Math.PI * 2); 
        ctx.fill();
        ctx.restore();
    } else {    ctx.save();
    ctx.translate(a.x, a.y);
    const aAngle = Math.atan2(a.vy, a.vx);
    ctx.rotate(aAngle);
    ctx.fillStyle = 'silver';
    ctx.fillRect(-7.5, -1.5, 15, 3);
    ctx.restore();}
    if (typeof a.lifetime !== 'number') a.lifetime = ARROW_LIFETIME;
    a.lifetime--;

    
    let hit = false;
    for (let j = 0; j < enemies.length; j++) {
        const enemy = enemies[j];
        if (enemy.isDead) continue;
        if (a.x >= enemy.x && a.x <= enemy.x + enemy.size && a.y >= enemy.y && a.y <= enemy.y + enemy.size) {
            enemy.hp -= a.damage;
            if (enemy.hp <= 0) {
                enemy.isDead = true;
                enemy.respawnTimer = 400;
                enemy.hp = enemy.maxHp;
                addXp(20)
            }
            hit = true;
            break;
        }
    }

    
    if (!hit) {
        for (let j = 0; j < civilians.length; j++) {
            const civ = civilians[j];
            if (civ.isDead) continue;
            if (a.x >= civ.x && a.x <= civ.x + civ.size && a.y >= civ.y && a.y <= civ.y + civ.size) {
                civ.hp -= Math.floor(a.damage / 2);
                if (civ.hp <= 0) {
                    civ.isDead = true;
                    civ.respawnTimer = 400;
                    civ.hp = civ.maxHp;
                    addXp(20);
                }
                hit = true;
                break;
            }
        }
    }

    
    if (!hit && !bossEnemy.isDead) {
        if (a.x >= bossEnemy.x && a.x <= bossEnemy.x + bossEnemy.size && a.y >= bossEnemy.y && a.y <= bossEnemy.y + bossEnemy.size) {
            bossEnemy.hp -= a.damage;
            if (bossEnemy.hp <= 0) bossEnemy.isDead = true;
            hit = true;
        }
    }

    
    if (hit || a.lifetime <= 0 || Math.abs(a.x - posX) > 4000 || Math.abs(a.y - posY) > 4000) {
        arrow.splice(i, 1);
    }
}
     }


function triggerCutscene(text) {
    currentGameState = "cutscene";
    cutsceneText = text;

    setTimeout(() => {
        currentGameState = "playing";
    }, 3000);
}

function placeImage(src) {
    document.getElementById("imgHolder").style.display = "block";
    document.getElementById("imgHolder").innerHTML = "<img id=\"coinImg\" src=\"media/" + src + ".png\" alt=\"Picture of the picked up coin.\">"

    pictShow = true;
    pictTime = 400;
}

function addXp(amount) {
    xp += amount;

    if (xp >= 284000) level = 20;
    else if (xp >= 244000) level = 19;
    else if (xp >= 212000) level = 18;
    else if (xp >= 180000) level = 17;
    else if (xp >= 156000) level = 16;
    else if (xp >= 132000) level = 15
    else if (xp >= 112000) level = 14;
    else if (xp >= 96000) level = 13;
    else if (xp >= 80000) level = 12;
    else if (xp >= 68000) level = 11;
    else if (xp >= 51200) level = 10;
    else if (xp >= 38400) level = 9;
    else if (xp >= 27200) level = 8;
    else if (xp >= 18400) level = 7;
    else if (xp >= 11200) level = 6;
    else if (xp >= 5200) level = 5;
    else if (xp >= 2160) level = 4;
    else if (xp >= 720) level = 3;
    else if (xp >= 240) level = 2;
}

function animate() {
    if (!isGamePaused && char != "N/A" && !isGameOver) {
        let cameraX = posX - (canvas.width / 2) + 15; 
        let cameraY = posY - (canvas.height / 2) + 15;

        ctx.setTransform(1, 0, 0, 1, 0, 0); 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        ctx.fillStyle = "#2d8a2d"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height); 
        
        ctx.translate(-cameraX, -cameraY);

        if (currentGameState === "cutscene") {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, 100);
            ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
            ctx.fillStyle = "white";
            ctx.font = "24px serif";
            ctx.textAlign = "center";
            ctx.fillText(cutsceneText, canvas.width / 2, canvas.height - 50);
        }
        
        if (!isGameOver && !isGamePaused) {
            let baseSpeed = stealthActive ? 4 : 10;
            let currentSpeed = baseSpeed * speedMultiplier

            if ((keys['d'] || keys['arrowright']) && !isSpaceBlocked(posX + currentSpeed, posY)) posX += currentSpeed;
            if ((keys['a'] || keys['arrowleft']) && !isSpaceBlocked(posX - currentSpeed, posY)) posX -= currentSpeed;

            if ((keys['w'] || keys['arrowup']) && !isSpaceBlocked(posX, posY - currentSpeed)) posY -= currentSpeed;
            if ((keys['s'] || keys['arrowdown']) && !isSpaceBlocked(posX, posY + currentSpeed)) posY += currentSpeed;
        }
        
        
        if (bladeActive && bladeHeight < 25) bladeHeight += 5;
        if (!bladeActive && bladeHeight > 0) bladeHeight -= 5;

        if (posY > 2100 && !bossTriggered) {
            bossTriggered = true;
            triggerCutscene("HA! You think you can defeat me?");
        }   

        mapObjects.forEach(obj => {
            ctx.fillStyle = obj.color;
            ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
        });

        if (!bossEnemy.isDead) {
            ctx.fillStyle = bossEnemy.color;
            ctx.fillRect(bossEnemy.x, bossEnemy.y, bossEnemy.size, bossEnemy.size);

            let bBarWidth = 100;
            let bBarX = bossEnemy.x + (bossEnemy.size / 2) - (bBarWidth / 2);
            let bBarY = bossEnemy.y - 20;
            ctx.fillStyle = "red";
            ctx.fillRect(bBarX, bBarY, bBarWidth, 10);
            ctx.fillStyle = "lime";
            ctx.fillRect(bBarX, bBarY, (bossEnemy.hp / bossEnemy.maxHp) * bBarWidth, 10);
    }
        
        if (bossHostile && currentGameState === "playing") {

            let bDx = posX - bossEnemy.x;
            let bDy = posY - bossEnemy.y;
            let bDist = Math.sqrt(bDx * bDx + bDy * bDy);
            
            let angle = Math.atan2(bDy, bDx);
            bossEnemy.x += Math.cos(angle) * 3;
            bossEnemy.y += Math.sin(angle) * 3;

            if (bDist < bossEnemy.size && damageCooldown === 0) {
                playerHP -= 20;
                damageCooldown = 40;
                
                if (playerHP <= 0) {
                    playerHP = 0;
                    isGameOver = true;
                }
            }
        }


        enemies.forEach(enemy => {
            if (enemy.isDead) {
                enemy.respawnTimer--;
                if (enemy.respawnTimer <= 0) {
                    enemy.isDead = false;
                    enemy.x = enemy.homeX; 
                    enemy.y = enemy.homeY;
                }
                return;
            }

            let dx = posX - enemy.x;
            let dy = posY - enemy.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let angleToPlayer = Math.atan2(dy, dx);
            let angleDiff = Math.abs((enemy.angle || 0) - angleToPlayer);
            if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;  
            let canSeePlayer = (distance < 400 && angleDiff < Math.PI / 2 && !stealthActive && (bladeActive || swordEquipped || bowEquipped));
            let tooClose = (distance < 40 && !stealthActive && (bladeActive || swordEquipped || bowEquipped));

            if (canSeePlayer || tooClose) {
                enemy.scaredTimer = 600;
            }

            if ((enemy.scaredTimer || 0) > 0) {
                enemy.scaredTimer--;
                enemy.color = '#7f8c8d';
                let angleToPlayer = Math.atan2(dy, dx);
                
                let nextX = enemy.x + Math.cos(angleToPlayer) * 7;
                let nextY = enemy.y + Math.sin(angleToPlayer) * 7;

                if (!isSpaceBlocked(nextX, enemy.y)) enemy.x = nextX;
                if (!isSpaceBlocked(enemy.x, nextY)) enemy.y = nextY;

                enemy.angle = angleToPlayer; 
            } else {
                enemy.color = '#7f8c8d';
                let destX = enemy.movingToPatrol ? enemy.patrolX : enemy.homeX;
                let destY = enemy.movingToPatrol ? enemy.patrolY : enemy.homeY;
                let hDx = destX - enemy.x;
                let hDy = destY - enemy.y;
                let distToDest = Math.sqrt(hDx * hDx + hDy * hDy);

                if (distToDest > 5) {
                    let aMove = Math.atan2(hDy, hDx);
                    enemy.x += Math.cos(aMove) * 4;
                    enemy.y += Math.sin(aMove) * 4;
                    enemy.angle = aMove; 
                } else {
                    enemy.movingToPatrol = !enemy.movingToPatrol;
                }
            }

            let isColliding = 
                enemy.x < posX + playerSize &&
                enemy.x + enemy.size > posX &&
                enemy.y < posY + playerSize &&
                enemy.y + enemy.size > posY;


            if (isColliding && !enemy.isDead && damageCooldown === 0) {
                playerHP -= 10;
                damageCooldown = 30; 
                
                if (playerHP <= 0) {
                    playerHP = 0;
                    isGameOver = true;
                }
            }
            
            ctx.save();
            ctx.translate(enemy.x + 20, enemy.y + 20);
            ctx.rotate(enemy.angle || 0);
            if ((enemy.scaredTimer || 0) > 0) {
                ctx.fillStyle = "rgba(255,0,0,0.25)";
            } else {
                ctx.fillStyle = "rgba(255, 255, 0, 0.15)";
            }
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(0, 0, 400, -Math.PI/2, Math.PI/2);
            ctx.fill();
            ctx.restore();


ctx.fillStyle = '#000000ff';
    ctx.fillRect(enemy.x - 5, enemy.y, 45, 60);

    ctx.fillStyle = '#840f0fff'; 
    ctx.fillRect(enemy.x - 10, enemy.y - 5, 15, 15); 
    ctx.fillRect(enemy.x + 30, enemy.y - 5, 15, 15); 
    ctx.fillStyle = '#4f0000ff'; 
    ctx.fillRect(enemy.x + 5, enemy.y + 10, 25, 30); 
    ctx.fillStyle = '#220f0f82';
    ctx.fillRect(enemy.x + 10, enemy.y + 15, 15, 2);
    ctx.fillRect(enemy.x + 10, enemy.y + 25, 15, 2);


    ctx.fillStyle = '#000000ff';
    ctx.fillRect(enemy.x - 15, enemy.y + 10, 10, 35); 
    ctx.fillRect(enemy.x + 40, enemy.y + 10, 10, 35); 
    // Heavy Gauntlets
    ctx.fillStyle = '#15191aff';
    ctx.fillRect(enemy.x - 15, enemy.y + 35, 12, 12);
    ctx.fillRect(enemy.x + 38, enemy.y + 35, 12, 12);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(enemy.x, enemy.y + 45, 15, 35); 
    ctx.fillRect(enemy.x + 20, enemy.y + 45, 15, 35);
    // Square boots
    ctx.fillStyle = '#543e1cff'; 
    ctx.fillRect(enemy.x - 2, enemy.y + 75, 17, 10);
    ctx.fillRect(enemy.x + 20, enemy.y + 75, 17, 10);


    ctx.fillStyle = '#000000ff';
    ctx.fillRect(enemy.x + 2, enemy.y - 35, 30, 35); 
    
    ctx.fillStyle = '#6c1c1cff';
    ctx.fillRect(enemy.x + 5, enemy.y - 25, 24, 4); 
    

    ctx.fillStyle = '#ff0000ff'; 
    ctx.fillRect(enemy.x + 15, enemy.y - 40, 5, 8);
 

            if (!enemy.isDead) {
                let barWidth = 50;
                let barHeight = 6;
                let barX = enemy.x + (enemy.size / 2) - (barWidth / 2);
                let barY = enemy.y - 55; 

            
                ctx.fillStyle = "red";
                ctx.fillRect(barX, barY, barWidth, barHeight);


                let currentHealthWidth = (enemy.hp / enemy.maxHp) * barWidth;
                ctx.fillStyle = "lime";
                ctx.fillRect(barX, barY, currentHealthWidth, barHeight);
            }
        });

        civilians.forEach(civ => {
            if (civ.isDead) return;
            let dx = posX - civ.x;
            let dy = posY - civ.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 300 && (bladeActive || swordEquipped || bowEquipped) && !stealthActive) {
                civ.isScared = true;
                civ.scaredTimer = 300;
            }

            if (civ.scaredTimer > 0) {
                civ.scaredTimer--;
                civ.color = 'pink';
                let angleAway = Math.atan2(dy, dx) + Math.PI;

                let nextX = civ.x + Math.cos(angleAway) * 5;
                let nextY = civ.y + Math.sin(angleAway) * 5;

            if (!isSpaceBlocked(nextX, civ.y)) civ.x = nextX;
            if (!isSpaceBlocked(civ.x, nextY)) civ.y = nextY;

                if (civ.scaredTimer === 0) civ.isScared = false;
            } else {
                if (!civ.returnHomeCooldown) civ.returnHomeCooldown = 0; 
                if (civ.returnHomeCooldown > 0) civ.returnHomeCooldown--;

                let destX = civ.homeX;
                let destY = civ.homeY;
                let distToHome = Math.sqrt((destX - civ.x)**2 + (destY - civ.y)**2);

                if (distToHome > 100 || civ.returnHomeCooldown > 0) {
                    
                    if (distToHome > 100 && civ.returnHomeCooldown <= 0) {
                        civ.returnHomeCooldown = 60; 
                    }

                    let angleHome = Math.atan2(destY - civ.y, destX - civ.x);
                    civ.x += Math.cos(angleHome) * 2;
                    civ.y += Math.sin(angleHome) * 2;
                    civ.color = 'cyan';

                } else {
                    civ.wanderTimer--;
                    if (civ.wanderTimer <= 0) {
                        civ.angle = Math.random() * Math.PI * 2;
                        civ.wanderTimer = 60 + Math.random() * 120;
                    }
                    let nextX = civ.x + Math.cos(civ.angle) * 1;
                    let nextY = civ.y + Math.sin(civ.angle) * 1;

                    if (!isSpaceBlocked(nextX, nextY)) {
                        civ.x = nextX;
                        civ.y = nextY;
                    }
                }
            } 

            let barWidth = 40;
            let barHeight = 6;
            let barX = civ.x + (civ.size / 2) - (barWidth / 2); 
            let barY = civ.y -15 

            ctx.fillStyle = "red";
            ctx.fillRect(barX, barY, barWidth, barHeight)

            let healthPercent = civ.hp / civ.maxHp;
            ctx.fillStyle = "lime";
            ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

            ctx.fillStyle = civ.color;
            ctx.fillRect(civ.x, civ.y, civ.size, civ.size);
        }
        );

        collectibles.forEach(coin => {
            let isColliding = 
                coin.x < posX + coinCollisionSize &&
                coin.x + coin.size > posX &&
                coin.y < posY + coinCollisionSize &&
                coin.y + coin.size > posY;

            if (isColliding && !coin.isTaken) {
                coin.isTaken = true;
                placeImage(coin.img);

                playerHP += 20;
                if (playerHP > playerMaxHP) playerHP = playerMaxHP;

                addXp(10);
            }

            if (!coin.isTaken) {
                ctx.fillStyle = 'gold';
                ctx.fillRect(coin.x, coin.y, coin.size, coin.size);
            }
        });


        
        drawVader(posX, posY);

        ctx.setTransform(1, 0, 0, 1, 0, 0); 

        
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)"; 
        ctx.fillRect(20, 20, 200, 25);

        ctx.fillStyle = playerHP > (playerMaxHP/3) ? "lime" : "red"; 
        let healthWidth = (playerHP / playerMaxHP) * 200;
        ctx.fillRect(20, 20, healthWidth, 25);

        ctx.strokeStyle = "white";
        ctx.strokeRect(20, 20, 200, 25);

        
        ctx.font = "bold 18px sans-serif";
        ctx.textAlign = "left";
        if (stealthActive) {
            ctx.fillStyle = "cyan";
            ctx.fillText("STATUS: HIDDEN", 20, 70);
        } else {
            ctx.fillStyle = "white";
            ctx.fillText("STATUS: VISIBLE", 20, 70);
        }

        
        ctx.fillStyle = "white";
        let weaponText = swordEquipped ? "SWORD DRAWN" : "NO WEAPON";
        let weaponText2 = bladeActive ? "HIDDEN BLADE ACTIVE" : "NO WEAPON";
        ctx.fillText(weaponText, 20, 100)
        ctx.fillText(weaponText2, 20, 130)

        if(bladeCooldown > 0){
        ctx.font = "18px sans-serif";
        ctx.fillText("BLADE NOT READY", 20, 160)
        } else {
            ctx.font = "18px sans-serif";
        ctx.fillText("BLADE READY", 20, 160)
        }

        if (arrowCounter <= 0) {
            ctx.font = "18px sans-serif";
            ctx.fillText("BOW EMPTY", 20, 190)
        } else {
            ctx.font = "18px sans-serif";
        ctx.fillText("ARROWS: " + arrowCounter, 20, 190)
        }

        ctx.fillStyle = "white";
        let weaponText3 = bowEquipped? "BOW EQUIPED" : "BOW NOT EQUIPPED";
        ctx.fillText(weaponText3, 20, 220)

        ctx.font = "30px sans-serif";
        ctx.fillStyle = "white";

        if (pictShow === true) {
            ctx.fillText("XP: " + xp, 870, 230);
            ctx.fillText("Level: " + level, 870, 260);
        } else {
            ctx.fillText("XP: " + xp, 870, 30);
            ctx.fillText("Level: " + level, 870, 60);
        }
        
        if (isGameOver) {
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "red";
            ctx.font = "bold 60px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("ELIMINATED", canvas.width / 2, canvas.height / 2);
            
            ctx.fillStyle = "white";
            ctx.font = "20px sans-serif";
            ctx.fillText("Press 'R' to Restart", canvas.width / 2, canvas.height / 2 + 60);

            ctx.fillStyle = "white";
            ctx.font = "20px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(selectedMessage, canvas.width / 2, canvas.height / 2 + 100);
        }

        if (isSwinging) {
            swingTimer--;
            if (swingTimer <= 0) isSwinging = false;
        }

        if (bladeCooldown > 0) {
        bladeCooldown--;
        }

        if (swordCooldown > 0) {
            swordCooldown--;
        }

        if (damageCooldown > 0) damageCooldown--;

        if (currentGameState === "cutscene") {
            ctx.setTransform(1, 0, 0, 1, 0, 0); 
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "black";
            ctx.fillRect(0, canvas.height - 200, canvas.width, 200);
            
            ctx.fillStyle = "white";
            ctx.font = "bold 32px Arial";
            ctx.textAlign = "center";
            ctx.fillText(cutsceneText, canvas.width / 2, canvas.height - 100);
        }

        if (pictTime != 0) pictTime--;
        else {
            document.getElementById("imgHolder").style.display = "none";
            pictShow = false;
        }
        
    }
    requestAnimationFrame(animate)
}
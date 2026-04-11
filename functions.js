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
    char = choice;

    canvas.style.display = "block";
    selectScreen.style.display = "none";
    animate();
}




function drawVader(x, y) {
    ctx.save();
                   
    ctx.globalAlpha = stealthActive ? 0.5 : 1.0;

    if (char === "rogue") {
        const poly = (pts) => { ctx.beginPath(); ctx.moveTo(...pts[0]); pts.slice(1).forEach(p=>ctx.lineTo(...p)); ctx.closePath(); ctx.fill(); };
        const line = (ax,ay,bx,by) => { ctx.beginPath(); ctx.moveTo(ax,ay); ctx.lineTo(bx,by); ctx.stroke(); };
        const circ = (cx,cy,r) => { ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill(); };
        
        // ── SWORD ──
        ctx.fillStyle='#6c6c8c'; circ(x+26,y+2,5);
        ctx.fillStyle='#d0d0f0'; circ(x+25,y+1,2);
        ctx.fillStyle='#341608'; ctx.fillRect(x+24,y+6,5,17);
        ctx.strokeStyle='#1a0804'; ctx.lineWidth=1;
        for(let i=y+8;i<y+22;i+=3){line(x+24,i,x+29,i);}
        ctx.fillStyle='#6c6c8c'; ctx.fillRect(x+15,y+22,24,5);
        ctx.fillStyle='#b0b0d4'; ctx.fillRect(x+16,y+23,10,2);
        ctx.fillStyle='#3a1a08'; ctx.fillRect(x+24,y+26,5,54);
        ctx.strokeStyle='#1a0a04'; line(x+27,y+28,x+27,y+76);
        ctx.fillStyle='#5c5c7c'; ctx.fillRect(x+23,y+38,7,3); ctx.fillRect(x+23,y+52,7,3);
        ctx.fillStyle='#6a6a8a'; poly([[x+24,y+80],[x+29,y+80],[x+26,y+86]]);
        
        // ── QUIVER ──
        ctx.fillStyle='#3a1a08'; ctx.fillRect(x+8,y+26,10,52);
        ctx.strokeStyle='#1a0a04';
        [y+38,y+52,y+66].forEach(yy=>{line(x+8,yy,x+18,yy);});
        ctx.fillStyle='#5c5c7c'; ctx.fillRect(x+7,y+23,12,5); ctx.fillRect(x+7,y+77,12,5);
        ctx.fillStyle='#b0b0d4'; ctx.fillRect(x+8,y+24,6,2);
        ctx.fillStyle='#3a3a52'; ctx.fillRect(x+8,y+79,10,2);
        [x+10,x+13,x+16].forEach(ax=>{
            ctx.strokeStyle='#9a7c36'; ctx.lineWidth=2; line(ax,y+23,ax,y+6);
            ctx.fillStyle='#8686aa'; poly([[ax-2,y+8],[ax+2,y+8],[ax,y+2]]);
            ctx.fillStyle='#c01818'; poly([[ax-2,y+22],[ax,y+15],[ax+2,y+22]]);
        });
        
        // ── CLOAK BACK ──
        ctx.fillStyle='#0e0a06';
        poly([[x+8,y+36],[x,y+62],[x,y+92],[x+5,y+122],[x+12,y+114],[x+17,y+106],[x+22,y+114],[x+28,y+122],[x+34,y+92],[x+34,y+62],[x+26,y+36]]);
        ctx.strokeStyle='#1e1410'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(x+8,y+36); ctx.lineTo(x,y+62); ctx.lineTo(x,y+92); ctx.lineTo(x+5,y+122); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x+26,y+36); ctx.lineTo(x+34,y+62); ctx.lineTo(x+34,y+92); ctx.lineTo(x+28,y+122); ctx.stroke();
        ctx.strokeStyle='#0c0806';
        [y+54,y+72,y+90].forEach(yy=>{line(x+4,yy,x+30,yy);});
        
        // ── CLOAK SIDE FLAPS ──
        [[
            [x+8,y+36],[x,y+54],[x-2,y+78],[x+2,y+98],[x+8,y+88]
        ],[
            [x+26,y+36],[x+34,y+54],[x+36,y+78],[x+32,y+98],[x+26,y+88]
        ]].forEach((pts,i)=>{
            ctx.fillStyle='#121009'; poly(pts);
            ctx.strokeStyle='#201610'; ctx.lineWidth=1;
            ctx.beginPath(); pts.forEach((p,j)=>j?ctx.lineTo(...p):ctx.moveTo(...p)); ctx.stroke();
        });
        
        // ── CLOAK COLLAR ──
        ctx.fillStyle='#181208';
        poly([[x+8,y+38],[x+3,y+26],[x+7,y+19],[x+10,y+28],[x+10,y+40]]);
        poly([[x+26,y+38],[x+31,y+26],[x+27,y+19],[x+24,y+28],[x+24,y+40]]);
        ctx.strokeStyle='#281a0e'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(x+8,y+38); ctx.lineTo(x+3,y+26); ctx.lineTo(x+7,y+19); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x+26,y+38); ctx.lineTo(x+31,y+26); ctx.lineTo(x+27,y+19); ctx.stroke();
        
        // ── LEGS ──
        ctx.fillStyle='#221208';
        ctx.fillRect(x+10,y+78,7,20); ctx.fillRect(x+19,y+78,7,20);
        ctx.strokeStyle='#140804'; ctx.lineWidth=1;
        line(x+13,y+80,x+13,y+96); line(x+22,y+80,x+22,y+96);
        ctx.fillStyle='#120806';
        ctx.fillRect(x+10,y+98,7,12); ctx.fillRect(x+19,y+98,7,12);
        ctx.strokeStyle='#0a0403';
        line(x+10,y+101,x+17,y+101); line(x+19,y+101,x+26,y+101);
        
        // ── TORSO ──
        ctx.fillStyle='#221208'; ctx.fillRect(x+10,y+35,16,43);
        ctx.fillStyle='rgba(0,0,0,0.18)'; ctx.fillRect(x+21,y+35,5,43);
        ctx.strokeStyle='#150904'; ctx.lineWidth=1;
        line(x+18,y+36,x+18,y+74); line(x+13,y+36,x+12,y+74);
        line(x+23,y+36,x+24,y+74); line(x+10,y+55,x+26,y+55);
        
        // ── CHEST PLATE + STUDS ──
        ctx.fillStyle='#444462'; ctx.fillRect(x+12,y+37,12,23);
        ctx.fillStyle='#58587a'; ctx.fillRect(x+17,y+38,3,21);
        ctx.fillStyle='#9292b6'; ctx.fillRect(x+13,y+38,10,3);
        ctx.strokeStyle='#242438'; ctx.lineWidth=1; ctx.strokeRect(x+12,y+37,12,23);
        [[x+13,y+44],[x+13,y+51],[x+13,y+57],[x+22,y+44],[x+22,y+51],[x+22,y+57]].forEach(([sx,sy])=>{
            ctx.fillStyle='#1c1c34'; circ(sx,sy,2.6);
            ctx.fillStyle='#aeaed0'; circ(sx,sy,1.8);
            ctx.fillStyle='#fff'; circ(sx-0.6,sy-0.6,0.7);
        });
        
        // ── SHOULDERS + ARMS ──
        ctx.fillStyle='#2a1408';
        ctx.fillRect(x+6,y+35,5,8); ctx.fillRect(x+25,y+35,5,8);
        ctx.strokeStyle='#150904'; ctx.lineWidth=1;
        line(x+10,y+35,x+6,y+43); line(x+26,y+35,x+30,y+43);
        ctx.fillStyle='#221208';
        ctx.fillRect(x+4,y+36,6,26); ctx.fillRect(x+26,y+36,6,26);
        line(x+7,y+37,x+7,y+60); line(x+29,y+37,x+29,y+60);
        
        // ── BELT + DAGGERS ──
        ctx.fillStyle='#100702'; ctx.fillRect(x+10,y+72,16,6);
        ctx.fillStyle='#9c7620'; ctx.fillRect(x+15,y+73,7,4);
        ctx.fillStyle='#c09c2c'; ctx.fillRect(x+16,y+74,3,2);
        [x+7,x+26].forEach((dx,i)=>{
            const ang = i?0.1:-0.1;
            ctx.fillStyle='#525272'; ctx.fillRect(dx-2,y+70,9,2);
            ctx.fillStyle='#8e8eb2'; ctx.fillRect(dx-1,y+71,4,1);
            ctx.fillStyle='#281408'; ctx.fillRect(dx,y+63,3,8);
            ctx.strokeStyle='#140802'; ctx.lineWidth=1;
            line(dx,y+65,dx+3,y+65); line(dx,y+67,dx+3,y+67);
            ctx.fillStyle='#525272'; circ(dx+1.5,y+62,2);
            ctx.fillStyle='#9696b4'; circ(dx+1,y+61.5,0.8);
        });
        
        // ── HEAD ──
        ctx.fillStyle='#3c2010'; ctx.fillRect(x+15,y+28,7,8);
        ctx.fillStyle='#c49058';
        circ(x+18,y+18,11);
        ctx.fillRect(x+10,y+23,17,13);
        circ(x+18,y+35,7); // chin (half, but full fill ok)
        
        // Hood — peaked polygon
        ctx.fillStyle='#1a0e08';
        poly([[x+5,y+31],[x+4,y+22],[x+7,y+13],[x+14,y+5],[x+19,y+3],[x+25,y+8],[x+29,y+17],[x+30,y+31]]);
        // Hood side drapes
        ctx.fillStyle='#160c07';
        poly([[x+5,y+31],[x+3,y+39],[x+5,y+45],[x+10,y+44],[x+10,y+31]]);
        poly([[x+30,y+31],[x+32,y+39],[x+30,y+45],[x+25,y+44],[x+25,y+31]]);
        // Hood jaw cover
        ctx.fillStyle='#140c06'; ctx.fillRect(x+10,y+35,17,9);
        // Hood edge + folds
        ctx.strokeStyle='#2e1e10'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(x+5,y+31); ctx.lineTo(x+4,y+22); ctx.lineTo(x+7,y+13); ctx.lineTo(x+14,y+5); ctx.lineTo(x+19,y+3); ctx.lineTo(x+25,y+8); ctx.lineTo(x+29,y+17); ctx.stroke();
        ctx.strokeStyle='#0e0806';
        line(x+8,y+14,x+7,y+30); line(x+26,y+14,x+27,y+30);
        line(x+10,y+36,x+26,y+36); line(x+10,y+39,x+26,y+39);
        
        // Brow shadow + plate
        ctx.fillStyle='#0e0a06'; ctx.fillRect(x+9,y+23,19,6);
        ctx.fillStyle='#424260'; ctx.fillRect(x+9,y+25,19,5);
        ctx.fillStyle='#8888b0'; ctx.fillRect(x+10,y+26,9,2);
        ctx.fillStyle='#242440'; ctx.fillRect(x+17,y+25,3,3);
        ctx.fillStyle='#686890'; circ(x+11,y+27,1); circ(x+25,y+27,1);
        
        // Face strip
        ctx.fillStyle='#c49058'; ctx.fillRect(x+9,y+30,19,6);
        ctx.fillStyle='#8a5828'; ctx.fillRect(x+9,y+32,3,4); ctx.fillRect(x+25,y+32,3,4);
        
        // Eyes
        ctx.fillStyle='#5c3016'; ctx.fillRect(x+9,y+31,7,4); ctx.fillRect(x+21,y+31,7,4);
        ctx.fillStyle='#301408'; ctx.fillRect(x+9,y+31,7,2); ctx.fillRect(x+21,y+31,7,2);
        ctx.fillStyle='#0c0504'; ctx.fillRect(x+10,y+32,5,3); ctx.fillRect(x+22,y+32,5,3);
        ctx.fillStyle='#38200a'; ctx.fillRect(x+11,y+33,2,1); ctx.fillRect(x+23,y+33,2,1);
        ctx.fillStyle='#fff'; ctx.fillRect(x+10,y+32,1,1); ctx.fillRect(x+22,y+32,1,1);
        
        // Nose + mask
        ctx.fillStyle='#a46e36'; ctx.fillRect(x+17,y+35,3,2);
        ctx.fillStyle='#7a5028'; ctx.fillRect(x+16,y+36,5,1);
        ctx.fillStyle='#1c1008'; ctx.fillRect(x+9,y+36,18,7);
        ctx.strokeStyle='#120904'; ctx.lineWidth=1;
        line(x+10,y+38,x+26,y+38); line(x+10,y+41,x+26,y+41);
        ctx.fillStyle='#18100a'; ctx.fillRect(x+17,y+36,3,3);
        
        ctx.globalAlpha = 1.0;
        ctx.restore();

    } else {
        ctx.fillStyle = '#111';
        ctx.fillRect(x + 2, y + 65, 12, 25);
        ctx.fillRect(x + 22, y + 65, 12, 25);

        ctx.fillStyle = '#1a1a1a';
        ctx.beginPath();
        ctx.moveTo(x - 15, y + 20);
        ctx.lineTo(x + 50, y + 20);
        ctx.lineTo(x + 60, y + 90); 
        ctx.lineTo(x - 25, y + 90);
        ctx.fill();

        ctx.fillStyle = '#2c2c2c';
        ctx.beginPath();
        ctx.moveTo(x - 10, y + 15); 
        ctx.lineTo(x + 45, y + 15); 
        ctx.lineTo(x + 30, y + 70); 
        ctx.lineTo(x + 5, y + 70);  
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#3d3d3d';
        ctx.fillRect(x - 12, y + 15, 15, 10); 
        ctx.fillRect(x + 32, y + 15, 15, 10); 
        ctx.fillStyle = '#1a1a1a';
        ctx.beginPath();
        ctx.arc(x + 18, y + 5, 28, Math.PI, 0); 
        ctx.lineTo(x + 46, y + 25);
        ctx.lineTo(x - 10, y + 25);
        ctx.fill();

        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.ellipse(x + 18, y + 12, 18, 22, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 5;
        ctx.shadowColor = "white"; 
        ctx.fillRect(x + 10, y + 5, 6, 2); 
        ctx.fillRect(x + 22, y + 5, 6, 2);
        ctx.shadowBlur = 0; 

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

        ctx.shadowColor = 'red';
        ctx.shadowBlur = 20;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, -5, 60, 10); 
        ctx.fillStyle = "silver";
        ctx.fillRect(5, -15, 5, 30);
        ctx.fillStyle = "black";
        ctx.fillRect(-10, -3, 15, 6);

      ctx.restore();
    }

    
if (bowEquipped) {
    ctx.save();
    ctx.translate(posX + 15, posY + 40);
    if (typeof aimAngle === 'number') ctx.rotate(aimAngle);

    
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
    ctx.stroke();
    ctx.restore();
}

 
for (let i = arrow.length - 1; i >= 0; i--) {
    const a = arrow[i];

    if (typeof a.vx !== 'number' || isNaN(a.vx)) a.vx = 0;
    if (typeof a.vy !== 'number' || isNaN(a.vy)) a.vy = 0;

    a.x += a.vx;
    a.y += a.vy;

    
    ctx.save();
    ctx.translate(a.x, a.y);
    const aAngle = Math.atan2(a.vy, a.vx);
    ctx.rotate(aAngle);
    ctx.fillStyle = 'silver';
    ctx.fillRect(-7.5, -1.5, 15, 3);
    ctx.restore();

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
}

function animate() {
    if (!isGamePaused && char != "N/A") {
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
            let currentSpeed = baseSpeed * speedMultiplier;

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
            let canSeePlayer = (distance < 400 && angleDiff < Math.PI / 2 && !stealthActive && (bladeActive || swordEquipped));
            let tooClose = (distance < 40 && !stealthActive && (bladeActive || swordEquipped));

            if (canSeePlayer || tooClose) {
                enemy.scaredTimer = 600;
            }

            if ((enemy.scaredTimer || 0) > 0) {
                enemy.scaredTimer--;
                enemy.color = 'red';
                let angleToPlayer = Math.atan2(dy, dx);
                
                let nextX = enemy.x + Math.cos(angleToPlayer) * 7;
                let nextY = enemy.y + Math.sin(angleToPlayer) * 7;

                if (!isSpaceBlocked(nextX, enemy.y)) enemy.x = nextX;
                if (!isSpaceBlocked(enemy.x, nextY)) enemy.y = nextY;

                enemy.angle = angleToPlayer; 
            } else {
                enemy.color = 'tan';
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
            ctx.fillStyle = "rgba(255, 255, 0, 0.15)";
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.arc(0, 0, 400, -Math.PI/2, Math.PI/2);
            ctx.fill();
            ctx.restore();

            ctx.fillStyle = enemy.color;
            ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
            ctx.fillRect(enemy.x + -12, enemy.y + 5, 10, 25);
            ctx.fillRect(enemy.x + 42, enemy.y + 5, 10, 25);
            ctx.fillRect(enemy.x, enemy.y + 45, 10, 25);
            ctx.fillRect(enemy.x + 30, enemy.y + 45, 10, 25);
            ctx.fillRect(enemy.x - 0, enemy.y - 40, 40, 35);

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

            if (distance < 300 && (bladeActive || swordEquipped) && !stealthActive) {
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

        ctx.fillStyle = playerHP > 30 ? "lime" : "red"; 
        let healthWidth = (playerHP / 100) * 200;
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

        
    }
    requestAnimationFrame(animate)
}
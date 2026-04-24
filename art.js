function castle(x,y) {
    ctx.fillStyle = '#000000ff';
    ctx.fillRect(x - 5, y, 45, 60);

    ctx.fillStyle = '#840f0fff'; 
    ctx.fillRect(x - 10, y - 5, 15, 15); 
    ctx.fillRect(x + 30, y - 5, 15, 15); 
    ctx.fillStyle = '#4f0000ff'; 
    ctx.fillRect(x + 5, y + 10, 25, 30); 
    ctx.fillStyle = '#220f0f82';
    ctx.fillRect(x + 10, y + 15, 15, 2);
    ctx.fillRect(x + 10, y + 25, 15, 2);


    ctx.fillStyle = '#000000ff';
    ctx.fillRect(x - 15, y + 10, 10, 35); 
    ctx.fillRect(x + 40, y + 10, 10, 35); 
    // Heavy Gauntlets
    ctx.fillStyle = '#15191aff';
    ctx.fillRect(x - 15, y + 35, 12, 12);
    ctx.fillRect(x + 38, y + 35, 12, 12);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(x, y + 45, 15, 35); 
    ctx.fillRect(x + 20, y + 45, 15, 35);
    // Square boots
    ctx.fillStyle = '#543e1cff'; 
    ctx.fillRect(x - 2, y + 75, 17, 10);
    ctx.fillRect(x + 20, y + 75, 17, 10);


    ctx.fillStyle = '#000000ff';
    ctx.fillRect(x + 2, y - 35, 30, 35); 

    ctx.fillStyle = '#6c1c1cff';
    ctx.fillRect(x + 5, y - 25, 24, 4); 


    ctx.fillStyle = '#ff0000ff'; 
    ctx.fillRect(x + 15, y - 40, 5, 8);
}

function ice(x,y) {
    ctx.fillStyle = '#c6e8ffff';
    ctx.fillRect(x - 5, y, 45, 60);

    ctx.fillStyle = '#61b2feff'; 
    ctx.fillRect(x - 10, y - 5, 15, 15); 
    ctx.fillRect(x + 30, y - 5, 15, 15); 
    ctx.fillStyle = '#73a4e8ff'; 
    ctx.fillRect(x + 5, y + 10, 25, 30); 
    ctx.fillStyle = '#79caf582';
    ctx.fillRect(x + 10, y + 15, 15, 2);
    ctx.fillRect(x + 10, y + 25, 15, 2);


    ctx.fillStyle = '#c6e8ffff';
    ctx.fillRect(x - 15, y + 10, 10, 35); 
    ctx.fillRect(x + 40, y + 10, 10, 35); 
    // Heavy Gauntlets
    ctx.fillStyle = '#b1c3c7ff';
    ctx.fillRect(x - 15, y + 35, 12, 12);
    ctx.fillRect(x + 38, y + 35, 12, 12);
    ctx.fillStyle = '#ffffffff';
    ctx.fillRect(x, y + 45, 15, 35); 
    ctx.fillRect(x + 20, y + 45, 15, 35);
    // Square boots
    ctx.fillStyle = '#543e1cff'; 
    ctx.fillRect(x - 2, y + 75, 17, 10);
    ctx.fillRect(x + 20, y + 75, 17, 10);


    ctx.fillStyle = '#ffffffff';
    ctx.fillRect(x + 2, y - 35, 30, 35); 

    ctx.fillStyle = '#0044ffff';
    ctx.fillRect(x + 5, y - 25, 24, 4); 


    ctx.fillStyle = '#0044ffff'; 
    ctx.fillRect(x + 15, y - 40, 5, 8);
}

function fire(x,y) {
    ctx.fillStyle = '#2b1209ff';
    ctx.fillRect(x - 5, y, 45, 60);

    ctx.fillStyle = '#ef6800ff'; 
    ctx.fillRect(x - 10, y - 5, 15, 15); 
    ctx.fillRect(x + 30, y - 5, 15, 15); 
    ctx.fillStyle = '#4f0000ff'; 
    ctx.fillRect(x + 5, y + 10, 25, 30); 
    ctx.fillStyle = '#3c241182';
    ctx.fillRect(x + 10, y + 15, 15, 2);
    ctx.fillRect(x + 10, y + 25, 15, 2);


    ctx.fillStyle = '#321c0bff';
    ctx.fillRect(x - 15, y + 10, 10, 35); 
    ctx.fillRect(x + 40, y + 10, 10, 35); 
    // Heavy Gauntlets
    ctx.fillStyle = '#15191aff';
    ctx.fillRect(x - 15, y + 35, 12, 12);
    ctx.fillRect(x + 38, y + 35, 12, 12);
    ctx.fillStyle = '#28130dff';
    ctx.fillRect(x, y + 45, 15, 35); 
    ctx.fillRect(x + 20, y + 45, 15, 35);
    // Square boots
    ctx.fillStyle = '#543e1cff'; 
    ctx.fillRect(x - 2, y + 75, 17, 10);
    ctx.fillRect(x + 20, y + 75, 17, 10);


    ctx.fillStyle = '#391f14ff';
    ctx.fillRect(x + 2, y - 35, 30, 35); 

    ctx.fillStyle = '#ef6800ff';
    ctx.fillRect(x + 5, y - 25, 24, 4); 


    ctx.fillStyle = '#ff0000ff'; 
    ctx.fillRect(x + 15, y - 40, 5, 8);
}

function castleBoss(x,y) {
    ctx.fillStyle = '#ffd485ff';
    ctx.fillRect(x - 20, y - 20, 80, 120);
    ctx.fillRect(x+5, y - 45, 20, 20);
    ctx.fillRect(x+10, y - 45, 10, 40);

    // gray color fill style
    ctx.fillStyle = '#7f8c8dff';
    ctx.fillRect(x - 50, y - 20, 30, 120);
    ctx.fillRect(x + 50, y - 20, 30, 120);
    ctx.fillRect(x - 20, y + 100, 30, 100);
    ctx.fillRect(x + 20, y + 100, 30, 100);

    //Helmet
    ctx.fillRect(x + 1, y - 47, 28, 7);
    ctx.fillRect(x + 13, y - 45, 5, 10);
    ctx.fillRect(x + 1, y - 45, 5, 10);
    ctx.fillRect(x + 24, y - 45, 5, 10);
}

function fireBoss(x,y) {
    ctx.fillStyle = '#dba032ff';
    ctx.fillRect(x - 20, y - 20, 80, 120);
    ctx.fillRect(x+5, y - 45, 20, 20);
    ctx.fillRect(x+10, y - 45, 10, 40);

    //Helmet
    ctx.fillStyle = '#610000ff';
    ctx.fillRect(x + 1, y - 47, 28, 7);
    ctx.fillRect(x + 13, y - 45, 5, 10);
    ctx.fillRect(x + 1, y - 45, 5, 10);
    ctx.fillRect(x + 24, y - 45, 5, 10);

    // orange color fill style
    ctx.fillStyle = '#632e1aff';
    ctx.fillRect(x - 50, y - 20, 30, 120);
    ctx.fillRect(x + 50, y - 20, 30, 120);
    ctx.fillRect(x - 20, y + 100, 30, 100);
    ctx.fillRect(x + 20, y + 100, 30, 100);

    //Fireball 1
    ctx.beginPath();
    ctx.fillStyle = "#ff4400";
    ctx.arc(x + 85, y + 100, 3, 0, Math.PI * 2); 
    ctx.fill();

    ctx.globalAlpha = 0.45; 
    ctx.fillStyle = "#ff5500";
    ctx.beginPath(); 
    ctx.arc(x + 78, y + 100, 5, 0, Math.PI * 2); 
    ctx.fill();

    ctx.globalAlpha = 0.65;
    ctx.fillStyle = "#ff7700";
    ctx.beginPath(); 
    ctx.arc(x + 71, y + 100, 7, 0, Math.PI * 2); 
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#cc2200";
    ctx.beginPath();
    ctx.arc(x + 64, y + 100, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ff6600";
    ctx.beginPath();
    ctx.arc(x + 64, y + 100, 7, 0, Math.PI * 2); 
    ctx.fill();

    ctx.fillStyle = "#ffcc00";
    ctx.beginPath(); 
    ctx.arc(x + 64, y + 100, 4, 0, Math.PI * 2); 
    ctx.fill();



    //Fireball 2

    ctx.beginPath();
    ctx.fillStyle = "#ff4400";
    ctx.arc(x - 15, y + 100, 3, 0, Math.PI * 2); 
    ctx.fill();

    ctx.globalAlpha = 0.45; 
    ctx.fillStyle = "#ff5500";
    ctx.beginPath(); 
    ctx.arc(x - 22, y + 100, 5, 0, Math.PI * 2); 
    ctx.fill();

    ctx.globalAlpha = 0.65;
    ctx.fillStyle = "#ff7700";
    ctx.beginPath(); 
    ctx.arc(x - 29, y + 100, 7, 0, Math.PI * 2); 
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = "#cc2200";
    ctx.beginPath();
    ctx.arc(x - 36, y + 100, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ff6600";
    ctx.beginPath();
    ctx.arc(x - 36, y + 100, 7, 0, Math.PI * 2); 
    ctx.fill();

    ctx.fillStyle = "#ffcc00";
    ctx.beginPath(); 
    ctx.arc(x - 36, y + 100, 4, 0, Math.PI * 2); 
    ctx.fill();
}

//Put art in here
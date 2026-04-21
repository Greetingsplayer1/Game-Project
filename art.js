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
}
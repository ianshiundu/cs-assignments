function setup()
{
	//create your canvas here
    createCanvas(600, 600);
    background(255,235,205);
}

function draw()
{
	//do your drawing here
    
    noStroke();
    fill(255,255,0, 50);
    ellipse(400, 300, 150, 150);

    fill(32,178,170, 150);
    noStroke();
    triangle(10, -200, 600, 600, 700, 500);
    
    noStroke();
    fill(255,0,0, 50);
    ellipse(300, 300, 100, 100);
   
    fill(218,165,32, 150);
    noStroke();
    triangle(700, -150, 0,500, 0, 800);
    
    noFill();
    stroke(51);
    strokeWeight(25);
    ellipse(300, 300, 500, 500);
    
    strokeWeight(1.5);
    line(400, 100, 200, 500);
    line(100, 350, 500, 400);
    line(120, 200, 500, 250);
    line(400, 200, 400, 450);
    line(150, 180, 500, 350);
    
    strokeWeight(10);
    point(270, 470);
    
    noStroke();
    fill(85,107,47, 100);
    ellipse(300, 350, 200, 200);
}
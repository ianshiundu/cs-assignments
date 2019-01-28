function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);
    
    fill(245,255,250);
    rect(100, 50, 150, 250);
    rect(100, 300, 150, 200);
    
    fill(30,144,255);
    rect(100, 500, 150, 150);
    
    fill(245,255,250);
    rect(250, 500, 350, 150);
    rect(600, 500, 100, 75);
    
    fill(255,255,0);
    rect(600, 575, 100, 75);

}
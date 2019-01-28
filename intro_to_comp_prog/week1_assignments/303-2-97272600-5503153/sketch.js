/*

Officer: 5503153
CaseNum: 303-2-97272600-5503153

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make RestrictedStorageValue_0 equal to the value of mouseX
	- Use the 'min' function to prevent RestrictedStorageValue_0 from going above 20

	When the mouse button is released:
	- Decrement RestrictedStorageValue_1 by 2
	- Use the 'max' function to prevent RestrictedStorageValue_1 from falling below 3

	When the mouse button is released:
	- Make RestrictedStorageValue_2 equal to the value of mouseX
	- Use the 'constrain' function to prevent RestrictedStorageValue_2 from falling below 5 and going above 20

	When the mouse button is released:
	- Increment RestrictedStorageValue_3 by 1
	- Use the 'max' function to prevent RestrictedStorageValue_3 from falling below 4

	Whilst the mouse is moving:
	- Make RestrictedStorageValue_4 equal to the value of mouseY
	- Use the 'min' function to prevent RestrictedStorageValue_4 from going above 73



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var RestrictedStorageValue_0;
var RestrictedStorageValue_1;
var RestrictedStorageValue_2;
var RestrictedStorageValue_3;
var RestrictedStorageValue_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	RestrictedStorageValue_0 = 0;
	RestrictedStorageValue_1 = 0;
	RestrictedStorageValue_2 = 0;
	RestrictedStorageValue_3 = 0;
	RestrictedStorageValue_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved() {
    console.log("mouseMoved", mouseX, mouseY);
//	Whilst the mouse is moving:
//	- Make RestrictedStorageValue_0 equal to the value of mouseX
//	- Use the 'min' function to prevent RestrictedStorageValue_0 from going above 20
    RestrictedStorageValue_0 = min(mouseX, 20);
    
//	- Make RestrictedStorageValue_4 equal to the value of mouseY
//	- Use the 'min' function to prevent RestrictedStorageValue_4 from going above 73
    RestrictedStorageValue_4 = mouseY;
    RestrictedStorageValue_4 = min(73, mouseY);
}

function mouseReleased() {
    console.log("mouseReleased", mouseX, mouseY);
//	When the mouse button is released:
//	- Decrement RestrictedStorageValue_1 by 2
//	- Use the 'max' function to prevent RestrictedStorageValue_1 from falling below 3
    RestrictedStorageValue_1 -= 2;
    RestrictedStorageValue_1 = max(3, mouseY);
    
//	- Make RestrictedStorageValue_2 equal to the value of mouseX
//	- Use the 'constrain' function to prevent RestrictedStorageValue_2 from falling below 5 and going above 20
    RestrictedStorageValue_2 = mouseX;
    RestrictedStorageValue_2 = constrain(mouseX, 5, 20);
    
//	When the mouse button is released:
//	- Increment RestrictedStorageValue_3 by 1
//	- Use the 'max' function to prevent RestrictedStorageValue_3 from falling below 4
    RestrictedStorageValue_3 += 1;
    RestrictedStorageValue_3 = max(4, mouseY)
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,RestrictedStorageValue_0, 25);
	pop();

	push();
	translate(120,380);
	drawDial(140,RestrictedStorageValue_1, 18);
	pop();

	push();
	translate(280,170);
	drawDial(140,RestrictedStorageValue_2, 24);
	pop();

	push();
	translate(280,380);
	drawDial(140,RestrictedStorageValue_3, 25);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(RestrictedStorageValue_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

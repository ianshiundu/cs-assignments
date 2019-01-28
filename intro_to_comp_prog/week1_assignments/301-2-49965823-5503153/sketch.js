/*
The case of the Python Syndicate
Stage 3


Officer: 5503153
CaseNum: 301-2-49965823-5503153

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Countess hamilton has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Countess hamilton object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rocky_kray_image;
var bones_karpinski_image;
var countess_hamilton_image;
var robbie_kray_image;
var pawel_karpinski_image;
var anna_karpinski_image;

var countess_hamilton_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_image = loadImage("krayBrothers1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_obj = {
		x: 701,
		y: 40,
		image: countess_hamilton_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);

	image(rocky_kray_image, countess_hamilton_obj.x - 586, countess_hamilton_obj.y);
	image(bones_karpinski_image, countess_hamilton_obj.x - 293, countess_hamilton_obj.y);
	image(robbie_kray_image, countess_hamilton_obj.x - 586, countess_hamilton_obj.y + 269);
	image(pawel_karpinski_image, countess_hamilton_obj.x - 293, countess_hamilton_obj.y + 269);
	image(anna_karpinski_image, countess_hamilton_obj.x, countess_hamilton_obj.y + 269);

}
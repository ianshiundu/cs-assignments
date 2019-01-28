/*
The case of the Python Syndicate
Stage 2


Officer: 5503153
CaseNum: 301-1-61431277-5503153

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Cecil karpinski

- The variables for Cecil karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Cecil karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var countessHamiltonImage;
var cecilKarpinskiImage;
var annaKarpinskiImage;
var rockyKrayImage;
var robbieKrayImage;
var linaLovelaceImage;


var cecilKarpinskiXPosition = 408;
var cecilKarpinskiYPosition = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	linaLovelaceImage = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImage, cecilKarpinskiXPosition, cecilKarpinskiYPosition);

	image(countessHamiltonImage, cecilKarpinskiXPosition - 293, cecilKarpinskiYPosition);
	image(annaKarpinskiImage, cecilKarpinskiXPosition + 293, cecilKarpinskiYPosition);
	image(rockyKrayImage, cecilKarpinskiXPosition - 293, cecilKarpinskiYPosition + 269);
	image(robbieKrayImage, cecilKarpinskiXPosition, cecilKarpinskiYPosition + 269);
	image(linaLovelaceImage, cecilKarpinskiXPosition + 293, cecilKarpinskiYPosition + 269);

}
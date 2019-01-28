/*
The case of the Python Syndicate
Stage 1

Officer: 5503153
CaseNum: 301-0-43231919-5503153

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var rockyKrayImage;
var annaKarpinskiImage;
var bonesKarpinskiImage;
var cecilKarpinskiImage;
var pawelKarpinskiImage;
var linaLovelaceImage;



//declare your new variables below
var cecilKarpinskiXPos = 115;
var cecilKarpinskiYPos = 309;

var rockyKrayXPos = 115;
var rockyKrayYPos = 40;

var annaKarpinskiXPos = 408;
var annaKarpinskiYPos = 40;

var bonesKarpinskiXPos = 701;
var bonesKarpinskiYPos = 40;

var pawelKarpinskiXPos = 408;
var pawelKarpinskiYPos = 309;

var linaLovelaceXPos = 701;
var linaLovelaceYPos = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
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
	image(cecilKarpinskiImage, cecilKarpinskiXPos, cecilKarpinskiYPos);

	image(rockyKrayImage, rockyKrayXPos, rockyKrayYPos);
	image(annaKarpinskiImage, annaKarpinskiXPos, annaKarpinskiYPos);
	image(bonesKarpinskiImage, bonesKarpinskiXPos, bonesKarpinskiYPos);
	image(pawelKarpinskiImage, pawelKarpinskiXPos, pawelKarpinskiYPos);
	image(linaLovelaceImage, linaLovelaceXPos, linaLovelaceYPos);

}
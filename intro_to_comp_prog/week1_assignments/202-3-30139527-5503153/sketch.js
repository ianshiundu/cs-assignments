/*

Officer: 5503153
CaseNum: 202-3-30139527-5503153

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce pink filled text with red outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(546,329);
	textSize(22);
}

function draw()
{
	background(255);

	fill(0,255,255);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("The", 170,162);
	stroke(0,0,0);
	textFont(Ballpointprint);
//	text("how", 453,136);
	stroke(0,255,0);
//	text("can", 90,162);
	stroke(0,0,0);
	textFont(RonsFont);
//	text("we", 209,111);
	push();
	stroke(0,0,255);
	textFont(Melissa);
//	text("a", 402,111);
	pop();
	textFont(Melissa);
//	text("y", 80,206);
	fill(255,255,0);
	textFont(Ballpointprint);
//	text("not", 369,136);
	fill(255,192,203);
	textFont(Diggity);
//	text("lon", 476,66);
	stroke(255,0,255);
//	text("ould", 257,111);
	fill(255,255,0);
	stroke(255,0,0);
//	text("these", 47,89);
	stroke(0,255,0);
	textFont(RonsFont);
//	text("all", 54,136);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("?", 129,111);
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Melissa);
//	text("ignore", 6,89);
	fill(255,255,0);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("send", 316,66);
//	text("you", 39,66);
	push();
	stroke(255,0,255);
	textFont(Melissa);
//	text("ar", 45,22);
	pop();
	textFont(Melissa);
//	text("Daisy", 5,250);
	stroke(255,0,255);
	textFont(Diggity);
//	text("secrets,", 204,162);
//	text("I", 401,66);
	push();
	fill(0,255,255);
	textFont(Ballpointprint);
//	text("short", 73,66);
	pop();
	textFont(Melissa);
//	text("ling", 58,22);
	fill(255,165,0);
	textFont(RonsFont);
//	text("sure", 401,136);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("of", 119,66);
	fill(0,255,255);
	textFont(Melissa);
//	text("x", 44,250);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("Forever", 8,206);
	fill(255,192,203);
	textFont(Melissa);
//	text("and", 463,111);
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Diggity);
//	text("sometimes.", 395,89);
//	text("break", 414,111);
	fill(255,255,0);
//	text("My", 12,22);
	push();
	textFont(Ballpointprint);
//	text("no", 450,66);
	pop();
	stroke(0,255,0);
//	text("sh", 242,111);
	fill(255,165,0);
	textFont(RonsFont);
//	text("out.", 81,136);
//	text("s", 205,89);
	stroke(0,0,255);
	textFont(Melissa);
//	text("?", 205,66);
	fill(255,192,203);
//	text("Are", 477,89);
	textFont(RonsFont);
//	text("can", 412,66);
//	text("silence.", 306,162);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("our", 137,136);
//	text("Bob,", 81,22);
//	text("I", 63,162);
	fill(255,255,0);
	textFont(Diggity);
//	text("Is", 119,136);
	stroke(0,255,0);
//	text("me", 100,111);
	fill(255,192,203);
	stroke(255,0,0);
//	text("much", 490,136);
	textFont(RonsFont);
	text("go", 292,111);
	text("guard", 307,89);
	text("can", 278,66);
	stroke(0,0,255);
	textFont(Diggity);
//	text("continual", 95,89);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(RonsFont);
//	text("ed", 365,89);
	fill(0,255,255);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("I'm", 319,136);
	fill(255,192,203);
//	text("money", 148,66);
//	text("the", 268,162);
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Diggity);
//	text("sort", 488,111);
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("?", 295,136);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Melissa);
//	text("avoiding", 48,111);
//	text("d", 38,22);
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Diggity);
//	text("so", 284,89);
//	text("relationship", 168,136);
	fill(255,192,203);
	stroke(255,0,0);
	textFont(RonsFont);
	text("delay", 162,89);
	text("I", 259,66);
	text("you", 10,111);
	fill(0,255,255);
	stroke(0,0,0);
//	text("more", 9,162);
	stroke(0,0,255);
	textFont(Diggity);
//	text("ger", 492,66);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("away", 317,111);
	stroke(255,0,0);
//	text("You", 222,89);
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Melissa);
//	text("Are", 12,66);
	stroke(255,0,255);
//	text("aps", 181,111);
//	text("Perh", 153,111);
	textFont(Ballpointprint);
//	text("this", 15,136);
	push();
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Melissa);
//	text("are", 259,89);
	pop();
	textFont(Melissa);
//	text("take", 125,162);
//	text("ours,", 87,206);
//	text("If", 217,66);
//	text("so,", 235,66);
	stroke(255,0,0);
	textFont(RonsFont);
	text("for", 364,111);
	text("safe", 251,136);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Melissa);
//	text("?", 158,162);
//	text("cash.", 365,66);



}

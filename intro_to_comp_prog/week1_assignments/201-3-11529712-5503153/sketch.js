/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5503153
CaseNum: 201-3-11529712-5503153

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(614, 203);
    vertex(605, 250);
    vertex(637, 315);
    vertex(689, 332);
    vertex(703, 353);
    vertex(694, 369);
    vertex(715, 380);
    vertex(717, 419);
    vertex(685, 471);
    vertex(669, 471);
    vertex(655, 490);
    vertex(653, 514);
    vertex(678, 523);
    vertex(699, 514);
    vertex(712, 532);
    vertex(703, 546);
    vertex(617, 544);
    vertex(612, 487);
    vertex(526, 503);
    vertex(440, 550);
    vertex(426, 523);
    vertex(366, 537);
    vertex(332, 507);
    vertex(360, 496);
    vertex(315, 453);
    vertex(321, 435);
    vertex(373, 453);
    vertex(348, 423);
    vertex(609, 363);
    vertex(570, 250);
    vertex(580, 198);
    endShape(CLOSE);

}


var Color1;
var Color2;
var Color3;
var img;  

function setup() {
  createCanvas(1000, 1500);
  frameRate(2);
  img = loadImage("Black.png");
}

function draw() {
  Color1=random(255);
  Color2=random(255);
  Color3=random(255);
  background(Color1,Color2,Color3);
  
  image(img, 0, 0);
  
  fill(35,31,32);
  strokeWeight(0);
  ellipse(0, 64, 128, 128);
  triangle(125, 0, 125, 250, 250, 125); 
  rect(0, 180, 125, 22);
  rect(300, 0, 22, 250);
  rect(375, 55, 125, 22);
  triangle(375, 125, 500, 125, 375, 250); 
  arc(563, 125, 125, 125, PI, TWO_PI);
  rect(500, 180, 125, 22);
  triangle(625, 0, 750, 0, 750, 125); 
  triangle(625, 125, 750, 125, 750, 250); 
  rect(800,0,22,250);
  triangle(875, 125, 1000, 125, 875, 250);
  ellipse(1000, 64, 125, 125);
  ellipse(64, 375, 125, 125);
  rect(175,250,22,125);
  rect(125,430,125,20);
  triangle(250,250,375,250,250,375);
  triangle(250,375,375,375,250,500);
  ellipse(500,315,125,125);
  arc(500,440,125,125,PI/2,3*PI/2);
  arc(625,440,125,125,PI/2,3*PI/2);
  rect(625,430,125,22);
  rect(670,250,22,125);
  triangle(750,377,875,250,875,500);
  ellipse(937,375,124,124);
}

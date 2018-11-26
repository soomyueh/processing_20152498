var Color1;

var Color2;

var Color3;

var img;  

 

function setup() {

  createCanvas(400, 400);
frameRate(2);
  img = loadImage("123456.png");

}

 

function draw() {

    Color3=random(255);
    
    if (mouseIsPressed){

  Color1=background(230);}

  else{

  Color2=background(125,Color3,Color3);

  }

 

  

  image(img, 0, 0);

  

}

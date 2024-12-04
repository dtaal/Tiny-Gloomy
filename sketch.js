//The setup function only happens once
var mmp=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(240,200,255); //an RGB color for the canvas' background
  //circle
  stroke(255,200,100); // an RGB color for the circle's border
  strokeWeight (5);
  fill(250,mmp,120,230); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250, mmp,70,70); // center of canvas, 20px dia
  fill (255, 100,mouseY);
  stroke(255,200,100);
  strokeWeight (2);
  rect (mouseX, mouseY, 20, 20);
  textFont("Helvetica");
  textSize (50);
  text ('Hello', 200, 250)
}

function mousePressed() {
  if (mmp>=500) {
    mmp=0;
  } 
  else {
    mmp=mmp+5;
  }
}
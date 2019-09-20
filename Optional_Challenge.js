function setup() {
  createCanvas(400, 400);
}

var ball1X = 0;
var ball1Y = 40;
var ballSpeed1X = 5;
var ballSpeed1Y = 2;
var color1 = 0; 
var color1change = 5;
var ball2X = 200;
var ball2Y = 0;
var ballSpeed2X = 2;
var ballSpeed2Y = 5;
var color2 = 0; 
var color2change = 5;
var ball3X = 400;
var ball3Y = 150;
var ballSpeed3X = -3;
var ballSpeed3Y = -4;
var color3 = 0; 
var color3change = 5;

function draw() {
  background(0);

  noStroke();
  fill(255, color1, 0, 200);
  ellipse(ball1X, ball1Y, 200);
  fill(0, 255, color1, 200);
  ellipse(ball2X, ball2Y, 80);
  fill(color3, 0, 255, 200);
  ellipse(ball3X, ball3Y, 30);

  ball1X = ball1X + ballSpeed1X;
  ball1Y = ball1Y + ballSpeed1Y;
  color1 = color1 + color1change;
  
  ball2X = ball2X + ballSpeed2X;
  ball2Y = ball2Y + ballSpeed2Y;
  color2 = color2 + color2change;
  
  ball3X = ball3X + ballSpeed3X;
  ball3Y = ball3Y + ballSpeed3Y;
  color3 = color3 + color3change;

  if (ball1X >= 400) {
    ballSpeed1X = -5;
  }

  if (ball1X <= 0) {
    ballSpeed1X = 5;
  }
  
  if (ball1Y >= 400) {
    ballSpeed1Y = -2;
  }

  if (ball1Y <= 0) {
    ballSpeed1Y = 2;
  }
  
  if (color1 >= 300) {
    color1change = -5;
  }
  
  if (color1 <= -45) {
    color1change = 5;
  }
  
  if (ball2X >= 400) {
    ballSpeed2X = -2;
  }

  if (ball2X <= 0) {
    ballSpeed2X = 2;
  }
  
  if (ball2Y >= 400) {
    ballSpeed2Y = -5;
  }

  if (ball2Y <= 0) {
    ballSpeed2Y = 5;
  }
  
  if (color2 >= 300) {
    color2change = -5;
  }
  
  if (color2 <= -45) {
    color2change = 5;
  }
  
  if (ball3X >= 400) {
    ballSpeed3X = -3;
  }

  if (ball3X <= 0) {
    ballSpeed3X = 4;
  }
  
  if (ball3Y >= 400) {
    ballSpeed3Y = -3;
  }

  if (ball3Y <= 0) {
    ballSpeed3Y = 4;
  }
  
  if (color3 >= 300) {
    color3change = -3;
  }
  
  if (color3 <= -45) {
    color3change = 5;
  }


}

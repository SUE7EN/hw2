function setup() {
  createCanvas(420, 120);
}

var ballY = 0;
var ballSpeed = 5;

var ballY2 = 20;
var ballSpeed2 = 5;

var ballY3 = 40;
var ballSpeed3 = 5;

var ballY4 = 60;
var ballSpeed4 = 5;

var ballY5 = 80;
var ballSpeed5 = 5;

var ballY6 = 100;
var ballSpeed6 = 5;

var ballY7 = 120;
var ballSpeed7 = 5;

function draw() {
  background(50);
  noStroke();

  fill(255, 0, 0);
  ellipse(30, ballY, 30);

  fill(255, 127, 0);
  ellipse(90, ballY2, 30);

  fill(255, 225, 0);
  ellipse(150, ballY3, 30);

  fill(0, 225, 0);
  ellipse(210, ballY4, 30);

  fill(0, 225, 225);
  ellipse(270, ballY5, 30);

  fill(0, 0, 225);
  ellipse(330, ballY6, 30);

  fill(225, 0, 225);
  ellipse(390, ballY7, 30);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballY3 = ballY3 + ballSpeed3;
  ballY4 = ballY4 + ballSpeed4;
  ballY5 = ballY5 + ballSpeed5;
  ballY6 = ballY6 + ballSpeed6;
  ballY7 = ballY7 + ballSpeed7;

  if (ballY >= 120) {
    ballSpeed = -5;
  }

  if (ballY2 >= 120) {
    ballSpeed2 = -5;
  }

  if (ballY3 >= 120) {
    ballSpeed3 = -5;
  }

  if (ballY4 >= 120) {
    ballSpeed4 = -5;
  }

  if (ballY5 >= 120) {
    ballSpeed5 = -5;
  }

  if (ballY6 >= 120) {
    ballSpeed6 = -5;
  }

  if (ballY7 >= 120) {
    ballSpeed7 = -5;
  }

  if (ballY <= 0) {
    ballSpeed = 5;
  }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
  }
  if (ballY3 <= 0) {
    ballSpeed3 = 5;
  }

  if (ballY4 <= 0) {
    ballSpeed4 = 5;

  }
  if (ballY5 <= 0) {
    ballSpeed5 = 5;
  }

  if (ballY6 <= 0) {
    ballSpeed6 = 5;
  }

  if (ballY7 <= 0) {
    ballSpeed7 = 5;
  }

}

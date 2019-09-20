function setup() {
  createCanvas(400, 400);
}

var ballsizeX = 0;
var ballsizechange = 10;
var ballcolor = 255;
var ballcolorchange = -12.75;

function draw() {
  background(80);

  noStroke();
  fill(ballcolor);
  ellipse(mouseX, mouseY, ballsizeX);//the ball will move with mouse

  ballsizeX = ballsizeX + ballsizechange;
  ballcolor = ballcolor + ballcolorchange;
  
  if (ballsizeX >= 200) {
    ballsizechange = -10;
  }

  if (ballsizeX <= 0) {
    ballsizechange = 10;
  }
  
  if (ballcolor >= 255) {
    ballcolorchange = -12.75;//larger ball, darker color
  }
  
  if (ballcolor <= 0) {
    ballcolorchange = 12.75;//smaller ball, lighter color
  }
}

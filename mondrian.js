function setup() {
  createCanvas(600, 850);
}

function draw() {
  background(247);
  noStroke();

  //blue rectangles
  fill(30, 50, 150);
  rect(0, 0, 110, 140);
  rect(470, 270, 130, 170);
  rect(0, 600, 110, 110);

  //red rectangles
  fill(215, 10, 0);
  rect(110, 140, 360, 130);

  //yellow rectangles
  fill(255, 210, 20);
  rect(290, 0, 180, 60);
  rect(290, 600, 310, 250);

  //black lines
  stroke(0);
  strokeCap(SQUARE);
  strokeWeight(12);
  line(290, 60, 470, 60);
  line(0, 140, 470, 140);
  line(0, 270, 600, 270);
  line(470, 440, 600, 440);
  line(0, 600, 600, 600);
  line(0, 710, 290, 710);
  line(110, 0, 110, 710);
  line(290, 0, 290, 140);
  line(290, 600, 290, 850);
  line(470, 0, 470, 600);
}

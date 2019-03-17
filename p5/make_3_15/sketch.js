function setup() {
  createCanvas(480,120);
}

function draw() {
  background(204);  //Black
  fill(153);  // Medium gray
  ellipse(132, 82, 200, 200); //gray circle
  noFill();   //turn off fill
  ellipse(228, -16, 200, 200); //outline circle
  noStroke();   //turn off stroke
  ellipse(268, 118, 200, 200); // doesn't draw

// in this case the two circles disappear, but the first circle remains
}

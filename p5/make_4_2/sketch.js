

var y = 100;
var d = 130;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  ellipse(75, y, d, d); // left
  ellipse(175, y, d, d); //middle
  ellipse(275, y, d, d); //right
  ellipse(375, y, d, d); //extra
}

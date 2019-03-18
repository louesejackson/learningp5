function setup() {
  createCanvas(480,120);
}

function draw() {
  background(204);
  beginShape();
  vertex(100, 30);
  vertex(225, 30);
  vertex(330, 118);
  vertex(180, 116);
  vertex(195, 60);
  endShape(CLOSE);
}

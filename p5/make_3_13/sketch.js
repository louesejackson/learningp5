function setup() {
  createCanvas(480,120);
  strokeWeight (12);
}

function draw() {
  background(204);
  strokeJoin(ROUND); //ROUND THE STROKE CORNERS
  rect(40, 25, 70, 70);
  strokeJoin(BEVEL); //BEVEL THE STROKE CORNERS
  rect(140, 25, 70, 70);
  strokeCap(SQUARE);
  line(270, 25, 340, 95); // SQUARE THE LINE CAPS
  strokeCap(ROUND); //ROUND THE LINE CAPS
  line(350, 25, 420, 95);


}

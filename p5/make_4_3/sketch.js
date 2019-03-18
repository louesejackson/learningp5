



function setup() {
  createCanvas(900, 90);
}

function draw() {
  background(204);
  line(0,0, width, height); //line from (0,0) to (480, 120)
  line(width, 0, 0, height); // line from (480, 0) to (0, 120)
  ellipse(width/2, height/2, 60, 60);
}

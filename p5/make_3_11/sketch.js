function setup() {
  createCanvas(480,120);

}

function draw() {
  background(204);
    rect(160, 30, 260, 20);
    //The ellipse draws on top of the ellipse
    //because it comes after in the code
    ellipse(140, 0, 190, 190);
    //this rectangle will draw on the top because it comes after both
    rect(150, 15, 100, 40);


}

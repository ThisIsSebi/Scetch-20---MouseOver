let bubbles = [];
let bubble;
let button;
let colourX;
let colourY;
let colourZ;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    colourX = random(0, 255);
    colourY = random(255);
    colourZ = random(255);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
  button = createButton("Clear");
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

// function mousePressed() {
//
// }

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colourX = colourX;
    this.colourY = colourY;
    this.colourZ = colourZ;
    //this.brightness = 0;
  }

  clicked(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      this.colourX = random(255);
      this.colourY = random(255);
      this.colourZ = random(255);
      //this.brightness = 255;
      console.log("clicked");
    }
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    //fill(this.brightness, 125);
    fill(this.colourX, this.colourY, this.colourZ);
    ellipse(this.x, this.y, this.r * 2);
  }


}

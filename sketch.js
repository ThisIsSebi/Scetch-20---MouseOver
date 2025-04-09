let bubbles = [];
let bubble;
let button;
let colourX;
let colourY;
let colourZ;

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    colourX = random(0, 255);
    colourY = random(255);
    colourZ = random(255);
    let b  = new Bubble(x, y, r, colourX, colourY, colourZ);
    bubbles.push(b);
  }
  button = createButton("Clear");
}

function mousePressed() {
  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY);
  }
  bubble.clicked();  
  window.location.reload();
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
  constructor(x, y, r, colourX, colourY, colourZ) {
    this.x = x;
    this.y = y;
    this.r = r;
   this.brightness = 0;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125)
    // fill(this.colourX, this.colourY, this.colourZ);
    ellipse(this.x, this.y, this.r * 2);
  }

  clicked(x,y){
    let d = dist(x, y, this.x, this.y);
    if(d < this.r){
      this.brightness = 255;
      console.log("clicked");
    }
  }
}

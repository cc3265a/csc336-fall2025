let dots = [];
function setup() {
 // put setup code here
  createCanvas(900, 600);
  colorMode(HSB);
  noStroke();


  for (let i=0; i < 30; i++){
    dot = new Dot(width/2, height/2, i);
    dots.push(dot);
  }

}

function draw() {
  // put drawing code here
  background(0,0,0,50);
  // fill(mouseX/900 * 360,100, mouseY/600 * 100)

  // stroke(255,255,255, 80);
  // strokeWeight(0);
  // ellipse(mouseX, mouseY, 80,80);
  for (let dot of dots){
    dot.draw();
  }
  // dot.draw();
}

class Dot {
  constructor(x,y,index){
    this.x = x;
    this.y = y;
    this.hue = Math.random()*360;
    this.index = index;
    this.radius = 10+ dots.length-this.index*2;
  }
  draw(){
    // this.x += (-0.5 + Math.random()) *10;
    this.y+= (-0.5 + Math.random()) *10;

    this.x += map(Math.random(), 0, 1, -1, 1);

    // this.hue = Math.random()*360;

    fill(this.hue, 60, 100);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}

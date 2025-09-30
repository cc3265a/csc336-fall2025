let dots = [];
let f = 30;
let canvDiv = document.getElementById("myCanv");

function setup() {
  let myThing = createCanvas(1783, 300)
  myThing.parent(canvDiv);
  colorMode(HSB);
  noStroke();


  for (let i=0; i < 10; i++){
    let dot = new Dot(width/2, height/2, i);
    dots.push(dot);
  }
  for (let i=0; i < 20; i++){
    let dot = new SmallDot(width/2, height/2, i);
    dots.push(dot);
  }

}

function draw() {
  background(0,0,0,50);

  for (let d = 0; d < 2; d++){
    newDot = new SmallDot(width/2, height/2, f);
    dots.push(newDot);
  }

  let ran = Math.random()*10;
  if (ran > 7){
    newDot = new Dot(width/2, height/2, f);
    dots.push(newDot);
  }
  
  for (let dot of dots){
    dot.draw();
  }

  for (let i = 200; i > 70; i = i - 10 ){
    fill(1, 1, 1, 0.2);
    circle(width/2, height/2, i)
  }
    fill(1, 1, 1);
    circle(width/2, height/2, 70)

  f++
  print(dots.length)
}

class Dot {
  constructor(x,y,index){
    this.x = x;
    this.y = y;
    this.hue = Math.random()*360;
    this.index = index;
    this.radius = Math.random()*20 + 20;
    this.newRad = this.radius;
    this.xMag = random(-1,1);
    this.yMag = random(-1,1)

    this.startVelocityX = this.xMag;
    this.startVelocityY = this.yMag;

    this.newVelocityX = this.startVelocityX;
    this.newVelocityY = this.startVelocityY;

  }
  draw(){
    
    this.x += this.newVelocityX;
    this.y += this.newVelocityY;
    this.newRad += 0.5;
    this.newVelocityX *= this.radius/(this.radius*0.9);
    this.newVelocityY *= this.radius/(this.radius*0.9);

    if (this.x > width + this.radius || this.x <0 - this.radius){
      const index = dots.indexOf(this);
      if (index !== -1) {
          dots.splice(index, 1); 
      }
    }

    if (this.y > height + this.radius|| this.y <0 - this.radius){
      const index = dots.indexOf(this);
      if (index !== -1) {
          dots.splice(index, 1); 
      }
    }

    fill(this.hue, 6, 100);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}

class SmallDot {
  constructor(x,y,index){
    this.x = x;
    this.y = y;
    this.hue = Math.random()*360;
    this.index = index;
    this.radius = Math.random()*10;
    this.newRad = this.radius;
    this.xMag = random(-1,1);
    this.yMag = random(-1,1)

    this.startVelocityX = this.xMag;
    this.startVelocityY = this.yMag;

    this.newVelocityX = this.startVelocityX;
    this.newVelocityY = this.startVelocityY;

  }
  draw(){
    
    this.x += this.newVelocityX;
    this.y += this.newVelocityY;
    this.newRad += 0.1
    this.newVelocityX *= this.radius/(this.radius*0.99);
    this.newVelocityY *= this.radius/(this.radius*0.99);

    if (this.x > width + this.radius || this.x <0 - this.radius){
      const index = dots.indexOf(this);
      if (index !== -1) {
          dots.splice(index, 1); 
      }
    }

    if (this.y > height + this.radius|| this.y <0 - this.radius){
      const index = dots.indexOf(this);
      if (index !== -1) {
          dots.splice(index, 1); 
      }
    }

    fill(this.hue, 6, 100);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}

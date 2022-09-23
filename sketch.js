function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

let offset = 0;
const inc= 0.005

function draw() {




push();

for(i=0; i<=255; i++){

  let r=i*noise(offset);
  let g=i*noise(offset);
  let b=i*noise(offset);

  color= (r,g,b);
}

fill= color;

let xrect= width/2;
let yrect= height/2;

let xrectnew= xrect*noise(offset);
let yrectnew= yrect*noise(offset);

rect(xrect, yrect, 50, 50);

for (i=0; i<=width; i++) {
   
  rect(50+ xrectnew+frameCount ,xrectnew+frameCount, 50, 50)
}
 

}
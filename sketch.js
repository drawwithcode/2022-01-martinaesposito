function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

let offset = 0;
const inc= 0.005


function color() {
  for(i=0; i<=255; i++){
    let r=i*noise(offset);
    let g=i*noise(offset);
    let b=i*noise(offset);
    
    color= (r,g,b);
  }
}

fill= color;

function draw() {

let xrectnew= width*noise(offset);
let yrectnew= height*noise(offset); 

for (i=0; i<=width; i++) {
   
  rect(xrectnew+ frameCount ,xrectnew+ frameCount, 100*noise(offset), 50*noise(offset))

  offset += inc; 
}
 

}
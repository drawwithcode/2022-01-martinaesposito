
//dichiaro le due variabili hue e brightness
let huey;
let brgt;

//dichiaro le due variabili corrispondenti alle coordinate dei quadrati
let i;
let j;

//dichiaro le due variabili corrispondenti alle dimensioni della canvas
let width=600;
let height=600; 

//dichiaro le dimensioni dei lati dei miei quadrati
let lw= width/24;
let lh= height/24;

//dichiaro un array dei punti su cui faccio onclick
let points=[];

function setup(){

//creo una canvas quadrata e la posiziono al centro del mio schermo
  let cnv= createCanvas(width, height);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background("black");

  colorMode(HSB, 360, 100, 100, 1);
  frameRate(4)
  noStroke();

}

function draw() {

  rectGrid();
  rectOver();
  rectClick();

}

//funzione che disegna una griglia di quadrati descritta come la dimensione della canvas/20
function rectGrid() {

  for( i= 0; i < lw; i++){
    for( j= 0; j < lh; j++){
 
      huey= random(150, 360)
      brgt= random(0, 30)

      fill(huey, 70, brgt, 0.5);
      rect(i*lw, j*lh, lw, lh);
  
      }
    }

}

//funzione che cambia il colore del quadratino (e degli 8 che lo circondano) su cui sto overando   
function rectOver() {

  for( i= 0; i < lw; i++){
    for( j= 0; j < lh; j++){

      if( mouseX > i*lw 
        && mouseX < i*lw + lw 
        && mouseY > j*lh 
        && mouseY < j*lh + lh){
        
        huey= random(0, 150);
        brgt= 100;

        //quadratino su cui sto overando
        fill(huey, 40, brgt, 1);
        rect(i*lw , j*lh, lw, lh);

        huey= random(0, 150);
        brgt= random(35, 55);

        //quadratini più vicini a quello su cui sono in over
        fill(huey, 55, brgt, 1);
        rect(i*lw + lw , j*lh , lw, lh);
        rect(i*lw - lw , j*lh , lw, lh);
        rect(i*lw , j*lh + lh , lw, lh);
        rect(i*lw , j*lh - lh , lw, lh);

        huey= random(0, 150);
        brgt= random(20, 30);

        //quadratini più lontani a quello su cui sono in over
        fill(huey, 70, brgt, 1);
        rect(i*lw + lw , j*lh + lh , lw, lh);
        rect(i*lw + lw , j*lh - lh , lw, lh);
        rect(i*lw - lw , j*lh - lh , lw, lh);
        rect(i*lw + lw , j*lh + lh , lw, lh);
        rect(i*lw - lw , j*lh + lh , lw, lh);
        rect(i*lw - lw , j*lh - lh , lw, lh);
       
        }
      }
    }

}

//funzione che cambia la brightness e la hue del quadratino su cui ho cliccato
function rectClick() {

//salvo nell'array points le coordinate del quadrato su cui ho cliccato
  if (mouseIsPressed) {
    if ( mouseButton == LEFT) {

      //creo una variabile temporanea con le coordinate del mouse quando clicco e poi aggiungo i valori nell'array
      let tmp = { 'x': mouseX, 'y': mouseY };
      points.push(tmp);

      console.log(points);
    }
  }

//ciclo che crea quadrati con le coordinate mouseX e mouseY contenute nell'array points
  for( i= 0; i < lw; i++){
    for( j= 0; j < lh; j++){

     
  for(let a = 0; a < points.length; a++) {

      if( points[a].x > i*lw 
        && points[a].x < i*lw + lw 
        && points[a].y > j*lh 
        && points[a].y < j*lh + lh){
          
          huey= random(0, 150);
          brgt= random(75,100);
      
          fill(huey, 40, brgt, 1);
          rect(i*lw , j*lh, lw, lh);

        }
      }
    }
  }
}


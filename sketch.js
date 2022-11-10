// let drawAttraction = false; 

function preload() {
  // load any assets (images, sounds, etc.) here
}

var yoff = 0;

let confettiColor = [], confetti = [];


var attractors = [];
//var attractor;
var moths = [];

let drawB = false;
let drawD = false;
let drawM = true;
let drawF= false;


let pos = 25;

let xx = 0
let yy = 0
let qq = 60 

let x1 = 700;
let y1 = 400;
let x2 = 300;
let y2 = 150;
let d = 5;

function setup() {
  // add your setup code here

  createCanvas(windowWidth, windowHeight);

  confettiColor = [color(255, 255, 255, 170)];
  for (let i = 0; i < 50; i++) {
    confetti[i] = new Confetti(random(-50, 40), random(10, 50), random(-1, 1));
  }

  for (var i = 0; i < 10 ; i++){
    moths.push(new Moth(0, 0));
  }

  for (var i = 0; i < 1 ; i++){
    attractors.push(createVector(100, 100));
  }

  attractor = createVector(100, 100);


}



function draw(){
  fill(0);

  background(0);


  fill(255);

  noStroke();

  //light
  let r = 5;
  fill(255);
  circle(x1, y1, r);
  fill(255, 255, 255, 10);
  circle(x1, y1, 100);

  fill(255, 255, 255, 10);
  circle(x1, y1, 300);

  fill(255, 255, 255, 10);
  circle(x1, y1, 200);

  fill(255, 255, 255, 5);
  circle(x1, y1, 700);


   mothFly(x2, y2);
  

  if (mouseIsPressed) {
    //Create a vector of the distance between them
    var m = createVector(x2 - x1, y2- y1);
    //This sets the magnitude so that it moves in a constant rate but in the right direction.
    var p = m.normalize();
    //Set d equal to the speed
    x2 -= m.x * d;
    y2 -= m.y * d;

  }

  if(drawB == true){
    drawBlackout();

  }

  if(drawM == true){
  for(var i = 0; i < moths.length; i++){
    var moth = moths[i];

  // for (var i = 0; i < attractors.length ; i++){
  //   point(attractors[i].x, attractors[i].y);
  // }

  
  point(attractor.x, attractor.y);

     for (var j = 0; j < attractors.length ; j++){
       moth.attracted(attractors[j]);
     }
    moth.show();
    moth.update();
  }
  }

  var l = dist(x1, y1, x2, y2)

  if(l < 4){
    drawM = false;
    drawDecay();
  }
  else{
    drawM = true;
  }

}

function mouseDragged(){
  x1 = mouseX;
  y1 = mouseY;
}

function mouseWheel(event){
  print(event.delta);
  pos -= event.delta;
  return false;
}

function keyPressed(){
  if(key == 'B' || key == 'b'){
    drawB = true;
  }

  if(key == 'F' || key == 'f'){
   drawF = true;
  }
}

function keyReleased(){
  drawB = false;

}


function drawBlackout(){
  noStroke();
  fill(0);
  rect(-800, -400, 2800, 1800);
}


function drawDecay(){
  noStroke();
  background(0);
  //fill(0);
  //rect(-800, -400, 2800, 1800);




  for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > 8*height) {
      confetti[i] = new Confetti(random(-50, 40), random(10, 50), random(-1, 1));
    }
  }

  for (let i = int(confetti.length / 2); i < confetti.length; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > 8*height) {
      confetti[i] = new Confetti(random(-50, 40), random(10, 50), random(-1, 1));
    }
  }

  translate(-x2, -y2);

    

    growFlower(2550, 500, 0.5),
    growFlower(2550, 750, 0.5),
    growFlower(50, 350, 0.5),
    growFlower(300, 1200, 0.5),
    growFlower(500, 1500, 0.5),
    growFlower(2600, 1400, 0.5),
    growFlower(1450, 1450, 0.5),
    growFlower(1650, 1500, 0.5),
    growFlower(1300, 100, 0.5),
    growFlower(1100, 70, 0.5),
    growFlower(1200, 200, 0.5),
    growFlower(2100, 270, 0.5)



    growFlower(0, 600, 1),
    growFlower(50, 50, 1),
    growFlower(140, 230, 1),
    growFlower(950, 700, 1),
    growFlower(800, 650, 1),
    growFlower(250, 600, 1),
    growFlower(1400, 700, 1),
    growFlower(350, 700, 1),
    growFlower(1400, 300, 1),
    growFlower(1180, 50, 1),
    growFlower(430, 50, 1),
    growFlower(1000, 30, 1)



    growFlower(900, 80, 1.5),
    growFlower(160, 50, 1.5)



    growFlower(30, 200, 2),
    growFlower(50, 380, 2),
    growFlower(570, 350, 2),
    growFlower(280, 350, 2),
    growFlower(680, 250, 2),
    growFlower(400, 20, 2);


  translate(x2, y2);


  
  // let end = pos+1300;

  // strokeWeight(1800);
  // stroke(170);
  // line(-600, end, 1100, end);

  translate(-x2, -y2);

  let r = 5;
  noStroke();
  fill(255);
  circle(mouseX, mouseY, r);
  fill(255, 255, 255, 10);
  circle(mouseX, mouseY, 100);

  fill(255, 255, 255, 10);
  circle(mouseX, mouseY, 300);

  fill(255, 255, 255, 10);
  circle(mouseX, mouseY, 200);

  fill(255, 255, 255, 5);
  circle(mouseX, mouseY, 700);

  translate(x2, y2);


}

function growFlower(x, y, z) {
  scale(z);
  fill(255, 255, 255, 100);
  stroke(255, 255, 255, 170);
  strokeWeight(1);

  translate(x,y);
  for (let i = 0; i < 6; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/3);
  }

  translate(-x,-y);
  scale(1/z);

}

function growFlower(xx,yy,qq) {
  //flower shrinks
    // if((mouseX >= xx && mouseX <= xx+20) && (mouseY >= yy && mouseY <= yy+20)){
    
    //   push();
    //   fill(255, 255, 255, 100);
    //   stroke(255);
    //   strokeWeight(1);
    //   translate(xx, yy);
    //   noStroke();
  
    //   //rotate(radians(frameCount / 2));
    //   for (var i = 0; i < 10; i++) {
    //     if (frameCount <= 800) {
    //       //scale(qq);
    //       ellipse(0, 40 - frameCount / 20, 25 - frameCount / 40, 50 - frameCount / 20);
    //       //scale(1/qq);
    //     }
    //     if (frameCount > 800) {
    //       //scale(qq);
    //       ellipse(0, 10, 10, 20);
    //       //scale(1/qq);

    //     }
    //     rotate(PI / 5);
    //   }
    //   pop();
    // }

    //growFlower grows
    if((mouseX >= xx+21 && mouseX < xx+150) && (mouseY >= yy+21 && mouseY < yy+150)){
    
      push();
      fill(255, 255, 255, 100);
      stroke(255);
      strokeWeight(1);
      translate(xx, yy);
      noStroke();
  
      //rotate(radians(frameCount / 2));
      for (var j = 0; j < 10; j++) {
        if (frameCount <= 1000) {
          //scale(qq);
          ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
          //scale(1/qq);
        }
        if (frameCount > 1000) {
          //scale(qq);
          ellipse(0, 40, 25, 50);
          //scale(1/qq);
        }
        rotate(PI / 5);
      }
      pop();

    }

    else{
     // scale(qq);
      ellipse(xx, yy, 1);
      //scale(qq);
    }


}

function mothFly(x, y){

  translate(x, y);


  stroke(255);
  fill(255, 255, 255, 170);
  strokeWeight(1);

  var delta = PI/80;
  var deltaNoise = 0.1;

  var xoff = 0;

  beginShape();
  for (var a = -PI/2; a <= PI/2; a+= delta){ 
    var n = noise(xoff, yoff) ;
    var r = sin(2*a)*map(n, 0, 1, 50, 100) * 1/1.2;
    var x = r * cos(a) ;
    var y = sin(yoff) * r * sin(a);
    xoff += deltaNoise ;
    //point(x,y);
    vertex(x,y);
    r--;
  } 

 for (var a = PI/2; a <= 3*PI/2; a += delta){ 
   var n = noise(xoff, yoff);
   var r = sin(2*a)*map(n, 0, 1, 50, 100) * 1/1.2;
   var x = r * cos(a);
   var y = sin(yoff) * r * sin(a);
   xoff -= deltaNoise;
   //point(x,y);
   vertex(x,y);
   r--;
 }  

 endShape();

 yoff += 0.02;

 translate(-x, -y);
 

}


// when you hit the spacebar, what's currently on the canvas will be saved (as
// a "thumbnail.png" file) to your downloads folder. this is a good starting
// point for the final thumbnail of your project (this allows us to make a
// showcase of everyone's work like we did for the nametag assignment).
//
// remember that you need to resize the file to 1280x720, and you will probably
// want to delete this bit for your final submission.

function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}

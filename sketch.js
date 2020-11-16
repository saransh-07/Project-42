var sc;
var min;
var hr;
var scAngle;
var minAngle;
var hrAngle;
/*var sc_x2,sc_y2;
var hr_x2, hr_y2;
var min_x2,min_y2;*/

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(0,0,0);  
  drawSprites();
  sc = second();
  min = minute();
  hr = hour();
  scAngle = map(sc,0,60,0,360);
  minAngle = map(min,0,120,0,360);
  hrAngle = map(hr,0,24,0,360);
 console.log(scAngle);
 push();
 translate(400,200);
 rotate(scAngle);
 strokeWeight(10);
 stroke(255,0,0);
 line(0,0,0,-100);
 pop();

 push();
 translate(400,200);
 rotate(hrAngle);
 strokeWeight(10);
 stroke(0,255,0);
 line(0,0,0,-50);
 pop();

 push();
 translate(400,200);
 rotate(minAngle);
 strokeWeight(10);
 stroke(0,0,255);
 line(0,0,0,-75);
 pop();
 
 push();
 translate(400,200)
 noFill();
 strokeWeight(10);
 stroke(255,0,0);
 arc(0,0,290,290,270,scAngle-90);
 
 pop();
 push();
 translate(400,200)
 noFill();
 strokeWeight(10);
 stroke(0,255,0);
 arc(0,0,240,240,270,hrAngle-90);
 
 pop();

 push();
 translate(400,200);
 noFill();
 strokeWeight(10);
 stroke(0,0,255);
 arc(0,0,265,265,270,minAngle-90);
 
 pop();
}
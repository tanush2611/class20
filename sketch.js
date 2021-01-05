var a;
var s;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
s=createSprite(400,200,20,20);
}

function draw() {
  background(255,255,255);  
  s.x=mouseX;
  s.y=mouseY;
  console.log(s.x-a.x);
  if(s.x-a.x<s.width/2+a.width/2&&a.x-s.x<a.width/2+s.width/2&&s.y-a.y<a.height/2+s.height/2&&a.y-s.y<a.height/2+s.height/2){
    s.shapeColor="red";
    a.shapeColor="red";
  }
  else {
    s.shapeColor="grey";
    a.shapeColor="grey";
  }
  
  drawSprites();
}
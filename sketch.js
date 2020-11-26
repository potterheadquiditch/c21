var fixedRect1, movingRect;
var fixedRect2, fixedRect3;
function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  fixedRect2 = createSprite(500, 300, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true; 
  fixedRect3= createSprite(400, 200, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if( isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
}
if( isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor = "red";
  fixedRect1.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect1.shapeColor = "green";
}
if( isTouching(movingRect,fixedRect3)){
  movingRect.shapeColor = "red";
  fixedRect3.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect3.shapeColor = "green";
}
  drawSprites();
}

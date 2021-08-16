var path, invisibleSide1, invisibleSide2, pathImg;
var runner, runner_running;
function preload(){
  //pre-load images
pathImg=loadImage("path.png");
runner_running=loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);

path.scale=1.2;

runner=createSprite (200,200,10,10);
runner.addAnimation("running",runner_running);
runner.scale=0.08;

invisibleSide1= createSprite(400,0,100,1000);
  invisibleSide1.visible =false;

  invisibleSide2= createSprite(0,0,100,1000);
  invisibleSide2.visible =false;
}

function draw() {
  background("green");
  
  path.velocityY=-4;
  if (path.y<0){
    path.y=height/2;

  }

  runner.x=World.mouseX;
  
runner.collide(invisibleSide1);
runner.collide(invisibleSide2);



drawSprites();
}

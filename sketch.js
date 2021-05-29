var balloon,background,database;
function preload(){
  backgroundImg=loadImage("cityImage.png")
  balloonImage=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png")
  
}
function setup(){
  database=firebase.database()
var balloonPosition=database.ref("balloon/height")


  

  
  createCanvas(900,900);

  balloon=createSprite(100,400,20,20)
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale=0.5;
}

function draw(){
  
  background(backgroundImg);
if(keyDown(LEFT_ARROW)){
  balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y=balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y=balloon.y+10;
}
drawSprites();
}
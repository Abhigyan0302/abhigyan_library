var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,100,10,50);
fixedrect.shapeColor="red";
fixedrect.velocityY=2;

movingrect=createSprite(200,400,10,50); 
movingrect.shapeColor="blue";
movingrect.velocityY=-2;
}
function draw(){
background("yellow");
bounceOff(fixedrect,movingrect);

drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2){
object1.velocityX=object1.velocityX*(-1);
object2.velocityX=object2.velocityX*(-1);
    }
    if( object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);  

  }
}

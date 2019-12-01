var fixedrect,movingrect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,200,10,50);
fixedrect.shapeColor="red";

movingrect=createSprite(300,100,10,50); 
movingrect.shapeColor="blue";

ob1=createSprite(400,200,20,20);
ob1.shapeColor="green";

ob2=createSprite(500,200,20,20);
ob2.shapeColor="yellow";

ob3=createSprite(600,200,20,20);
ob3.shapeColor="cyan";

ob4=createSprite(700,200,20,20);
ob4.shapeColor="brown";


}
function draw() {
  background("black");  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,ob4)){
    movingrect.shapeColor="green","yellow";
    ob4.shapeColor="neon","white";

  }
  else{
    ob4.shapeColor="brown"; 
    movingrect.shapeColor="blue";
  }

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object1.height/2){
     return true;

  }
 else{
   return false;
 }
}
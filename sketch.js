var quadrado




function setup() {
  createCanvas(400,400);
  quadrado=createSprite(200,200,20,20)
  quadrado.shapeColor="white"
}

function draw() 
{
  background("blue");
drawSprites()
if (keyIsDown(RIGHT_ARROW)) {
 quadrado.x+=7 
}
if (keyIsDown(LEFT_ARROW)) {
 quadrado.x-=7 
}
if (keyIsDown(DOWN_ARROW)) {
 quadrado.y+=7 
}
if (keyIsDown(UP_ARROW)) {
 quadrado.y-=7 
}

}





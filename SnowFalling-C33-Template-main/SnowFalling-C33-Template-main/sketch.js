var bgimg
var cat, catimg


function preload(){

bgimg = loadImage('snow3.jpg')
catimg = loadImage('catimg.jpg')

  
}


function setup() {
  createCanvas(800,400);

  cat = createSprite(400,350)
  cat.addImage(catimg)
  cat.scale = 0.1;

 
}

function draw() {
  background(bgimg);  
  drawSprites();
  
    
  
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    cat.velocityX = -10
  }
  if(keyCode === RIGHT_ARROW){
    cat.velocityX = 10
  }
}


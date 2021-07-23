var mouse, mouse1, mouse2, mouse3;
var cat, cat1, cat2, cat3;

var bg;
function preload() {
    //load the images here
bg = loadImage("images/garden.png")

mouse1 = loadAnimation("images/mouse1.png")
mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouse3 = loadAnimation("images/mouse4.png")

cat1 = loadAnimation("images/cat1.png")
cat2 = loadAnimation("images/cat2.png", "images/cat3.png")
cat3 = loadAnimation("images/cat4.png")

}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here

    mouse = createSprite(200,600)

    mouse.addAnimation("standingMouse", mouse1);
    mouse.addAnimation("scaredMouse", mouse2);
    mouse.addAnimation("blindMouse", mouse3);

    mouse.scale = 0.03

    cat = createSprite(870,600)

    cat.addAnimation("standingCat", cat1);
    cat.addAnimation("walkingCat", cat2);
    cat.addAnimation("finalCat", cat3);

    cat.scale = 0.05

}

function draw() {

    background(bg)
    //Write condition here to evalute if tom and jerry collide
    if(mouse.isTouching(cat)){

    cat.velocityX = 0;
    cat.changeAnimation("finalCat")

    mouse.changeAnimation("blindMouse")

    }
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === 32){

        cat.velocityX = -20;

        cat.changeAnimation("walkingCat")
        
        mouse.changeAnimation("scaredMouse")
    }
  //For moving and changing animation write code here


}

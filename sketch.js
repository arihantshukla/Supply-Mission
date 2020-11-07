var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var drop1,drop2,drop3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	


	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	drop1=createSprite(390,655,100,10)
	drop1.shapeColor="red"

	drop2=createSprite(440,635,10,50)
	drop2.shapeColor="red"

	drop3=createSprite(340,635,10,50)
	drop3.shapeColor="red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

Body.setStatic(packageBody,false)
    // Look at the hints in the document and understand how to make the package body fall only on key_down
    
  }
}




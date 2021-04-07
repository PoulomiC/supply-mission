const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, boxX=0, boxY=0;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {
	createCanvas(windowWidth, 600);
	rectMode(CENTER);
	
	boxX = width/2;
	boxY = 600;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height, width, 18);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true});
 	World.add(world, ground);

 	boxleftSprite=createSprite(boxX-80, boxY-85, 20, 150);
 	boxleftSprite.shapeColor=color(255,0,0);

 	/*boxLeftBody = Bodies.rectangle(boxX, boxY-15, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);*/

 	boxBase=createSprite(boxX+10, boxY-20, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	/*boxBottomBody = Bodies.rectangle(boxX+10, boxY-15, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);*/

 	boxRightSprite=createSprite(boxX+100 , boxY-85, 20, 150);
 	boxRightSprite.shapeColor=color(255,0,0);

 	/*boxRightBody = Bodies.rectangle(boxX+200-20 , boxY-15, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);*/
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  
  drawSprites();
}
   
function keyPressed(){	
	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	}
}

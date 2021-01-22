
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	hammer1 =new hammer(700,320);
	ground1= new ground(600,height,1200,20);
	rubber1=new rubber(700,390,70);
	stone1=new stone(100,100);
	sandball1=new sandballs(600,120,8);
	sandball2=new sandballs(598,120,8);
	sandball3=new sandballs(595,120,8);
	sandball4=new sandballs(580,120,8);
	sandball5=new sandballs(585,120,8);
	sandball6=new sandballs(583,120,8);
	ironbody1=new ironbody(200,200);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  
  hammer1.display();
  ground1.display();
  rubber1.display();
  stone1.display();
  sandball1.display();
  sandball2.display();
  sandball3.display();
  sandball4.display();
  sandball5.display();
  sandball6.display();
  ironbody1.display();

  drawSprites();
 
}




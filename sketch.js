
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new Bob (300,400,40);
	bob2=new Bob (340,400,40);
	bob3=new Bob (380,400,40);
	bob4=new Bob (420,400,40);
	bob5=new Bob (460,400,40);

   bar= new Support (380,150,250,20)


   string3= new String(bob3.body,bar.body,0,0)
   string5= new String(bob5.body,bar.body,100,0)
   string1= new String(bob1.body,bar.body,-100,0)
   string4= new String(bob4.body,bar.body,50,0)
   string2= new String(bob2.body,bar.body,-50,0)
   
   






	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(255);



  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
bar.display();

  
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-120,y:0});

}



}


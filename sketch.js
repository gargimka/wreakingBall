
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
  createCanvas(1000,700);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
	world = engine.world;


  ground1=new Ground(500,690,1000,20);
  
  ball=new Ball(200,200,140);
  line1=new Rope(ball.body,{x:400,y:50});
  box1=new Box(600,100,50,50);
  box2=new Box(600,150,50,50);
  box3=new Box(600,200,50,50);
  box4=new Box(600,250,50,50);
  box5=new Box(600,300,50,50);
  box6=new Box(600,350,50,50);
  box7=new Box(600,400,50,50);
  box8=new Box(600,450,50,50);
  box9=new Box(600,500,50,50);
  box10=new Box(600,550,50,50);
  box11=new Box(600,600,50,50);
  box12=new Box(600,650,50,50);
}

function draw() {
  Engine.update(engine);
  background(255,225,255);  

  ground1.display();
  
  line1.display();
  ball.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


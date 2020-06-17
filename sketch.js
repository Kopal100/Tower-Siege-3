const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var ball,sling;
var ball1,ball2,ball3,ball4,ball5;
var rod;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
   ground = new Ground(350,200,100,20);
   ball = new baller(20,20);
   sling = new SlingShot(ball.body,{x:150,y:100});
   ball1 = new BBox(350,190,20,20)
   ball2 = new BBox(350,180,20,20)
   ball3 = new BBox(340,190,20,20)
   ball4 = new BBox(360,190,20,20)
   ball5 = new BBox(345,180,20,20)
   ball6 = new BBox(350,170,20,20)
   rod = new BBox(350,160,10,30)
}
  



function draw() {
  background(0,255,255);
  Engine.update(engine);
  
  ground.display();
  ball.display();
  sling.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  rod.display();

  
}

function mouseDragged(){
   Matter.Body.setPosition (ball.body,{x:mouseX,y:mouseY}); 
  
  }
  function mouseReleased(){
    sling.fly();
  }

  function keyPressed(){
    if(keyCode===32){
      sling.attach(ball.body);
    }
  }
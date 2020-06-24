const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var ball,sling;
var ball1,ball2,ball3,ball4,ball5;
var rod;
var score = 0;
var backgroundCC;

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
  if (backgroundCC){
    background();
  }
 
  Engine.update(engine);
  
  
  textSize(35);
  fill("green")
  text("SCORE : "+score,500,40);
 
  ground.display();
  ball.display();
  sling.display();
  ball1.display();
  ball1.Score();

  ball2.display();
  ball2.Score();

  ball3.display();
  ball3.Score();

  ball4.display();
  ball4.Score();

  ball5.display();
  ball5.Score();

  ball6.display();
  ball6.Score();


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
      // Matter.body.setPosition(ball.body,{x:150,y:100});
      sling.attach(ball.body);
    }
  }
  async function changeBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON =await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=06 && hour<=19){
      backgroundCC = "yellow";
    }
    else{
      backgroundCC = "blue"
    }
    
    
    }
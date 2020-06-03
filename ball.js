class baller {
    constructor(x,y){
        var options={
         restitution:10,
         density:0.4,
         friction:0.5
        }
     this.body = Bodies.circle(x,y,20,20);
     this.radiusX =20;
     this.radiusY = 20;
     World.add(world,this.body)

    }

    display(){
    fill("red")
        ellipse(this.body.position.x,this.body.position.y,this.radiusX,this.radiusY);
        
    }
}
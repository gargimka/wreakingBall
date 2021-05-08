class Ball {
    constructor (x,y,radius){
        var options = {
            isStatic: false,
            restitution:1,
            density:1.0,
            frictionAir:0.0001
        }
        
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }


    display(){
      var pos=this.body.position
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      fill("yellow");
      stroke("red")
      strokeWeight(2);
      ellipse(0,0,this.radius);
      pop()
        
    }


}
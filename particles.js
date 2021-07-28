class particle{


    constructor(x,y,radius) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
      }
    };
  





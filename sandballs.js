class sandballs {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.radius=radius;
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill(255);
      ellipse(0, 0,this.radius);
      pop();
    }
  };
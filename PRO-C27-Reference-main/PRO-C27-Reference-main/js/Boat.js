class Boat {
  //add parameter
  constructor(x, y, width, height, boatPos) {
  
    //add properties for animation
    this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.isBroken = false;

    World.add(world, this.body);
  }
  //create function for animation speed

  //create function for removing boat

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    //calculate 

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(animation, 0, this.boatPosition, this.width, this.height);
    pop();
  }
}

class Rock{

    constructor(x,y,radius){

        var options = {
            isStatic:false,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);

    }

    display(){
        //ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.radius*2, this.radius*2)
        }  

}

// remember to do this.body.setAngle for box
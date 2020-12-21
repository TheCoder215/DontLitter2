class Ground {

    constructor(x,y,width,height){

        var options = {
            isStatic:true,
            density:1,
            friction:1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    display(color){

    fill(color);
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
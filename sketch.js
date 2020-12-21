const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g1, g2;
var slingy;

function setup(){
    createCanvas(1366,657)
    engine = Engine.create();
    world = engine.world;

    makeObjects();
    rock = new Rock(132,336,25);

    slingy = new Slingshot(rock.body, {x: 132, y:336});
}

function draw(){
    console.log(b1.x-b2.x);
    background(30)
    Engine.update(engine);
fill(255)
    text(mouseX + " , " + mouseY,mouseX,mouseY)


    g1.display("#ff244c");
    g2.display("#53e079");
    
    slingy.display();
    stroke(1);
    strokeWeight(1);
    b1.display("orange");
    b2.display("lightblue");
    b3.display("pink");
    b4.display("lightgreen");
    b5.display("#fff159");
    b6.display("#9238ff");
    b7.display("#ff8c92")
    b8.display("#FFFF32");
    b9.display("blue");
    b10.display("green");
    b11.display(217);
    b12.display("purple");
    b13.display("red");
    b14.display("brown");
    b15.display("lightgreen");
    b16.display(180);
    b17.display("orange");
    b18.display("lightblue");
    b19.display("pink");
    b20.display("lightgreen");
    b21.display("#fff159");

    ba1.display("orange");
    ba2.display("lightblue");
    ba3.display("pink");
    ba4.display("lightgreen");
    ba5.display("#fff159");
    ba6.display("#9238ff");
    ba7.display("#ff8c92")
    ba8.display("#FFFF32");
    ba9.display("blue");
    ba10.display("green");
    ba11.display(217);
    ba12.display("purple");
    ba13.display("red");
    ba14.display("brown");
    ba15.display("lightgreen");
    ba16.display(180);
    ba17.display("orange");
    ba18.display("lightblue");
    ba19.display("pink");
    ba20.display("lightgreen");
    ba21.display("#fff159");

    rock.display();
    


}

function makeObjects(){
  g1 = new Ground(430,480,230,20);
  g2 = new Ground(1100, 300, 230, 20);
  b1 = new Box(355,460,30,35,0.02);
  b2 = new Box(385,460,30,35,0.02);
  b3 = new Box(415,460,30,35,0.02);
  b4 = new Box(445,460,30,35,0.02);
  b5 = new Box(475,460,30,35,0.02);
  b6 = new Box(505,460,30,35,0.02);
  b7 = new Box(370,427.5,30,35,0.009); 
  b8 = new Box(400,427.5,30,35,0.009); 
  b9 = new Box (430,427.5,30,35,0.009);
  b10 = new Box(460,427.5,30,35,0.009);
  b11 = new Box(490,427.5,30,35,0.009);
  b12 = new Box(475,395,30,35,0.0044);
  b13 = new Box(445,395,30,35,0.0044);
  b14 = new Box(415,395,30,35,0.0044);
  b15 = new Box(385,395,30,35,0.0044);
  b16 = new Box(400,362.5,30,35,0.0021);
  b17 = new Box(430,362.5,30,35,0.0021);
  b18 = new Box(460,362.5,30,35,0.0021);
  b19 = new Box(415,330,30,35,0.0021);
b20 = new Box(445,330,30,35,0.0021);
  b21 = new Box(430,297.50,30,35,0.05);

  ba1 = new Box(355+670,460-175,30,35,0.02);
  ba2 = new Box(385+670,460-175,30,35,0.02);
  ba3 = new Box(415+670,460-175,30,35,0.02);
  ba4 = new Box(445+670,460-175,30,35,0.02);
  ba5 = new Box(475+670,460-175,30,35,0.02);
  ba6 = new Box(505+670,460-175,30,35,0.02);
  ba7 = new Box(370+670,427.5-175,30,35,0.009); 
  ba8 = new Box(400+670,427.5-175,30,35,0.009); 
  ba9 = new Box (430+670,427.5-175,30,35,0.009);
  ba10 = new Box(460+670,427.5-175,30,35,0.009);
  ba11 = new Box(490+670,427.5-175,30,35,0.009);
  ba12 = new Box(475+670,395-175,30,35,0.0044);
  ba13 = new Box(445+670,395-175,30,35,0.0044);
  ba14 = new Box(415+670,395-175,30,35,0.0044);
  ba15 = new Box(385+670,395-175,30,35,0.0044);
  ba16 = new Box(400+670,362.5-175,30,35,0.0021);
  ba17 = new Box(430+670,362.5-175,30,35,0.0021);
  ba18 = new Box(460+670,362.5-175,30,35,0.0021);
  ba19 = new Box(415+670,330-175,30,35,0.0021);
ba20 = new Box(445+670,330-175,30,35,0.0021);
  ba21 = new Box(430+670,297.5-175,30,35,0.05);

}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY})


}

function mouseReleased(){
  slingy.release();
}
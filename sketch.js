const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,hammerImg;
var rubber1, rubber2, rubber3, rubber4;
var iron1,iron2
var stone1,stone2,stone3,stone4

function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
   
    rubber1 = new Rubber(550, 46, 40, 55);
    rubber2 = new Rubber(600, 46, 40, 55);
    rubber3 = new Rubber(700, 46, 40, 55);
    rubber4 = new Rubber(650, 46, 40, 55);
  
    iron1 = new Iron(450,200,70,70);
    iron2 = new Iron(750,200,70,70);

    stone1 = new Stone(450,100,20,20);
    stone2 = new Stone(750,100,20,20);
    stone3 = new Stone(600,40,20,20);
    stone4 = new Stone(700,40,20,20);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();

    iron1.display();
    iron2.display();

    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
 
}
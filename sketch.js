const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,wall1,wall2;
var bridge, jointPoint;
var stone
var stones=[];

function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground=new Base(windowWidth/2,700,windowWidth,100);
  wall2=new Base(windowWidth-60,windowHeight/2,500,100);
  wall1=new Base(windowWidth-1240,windowHeight/2,500,100);

  bridge=new Bridge(15,{x:windowWidth-60,y:windowHeight/2});
  jointPoint=new Base(windowWidth-1050,height/2+10,40,20);
  
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink=new Link(bridge,jointPoint);

  for(var i=0;i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  wall1.show();
  wall2.show();
  bridge.show();

  for(var stone of stones){
    stone.show();
  }
}

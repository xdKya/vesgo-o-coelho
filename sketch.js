const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var corda;
var fruta;

var link;

function setup() {
  createCanvas(500, 700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  corda = new Rope(8, { x: 250, y: 30 });

  fruta = Bodies.circle(250, 300, 20);
  Composite.add(corda.body, fruta);

  link = new Link(corda, fruta);
}

function draw() {
  background(50);
  Engine.update(engine);

  corda.show();
  ellipse(fruta.position.x, fruta.position.y, 30);
}

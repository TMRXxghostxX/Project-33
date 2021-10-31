const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var castleObj, swordObj, groundObject;
var mango1,
  mango2,
  mango3,
  mango4,
  mango5,
  mango6,
  mango7,
  mango8,
  mango9,
  mango10,
  mango11,
  mango12;
var world, knight;
var lava;

var launcherObject;
var launchForce = 100;

function preload() {
  knight = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  swordObj = new stone(155, 300, 40);

  mango1 = new enemy(1100, 100, 30);
  mango2 = new enemy(1170, 130, 30);
  mango3 = new enemy(1010, 140, 30);
  mango4 = new enemy(1000, 70, 30);
  mango5 = new enemy(1100, 70, 30);
  mango6 = new enemy(1000, 230, 30);
  mango7 = new enemy(900, 230, 40);
  mango8 = new enemy(1140, 150, 40);
  mango9 = new enemy(1100, 230, 40);
  mango10 = new enemy(1200, 200, 40);
  mango11 = new enemy(1120, 50, 40);
  mango12 = new enemy(900, 160, 40);

  castleObj = new tree(1050, 580);
  groundObject = new ground(width / 2, 600, width, 235);
  
  launcherObject = new launcher(swordObj.body, { x: 235, y: 420 });

  Engine.run(engine);
}

function draw() {
  background(230);
  textSize(25);
 
  image(knight, 210, 300, 200, 200);

  /*if(mango1.body.position.y > 150){
    this.Visiblity = 255;
    World.remove(world, mango1.body);
    push();
    mango1.Visiblity = mango1.Visiblity - 5;
    tint(255,mango1.Visiblity);
    image(mango1.image, mango1.body.position.x, mango1.body.position.y, 50, 50);
    pop();
  }*/

  castleObj.display();
  swordObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  swordObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(swordObj, mango1);
  detectollision(swordObj, mango2);
  detectollision(swordObj, mango3);
  detectollision(swordObj, mango4);
  detectollision(swordObj, mango5);
  detectollision(swordObj, mango6);
  detectollision(swordObj, mango7);
  detectollision(swordObj, mango8);
  detectollision(swordObj, mango9);
  detectollision(swordObj, mango10);
  detectollision(swordObj, mango11);
  detectollision(swordObj, mango12);
}


function mouseDragged() {
  Matter.Body.setPosition(swordObj.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  launcherObject.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(swordObj.body, { x: 235, y: 300 });
    launcherObject.attach(swordObj.body);
  }
}

function detectollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(
    stoneBodyPosition.x,
    stoneBodyPosition.y,
    mangoBodyPosition.x,
    mangoBodyPosition.y
  );
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}

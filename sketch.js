var polygon;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
ground1 = new ground(200,200,30,30);
ground2 = new ground()
  box1 = new box(330,235,30,40);
  box2 = new box(360,235,30,40);
  box3 = new box(390,235,30,40);
  box4 = new box(440,235,30,40);
   box5 = new box(360,195,30,40);
   box6 = new box(390,235,30,40);
   box7 = new box(420,235,30,40);
   box8 = new box(360,155,30,40);
   box9 = new box(390,155,30,40);
   box10 = new box(390,115,30,40);
   polygon = Bodies.circle(500,200,20);
   World.add(world,polygon);

	slingshot = new slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  box1.display();
  
  drawSprites();
  
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
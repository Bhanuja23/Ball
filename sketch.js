var ball;


function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,20,20)
}

function draw() {
  background("black");
  if(keyDown(LEFT_ARROW)){
    ball.position.x = ball.position.x - 3
  }

  drawSprites()
}
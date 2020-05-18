var ball,ball_image,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite and the  */
  ball = createSprite(100, 200, 30, 30);
  paddle = createSprite(350, 200, 30, 30);
  /* assign the images to the sprites */
  paddle.addImage("paddle", paddle_image);
  ball.addImage("ball", ball_image);
  /* give the ball an initial velocity of 6 in the X direction */
  ball.velocityX = 6;
  ball.velocityY = -5;
}

function draw() {
  background("#87dfff");
  
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  if (ball.collide(paddle)){
    ball.velocityY = random(2, 8);
  }
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -7;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 7;
  }
  
  drawSprites();
  
}


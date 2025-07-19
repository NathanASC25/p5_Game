let playerXPos, playerYPos;
let playerLeft, playerRight, playerTop, playerBottom;

let goalieXPos, goalieYPos;
let goalieLeft, goalieRight, goalieTop, goalieBottom;

let score = 0;

let playerImg, goalieImg, grassImg, goalImg, ballImg;
let playerWidth, playerHeight, goalieWidth, goalieHeight;

let ballXDirection = 1;
let ballYDirection = 1;
let ballXPos;
let ballYPos;

let ballLeft, ballRight, ballTop, ballBottom;

let goalieDirection = 1;

// Images and sounds belong here
function preload(){
    //loadImage for player
    playerImg = loadImage("./images/messi.png");
    //loadImage for goalie
    goalieImg = loadImage("./images/ronaldo.png");
    //loadImage for grass
    grassImg = loadImage("./images/grass.png");
    //loadImage for goal
    goalImg = loadImage("./images/soccer_goal.png");
    //loadImage for soccer ball
    ballImg = loadImage("./images/soccer_ball.png");
}

function setup(){
    createCanvas(800, 800);
    imageMode(CENTER);
    playerXPos = 400;
    playerYPos = 700;
    goalieXPos = 400;
    goalieYPos = 300;
    playerWidth, playerHeight = 100;
    goalieWidth, goalieHeight = 100;
    ballXPos = 400;
    ballYPos = 500;
    textSize(20);
    fill(255, 255, 0);
}

function draw(){
    image(grassImg, 400, 400, 1000, 1000);
    image(goalImg, 400, 100, 200, 100);
    image(ballImg, ballXPos, ballYPos, 50, 50);
    // image function for player
    image(playerImg, playerXPos, playerYPos, playerWidth, playerHeight);
    // image function for goalie
    image(goalieImg, goalieXPos, goalieYPos, goalieWidth, goalieHeight);
    text("Score: " + score, 15, 40);
    if (keyIsDown(LEFT_ARROW) && playerXPos >= 0){
       playerXPos -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && playerXPos <= 800){
       playerXPos += 5;
    }
    if (keyIsDown(UP_ARROW) && playerYPos >= 0){
       playerYPos -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && playerYPos <= 800){
       playerYPos += 5;
    }

    playerLeft = playerXPos - (playerWidth / 2);
    playerRight = playerXPos + (playerWidth / 2);
    playerTop = playerYPos - (playerHeight / 2);
    playerBottom = playerYPos + (playerHeight / 2);

    goalieLeft = goalieXPos - (goalieWidth / 2);
    goalieRight = goalieXPos + (goalieWidth / 2);
    goalieTop = goalieYPos - (goalieHeight / 2);
    goalieBottom = goalieYPos + (goalieHeight / 2);

    ballLeft = ballXPos - 25;
    ballRight = ballXPos + 25;
    ballTop = ballYPos - 25;
    ballBottom = ballYPos + 25;
    
    if (goalieXPos <= 0 || goalieXPos >= 800){
        goalieDirection *= -1;
    }
    goalieXPos += 5 * goalieDirection;
    // If conditional for coliision with the ball/object
    if (playerLeft > goalieRight ||
        playerRight < goalieLeft ||
        playerTop > goalieBottom ||
        playerBottom < goalieTop
    ){
        // Do nothing
    }
    else{
        // Change Direction of the ball
        goalieXPos = random(0, 801);
        goalieYPos = random(0, 801);
        score++;
    }
}
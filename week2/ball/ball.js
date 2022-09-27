
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    canvas.style.backgroundColor = "yellow";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 60);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    const maxX = 400 - radius;
    const maxY = 400 - radius;
    const x = ball.x;
    const y = ball.y;
    
    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    checkCollision(x , maxX, y, maxY);

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    nextPosition();
}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context);
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}

function checkCollision(x, maxX, y, maxY){
    if(x < 0 + radius + 1 || x > maxX) ball.dx = -ball.dx;
    if(y > maxY) {
        if(ball.dy < 3) ball.dy = 0;
        else ball.dy = -ball.dy + 3;
    }
}

function nextPosition(){
    old.x = ball.x;
    old.y = ball.y;
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    ball.dy = ball.dy + 9.81/30;
    if(ball.dx > 0){
        ball.dx = ball.dx - 0.01;
    }
    else{
        ball.dx = ball.dx + 0.01;
    }
}
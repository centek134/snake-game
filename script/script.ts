const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const gulpSound = document.getElementById("gulp") as HTMLAudioElement;

let headX: number = 10;
let headY: number = 10;
let xVelocity: number = 0;
let yVelocity: number = 0;
let snakeTail: number = 2;
const snakeParts:any = [];

let xDot: number = 5; 
let yDot: number = 5;
let score: number = 0;

let actualPressedKey: string = "";
let speed: number = 7;
let tileCount: number = 20;
let tileSize: number = canvas.width / tileCount - 2;

class SnakePart{
    x: number;
    y: number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    };
};

const gameLoop = (): void => {
    changeSnakeDirection();
    let result = gameOver();
    if(result){
        return;
    };
    clearScreen();
    drawScore();
    setSnakeSpeed();
    drawDot();
    drawSnake();
    setTimeout(gameLoop,1000/speed);
};
const clearScreen = (): void => {
    context!.fillStyle = "black";
    context!.fillRect(0,0,canvas.width,canvas.height)
};

const gameOver = (): boolean => {
    let gameOver  = false;
    if((headX < 0) || (headX > canvas.width / tileCount - 1)){
        gameOver = true;
    }
    else if((headY < 0 ) || (headY > canvas.height / tileCount -1)){
        gameOver = true;
    };
    if(gameOver){
        context!.fillStyle="white";
        context!.font = "50px Verdana";
        context!.fillText("Game Over!", 50,canvas.height/2);
    };
    return gameOver;
};

const drawSnake = (): void => {

    context!.fillStyle = "green";
    for(let i = 0; i<snakeParts.length; i++ ){
        let part = snakeParts[i];
        context!.fillRect(part.x * tileCount, part.y *tileCount,tileSize,tileSize);
    };
    snakeParts.push(new SnakePart(headX,headY));
    while(snakeParts.length > snakeTail){
        snakeParts.shift();
    };
    context!.fillStyle = "white";
    context!.fillRect(headX*tileCount,headY*tileCount,tileSize,tileSize);
};
const changeSnakeDirection = () => {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
};

const drawDot = (): void => {
    if(headX === xDot && headY === yDot){
        xDot = Math.floor(Math.random()*tileCount);
        yDot = Math.floor(Math.random()*tileCount);
        snakeTail++;
        score++;
        gulpSound!.play()
    };
    context!.fillStyle = "red";
    context!.fillRect(xDot*tileCount,yDot*tileCount,tileSize,tileSize);
};
const drawScore = (): void => {
    context!.fillStyle = "white";
    context!.font = "10px Verdana";
    context!.fillText("Score: " + score, canvas.width -50, 10);
};
const setSnakeSpeed = (): void => {
    if(score >= 7 && score <= 9){
        speed = 9;
    }
    else if(score > 9){
        speed = 11;
    };
};

window.document.addEventListener("keydown", (e) => {
    console.log(e)
    if(e.key === "ArrowRight"){
        if(xVelocity === -1){
            return;
        }
        yVelocity = 0;
        xVelocity = 1;
    }
    else if(e.key === "ArrowLeft"){
        if(xVelocity === 1){
            return;
        };
        yVelocity = 0;
        xVelocity = -1;
    }
    else if(e.key === "ArrowDown"){
        if(yVelocity === -1){
            return;
        };
        yVelocity = 1;
        xVelocity = 0;
    }
    else if(e.key === "ArrowUp"){
        if(yVelocity === 1){
            return;
        };
        yVelocity = -1;
        xVelocity = 0;
    };
});

gameLoop();
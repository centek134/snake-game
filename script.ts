const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
let headX: number = 10;
let headY: number = 10;

let xVelocity: number = 0;
let yVelocity: number = 0;

let xDot = 5; 
let yDot = 5;

let actualPressedKey: string = "";
let speed: number = 5;
let tileCount: number = 20;
let tileSize: number = canvas.width / tileCount - 2



const gameLoop = (): void => {
    clearScreen();
    changeSnakeDirection();
    drawDot();
    drawSnake();
    setTimeout(gameLoop,1000/speed);
}
const clearScreen = (): void => {
    context!.fillStyle = "black";
    context?.fillRect(0,0,canvas.width,canvas.height)
}

const drawSnake = (): void => {
    context!.fillStyle = "white"
    context?.fillRect(headX*tileCount,headY*tileCount,tileSize,tileSize)
}

const changeSnakeDirection = () => {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

const drawDot = (): void => {
    if(headX === xDot && headY === yDot){
        xDot = Math.floor(Math.random()*tileCount);
        yDot = Math.floor(Math.random()*tileCount); 
    };
    context!.fillStyle = "red";
    context?.fillRect(xDot*tileCount,yDot*tileCount,tileSize,tileSize);
}

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
        }
        yVelocity = 0;
        xVelocity = -1;
    }
    else if(e.key === "ArrowDown"){
        if(yVelocity === -1){
            return;
        }
        yVelocity = 1;
        xVelocity = 0;
    }
    else if(e.key === "ArrowUp"){
        if(yVelocity === 1){
            return;
        }
        yVelocity = -1;
        xVelocity = 0;
    }
})

gameLoop();
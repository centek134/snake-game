const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
let headX: number = 10;
let headY: number = 10;
let actualPressedKey: string = "";
let speed: number = 5;
let tileCount: number = 20;
let tileSize: number = canvas.width / tileCount - 2




const gameLoop = (): void => {
    clearScreen();
    drawSnake();
    setInterval(gameLoop,1000/speed);
}
const clearScreen = (): void => {
    context!.fillStyle = "black";
    context?.fillRect(0,0,canvas.width,canvas.height)
}

const drawSnake = () => {
    context!.fillStyle = "white"
    context?.fillRect(headX*tileCount,headY*tileCount,tileSize,tileSize)
}

// window.document.addEventListener("keydown", (e) => {
//     console.log(e)
//     if(e.key === "ArrowRight"){
//         actualPressedKey = "right"
//     }
//     else if(e.key === "ArrowLeft"){
//         actualPressedKey = "left"
//     }
//     else if(e.key === "ArrowDown"){
//         actualPressedKey = "down"
//     }
//     else if(e.key === "ArrowUp"){
//         actualPressedKey = "up"
//     }
// })

gameLoop();
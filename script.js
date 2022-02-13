var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var headX = 10;
var headY = 10;
var actualPressedKey = "";
var speed = 5;
var tileCount = 20;
var tileSize = canvas.width / tileCount - 2;
var gameLoop = function () {
    clearScreen();
    drawSnake();
    setInterval(gameLoop, 1000 / speed);
};
var clearScreen = function () {
    context.fillStyle = "black";
    context === null || context === void 0 ? void 0 : context.fillRect(0, 0, canvas.width, canvas.height);
};
var drawSnake = function () {
    context.fillStyle = "white";
    context === null || context === void 0 ? void 0 : context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
};
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

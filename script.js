"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let headX = 10;
let headY = 10;
let xVelocity = 0;
let yVelocity = 0;
let xDot = 5;
let yDot = 5;
let actualPressedKey = "";
let speed = 5;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
const gameLoop = () => {
    clearScreen();
    changeSnakeDirection();
    drawDot();
    drawSnake();
    setTimeout(gameLoop, 1000 / speed);
};
const clearScreen = () => {
    context.fillStyle = "black";
    context === null || context === void 0 ? void 0 : context.fillRect(0, 0, canvas.width, canvas.height);
};
const drawSnake = () => {
    context.fillStyle = "white";
    context === null || context === void 0 ? void 0 : context.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
};
const changeSnakeDirection = () => {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
};
const drawDot = () => {
    if (headX === xDot && headY === yDot) {
        xDot = Math.floor(Math.random() * tileCount);
        yDot = Math.floor(Math.random() * tileCount);
    }
    ;
    context.fillStyle = "red";
    context === null || context === void 0 ? void 0 : context.fillRect(xDot * tileCount, yDot * tileCount, tileSize, tileSize);
};
window.document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "ArrowRight") {
        if (xVelocity === -1) {
            return;
        }
        yVelocity = 0;
        xVelocity = 1;
    }
    else if (e.key === "ArrowLeft") {
        if (xVelocity === 1) {
            return;
        }
        yVelocity = 0;
        xVelocity = -1;
    }
    else if (e.key === "ArrowDown") {
        if (yVelocity === -1) {
            return;
        }
        yVelocity = 1;
        xVelocity = 0;
    }
    else if (e.key === "ArrowUp") {
        if (yVelocity === 1) {
            return;
        }
        yVelocity = -1;
        xVelocity = 0;
    }
});
gameLoop();

"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let headX = 10;
let headY = 10;
let xVelocity = 0;
let yVelocity = 0;
let snakeTail = 5;
const snakeParts = [];
let xDot = 5;
let yDot = 5;
let actualPressedKey = "";
let speed = 7;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
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
    context.fillStyle = "green";
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        context === null || context === void 0 ? void 0 : context.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }
    snakeParts.push(new SnakePart(headX, headY));
    while (snakeParts.length > snakeTail) {
        snakeParts.shift();
    }
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
        snakeTail++;
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

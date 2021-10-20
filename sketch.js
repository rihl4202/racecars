var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount,players,gameState,car1,car2;

function preload() {
  backgroundImage = loadImage("assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()
  game = new Game();
  game.getState()
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var distance = 0;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, ground, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("track.png");
  ground = loadImage("ground.png");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    console.log("Game Over");
  }
}

class Game {
  constructor(){

  }

  getState(){
    return gameState;
  }

  update(state){
    gameState = state;
  }

  start(){
    if(gameState === 0){
      player = new Player();
      playerCount = 1;

      form = new Form();
      form.display();
    }

    // Create cars
    car1 = createSprite(width/2, height - 150);
    car1.addImage(car1_img);
    car1.scale = 0.3;

    car2 = createSprite(width/2 - 200, height - 150);
    car2.addImage(car2_img);
    car2.scale = 0.3;

    car3 = createSprite(width/2 + 200, height - 150);
    car3.addImage(car3_img);
    car3.scale = 0.3;

    car4 = createSprite(width/2 + 400, height - 150);
    car4.addImage(car4_img);
    car4.scale = 0.3;

    cars = [car1, car2, car3, car4];
  }

  play(){
  form.hide();

  background(0);

  // 🔥 REAL INFINITE ROAD (looping)
  let y = player.distance % height;
  image(track, 0, y - height, width, height);
  image(track, 0, y, width, height);

  // 🚗 Movement forward
  if(keyIsDown(UP_ARROW)){
    player.distance += 10;
  }

  // 🚗 Left-right movement
  if(keyIsDown(LEFT_ARROW)){
    cars[0].x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    cars[0].x += 5;
  }

  // 🚧 Keep car inside road
  cars[0].x = constrain(cars[0].x, width/2 - 250, width/2 + 250);

  // Keep car fixed vertically
  cars[0].y = height - 150;

  // Highlight player
  stroke(255);
  fill("red");
  ellipse(cars[0].x, cars[0].y, 60, 60);

  drawSprites();
}
    drawSprites();
  }
}

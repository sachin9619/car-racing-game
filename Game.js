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
    car1.scale = 0.07;

    car2 = createSprite(width/2 - 200, height - 150);
    car2.addImage(car2_img);
    car2.scale = 0.07;

    car3 = createSprite(width/2 + 200, height - 150);
    car3.addImage(car3_img);
    car3.scale = 0.07;

    car4 = createSprite(width/2 + 400, height - 150);
    car4.addImage(car4_img);
    car4.scale = 0.07;

    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    background(0);

    // 🔥 INFINITE ROAD EFFECT
    image(track, 0, -height*3 + player.distance, width, height*4);

    // Player car (fixed center)
    let x = width / 2;
    let y = height - 150;

    cars[0].x = x;
    cars[0].y = y;

    // Highlight player
    stroke(255);
    fill("red");
    ellipse(x, y, 60, 60);

    // Camera follows player
    camera.position.x = width / 2;
    camera.position.y = cars[0].y;

    // Movement
    if(keyIsDown(UP_ARROW)){
      player.distance += 10;
    }

    // Game Over
    if(player.distance >= 3000){
      gameState = 2;
      console.log("Game Over");
    }

    drawSprites();
  }
}

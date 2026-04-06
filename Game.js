class Game {
  constructor(){

  }

  getState(){
    // LOCAL game state (no database)
    return gameState;
  }

  update(state){
    // LOCAL update
    gameState = state;
  }

  start(){
    if(gameState === 0){
      player = new Player();

      // Local player count
      playerCount = 1;

      form = new Form();
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage(car1_img);

    car2 = createSprite(300,200);
    car2.addImage(car2_img);

    car3 = createSprite(500,200);
    car3.addImage(car3_img);

    car4 = createSprite(700,200);
    car4.addImage(car4_img);

    cars = [car1, car2, car3, car4];
  }

  play(){
    console.log("PLAY RUNNING");
    form.hide();

    background("red");
    image(track, 0, -displayHeight, displayWidth, displayHeight * 2);

    // Only ONE player (offline)
    var x = 170;
    var y = displayHeight - player.distance;

    cars[0].x = x;
    cars[0].y = y;

    // Highlight player
    stroke(9);
    fill("red");
    ellipse(x, y, 70, 70);

    camera.position.x = displayWidth/2;
    camera.position.y = cars[0].y;

    // Movement
    if(keyIsDown(UP_ARROW)){
      player.distance += 10;
    }

    // Game end
    if(player.distance >= 1000){
      gameState = 2;
      console.log("Game Over");
    }

    drawSprites();
  }
}

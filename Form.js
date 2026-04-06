class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("RESET");
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 100, 20);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth/2, 60);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      // LOCAL (no database)
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;

      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      // Reset locally
      playerCount = 0;
      gameState = 0;
      window.location.reload();
    });
  }
}

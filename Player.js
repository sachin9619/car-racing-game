class Player {
  constructor(){
    this.index = 1;        // single player
    this.distance = 0;
    this.name = "";
    this.rank = 0;
  }

  // Set player name
  setName(name){
    this.name = name;
  }

  // Increase distance
  move(){
    this.distance += 10;
  }
}

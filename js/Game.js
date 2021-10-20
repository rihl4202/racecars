class Game {
  constructor() {}

  getState(){
    database.ref("gameState").on("value",data=>{
      gameState=data.val()
    })
  }
  //write the gameState to the database
  updateState(num){
    database.ref("/").update({
     gameState:num
    })
  }
  

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1 = createSprite(width/2-150,height-100)
    car2 = createSprite(width/2+150,height-100)
  }

  play(){
    form.remove()
  }
}

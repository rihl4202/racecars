class Player {
  //properties of players
  constructor() {
    this.name=null
    this.index=null
    this.positionX=0
    this.positionY=0
  }
  //adds the players in the database
  addPlayer(){
    if(this.index===1){
      this.positionX=width/2-150
    }else{
      this.positionX=width/2+150
    }
    database.ref("players/player"+this.index).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })
  }
  //read the playerCount from the database
  getCount(){
    database.ref("playerCount").on("value",data=>{
      playerCount=data.val()
    })
  }
  //write the playerCount to the database
  updateCount(num){
    database.ref("/").update({
      playerCount:num
    })
  }
  //collects all the players information at a time
  static getPlayersInfo(){
    database.ref("players").on("value",data=>{
      players = data.val()
    })
  }

}

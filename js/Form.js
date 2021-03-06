class Form {
  constructor() {
   this.title = createImg("assets/title.png")
   this.input = createInput("").attribute("placeholder","Enter Name")
   this.button = createButton("START")
  this.greeting = createElement("h2")
  }

remove(){
    this.title.hide()
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
  }

  //()=>{}  Arrow Function
  display(){
    this.title.position(185,40)
    this.title.size(860,180)
    this.input.position(width/2-100,height/2-20)
    this.input.style("background-color","transparent")
    this.button.position(width/2-40,height/2+40)

    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      this.greeting.position(width/2-200,height/2)
      this.greeting.html("Welcome,  "+this.input.value())
      playerCount = playerCount+1
      player.index = playerCount
      player.name = this.input.value()
      player.addPlayer()
      player.updateCount(playerCount)
    })
  }
  

}

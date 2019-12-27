class Game{
    constructor(){

    }
getState(){
  var gameStateref = database.ref('gameState');
  gameStateref.on("value",function(data){
      gameState = data.val();
  })  
}
update(state){
    database.ref('/').update({
        gameState : state
    })
}
async start(){
    if(gameState === 0){
player = new Player();
var playerCountref = await database.ref('playerCount').once("value");
if(playerCountref.exists()){
playerCount = playerCountref.val();

player.getCount();
}
form = new Form();
form.display();
    }
}
play(){
    form.hide();
    text("Game BEGINS",200,100);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
        var displayPosition = 150;
        for(var plr in allPlayers){
        
        displayPosition += 20;
        text(allPlayers[plr].name + "-" + allPlayers[plr].distance,150,displayPosition);
        }
    }

if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance += 50;
player.update();
}
}
}
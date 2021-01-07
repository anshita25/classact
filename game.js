class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",function(data){

        gameState=data.val()
    })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
player=new Player()
var playercountref=await database.ref("playerCount").once("value")
if (playercountref.exists()){
    playerCount=playercountref.val()
    player.getCount()
}
form=new Form()
form.display()
        
}
    }
    play(){
        form.hide()
        textSize(30)
        text("GAME START",120,100)
        Player.getPlayerInfo()
        if(allplayers!==undefined){
            var display_position=130;
            for(var plr in allplayers){
                if(plr==="player"+player.index)
                    fill("red")
                    else
                        fill("black")
                    
                
            
            display_position+=20;
            textSize(15)
            text(allplayers[plr].name+":"+ allplayers[plr].distance,120,display_position)
        }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
        player.distance+=50
        player.update()
    }
}
}
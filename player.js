class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
        var playercountref=database.ref("playerCount")
        playercountref.on("value",function(data){
            playerCount=data.val()

        })
    }
    updatecount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerindex="player"+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInforef=database.ref("players")
        playerInforef.on("value",(data)=>{
            allplayers=data.val();
        })
    }
}
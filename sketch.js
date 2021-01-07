var gameState=0;
var playerCount;
var database;
var form,player,game;
var allplayers;


function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game=new Game()
  game.getState()
  game.start()
 
}

function draw(){
if(playerCount===4){
  game.update(1)

} 
if(gameState===1){
  clear()
  game.play()

} 
   
}


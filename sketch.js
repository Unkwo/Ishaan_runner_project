var runner_running, runner;
var path, road;
var coin, coins;
var drink, drinks;
 var i = 500;


function preload(){
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  road = loadImage("path.png");
  coins = loadImage("coin.png");
  drinks = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);

  
  //creating runner
  runner = createSprite(200,370,10,40);
  runner.addAnimation("runner", runner_running);
  runner.scale = 0.05;

  //creating path
  path = createSprite(200,200,40,40);
  path.scale = 1.2;
  path.addImage(road);
  path.velocityY = 4;

  path.depth = runner.depth;
  runner.depth = runner.depth+1;

  if(path. y > 400){
    path. y = path.height/2;
  }
  
} 
  

  
  
function draw() {
  background("white");

  createCoins();

  createEnergy();

 
  drawSprites();
}


 function createCoins(){
   if(frameCount % 20 === 0){
    coin = createSprite(200,200,30,30);
    coin.addImage(coins);
    coin.velocityY = 10;
    coin.scale = 0.2;
    coin.lifetime = 300;
  }
   
 }

 function createEnergy(){
   if(frameCount % 250 === 0){
     drink = createSprite(200,200,40,40);
    drink.addImage(drinks);
    drink.velocityY = 10;
    drink.scale = 0.2;
    drink.lifetime = 300;
  }

 }
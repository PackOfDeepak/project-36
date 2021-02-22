//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogimg = loadImage("dog.png");
  happyDogimg = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite(400,250);
  dog.addImage(dogimg);
  foodStock = datavase.ref("food");
  foodStock.on("value",readStock);
  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood = createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  
}


function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogimg);
  }
  drawSprites();
  //add styles here
  textSize(30);
  fill("red");
  stroke("blue");
  text("press up arrow to feed dog",250,10);


}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x = x-1;
  }
  database.ref("/").update({
    food:x
  })
}



var fruits;
var apple, orange, banana, strawberry, mango, watermelon;
var appleImage, orangeImage, bananaImage, strawberryImage, mangoImage, watermelonImage;
var fruitgroup;
var basket, basketImage;
var background, bgImage;

function preload(){
  appleImage = loadImage("Images/apple.png");
  bananaimage = loadImage("Images/banana.png");
  mangoImage = loadImage("Images/mango.png");
  orangeImage = loadImage("Images/orange.png");
  strawberryImage = loadImage("Images/strawberries.png");
  watermelonImage = loadImage("Images/watermelon.png");

  basketImage = loadImage("Images/basket.png");

  bgImage = loadImage("Images/background.jpg");

}

function setup(){
  createCanvas(displayWidth - 40, displayHeight/2 + 300);

  basket = createSprite(700, displayHeight - 250, 50, 50);
  basket.addImage(basketImage);
  basket.scale = 0.35;

  fruitgroup = new Group;

}

function draw(){
  background(bgImage);

  basket.x = mouseX;

  spawnFruits();

  drawSprites();

}

function spawnFruits(){
  if(World.frameCount % 60 === 0){
    fruits = createSprite(Math.round(random(100, 1000)), 10, 20, 20);
    fruits.scale = 0.01;

    var selectfruits = Math.round(random(1, 6));

    switch(selectfruits){
      case 1 : fruits.addImage(appleImage);
      break;

      case 2 : fruits.addImage(bananaImage);
      break;

      case 3 : fruits.addImage(mangoImage);
      break;

      case 4 : fruits.addImage(orangeImage);
      break;

      case 5 : fruits.addImage(strawberryImage);
      break;

      case 6 : fruits.addImage(watermelonImage);
      break;

      default : break;

    }

    fruits.velocityY = 5;

    fruitgroup.add(fruits);

    fruits.lifetime = 300;

  }

}
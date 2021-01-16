const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Contraint = Matter.Constraint;

var engine, world;
var backgroundImg, player, playerImg, enemy, computerImg;
var bottomEdge, topEdge, snowball, snowballImg;
var balls=5, lives=3;

function preload(){
    backgroundImg = loadImage("images/Background.jpg")
    playerImg = loadImage("images/Player.png")
    computerImg = loadImage("images/Enemy.png")
    snowballImg = loadImage("images/snowball.png")
}

function setup(){
    canvas=createCanvas(1300,650)
    engine = Engine.create();
    world = engine.world;

    player=createSprite(200,300,50,50)
    player.addImage(playerImg)
    player.scale=0.6;

    enemy=createSprite(1300,100,50,50)
    enemy.addImage(computerImg)
    enemy.scale=0.7;
    enemy.velocityY=5;
    
    snowball=createSprite(150,300,10,10)
    snowball.addImage(snowballImg);
    snowball.scale=0.11;

    slingshot = new SlingShot(snowball.body,{x:200, y:200});

    edges=createEdgeSprites();
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    enemy.bounceOff(edges);

    

    drawSprites();

    textSize(20);
    fill("black");
    text("Snowballs left: "+balls,100,70);
    text("Lives left: "+lives,1000,70);
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}
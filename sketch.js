
var block1,block2,block3,block4,block5,block6,block7,block8;
var playerbar,ball,ground;
var edges;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var block27, block28, block29, block30, block31, block32, block33, block34, block35, block36, block37, block38, block39;
var block40, block41, block42, block43, block44, block45, block46, block47, block48, block49, block50, block51, block52;
var blocklayer2,blocklayer1,blocklayer3,blocklayer4;
var blocklayer1grp, blocklayer2grp, blocklayer3grp, blocklayer4grp;
var bg,bgimg;
var score = 0;
var gamestate="serve"
var border1,border2;
var boy,boyimg;
var go,goimg;
var audio1,audio1load;
var audio2,audio2load;
//garbage stuffs
var paperball,pbimg;
var dustbin,dustbinimg;
var brokencan,brokencanimg;
var bananapeel,bananapeelimg;
var rottenmeat,rottenmeatimg;
var wasteapple,wasteappleimg;
var garbagebag,garbagebagimg;
var brokentv,brokentvimg;

function preload()
{
  //load the image for ball
  ballimg = loadImage("ball.PNG");
  //load the image for background
  bgimg = loadImage("background.jpg");
  //load the image for boy
  boyimg = loadImage("character1.png");
  //load the image for game over image
  goimg = loadImage("yw.png");
  //load the 2 audios
  audio2load = loadSound("audio1.mp3");
  audio1load = loadSound("audio2.wav");
  //garbage stuffs images
  bananapeelimg = loadImage("banana_peel.png");
  brokentvimg = loadImage("broken_tv.png");
  brokencanimg = loadImage("brokencan.png");
  dustbinimg = loadImage("dustbingreen.png");
  garbagebagimg = loadImage("garbagebag.png");
  paperballimg = loadImage("paper.png");
  rottenmeatimg = loadImage("rottenmeat.png");
  wasteappleimg = loadImage("wasteapple.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    //creating border 1
    border1 = createSprite(250,30,10,10000);
    border1.shapeColor = "white"
    //creating border 2
    border2 = createSprite(1080,30,10,10000);
    border2.shapeColor = "white";
    //creating the boy
    boy=createSprite(1194,257,20,2000);
    boy.addImage(boyimg);
    boy.scale=0.65
    //create the game over part
    go=createSprite(windowWidth/2,windowHeight/2,20,20);
    go.addImage(goimg);
    go.visible = false;

  //create blocks
  //block layer 1

//for( var i = (starting position of x);i = (the extend in x);i = i + (gap/distance between 2 objects))
//blocklayer1 = createSprite(i,30,50,50)
//if you want it to be a loop in horizontal line otherwise i in place of y position shold be done.
  
  /*for loops - blocklayer1
  for(var i=windowWidth/2-200;i<=750;i = i+60)
  {
    blocklayer1 = createSprite(i,30,50,50);
    blocklayer1.shapeColor = "orange"
  }*/
  
  //indivituals - block layer 1
  block1 = createSprite(300,30,50,50);
  block1.shapeColor = "pink";
  block1.addImage(bananapeelimg);
  block1.scale = 0.15;
  block2 = createSprite(360,30,50,50);
  block2.shapeColor = "pink";
  block2.addImage(brokencanimg);
  block2.scale = 0.15;
  block3 = createSprite(430,30,50,50);
  block3.shapeColor = "pink";
  block3.addImage(brokentvimg);
  block3.scale = 0.15;
  block4 = createSprite(490,30,50,50);
  block4.shapeColor = "pink";
  block4.addImage(garbagebagimg);
  block4.scale = 0.15;
  block5 = createSprite(550,30,50,50);
  block5.shapeColor = "pink";
  block5.addImage(bananapeelimg);
  block5.scale = 0.15;
  block6 = createSprite(610,30,50,50);
  block6.shapeColor = "pink";
  block6.addImage(brokentvimg);
  block6.scale = 0.15;
  block7 = createSprite(670,30,50,50);
  block7.shapeColor = "pink";
  block7.addImage(brokencanimg);
  block7.scale = 0.15;
  block8 = createSprite(736,30,50,50);
  block8.shapeColor = "pink";
  block8.addImage(paperballimg);
  block8.scale = 0.14;
  block9 = createSprite(790,30,50,50);
  block9.shapeColor = "pink";
  block9.addImage(wasteappleimg);
  block9.scale = 0.12;
  block10 = createSprite(850,30,50,50);
  block10.shapeColor = "pink";
  block10.addImage(bananapeelimg);
  block10.scale = 0.15;
  block11 = createSprite(910,30,50,50);
  block11.shapeColor = "pink";
  block11.addImage(wasteappleimg);
  block11.scale = 0.12;
  block12 = createSprite(970,30,50,50);
  block12.shapeColor = "pink";
  block12.addImage(rottenmeatimg);
  block12.scale = 0.30;
  block13 = createSprite(1030,30,50,50);
  block13.shapeColor = "pink";
  block13.addImage(wasteappleimg);
  block13.scale = 0.12;
  
  /*for loop - block layer 2
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer2 = createSprite(i,90,50,50);
    blocklayer2.shapeColor = "red"
  }*/

  //block layer 2
  block14 = createSprite(300,90,50,50);
  block14.shapeColor = "green";
  block14.addImage(brokencanimg);
  block14.scale = 0.15;
  block15 = createSprite(360,90,50,50);
  block15.shapeColor = "green";
  block15.addImage(garbagebagimg);
  block15.scale = 0.15;
  block16 = createSprite(430,90,50,50);
  block16.shapeColor = "green";
  block16.addImage(bananapeelimg);
  block16.scale = 0.15
  block17 = createSprite(490,90,50,50);
  block17.shapeColor = "green";
  block17.addImage(paperballimg);
  block17.scale = 0.14;
  block18 = createSprite(550,90,50,50);
  block18.shapeColor = "green";
  block18.addImage(rottenmeatimg);
  block18.scale = 0.30;
  block19 = createSprite(610,90,50,50);
  block19.shapeColor = "green";
  block19.addImage(wasteappleimg);
  block19.scale = 0.12;
  block20 = createSprite(670,90,50,50);
  block20.shapeColor = "green";
  block20.addImage(brokentvimg);
  block20.scale = 0.15;
  block21 = createSprite(730,90,50,50);
  block21.shapeColor = "green";
  block21.addImage(bananapeelimg);
  block21.scale = 0.15
  block22 = createSprite(790,90,50,50);
  block22.shapeColor = "green";
  block22.addImage(wasteappleimg);
  block22.scale = 0.12;
  block23 = createSprite(850,90,50,50);
  block23.shapeColor = "green";
  block23.addImage(brokencanimg);
  block23.scale = 0.15;
  block24 = createSprite(910,90,50,50);
  block24.shapeColor = "green";
  block24.addImage(paperballimg);
  block24.scale = 0.14;
  block25 = createSprite(970,90,50,50);
  block25.shapeColor = "green";
  block25.addImage(rottenmeatimg);
  block25.scale = 0.30;
  block26 = createSprite(1030,90,50,50);
  block26.shapeColor = "green";
  block26.addImage(garbagebagimg);
  block26.scale = 0.15;

  //for loop - block layer 3
  /*for(var i=30;i<=750;i = i+60)
  {
    blocklayer3 = createSprite(i,150,50,50);
    blocklayer3.shapeColor = "blue"
  }*/

  //block layer 3
  block27 = createSprite(300,150,50,50);
  block27.shapeColor = "brown";
  block27.addImage(bananapeelimg);
  block27.scale = 0.15
  block28 = createSprite(360,150,50,50);
  block28.shapeColor = "brown";
  block28.addImage(paperballimg);
  block28.scale = 0.14;
  block29 = createSprite(430,150,50,50);
  block29.shapeColor = "brown";
  block29.addImage(brokentvimg);
  block29.scale = 0.15;
  block30 = createSprite(490,150,50,50);
  block30.shapeColor = "brown";
  block30.addImage(rottenmeatimg);
  block30.scale = 0.30;
  block31 = createSprite(550,150,50,50);
  block31.shapeColor = "brown";
  block31.addImage(wasteappleimg);
  block31.scale = 0.12;
  block32 = createSprite(610,150,50,50);
  block32.shapeColor = "brown";
  block32.addImage(bananapeelimg);
  block32.scale = 0.15
  block33 = createSprite(670,150,50,50);
  block33.shapeColor = "brown";
  block33.addImage(wasteappleimg);
  block33.scale = 0.12;
  block34 = createSprite(730,150,50,50);
  block34.shapeColor = "brown";
  block34.addImage(garbagebagimg);
  block34.scale = 0.15;
  block34.addImage(paperballimg);
  block34.scale = 0.14;
  block35 = createSprite(790,150,50,50);
  block35.shapeColor = "brown";
  block35.addImage(brokencanimg);
  block35.scale = 0.15;
  block36 = createSprite(850,150,50,50);
  block36.shapeColor = "brown";
  block36.addImage(rottenmeatimg);
  block36.scale = 0.30;
  block37 = createSprite(910,150,50,50);
  block37.shapeColor = "brown";
  block37.addImage(wasteappleimg);
  block37.scale = 0.12;
  block38 = createSprite(970,150,50,50);
  block38.shapeColor = "brown";
  block38.addImage(brokentvimg);
  block38.scale = 0.15;
  block39 = createSprite(1030,150,50,50);
  block39.shapeColor = "brown";
  block39.addImage(bananapeelimg);
  block39.scale = 0.15
  
  /*block layer 4
  for loop - block layer 4
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer4 = createSprite(i,210,50,50);
    blocklayer4.shapeColor = "green"
  }*/

  //block layer 4
  block40 = createSprite(300,210,50,50);
  block40.shapeColor = "orange";
  block40.addImage(brokencanimg);
  block40.scale = 0.15;
  block40.addImage(brokentvimg);
  block40.scale = 0.15;
  block41 = createSprite(360,210,50,50);
  block41.shapeColor = "orange";
  block41.addImage(paperballimg);
  block41.scale = 0.14;
  block42 = createSprite(430,210,50,50);
  block42.shapeColor = "orange";
  block42.addImage(bananapeelimg);
  block42.scale = 0.15
  block43 = createSprite(490,210,50,50);
  block43.shapeColor = "orange";
  block43.addImage(garbagebagimg);
  block43.scale = 0.15;
  block44 = createSprite(550,210,50,50);
  block44.shapeColor = "orange";
  block44.addImage(wasteappleimg);
  block44.scale = 0.15;
  block45 = createSprite(610,210,50,50);
  block45.shapeColor = "orange";
  block45.addImage(brokencanimg);
  block45.scale = 0.15;
  block45.addImage(brokentvimg);
  block45.scale = 0.15;
  block46 = createSprite(670,210,50,50);
  block46.shapeColor = "orange";
  block46.addImage(garbagebagimg);
  block46.scale = 0.15;
  block46.addImage(bananapeelimg);
  block46.scale = 0.15
  block47 = createSprite(730,210,50,50);
  block47.shapeColor = "orange";
  block47.addImage(wasteappleimg);
  block47.scale = 0.15;
  block48 = createSprite(790,210,50,50);
  block48.shapeColor = "orange";
  block48.addImage(rottenmeatimg);
  block48.scale = 0.30;
  block49 = createSprite(850,210,50,50);
  block49.shapeColor = "orange";
  block49.addImage(brokencanimg);
  block49.scale = 0.15;
  block50 = createSprite(910,210,50,50);
  block50.shapeColor = "orange";
  block50.addImage(paperballimg);
  block50.scale = 0.14;
  block51 = createSprite(970,210,50,50);
  block51.shapeColor = "orange";
  block51.addImage(bananapeelimg);
  block51.scale = 0.15
  block52 = createSprite(1030,210,50,50);
  block52.shapeColor = "orange";
  block52.addImage(wasteappleimg);
  block52.scale = 0.15;

  //create a ball
  ball = createSprite(300,300,10,30);
  ball.addImage(ballimg);
  ball.shapeColor = "blue";
  ball.velocityX = -4;
  ball.velocityY = 5;

  //create a player bar
  playerbar = createSprite(300,550,200,20);
  playerbar.shapeColor = "purple"

  //create a ground/base
  ground = createSprite(200,600,5220,20);
  ground.shapeColor = "red";

  //groups - blocks
  blocklayer1grp = new Group();
  blocklayer2grp = new Group();
  blocklayer3grp = new Group();


}

function draw() {
  background(bgimg);

  //for checking the x and y position
  textSize(20);
  text(mouseX + "," + mouseY, 600,500);
  //guidelines
  fill("white")
  stroke("white");
  text("Move your PLAYERBAR",10,100);
  text("with your mouse",10,150);
  text("to make the ball ",10,200);
  text("bounce off and also to  ",10,250);
  text("get points!",10,300);
  //guidelines -2
  text("",10,350);
  text("If you want to",10,370);
  text("restart then press 'R'.",10,420);
  //logo
  textSize(80);
  stroke("white");
  fill("yellow");
  text("Clear The Trash Out!",windowWidth/2-400,windowHeight/2);

  //displaying the scores
  textSize(40)
  text("Score:"+score,1141,100)
  
  //if condition for scoring system
  if(score===104)
  {
    ball.velocityX = 0;
    ball.velocityY = 0;
    go.visible = true;
    audio2load.play();
  }
  //if condition for going out of the boundary
  if(ball.y>578){
    ball.velocityX = 0;
    ball.velocityY = 0;
    stroke("white");
    fill("orange");
    textSize(60);
    text("Game Over!",windowWidth/2-200,windowHeight/2+100);
    text("Press R to restart",windowWidth/2-200,700);
  }

    //restart
    if(keyDown("r"))
    {
block1.visible = true
block2.visible = true
block3.visible = true
block4.visible = true
block5.visible = true
block6.visible = true
block7.visible = true
block8.visible = true
block9.visible = true
block10.visible = true
block11.visible = true
block12.visible = true
block13.visible = true
block14.visible = true
block15.visible = true
block16.visible = true
block17.visible = true
block18.visible = true
block19.visible = true
block20.visible = true
block21.visible = true
block22.visible = true
block23.visible = true
block24.visible = true
block25.visible = true
block26.visible = true
block27.visible = true
block28.visible = true
block29.visible = true
block30.visible = true
block31.visible = true
block32.visible = true
block33.visible = true
block34.visible = true
block35.visible = true
block36.visible = true
block37.visible = true
block38.visible = true
block39.visible = true
block40.visible = true
block41.visible = true
block42.visible = true
block43.visible = true
block44.visible = true
block45.visible = true
block46.visible = true
block47.visible = true
block48.visible = true
block49.visible = true
block50.visible = true
block51.visible = true
block52.visible = true

      ball.velocityX = 4;
      ball.velocityY = -5
    }
    
    //block layer 1//
  if(ball.isTouching(block1))
  {
    block1.visible = false
    score = score + 2;
    audio1load.play();
  }
  if(ball.isTouching(block2))
  {
    block2.visible = false
    score = score + 2;
    audio1load.play();
   
  }
  if(ball.isTouching(block3))
  {
    block3.visible = false
    score = score + 2;
    audio1load.play();
   
  }
  if(ball.isTouching(block4))
  {
    block4.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block5))
  {
    block5.visible = false
    score = score + 2
    audio1load.play();
 
  }
  if(ball.isTouching(block6))
  {
    block6.visible = false
    score = score + 2
    audio1load.play();
    
  }
  if(ball.isTouching(block7))
  {
    block7.visible = false
    score = score + 2
    audio1load.play();
    
  }
  if(ball.isTouching(block8))
  {
    block8.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block9))
  {
    block9.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block10))
  {
    block10.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block11))
  {
    block11.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block12))
  {
    block12.visible = false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block13))
  {
    block13.visible = false
    score = score + 2
    audio1load.play();
  }

    //block layer 2//
  if(ball.isTouching(block14))
  {
    block14.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block15))
  {
    block15.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block16))
  {
    block16.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block17))
  {
    block17.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block18))
  {
    block18.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block19))
  {
    block19.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block20))
  {
    block20.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block21))
  {
    block21.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block22))
  {
    block22.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block23))
  {
    block24.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block25))
  {
    block25.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block26))
  {
    block26.visible=false
    score = score + 2;
    audio1load.play();
  }

  //block layer 3//
  if(ball.isTouching(block27))
  {
    block27.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block28))
  {
    block28.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block29))
  {
    block29.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block30))
  {
    block30.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block31))
  {
    block31.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block32))
  {
    block32.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block33))
  {
    block33.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block34))
  {
    block34.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block35))
  {
    block35.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block36))
  {
    block36.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block37))
  {
    block37.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block38))
  {
    block38.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block39))
  {
    block39.visible=false
    score = score + 2
    audio1load.play();
  }

  //block layer 4//
  if(ball.isTouching(block40))
  {
    block40.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block41))
  {
    block41.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block42))
  {
    block42.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block43))
  {
    block43.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block44))
  {
    block44.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block45))
  {
    block45.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block46))
  {
    block46.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block47))
  {
    block47.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block47))
  {
    block47.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block48))
  {
    block48.visible=false
    score = score + 2
    audio2load.play();
  }
  if(ball.isTouching(block49))
  {
    block49.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block50))
  {
    block50.visible=false
    score = score + 2
    audio1load.play();
  }
  if(ball.isTouching(block51))
  {
    block51.visible=false
    score = score + 2;
    audio1load.play();
  }
  if(ball.isTouching(block52))
  {
    block52.visible=false
    score = score + 2
    audio1load.play();
  }

  //playerbar moment
  //(1) playerbar.x=world.mouseX
  playerbar.x=mouseX
  
  //bounceOff
  edges = createEdgeSprites();
  ball.bounceOff(border1);
  ball.bounceOff(border2);
  playerbar.bounceOff(border1);
  playerbar.bounceOff(border2);
  //block layer 1
  ball.bounceOff(playerbar);
  ball.bounceOff(edges);
  ball.bounceOff(block1);
  ball.bounceOff(block2);
  ball.bounceOff(block3);
  ball.bounceOff(block4);
  ball.bounceOff(block5);
  ball.bounceOff(block6);
  ball.bounceOff(block7);
  ball.bounceOff(block8);
  ball.bounceOff(block9);
  ball.bounceOff(block10);
  ball.bounceOff(block11);
  ball.bounceOff(block12);
  ball.bounceOff(block13);

  //block layer 2
  ball.bounceOff(block14);
  ball.bounceOff(block15);
  ball.bounceOff(block16);
  ball.bounceOff(block17);
  ball.bounceOff(block18);
  ball.bounceOff(block19);
  ball.bounceOff(block20);
  ball.bounceOff(block21);
  ball.bounceOff(block22);
  ball.bounceOff(block23);
  ball.bounceOff(block24);
  ball.bounceOff(block25);
  ball.bounceOff(block26);

  //block layer 3
  ball.bounceOff(block27);
  ball.bounceOff(block28);
  ball.bounceOff(block29);
  ball.bounceOff(block30);
  ball.bounceOff(block31);
  ball.bounceOff(block32);
  ball.bounceOff(block33);
  ball.bounceOff(block34);
  ball.bounceOff(block35);
  ball.bounceOff(block36);
  ball.bounceOff(block37);
  ball.bounceOff(block38);
  ball.bounceOff(block39);

  //block layer 4
  ball.bounceOff(block40);
  ball.bounceOff(block41);
  ball.bounceOff(block42);
  ball.bounceOff(block43);
  ball.bounceOff(block44);
  ball.bounceOff(block45);
  ball.bounceOff(block46);
  ball.bounceOff(block47);
  ball.bounceOff(block48);
  ball.bounceOff(block50);
  ball.bounceOff(block51);
  ball.bounceOff(block52);

  drawSprites();
}
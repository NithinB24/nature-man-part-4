var normalnman, nman, nmanleft, nmanright, bg1, invisibleGround, nmanjump, nmanjumpL, nmanjumpR, ground, sgroundimg, sground, groundIMG, coin, coinimg, portal, portalimgs;
var coinGroup;
function preload() {

  nmanleft = loadAnimation("left1.png", "left2.png");
  nmanright = loadAnimation("right1.png", "right2.png");
  bg1 = loadImage("forest2.jpg");
  normalnman = loadAnimation("nman.png");
  nmanjump = loadAnimation("nmanJU.png");
  nmanjumpL = loadAnimation("nmanJL.png");
  nmanjumpR = loadAnimation("nmanJR.png");
  groundIMG = loadImage("ground.png");
  sgroundimg = loadImage("sground.png");
  coinimg = loadImage("coin.png");
}

function setup() {
  createCanvas(1500, 800);
  nman = createSprite(600, 700, 50, 50);
  nman.addAnimation("normalnman", normalnman)
  nman.addAnimation("right", nmanright);
  nman.addAnimation("left", nmanleft);
  nman.addAnimation("nmanjump", nmanjump);
  nman.addAnimation("nmanJL", nmanjumpL);
  nman.scale = 0.13;
  nman.setCollider("rectangle", 0, 0, 175, 400);

  invisibleGround = createSprite(600, 750, 1200, 20);
  invisibleGround.visible = false;

  ground1 = createSprite(748, 557, 50, 50);
  ground1.addImage("groundimg", groundIMG)
  ground1.scale = 0.05;

  sground1 = createSprite(386, 669, 50, 50);
  sground1.addImage("sgroungimg", sgroundimg);
  sground1.scale = 0.2;

  ground2 = createSprite(320, 382, 50, 50);
  ground2.addImage("groundimg", groundIMG)
  ground2.scale = 0.05;

  sground2 = createSprite(1000, 357, 50, 50);
  sground2.addImage("sgroungimg", sgroundimg);
  sground2.scale = 0.2;

  sground3 = createSprite(1194, 213, 50, 50)
  sground3.addImage("sgroungimg", sgroundimg);
  sground3.scale = 0.2;

  sground4 = createSprite(723, 143, 50, 50)
  sground4.addImage("sgroungimg", sgroundimg);
  sground4.scale = 0.2;

  coin1 = createSprite(387,615,50,50);
  coin1.addImage("coinimg",coinimg);
  coin1.scale = 0.1;

  coin2 = createSprite(743,520,50,50);
  coin2.addImage("coinimg",coinimg);
  coin2.scale = 0.1;

  coin3 = createSprite(432,340,50,50);
  coin3.addImage("coinimg",coinimg);
  coin3.scale = 0.1;

  coin4 = createSprite(996,313,50,50);
  coin4.addImage("coinimg",coinimg);
  coin4.scale = 0.1;

  coin5 = createSprite(1196,170,50,50);
  coin5.addImage("coinimg",coinimg);
  coin5.scale = 0.1;

  coin6 = createSprite(723,102,50,50);
  coin6.addImage("coinimg",coinimg);
  coin6.scale = 0.1;

  coinGroup=new Group()


}

function draw() {
  background(bg1);

  if (keyDown("left")) {
    nman.changeAnimation("left", nmanleft);
    nman.x = nman.x - 10;
    //nman.velocityX = -10;
  }

  if (keyDown("right")) {
    nman.changeAnimation("right", nmanright)
    nman.x = nman.x + 10;
    //nman.velocityX = 10;
  }
  if (keyWentUp("left") || keyWentUp("right") || keyWentUp("up")) {
    nman.changeAnimation("normalnman", normalnman)
    nman.velocityX = 0;
  }

  if (keyDown("up")) {
    nman.changeAnimation("nmanjump", nmanjump);
    nman.y -=10;
  }

 /* nman.bounceOff(ground1);
  nman.bounceOff(ground2);
  nman.bounceOff(sground1);
  nman.bounceOff(sground2);
  nman.bounceOff(sground3);
  nman.bounceOff(sground4);
*/
  if(nman.isTouching(sground1)){
    nman.velocityY=0;
    nman.collide(sground1)
    nman.velocityX=0;
  }
  if(nman.isTouching(sground2)){
    nman.velocityY=0;
    nman.collide(sground2)
    nman.velocityX=0;
  }
  if(nman.isTouching(sground3)){
    nman.velocityY=0;
    nman.collide(sground3)
    nman.velocityX=0;
  }
  if(nman.isTouching(sground4)){
    nman.velocityY=0;
    nman.collide(sground4)
    nman.velocityX=0;
  }
  if(nman.isTouching(ground1)){
    nman.velocityY=0;
    nman.collide(ground1)
    nman.velocityX=0;
  }
  if(nman.isTouching(ground2)){
    nman.velocityY=0;
    nman.collide(ground2)
    nman.velocityX=0;
  }
  nman.velocityY = nman.velocityY + 0.1;

  //if (keyWentDown("up")&&keyWentDown("left")){
  //nman.changeAnimation("nmanJL",nmanjumpL)
  //nman.velocityX = -10;
  //nman.velocityy = -20;
  //}

  nman.collide(invisibleGround);
  drawSprites();
  textSize(35);
  stroke(0);
  text(mouseX + ":" + mouseY, 1000, 100)
}
var gameState=0;
var door;
var livingroom;
var hauntedroom;
var hollywoodset;
var crimescene;
var tickmark;
var key;
var border;
var wheel,chair,chefshat,doll,duck,fish,pistol,wheel,woodenbox,butterfly,broccoli;


function preload(){
door= loadImage('Images/door_temp.jfif');
livingroom= loadImage('Images/livingroomfinal.png');
hauntedroom=loadImage('Images/haunted room game.jpg');
hollywoodset=loadImage('Images/hollywood set game.jpg');
crimescene=loadImage('Images/crime.png');
tickmark=loadImage('Images/tickmark.png');
key=loadImage('Images/key game.jfif');
border=loadImage('Images/border.png');
borderwheel=loadImage('Images/wheel.png');
broccoli=loadImage('Images/Broccoli.png');
butterfly=loadImage('Images/butterfly.png');
chair=loadImage('Images/chair.png');
chefshat=loadImage('Images/Chefs hat.png');
doll=loadImage('Images/doll.png');
duck=loadImage('Images/duck.png');
fish=loadImage('Images/fish.png');
pistol=loadImage('Images/pistole.png');
woodenbox=loadImage('Images/Wooden box.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
      border1=createSprite(402,650,500,45);
      border1.addImage("border",border);
      border1.visible=false;

      border2=createSprite(930,650,500,45);
      border2.addImage("borderwheel",borderwheel);
      border2.visible=false;

      border3=createSprite(990,650,500,45);
      border3.addImage("fish",fish);
      border3.visible=false;

      border4=createSprite(750,650,500,45);
      border4.addImage("doll",doll);
      border4.visible=false;

      border5=createSprite(750,650,500,45);
      border5.addImage("doll",doll);
      border5.visible=false;



  

}

function draw() {
  background(225); 
  if(gameState===0){
 background(door);
 textSize(165);
 fill(0,0,0)
 textFont('chiller');
 text("MYSTERY GAME",displayWidth/2-390,displayHeight/2-10);
 textSize(20);
 textFont('inconsolata');
 text("press ENTER to start",displayWidth/2-50,displayHeight-20);
 textSize(35)
 fill('white')
 text("DEVELOPED BY: YUVIKA SACHDEVA", displayWidth/2-280,displayHeight-290)
  
  if (keyDown("enter")){
     gameState=1
    }
  }

  if(gameState===1){
    background(livingroom);  
    
    //setting visability to the selected sprite
    border1.visible=true;
    border2.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

    //creating sprite and setting visability to false
    icecream=createSprite(725,464,40,90);
    icecream.visible=false;
    wheel=createSprite(652,120,65,90);
    wheel.visible=false;

    //changing the image to tickmark if mouse pressed on iceceam or wheel
    
     if(mousePressedOver(icecream)){
      border1.addImage("border",tickmark)
      text("YOU FOUND IT!!",displayWidth/2-50,displayHeight-20)
    }

    if(mousePressedOver(wheel)){
      border2.addImage("borderwheel",tickmark)
      text("WELL DONE!",displayWidth/2-50,displayHeight-20)
    }
    
    
     } 
  
  if(gameState===2){
    background(hauntedroom);

    //setting visability to the selected sprite
    border3.visible=true;
    border4.visible=true;
    //border5.visible=true;
    //border6.visible=true;

    text(""+mouseX+","+mouseY,mouseX,mouseY);

    //creating sprite and setting visability to false
    fishclick=createSprite(874,192,40,140);
    //fishclick.visible=false;
    dollclick=createSprite(252,286,80,120);
    //dollclick.visible=false;
   // dolclick=createSprite(252,286,80,120);
    //dollclick.visible=false;
  } 

  if(gameState===3){
    background(hollywoodset);
    
  } 
  if(gameState===4){
    background(crimescene);
  } 

  if(gameState===5){
    
  } 


  




drawSprites();
}

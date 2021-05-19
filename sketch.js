var robot,robotA,robotdeadA;
//var train1,train1I,train1G,train1P;
var train2,train2I,train2G,train2P;
var rail,railI;
var gamestate;
var play= 1;
var end= 0;
var gameover,gameoverI;
var score;
function preload(){
  
  //train1I= loadImage("train1.png");
   train2I= loadImage("train2.png");
  railI= loadImage("train-rail.png")
  robotA= loadAnimation("robot1.png","robot2.png");
  robotdeadA= loadAnimation("robotdead.png","robotdead2.png");
  gameoverI= loadImage("GameOver.png");
 
}


function setup() {
  createCanvas(1200, 800);

 rail= createSprite(600,400,10,10);
 rail.addImage("railtrack", railI);
 rail.scale=1.5;

 robot= createSprite(300,600,10,10);
 robot.addAnimation("roc",robotA);
 robot.scale=0.5;
 
 gameover =createSprite(800,400);
 gameover.addImage("fatality",gameoverI); 
 gameover.visible= false;
 gameover.scale=1.0;

 //train1G= new Group;
  train2G= new Group;

 gamestate = play;
}

 function gameend(){
  
  //train1G.destroyEach();
   train2G.destroyEach();

  robot.addAnimation("rip",robotdeadA);
  robot.changeAnimation("rip");
  
  gameover.visible= true;

  rail.visible = false;

  score=0;

 }

function draw() {
  background(220);
   
   

  if( gamestate === play){
    score = score + Math.round(getFrameRate()/60);
    robot.x= mouseX
    robot.debug= true;
     if(frameCount % 100 === 0){
     
       var trainh=Math.round(random(1,2))
       if(trainh === 1){

          train2s(); 

       }
       else if(trainh === 2){

         train2s(); 
         train2s(); 

      }

    //  var trainw= Math.round(random(1,2));
    //  var trainh= Math.round(random(1,2));
    // if ( trainw === 1 && trainh === 1) {
    //  train1s();
         
         
    // } else if( trainw === 2 && trainh === 1){
    //  train2s();
       
       
    // }else if( trainw === 1 && trainh === 2){
    //  train1s();
    //  train1s();
       
    // }else if( trainw === 2 && trainh === 2){
    //   train2s();
    //   train2s();
       
    // }
        
    }
   
   
     if ( train2G.isTouching(robot)){
     
     gamestate = end;     
   
     }
      //  if( train1G.isTouching(robot)){
   
      //      robot.depth= train2G.depth;
      //      robot.depth=robot.depth-1;       
  
      // }
  }

if (gamestate === end){
   
  gameend()
  text("Score is"+ score,200,30)
  

}
  
     drawSprites()
}
  
// function train1s(){

//   train1 = createSprite(0,50,0,0,);
//   train1.addImage("avoid",train1I);
//   train1.scale=1.0;
//   train1.lifetime= 100;
//   train1.velocityY=10;
//   train1.debug= true;
//   train1G.add(train1);
//   var P1 = Math.round(random(1,3));
//   if ( P1 === 1){
     
//     train1.x= 120;

//   } else if( P1 === 2){

//     train1.x= 290;

//   } else if( P1 === 3){

//     train1.x= 470;

//   }
  

// }
function train2s(){

  train2 = createSprite(0,50,0,0,);
  train2.addImage("climb",train2I);
  train2.scale=1;
  train2.lifetime= 100;
  train2.velocityY=10;
  train2.debug= true;
  train2G.add(train2);
  train2.setCollider("rectangle",0,0,270,700);
  var p2 = Math.round(random(1,3));
  if ( p2 === 1){
     
    train2.x= 200;

  } else if( p2 === 2){

    train2.x= 590;

  } else if( p2 === 3){

    train2.x= 980;

  }

}
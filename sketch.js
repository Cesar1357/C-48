var gameState = 0;
var lifes = 3;
var suelo1;
var suelo2,suelo3,suelo4,suelo5,suelo6,suelo7,suelo8;
var player;
var suelo2i;
var suelo2group;
var enemigo,enemigo2,enemigo3;
var LEVEL = 1;
var stage;
var resplayer = 0;
var gameOveri,gameOver;
var ganastei,ganaste;



var enemigo4,enemigo5,enemigo6;



function preload(){
    suelo2i = loadImage("prueba.png");
    gameOveri = loadImage("gameover.jpg");
    ganastei = loadImage("ganaste.jpg");
}


function setup(){
    createCanvas(5000,828);
    suelo1 = createSprite(0,780,600,250);
    suelo1.shapeColor = "red";

    suelo3 = createSprite(1300,500,1000,100);
    suelo3.shapeColor = "red";

    suelo4 = createSprite(3000,300,1600,100);
    suelo4.shapeColor = "red";

    suelo5 = createSprite(3000,800,1600,100);
    suelo5.shapeColor = "red";

    suelo6 = createSprite(5500,700,800,100);
    suelo6.shapeColor = "red";

    suelo7 = createSprite(6000,600,100,20);
    suelo7.shapeColor = "red";
    suelo7.velocityX = 10;

    suelo8 = createSprite(7500,600,800,100);
    suelo8.shapeColor = "red";






    //cosas del jugador
    player = createSprite(30,height-80,25,25);
    player.shapeColor = "black";

    //enemigos
    enemigo = createSprite(1300,430,30,30);
    enemigo.shapeColor = "green"
    enemigo.velocityX = 10;

    enemigo2 = createSprite(2600,215,60,80);
    enemigo2.shapeColor = "green"
    enemigo2.velocityX = 7;

    enemigo3 = createSprite(2600,725,60,60);
    enemigo3.shapeColor = "green"
    enemigo3.velocityX = 20;

    stage = createSprite(7800,500,50,50);
    stage.shapeColor = "yellow";


    suelo2group = new Group();


    gameOver = createSprite(windowWidth-400,windowHeight/2);
    gameOver.addImage(gameOveri);
    gameOver.scale = 3;
    gameOver.visible = false;

    


}

function draw(){
    if(LEVEL === 1){
    background(188, 208, 240);
    //ESTADO INICIAL DEL JUEGO
    if(gameState === 0){
        textSize(80);
        fill("black");
        text("Presiona Espacio para Empezar",400,200)
        textSize(25)
        text("Controles:",700,300);
        text("A:Moverse atras",700,330);
        text("D:Moverse adelante",700,360);
        text("W:Saltar",700,390);

        if(keyDown("space")){
            gameState = 1;

        }
    }
    //Estado Play

    if(gameState === 1){
        camera.position.x = player.x+2300;

        if(keyDown("a")){
            player.x = player.x - 20;
    
        }
    
        if(keyDown("d")){
            player.x = player.x + 20;
    
        }

    
        if(keyDown("w")){
            
            player.velocityY = -20;
    
        }
    
        

        player.velocityY = player.velocityY + 1;

        textSize(20);
        fill("black");
        text("Vidas: "+lifes,player.x+700,100);

        if(player.isTouching(enemigo) || player.isTouching(enemigo2) || player.isTouching(enemigo3) || player.y > 828){
            lifes = lifes - 1;
            player.x = 30;
            player.y = height-80;
        
        }
        gameOver.x = camera.x-1500;


        
// ayuda a comentar varias lineas /*

        if(lifes === 0){
            gameState = 2;
            player.visible = false;
        }

        elevator(500,830,100,15);
        elevator(4100,830,100,15);
        elevator(4600,830,100,15);



    }



    if(gameState === 2){
        gameOver.visible = true;
        textSize(20);
        fill("black");
        text("Vidas: "+lifes,player.x+700,100);
        //textSize(80);
        //text("Game Over",camera.x,300);
        gameOver.depth = player.depth+10;

    }
    
    if(enemigo.x > 1600){
        enemigo.velocityX = -10;
    }

    if(enemigo.x < 1000){
        enemigo.velocityX = 10;
    }


    if(enemigo2.x > 3400){
        enemigo2.velocityX = -10;
    }

    if(enemigo2.x < 2300){
        enemigo2.velocityX = 10;
    }

    if(enemigo3.x > 3400){
        enemigo3.velocityX = -20;
    }

    if(enemigo3.x < 2300){
        enemigo3.velocityX = 20;
    }


    if(suelo7.x > 7000){
        suelo7.velocityX = -10;
    }

    if(suelo7.x < 6300){
        suelo7.velocityX = 10;
    }
    
    
    
    
    player.collide(suelo1);
    player.collide(suelo3);
    player.collide(suelo4);
    player.collide(suelo5);
    player.collide(suelo6);
    player.collide(suelo7);
    player.collide(suelo8);
    suelo2group.collide(player);


    drawSprites();
    if(player.isTouching(stage)){
        LEVEL = 2;

    }

    //< >
};



if(LEVEL === 2){
    background(0);
    player.shapeColor = "white";
    //ESTADO INICIAL DEL JUEGO
    //player.x = 30;

    if(resplayer === 0){
        player.x = 30;
        enemigo4 = createSprite(2000,410,30,30);
        enemigo4.velocityY = 10;
        enemigo4.shapeColor = "green";
        enemigo5 = createSprite(2500,215,30,40);
        enemigo5.velocityX = 10;
        enemigo5.shapeColor = "green";
        enemigo6 = createSprite(4900,410,30,30);
        enemigo6.velocityY = 10;
        enemigo6.shapeColor = "green";

        ganaste = createSprite(player.x,windowHeight/2);
        ganaste.addImage(ganastei);
        ganaste.scale = 3;
        ganaste.visible = false;
 
        resplayer = 1;
    }
    gameOver.x = camera.x-1500;

    if(gameState === 0){
        textSize(80);
        fill("black");
        text("Presiona Espacio para Empezar",400,200)
        textSize(25)
        text("Controles:",700,300);
        text("A:Moverse atras",700,330);
        text("D:Moverse adelante",700,360);
        text("W:Saltar",700,390);

        if(keyDown("space")){
            gameState = 1;

        }
    }

    if(gameState === 3){
        player.velocityX = 0;
        player.velocityY = 0;
    }
    
    
    if(gameState === 1){
        camera.position.x = player.x+2300;

        if(keyDown("a")){
            player.x = player.x - 40;
    
        }
    
        if(keyDown("d")){
            player.x = player.x + 40;
    
        }
    
        if(keyDown("w")){
            player.velocityY = -20;
    
        }
        

        player.velocityY = player.velocityY + 2;

        textSize(20);
        fill("white");
        text("Vidas: "+lifes,player.x+700,100);

        if(player.isTouching(enemigo) || player.isTouching(enemigo2) || player.isTouching(enemigo3) || player.isTouching(enemigo4) || player.isTouching(enemigo5) || player.isTouching(enemigo6) || player.y > 828){
            lifes = lifes - 1;
            player.x = 30;
            player.y = height-80;
        
        }


        
// ayuda a comentar varias lineas /*

        if(lifes === 0){
            gameState = 2;
            player.visible = false;
        }

        elevator(500,830,100,15);
        elevator(4100,830,100,15);
        elevator(4600,830,100,15);



    }

    if(gameState === 2){
        gameOver.visible = true;
        gameOver.depth = player.depth+10;

        textSize(20);
        fill("white");
        text("Vidas: "+lifes,player.x+700,100);
        //textSize(80);
        //text("Game Over",camera.x,300);

    }

    
    if(enemigo.x > 1600){
        enemigo.velocityX = -10;
    }

    if(enemigo.x < 1000){
        enemigo.velocityX = 10;
    }


    if(enemigo2.x > 3500){
        enemigo2.velocityX = -10;
    }

    if(enemigo2.x < 3000){
        enemigo2.velocityX = 10;
    }

    if(enemigo3.x > 3400){
        enemigo3.velocityX = -20;
    }

    if(enemigo3.x < 2300){
        enemigo3.velocityX = 20;
    }


    if(suelo7.x > 7000){
        suelo7.velocityX = -10;
    }

    if(suelo7.x < 6300){
        suelo7.velocityX = 10;
    }


    if(enemigo4.y > 600 || enemigo4.y < 300){
        enemigo4.velocityY = enemigo4.velocityY *-1;
        
    }

    if(enemigo5.x > 3500 || enemigo5.x < 2200){
        enemigo5.velocityX = enemigo5.velocityX *-1;
        
    }

    if(enemigo6.y > 600 || enemigo6.y < 300){
        enemigo6.velocityY = enemigo6.velocityY *-1;
        
    }
    
    
    
    player.collide(suelo1);
    player.collide(suelo3);
    player.collide(suelo4);
    player.collide(suelo5);
    player.collide(suelo6);
    player.collide(suelo7);
    player.collide(suelo8);
    suelo2group.collide(player);

    if(player.isTouching(stage)){
        ganaste.visible = true;
        ganaste.x = player.x+800;
        gameState = 3;
    }
    drawSprites();


    //< >
}
}


function elevator(x,y,width,height){
    if(frameCount % 50 === 0){
        suelo2 = createSprite(x,y,width,height);
        suelo2.velocityY = - 7;
        suelo2.addImage(suelo2i);
        suelo2.lifetime = 120;
        suelo2group.add(suelo2);


    }

}


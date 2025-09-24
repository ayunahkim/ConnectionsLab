
let p = 0;
let c = 0;
let chaoplaceholder,chaogif,resultchao, resultlove,egg;
let chaotype = "neutral";


function submitting(){
    submitted = true;
    console.log(submitted);
    p=1;
    
    document.getElementById("centerbox").style.visibility = "hidden";
}


function preload(){
    chaoplaceholder = loadImage("assets/placeholderchao.png");
    chaogif = loadImage("assets/chaogif.gif");
    resultchao = loadImage("assets/neutral.png");
    resultlove = loadImage("assets/neutrallove.png");
    egg = loadImage("assets/egg.png");
}

function setup(){
    let canvasBox = document.getElementById("canvasbox");

    let canvas = createCanvas(800,500);
    canvas.parent(canvasBox);
    frameRate(10);
    imageMode(CENTER);
    noStroke();
    fill("#fffff");
    textAlign(CENTER);
}

function draw(){
    background(180);

    if(answer){
        pages();

        if(submitted){
            Alignment();
        }
    } 
}

function pages(){
    if(p==0){
        image(egg,width/2,height/2);
    }
    else if(p==1){
        loadingFortune();
    }
    else if(p==2){
        image(egg,width/2,height/2);
        text("oh? your egg is hatching!",width/2,400);
    }
    else if(p==3){
        image(resultchao,width/2,height/2);
    }
    else if(p==4){
        text(answer,width/2,400);
        image(resultchao,width/2,height/2);
    }
    else if(p==5){
        image(resultlove,width/2,height/2);
        text("no matter the result, your chao loves you!",width/2,400);
    }
}

function loadingFortune(){
    c++;

    background(200);
    if(c<20){
        text("reading your fortune",100,height/2);
    } else if(c>20&&c<40){
        text("communicating with the stars",100,height/2);
    } else if(c>40&&c<60){
        text("it's becoming clear",100,height/2);
    }
    image(chaogif,width/2,height/2);
    
    if(c>60){
        p=2;
    }
    

}

function Alignment(){
    if(alignment=="positive"){
        chaotype = "hero";
        resultchao = loadImage("assets/hero.png");
        resultlove = loadImage("assets/herolove.png");
    }
    else if(alignment=="neutral"){
        chaotype = "neutral";
    }
    else if(alignment=="negative"){
        chaotype = "dark";
        resultchao = loadImage("assets/dark.png");
        resultlove = loadImage("assets/darklove.png");
    }

}

function mouseClicked(){
    if(mouseX>0&&mouseX<800&&mouseY>0&&mouseY<500){
        if(p!=0 && p!=1){
            p++;
            //console.log("clicked");
        }
        
    }
}

// function makeButton(x,y,w,h){
    
// }
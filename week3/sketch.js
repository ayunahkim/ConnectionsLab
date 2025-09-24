
let p = 0;
let c = 0;
let chaoplaceholder,chaogif,resultchao, resultlove,egg;
let hatching,crystalball,questionchao;
let chaotype = "neutral";
let chaodata, chaoname, chaopersonality, chaofav;


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
    hatching = loadImage("assets/hatching_wbg.gif");
    crystalball = loadImage("assets/fortuneball.png");
    questionchao = loadImage("assets/neutralquestion.png");
    chaodata = loadJSON("chao.json");
}

function setup(){
    let canvasBox = document.getElementById("canvasbox");

    let canvas = createCanvas(800,500);
    canvas.parent(canvasBox);
    frameRate(10);
    imageMode(CENTER);
    noStroke();
    fill("#8b81a6");
    textAlign(CENTER);
    textFont("Roboto Mono");
    rectMode(CENTER);
}

function draw(){
    // background(255,0);
    clear();

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
        c = 0;
    }
    else if(p==3){
        c++;
        image(hatching,width/2,height/2);
        if(c>40){
            p++;
        }
    }
    else if(p==4){
        text("CONGRATULATIONS",width/2,100);
        image(resultchao,width/4,height/2);
        // push();
        // fill("white");
        // rect(width-width/4,height/2,180,300);
        // pop();
        // push();
        // textAlign(LEFT);
        // text("chao info",width-width/4,height/4);

        // pop();
    }
    else if(p==5){
        text("now let's see what your wish's result was",width/2,100);
        image(questionchao,width/2,height/2);
    }
    else if(p==6){
        text(answer,width/2,400);
        image(resultchao,width/2,height/2);
    }
    else if(p==7){
        image(resultlove,width/2,height/2);
        text("no matter the result, your chao loves you!",width/2,400);
    }
}

function loadingFortune(){
    c++;

    if(c<20){
        text("reading your fortune",width/2,height/2);
    } else if(c>20&&c<40){
        text("communicating with the stars",width/2,height/2);
    } else if(c>40&&c<60){
        text("it's becoming clear",width/2,height/2);
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
        questionchao = loadImage("assets/heroquestion.png");
    }
    else if(alignment=="neutral"){
        chaotype = "neutral";
    }
    else if(alignment=="negative"){
        chaotype = "dark";
        resultchao = loadImage("assets/dark.png");
        resultlove = loadImage("assets/darklove.png");
        questionchao = loadImage("assets/darkquestion.png");
    }

}

function mouseClicked(){
    if(mouseX>0&&mouseX<800&&mouseY>0&&mouseY<500){
        if(p!=0 && p!=1){
            p++;
            
        }
        if(p==2){
            createChao();
        }
        
    }
}

function createChao(){
    chaoname = random(chaodata.name);
    chaopersonality = random(chaodata.personality);
    chaofav = random(chaodata.favorite);


}

// function makeButton(x,y,w,h){
    
// }
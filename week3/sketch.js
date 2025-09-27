
let p = -1;
let c = 0;
let chaogif,resultchao, resultlove,egg;
let hatching,crystalball,questionchao;
let chaotype = "neutral";
let chaodata, chaoname, chaopersonality, chaofav;
let chaoID, fruits;
let outputIMG;


function submitting(){
    submitted = true;
    console.log(submitted);
    p=1;
    
    document.getElementById("centerbox").style.visibility = "hidden";
}


function preload(){
    chaogif = loadImage("assets/chaofloat.gif");
    resultchao = loadImage("assets/neutral.png");
    resultlove = loadImage("assets/neutrallove.png");
    egg = loadImage("assets/egg.png");
    hatching = loadImage("assets/hatching.gif");
    crystalball = loadImage("assets/fortuneball.png");
    questionchao = loadImage("assets/neutralquestion.png");
    titlescreen = loadImage("assets/titlescreen.png");
    chaodata = loadJSON("chao.json");
    chaoID = loadImage("assets/neutralid.png");
}

function setup(){
    let canvasBox = document.getElementById("canvasbox");

    let canvas = createCanvas(800,500);
    canvas.parent(canvasBox);

    frameRate(6);
    imageMode(CENTER);
    noStroke();
    fill("#8b81a6");
    textAlign(CENTER);
    textSize(14);
    textFont("Roboto Mono");
    rectMode(CENTER);
}

function draw(){
    background("#d7f4ff");
    //clear();

    if(answer){
        pages();

        if(submitted){
            Alignment();
        }
    } 
}

function pages(){
    if(p==-1){
        image(titlescreen,width/2,height/2);
    }
    if(p==0){
        image(egg,width/2,height/2);
        image(crystalball,width/2,height/2);
        document.getElementById("centerbox").style.visibility = "visible";
    }
    else if(p==1){
        frameRate(10);
        loadingFortune();
    }
    else if(p==2){
        image(egg,width/2,height/2);
        text("oh? your egg is hatching!",width/2,400);
        text("click to hatch!",width/2,420);
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
        frameRate(6);
        push();
        textSize(40);
        text("TADA!!!",width/2,height/2);
        pop();
        image(resultchao,width/4,height/2);
    }
    else if(p==5){
        image(resultchao,width/4,height/2);
    }
    else if(p==6){
        text("wonder what the answer to your wish was?",width/2,450);
        image(questionchao,width/2,height/2);
    }
    else if(p==7){
        push();
        textSize(50);
        textStyle(BOLD);
        text(answer,width/2,400);
        pop();
        image(resultchao,width/2,height/2);
    }
    else if(p==8){
        image(resultlove,width/2,height/2);
        textSize(20);
        text("no matter the result, your chao loves you!",width/2,450);
        textSize(14);
    }
    else if(p==9){
        frameRate(1);
        idInfo();
        text("use the save button below to save your chao's id card!",width/2,460);
        text("or click on the program to restart",width/2,480);
    }
}

function loadingFortune(){
    c++;

    image(chaogif,width/2,height/2);
    push();
    fill(255);
    if(c<20){
        text("reading your fortune",width/2,height/2);
    } else if(c>20&&c<40){
        text("communicating with the stars",width/2,height/2);
    } else if(c>40&&c<60){
        text("it's becoming clear",width/2,height/2);
    }
    pop();
    
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
        chaoID = loadImage("assets/heroid.png");
    }
    else if(alignment=="neutral"){
        chaotype = "neutral";
    }
    else if(alignment=="negative"){
        chaotype = "dark";
        resultchao = loadImage("assets/dark.png");
        resultlove = loadImage("assets/darklove.png");
        questionchao = loadImage("assets/darkquestion.png");
        chaoID = loadImage("assets/darkid.png");
    }

}

function mouseClicked(){
    if(mouseX>0&&mouseX<800&&mouseY>0&&mouseY<500){
        if(p!=0 && p!=1){
            if(p==2){
                createChao();
            }
            if(p==4){
                infoBox();
            }
            if(p==5){
                document.getElementById("popup").style.visibility = "hidden";
            }
            if(p==8){
                document.getElementById("savebttn").style.visibility = "visible";
            }
            if(p==9){
                document.getElementById("savebttn").style.visibility = "hidden";
                window.location.reload();
            }
            p++;
            
        }
        

    }
}

function createChao(){
    chaoname = random(chaodata.name);
    chaopersonality = random(chaodata.personality);
    chaofav = random(chaodata.favorite);

    if(chaofav=="Round Fruit"){
        fruits = loadImage("assets/circlefruits.png");
    } else if(chaofav == "Triangle Fruit"){
        fruits = loadImage("assets/trianglefruits.png");
    } else if(chaofav == "Square Fruit"){
        fruits = loadImage("assets/squarefruits.png");
    }

    //console.log("chao created");
}

function infoBox(){
    let popup = document.getElementById("popup");
    popup.innerHTML = `<h3>Chao Information</h3>
                    <p><b>Name: </b>${chaoname}</p>
                    <p><b>Personality: </b>${chaopersonality}</p>
                    <p><b>Favorite fruit: </b>${chaofav}</p>`;
    popup.style.visibility = "visible";
    console.log("infobox ran");
}

function idInfo(){
    image(chaoID,width/2,height/2);
    image(fruits,width/2,height/2);

    push();
    textAlign(LEFT);
    textStyle(BOLD);
    text("Name:",360,190);
    textStyle(NORMAL);
    text(chaoname,360,210);

    textStyle(BOLD);
    text("Alignment:",490,190);
    textStyle(NORMAL);
    text(chaotype,490,210);

    textStyle(BOLD);
    text("Personality:",360,260);
    textStyle(NORMAL);
    text(chaopersonality,360,280);
    
    textStyle(BOLD);
    text("Favorite Fruit:",490,260);
    textStyle(NORMAL);
    text(chaofav,490,280);
    pop();

    push();
    textAlign(CENTER);
    textFont("Libre Barcode 39",40);
    text("placeholder",490,360);
    pop();
}

function saveChao(){
    //console.log(mouseX,mouseY);
    outputIMG = get(142,94,521,309);
    save(outputIMG);
}
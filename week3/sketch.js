
let p = 0;
let c = 0;
let chaoplaceholder,chaogif,resultchao;
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
    resultchao = loadImage("assets/placeholderchao.png");
}

function setup(){
    let canvasBox = document.getElementById("canvasbox");

    let canvas = createCanvas(800,500);
    canvas.parent(canvasBox);
    imageMode(CENTER);
    noStroke();
    fill("#fffff");
    textAlign(CENTER);
}

function draw(){
    background(51);
    pages();
    counter++;
    //console.log(p);

    if(counter>=40&&submitted){
        loadingFortune();
        Alignment();
    }
    
    
}

function pages(){
    if(p==0){
        image(chaoplaceholder,width/2,height/2);
        text("page 0",40,40);
    }
    else if(p==1){
        text("page 1",40,40);
    }
    else if(p==2){
        text("page 2",40,40);
        text(answer,100,400);
        image(resultchao,width/2,height/2);
    }
    else if(p==3){
        background(50);
        text("no matter the result, your chao loves you!",width/2,height/2);
    }
}

function loadingFortune(){
    c++;
    if(p==1){
        if(c<600){
        background(200);
        if(c<200){
            text("reading your fortune",100,height/2);
        } else if(c>200&&c<400){
            text("communicating with the stars",100,height/2);
        } else if(c>400&&c<600){
            text("it's becoming clear",100,height/2);
        }
        image(chaogif,width/2,height/2);
        } else if(c>600){
            p=2;
        }
    }
    

}

function Alignment(){
    if(alignment=="positive"){
        chaotype = "hero";
        resultchao = loadImage("assets/hero.png");
    }
    else if(alignment=="neutral"){
        chaotype = "neutral";
    }
    else if(alignment=="negative"){
        chaotype = "dark";
        resultchao = loadImage("assets/dark.png");
    }

}

function mouseClicked(){
    if(p==2){
        p++;
    }
}
let p = -1; //page number, starts at -1 for title screen
let c = 0; //counter for timing certain "dialogue" switches

//variables for holding images
let chaogif,resultchao, resultlove, egg, hatching, crystalball, questionchao, chaoID, fruits;

//variables for holding created chao data
let chaotype = "neutral"; //default values are neutral
let chaodata, chaoname, chaopersonality, chaofav;

//variable for saving the chao id on the last pages
let outputIMG;
let font;


//runs when user submits their answer
function submitting(){
    submitted = true;
    p=1; //set page to 1
    
    //hide the element with the input box on page after submitting
    document.getElementById("centerbox").style.visibility = "hidden";
}

//preload assets - default values are set to neutral aligned chao
function preload(){
    //load images
    chaogif = loadImage("assets/chaofloat.gif");
    resultchao = loadImage("assets/neutral.png");
    resultlove = loadImage("assets/neutrallove.png");
    egg = loadImage("assets/egg.png");
    hatching = loadImage("assets/hatching.gif");
    crystalball = loadImage("assets/fortuneball.png");
    questionchao = loadImage("assets/neutralquestion.png");
    titlescreen = loadImage("assets/titlescreen.png");
    chaoID = loadImage("assets/neutralid.png");

    //load chao data (not api, local json file)
    chaodata = loadJSON("chao.json");

    font = loadFont("assets/barcode.ttf");
}

//runs once when program starts
function setup(){
    //create variable holding the HTML div "canvasbox", create canvas then attach to the canvasbox div
    let canvasBox = document.getElementById("canvasbox");
    let canvas = createCanvas(800,500);
    canvas.parent(canvasBox);

    frameRate(6); //set framerate lower to put less strain on everything

    imageMode(CENTER);
    noStroke();
    fill("#8b81a6");
    textAlign(CENTER);
    textSize(14);
    textFont("Roboto Mono");
    rectMode(CENTER);
}

//continuously runs
function draw(){
    background("#d7f4ff");

    //only starts running the main part of the program if the api data has been fetched and saved into the answer variable
    if(answer){
        pages();

        //once user submits their question, chao will be created and assets set to reflect changes
        if(submitted){
            Alignment();
        }
    } 
}

//the main program is held here
function pages(){
    if(p==-1){ //title screen
        image(titlescreen,width/2,height/2);
    }
    if(p==0){ //input screen
        image(egg,width/2,height/2);
        image(crystalball,width/2,height/2);
        document.getElementById("centerbox").style.visibility = "visible";
    }
    else if(p==1){ //loading page, animation runs
        frameRate(10); //frameRate set faster so it does not take as long
        loadingFortune();
    }
    else if(p==2){ //click to hatch egg page
        image(egg,width/2,height/2);
        text("oh? your egg is hatching!",width/2,400);
        text("click to hatch!",width/2,420);
        c = 0; //reset counter to 0 after using it in loadingFortune()
    }
    else if(p==3){ //hatching animation page
        c++;
        image(hatching,width/2,height/2);
        if(c>40){ //once animation ends based on counter value, go to next page
            p++;
        }
    }
    else if(p==4){ //reveal chao page
        frameRate(6); //set frameRate back to a slower speed
        push();
        textSize(50);
        text("TADA!!!",width/2,height/2);
        pop();
        image(resultchao,width/4,height/2);
    }
    else if(p==5){ //result chao and info box pop up page
        image(resultchao,width/4,height/2);
    }
    else if(p==6){ //what was the answer to your wish?
        text("wonder what the answer to your wish was?",width/2,450);
        image(questionchao,width/2,height/2);
    }
    else if(p==7){ //8ball api result page
        push();
        textSize(50);
        textStyle(BOLD);
        text(answer,width/2,400);
        pop();
        image(resultchao,width/2,height/2);
    }
    else if(p==8){ //chao loves you no matter what the result was!
        image(resultlove,width/2,height/2);
        textSize(20);
        text("no matter the result, your chao loves you!",width/2,450);
        textSize(14);
    }
    else if(p==9){ //chao id display and save function shown
        frameRate(1);
        idInfo();
        text("use the save button below to save your chao's id card!",width/2,460);
        text("or click on the program to restart",width/2,480);
    }
}

//runs on page 1 loading animation
function loadingFortune(){
    c++; //start counter

    image(chaogif,width/2,height/2);

    push();
    fill(255);
    //changing dialogue based on counter value
    if(c<20){
        text("reading your fortune...",width/2,height/2);
    } else if(c>20&&c<40){
        text("communicating with the stars...",width/2,height/2);
    } else if(c>40&&c<60){
        text("it's becoming clear...",width/2,height/2);
    }
    pop();
    
    //once counter hits 60, go to page 2
    if(c>60){
        p=2;
    }
}

//setting images and values to reflect the chao alignment
function Alignment(){
    if(alignment=="positive"){ //if positive, set assets and values to hero chao
        chaotype = "hero";
        resultchao = loadImage("assets/hero.png");
        resultlove = loadImage("assets/herolove.png");
        questionchao = loadImage("assets/heroquestion.png");
        chaoID = loadImage("assets/heroid.png");
    }
    else if(alignment=="neutral"){ //if neutral, keep chaotype neutral and default assets
        chaotype = "neutral";
    }
    else if(alignment=="negative"){ //if negative, set assets and values to dark chao
        chaotype = "dark";
        resultchao = loadImage("assets/dark.png");
        resultlove = loadImage("assets/darklove.png");
        questionchao = loadImage("assets/darkquestion.png");
        chaoID = loadImage("assets/darkid.png");
    }
}

//runs whenever mouse is clicked
function mouseClicked(){
    //if mouse is within canvas bounds
    if(mouseX>0&&mouseX<800&&mouseY>0&&mouseY<500){
        //if page is not input screen or loading screen, go to next page on mouseclick
        if(p!=0 && p!=1){
            if(p==2){ //initiate create chao before going to next page
                createChao();
            }
            if(p==4){ //initiate info box before going to next page
                infoBox();
            }
            if(p==5){ //make infobox hidden before going to next page
                document.getElementById("popup").style.visibility = "hidden";
            }
            if(p==8){ //make save button visible before going to next page
                document.getElementById("savebttn").style.visibility = "visible";
            }
            if(p==9){ //make save button hidden and reload actual tab page instead of going to next
                document.getElementById("savebttn").style.visibility = "hidden";
                window.location.reload();
            }
            p++;
        }
    }
}

//take data from chaodata file and set the variables
function createChao(){
    //pick randomly from the arrays in the json file
    chaoname = random(chaodata.name);
    chaopersonality = random(chaodata.personality);
    chaofav = random(chaodata.favorite);

    //load relevant image based on chaofav result
    if(chaofav=="Round Fruit"){
        fruits = loadImage("assets/circlefruits.png");
    } else if(chaofav == "Triangle Fruit"){
        fruits = loadImage("assets/trianglefruits.png");
    } else if(chaofav == "Square Fruit"){
        fruits = loadImage("assets/squarefruits.png");
    }
}

//display information in HTML box displayed over canvas
function infoBox(){
    let popup = document.getElementById("popup");
    popup.innerHTML = `<h3>Chao Information</h3>
                    <p><b>Name: </b>${chaoname}</p>
                    <p><b>Personality: </b>${chaopersonality}</p>
                    <p><b>Favorite fruit: </b>${chaofav}</p>`;
    popup.style.visibility = "visible";
}

//text displayed on the chao ID cards
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
    textSize(40);
    textFont(font);
    text(chaoname,490,360);
    pop();
}

function saveChao(){
    outputIMG = get(142,94,521,309);
    save(outputIMG,"mychao.png");
}
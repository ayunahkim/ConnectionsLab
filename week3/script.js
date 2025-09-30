let responded, submitted;
let answer = null;
let alignment;
let test = 0;
let positive,neutral,negative=[];
let randind;


//fetch api 
fetch("8ballbackup.json")
    .then(response => response.json())
    .then(data => {
        //save the fetched data into 3 different arrays based on category
        positive = data.positive;
        neutral = data.neutral;
        negative = data.negative;
        //call respond function
        respond();
    }).catch(error => {
        console.log("ERROR: "+error);
    });


//respond function
function respond(){
    //generate random number from 0-2
    let randnum = Math.floor(Math.random()*3);

    //positive - if random number is 0
    if(randnum==0){
        randind = Math.floor(Math.random()*9);
        answer = positive[randind];
        alignment = "positive";
    }

    //neutral - if random number is 1
    else if(randnum==1){
        randind = Math.floor(Math.random()*4);
        answer = neutral[randind];
        alignment = "neutral";
    }

    //negative - if random number is 2
    else if(randnum==2){
        randind = Math.floor(Math.random()*4);
        answer = negative[randind];
        alignment = "negative";
    }

    //set variable that holds if this function ran as true
    responded = true;
}
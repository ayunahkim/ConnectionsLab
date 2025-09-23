let answer, responded;
let alignment;
let test = 0;
let counter = 0;
let submitted;
//console.log(counter);


let positive,neutral,negative=[];
let randind;
    
console.log("starting")

fetch("https://cors-anywhere.herokuapp.com/https://eightballapi.com/api/categories?locale=en")
    .then(response => response.json())
    .then(data => {
        positive = data.positive;
        neutral = data.neutral;
        negative = data.negative;
        console.log("sending to respond function");
        console.log(counter);
        respond();
    });

function respond(){
    console.log("responding");
    let randnum = Math.floor(Math.random()*3);

    console.log(randnum);

    //positive
    if(randnum==0){
        randind = Math.floor(Math.random()*9);
        answer = positive[randind];
        alignment = "positive";
    }

    //neutral
    else if(randnum==1){
        randind = Math.floor(Math.random()*4);
        answer = neutral[randind];
        alignment = "neutral";
    }

    //negative
    else if(randnum==2){
        randind = Math.floor(Math.random()*4);
        answer = negative[randind];
        alignment = "negative";
    }
    //console.log(answer);
    responded = true;
    console.log(counter);
}
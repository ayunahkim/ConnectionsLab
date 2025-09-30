let responded, submitted;
let answer = null;
let alignment;
let test = 0;
let positive,neutral,negative=[];
let randind;


//fetch api 
fetch("https://cors-anywhere.com/https://eightballapi.com/api/categories?locale=en")
    .then(response => response.json())
    .then(data => {
        //save the fetched data into 3 different arrays based on category
        positive = data.positive;
        neutral = data.neutral;
        negative = data.negative;

        //call respond function
        respond();
    }).catch(error => {
        if (window.confirm('Automatic CORS server not working. Press OK to open new tab and request access to the CORS demo server then return to this tab again')){
            window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank').focus();
        };
        //alert("automatic CORS not working. please request access to this CORS demo server and try again: https://cors-anywhere.herokuapp.com/corsdemo");
        backupCall();
    });


function backupCall(){
    fetch("https://cors-anywhere.herokuapp.com/https://eightballapi.com/api/categories?locale=en")
    .then(response => response.json())
    .then(data => {
        //save the fetched data into 3 different arrays based on category
        positive = data.positive;
        neutral = data.neutral;
        negative = data.negative;

        //call respond function
        respond();
    }).catch(error => {
        console.log("Error!!! : " + error);
        //since the common error is related to CORS call limit, trying again in a few minutes should have it working again
        alert("Error!! Please try again in a couple minutes");
        backupCall();
    });
}

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
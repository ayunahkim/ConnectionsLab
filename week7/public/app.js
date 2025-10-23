let floaties = [];
let cookiecounter = 4;
let userDessert;

console.log('hello from app.js');

function setDessert(dessert){
    userDessert = dessert;
    console.log(userDessert);

    if(dessert=="cookie"){
        cookiecounter++;
        let temp = new Sweets(random(10,windowWidth-10),random(10,windowHeight-10),"cookie",2);
        floaties.push(temp);
    }

    let obj = {"dessert": userDessert};
    let jsonData = JSON.stringify(obj);

    fetch('/desserts', {
        method:'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data =>{console.log(data)});
}

window.addEventListener('load',()=>{

    document.getElementById('getTracker').addEventListener('click', ()=>{
        fetch('/getDesserts')
        .then(resp=> resp.json())
        .then(data => {
            document.getElementById('dessertInfo').innerHTML = '';
            console.log(data.data);

            for(let i=0; i<data.data.length; i++){
                let idessert = data.data[i].dessert;

                let string = data.data[i].date + ": " + idessert;
                let logEntry = document.createElement('p');
                logEntry.innerHTML = string;
                document.getElementById('dessertInfo').appendChild(logEntry);
            }
        })
    })
})
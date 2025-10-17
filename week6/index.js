let express = require('express');
let app = express();

let chaos = {
    "data" : [
        {
            name: "YS",
            alignment: "neutral",
            personality: "chatty"
        },
        {
            name: "Kosmo",
            alignment: "dark",
            personality: "no personality"
        },
        {
            name: "Casino",
            alignment: "hero",
            personality: "naive"
        },
        {
            name: "Chacky",
            alignment: "dark",
            personality: "lonely"
        },
        {
            name: "Rocky",
            alignment: "neutral",
            personality: "quiet"
        },
        {
            name: "Chaorro",
            alignment:"neutral",
            personality: "carefree"
        },
        {
            name: "Atom",
            alignment:"hero",
            personality:"naive"
        },
        {
            name: "Jojo",
            alignment:"dark",
            personality:"naive"
        },
        {
            name: "Cash",
            alignment: "hero",
            personality: "smart"
        },
        {
            name: "HITM",
            alignment: "neutral",
            personality: "energetic"
        }
    ]
}

app.use('/', express.static('public'));

app.get('/data',(req,res)=>{
    res.json(chaos);
});

app.get('/data/:chao',(req,res)=>{
    let user_chao = req.params.chao;
    let user_obj;
    for(let i=0; i<chaos.data.length;i++){
        if(user_chao == chaos.data[i].name){
            user_obj = chaos.data[i];
        }
    }
    if(user_obj){
        res.json(user_obj);
    } else{
        res.json({status: "info not present"});
    }
});

app.listen(3000,()=>{
    console.log("app is listening at localhost:3000");
})
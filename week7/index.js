import express from 'express'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

let app = express();

let defaultData = { inputTrackerData:[] };
let adapter = new JSONFile('db.json');
let db = new Low(adapter, defaultData);

let inputTracker = [];

app.use(express.json());

app.post('/desserts',(req,res)=>{
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        dessert: req.body.dessert
    }

    db.data.inputTrackerData.push(obj);
    db.write()
    .then(()=> {
        res.json({task:'success'})
    })
})

app.use('/',express.static('public'));

app.listen(3000,()=>{
    console.log("app is listening at localhost:3000");
})

app.get('/getDesserts', (req,res)=>{

    db.read()
    .then(()=>{
        let obj = {data: db.data.inputTrackerData}
        res.json(obj);
    }) 
})
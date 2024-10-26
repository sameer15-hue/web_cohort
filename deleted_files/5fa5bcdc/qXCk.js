import express, { json, response } from 'express';
const app=express();
app.use(express.json());
import fs from 'fs';
import path from 'path';
console.log('gell');
fetch('data.json')
.then(response=>response.json());
console.log(response);
app.get("/",function(req,res)
{
    console.log('qqqq');
    const datapath=path.join(__dirname,'data.json');
    console.log('sss');
    fs.readFile(datapath,'utf-8',(err,data)=>
    {
        res.send(data);
    })
})
console.log('goof');
app.listen(4000);
console.log('kk');
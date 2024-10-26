import express from 'express';
const app=express();
app.use(express.json());
let requests=1;
//setInterval(function x(){
//    let requests=0;
//},1000);
app.use(function (req,res,next){
    
    const age=req.query.age;
    if (requests){
    requests+=1;
    console.log(requests);
    if (age<20){
        res.send('You are not eligible to ride');
    }
    else{
        next();
    }}
    else{
        let requests=0;
    }

})
app.post('/r1',function(req,res){
    res.send('you completed ride1');
})
app.post('/r2',function(req,res){
    res.send('you completed ride2');
})
app.listen(3000);
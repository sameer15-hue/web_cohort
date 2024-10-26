import express from 'express';
const app=express();
app.use(express.json());
const age=req.body.age;
app.use(function (req,res,next){
    if (age<20){
        res.send('You are not eligible to ride');
    }
    else{
        next();
    }
})
app.get('/r1',function(req,res){
    res.send('you completed ride1');
})
app.get('/r2',function(req,res){
    res.send('you completed ride2');
})
app.listen(3000);
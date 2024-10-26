import express from 'express';
const app=express();
app.use(express.json());

app.use(function (req,res,next){
    let requests=0;
    const age=req.body.age;
    requests+=1;

    if (age<20){
        res.send('You are not eligible to ride');
    }
    else{
        next();
    }

})
app.post('/r1',function(req,res){
    res.send('you completed ride1');
})
app.post('/r2',function(req,res){
    res.send('you completed ride2');
})
app.listen(3000);
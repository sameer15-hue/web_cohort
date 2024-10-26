import express from 'express';
const app=express();
app.use(express.json());
let requests=0;
setInterval(function x(){
    let requests=0;
},1000);
app.use(function (req,res,next){
    
    const age=req.query.age;
    if (!requests){
    requests+=1;
    if (requests>5){
        console.log('done');
        res.status(404).json({
            msg:"request exceeded"
        })
    }
    else{
        next();
    }}
    else{
        requests=1;
        next();
    }
    console.log(requests);
    
})
app.get('/r1',function(req,res){
    console.log('ride1');
    
    res.send('you completed ride1');
})
app.get('/r2',function(req,res){
    console.log('ride2');
    
    res.send('you completed ride2');
})
app.listen(3000);
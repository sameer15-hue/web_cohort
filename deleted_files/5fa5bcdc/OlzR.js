import express from 'express';
const app=express();
app.use(express.json());
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];
app.get("/",function(req,res)
{
    let userslength=users[0].kidneys.length;
    let healthy=0;
    for(let i=0;i<userslength;i++){
        if (users[0].kidneys[i].healthy){
            healthy++;
        }
    }
    res.json({
        healthy,
        userslength
    })

});
app.post('/',function(req,res){
    const h=req.body.healthy;
    users[0].kidneys.push({
        healthy:true
    })
    res.json(users);
})
app
app.listen(3000);

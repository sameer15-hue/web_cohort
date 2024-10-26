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
    let userslength=users.length;
    console.log(userslength);
    let healthy=0;
    for(let i=0;i<userslength;i++){
        if (users[i].kidneys[0].healthy){
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
    users[0].push({
        healthy:true
    })
    res.json("!done");
})
app.listen(3000);

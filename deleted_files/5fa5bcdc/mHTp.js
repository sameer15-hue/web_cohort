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
    let x=users[0];
    res.send(x);


});
app.listen(3000);

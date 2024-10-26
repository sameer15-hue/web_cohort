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
    res.send('jhi');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// you can use @ts -ignore for ignoring ts formats (as libraries written in js and cant use in ts) 
import 'dotenv/config';
import express from 'express';
import jwt from 'jsonwebtoken';
import { usermodel } from './db';
import authuser from './middlewear';
const secretkey='ilovekiara'
const app=express();
app.use(express.json());
app.get('/api/v1/signup',async (req,res)=>{
    const {username,password}=req.body;
    try{
        await usermodel.create({
            username:username,
            password:password
        });
        res.json({msg:"signed up!!"})
    }catch(e){
        //console.log(e);
        res.status(411).json({
            msg:'user already exist!'
        })
    }
})
app.get('/api/v1/signin',async (req,res)=>{
    const {username,password}=req.body;
    const founduser=await usermodel.findOne({
        username:username,
        password:password
    });
    if(founduser){
        const token =jwt.sign({
            id:founduser._id.toString(),
        },secretkey);
        res.json({msg:token})
    }else{
        res.status(403).json({
            msg:'invalid username or password'
        })
    }
})
app.use(authuser);
app.get('/api/v1/content',async (req,res)=>{
    const {link,title}=req.body;
    // @ts-ignore
    const userid=req.id;
    
})
app.post("/api/v1/content", (req, res) => {

});
app.delete("/api/v1/content", (req, res) => {

});

app.post("/api/v1/brain/share", (req, res) => {

});

app.get("/api/v1/brain/:shareLink", (req, res) => {

});
app.listen(3000,()=>console.log('server listening on port 3000'));

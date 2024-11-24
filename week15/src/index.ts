// you can use @ts -ignore for ignoring ts formats (as libraries written in js and cant use in ts) 
import 'dotenv/config';
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { usermodel } from './db';
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
    // const token =jsonwebtoken.sign(username,secretkey);
})
app.get('/api/v1/signin',async (req,res)=>{
    const {username,password}=req.body;
    const founduser=await usermodel.findOne({
        username:username,
        password:password
    });
    if(founduser){
        const token =jsonwebtoken.sign({
            id:founduser._id.toString(),
        },secretkey);
        res.json({msg:'signup done!'})
    }else{
        res.status(403).json({
            msg:'invalid username or password'
        })
    }
})
app.post('/api/v1/content',async (req,res)=>{
    const {link,title}=req.body;

})
app.listen(3000);

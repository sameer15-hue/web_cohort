// you can use @ts -ignore for ignoring ts formats (as libraries written in js and cant use in ts) 
import 'dotenv/config';
import express from 'express';
import jwt from 'jsonwebtoken';
import { usermodel,contentmodel, linkmodel } from './db';
import authuser from './middlewear';
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
        },process.env.secretkey as string);
        res.json({msg:token})
    }else{
        res.status(403).json({
            msg:'invalid username or password'
        })
    }
})
app.use(authuser);
app.get('/api/v1/content',async (req,res)=>{
    // @ts-ignore
    const userid=req.id;
    console.log(userid);
    const response=await contentmodel.findOne({
        user:userid,
    }).populate("user","username");
    res.json({
        constent:response,
    })
})
app.post("/api/v1/content", async(req, res) => {
    const {link,title}=req.body;
    // @ts-ignore
    const userid=req.id;
    await contentmodel.create({
        link:link,
        title:title,
        user:userid,
        tags:[]
    })
    res.json({msg:"content created!!"})

});
app.delete("/api/v1/content",async(req, res) => {
    const contentid=req.body.contentid;
    await contentmodel.deleteMany({
        _id:contentid,
        // @ts-ignore
        user:req.id,
    })
    res.json({ msg: `content \`${contentid}\` deleted` });
});
app.post("/api/v1/brain/share", async(req, res) => {
    const share=req.body.share;
    const existinglink=await linkmodel.findOne({
        //@ts-ignore
        user:req.id,
        hash:share
    });
    if(existinglink){
        //@ts-ignore
        console.log(existinglink.user);
        //@ts-ignore
        const hash = existinglink.hash;
        res.json({
            link:hash
        })
    }else{
        const link=await linkmodel.create({
            //@ts-ignore
            user:req.id,
            hash:share
        })
        res.json({
            msg:"link created"
        })
   }
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
    
});
app.listen(3000,()=>console.log('server listening on port 3000'));

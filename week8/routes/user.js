import { Router } from "express";
import z from 'zod';
import { housemodel, usermodel } from "../db.js";
//import { purchasemodel } from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authuser } from "../middlewear/auth.js";
const userrouter=Router();

userrouter.post("/signup",async function(req,res){
    const validation=z.object({
        email:z.string().email(),
        name:z.string().min(3),
        password:z.string().min(2),
    });
    const parseddata=validation.safeParse(req.body);
    if(!parseddata.success){
        console.log(parseddata);
        return res.json({msg:parseddata.error});
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    try {
        await usermodel.create({
            email: email,
            password: await bcrypt.hash(password,3),
            name: name,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            msg: "User already exists!",
        });
    }
    res.json({
        msg:"signup done!!"
    })
})
userrouter.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    
    const founduser=await usermodel.findOne({
        email:email
    });
    if(founduser){
        const match=await bcrypt.compare(password,founduser.password);
        if(match){
        const token=jwt.sign({
            id:founduser._id.toString(),
        },process.env.secret_key_user);
        console.log(token);
        res.json({msg:token});
    }else{
        res.json({msg:"enter correct password"});
    }}else{
        res.json({msg:"enter correct username"});
    }
})
userrouter.post("/buy",authuser,async function(req,res){
    const houseid=req.body.houseid;
    try{
        await usermodel.updateOne(
            {_id:req.id},
            {"$push":{house:houseid}}
        )
    }catch(error){
        res.json({msg:error})
    }
    res.json({msg:"house bought!!"});
})
userrouter.get("/purchases",authuser,async function(req,res){
    const userid=req.id;
    const response=await usermodel.findOne({_id:userid});
    
    //const founduser=await purchasemodel.findOne({
    //    userid:userid,
    //});
    console.log(response);
    const houses=await housemodel.find(
        {_id:{"$in":response.house}}
    )
    
    /*if(founduser){
        let houseitem=await purchasemodel.find({
            userid:founduser.userid,
        })
        res.json({msg:houseitem});
    }else{
        res.json({msg:"no houses found"});
    }*/
   if(houses){
    res.json({msg:houses});
   }

})
export {userrouter};
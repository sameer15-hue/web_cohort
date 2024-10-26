import { Router } from "express";
const adminrouter=Router();
import { adminmodel, usermodel } from "../db.js";
import { housemodel } from "../db.js";
import { authadmin } from "../middlewear/auth.js";
import bcrypt from 'bcrypt';
import z from 'zod';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
adminrouter.post("/signup",async function(req,res){
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
        await adminmodel.create({
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
adminrouter.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const founduser=await adminmodel.findOne({
        email:email
    });
    if(founduser){
        const match=await bcrypt.compare(password,founduser.password);
        if(match){
        const token=jwt.sign({
            id:founduser._id.toString(),
        },process.env.secret_key_admin);
        console.log(token);
        res.json({msg:token});
    }else{
        res.json({msg:"enter correct password"});
    }}else{
        res.json({msg:"enter correct username"});
    }
})
adminrouter.post("/house",authadmin,async function(req,res){
    const address=req.body.address;
    const price=req.body.price;
    try{
        await housemodel.create({
            address:address,
            price:price
        })
    }catch(error){
        return res.json({msg:"error while creating house"});
    }
    res.json({msg:"house created"});
})
adminrouter.get("/preview",async function(req,res){
    let houselist=await housemodel.find({});
    //let userlist=[];
    //for(let i=0;i<houselist.length;i++){
    //    userlist.push(await usermodel.findOne({
    //        houseid:houselist[i].houseid
    //    }))
    //}
    //let userlistnames=userlist.map((value)=>value.name);
    let userlist = await usermodel.find({
        houseid: { $in: houselist.map(house => house.houseid)}
    });
    
    let userlistnames = userlist.map(user => user.name);
    res.json({
        userlist,
    })
    //now i should get user:house type response
});
export {adminrouter};
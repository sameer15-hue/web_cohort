import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { usermodel, todomodel } from './db.js';
import z from 'zod';
import bcrypt from 'bcrypt';
import cors from 'cors';

mongoose.connect("mongodb+srv://shaik:2CQtLAZMSGYCKUQy@cluster0.v7osp.mongodb.net/todolist").then(console.log("db connected"));
const app=express();
const secret="ilovealia";
app.use(cors());
app.use(express.json());
app.post("/signup",async function(req,res){
    const validation=z.object({
        name:z.string().min(3),
        email:z.string().email(),
        password:z.string().min(2),
    });
    const parseddata=validation.safeParse(req.body);
    if(!parseddata.success){
        return res.json({msg:parseddata.error});
    }
    console.log(parseddata);
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
app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const founduser= await usermodel.findOne({
        email:email,
    });
    if (founduser){
        const match=await bcrypt.compare(password,founduser.password);
        if (match){
            const token =jwt.sign({
                id:founduser._id.toString(),
            },secret)
            res.json({
                done:"done",
                token:token,
            })
        }else{
            res.send({msg:"password incorrect"})
        }
    }else{
        res.send({msg:"enter correct username"});
    } 
})
function auth(req,res,next){
    const token=req.headers.token;
    const data=jwt.verify(token,secret);
    if (data){
        req.id=data.id;
        next();
    }else{
        res.json({
            msg:"invalid token!!!"
        })
    }
}
app.post("/todo",auth ,async function(req,res){
    const userid=req.id;
    const todo=req.body.todo;
    const done =req.body.done;
    console.log(req.id);
    await todomodel.create({
        id:userid,
        todo:todo,
        done:done
    })
    res.json({
        msg:"todo posted!!!"
    })
})
app.get("/todo",auth ,async function(req,res){
    const userid=req.id;
    const todos_list=await todomodel.findOne({
        id:userid,
    })
    res.send(
        todos_list,
)
})
app.listen(3000);
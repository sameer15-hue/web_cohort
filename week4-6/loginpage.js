import express from'express';
import jwt from 'jsonwebtoken';
const app=express();
const secretKey='**admin_sided_key**';
const users=[];
import cors from 'cors';
app.use(cors());
app.use(express.json());
function generateToken() { 
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
app.post('/signup',function(req,res){
    const {username,password}=req.body;
    if (username!='' || password!=''){
        if (users.find((item)=>item.username==username)){
            return res.json({msg:"user already existed!"});
        }
        else{
            if((password.length<5) ){
                return res.json({msg:"password must be at least 5 characters "});
            }
            else if( username.includes(password)){
               return  res.json({msg:"password must not include username!"});
            }
            users.push({
                username:username,
                password:password
            });
            return res.json({msg:"done"});
        }
    }
    else{
        return res.json({msg:"username and password is required!"});
    }
})
app.post("/signin",function(req,res){
    const {username,password}=req.body;
    if (username!='' || password!=''){
        let founduser=users.find((item)=>item.username==username && item.password==password);
        //const token=generateToken();
        if (founduser){
        const token=jwt.sign({
            username:username
        },secretKey);
        founduser.token=token;
        res.json({
            token:token,
            msg:"done"
        });}
    else{
        res.json({msg:"username or password is incorrect"});
    }}
    else{
        res.json({msg:"enter valid username and password"});
    }
})
function auth(req,res,next){
    const token = req.headers.authorization;
    try{
        const details=jwt.verify(token,secretKey);
        req.username=details.username;
        next();
    }catch(e){
        res.json({
            msg:"invalid token !!"
        })
}}
app.get("/me",auth,function(req,res){
    let founduser=users.find((item)=>item.username==req.username);
    if (founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }else{
        res.json({msg:"user not found,please wait!"});
    }
});
app.listen(3000);
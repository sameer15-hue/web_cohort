import jwt from 'jsonwebtoken';
function authuser(req,res,next){
    const token =req.headers.token;
    const response=jwt.verify(token,process.env.secret_key_user);
    if (response){
        req.id=response.id;
        next();
    }else{
        res.json({msg:"invalid token"});
    }
}
function authadmin(req,res,next){
    const token =req.headers.token;
    const response=jwt.verify(token,process.env.secret_key_admin);
    if (response){
        req.id=response.id;
        next();
    }else{
        res.json({msg:"invalid token"});
    }
}
export {authuser,authadmin};
import { NextFunction,Request,Response } from 'express';
import jwt from 'jsonwebtoken';
function authuser(req:Request,res:Response,next:NextFunction){
    const token = req.headers.authorization;
    const response=jwt.verify(token as string,process.env.secretkey as string);
    if(response){
        // @ts-ignore
        req.id=response.id;
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
        next();
    }else{
        res.status(401).json({message:'invalid token'})
    }
}
export default authuser;
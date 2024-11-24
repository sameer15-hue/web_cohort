import { NextFunction,Request,Response } from 'express';
import jwt from 'jsonwebtoken';
function authuser(req:Request,res:Response,next:NextFunction){
    const token = req.headers["authorization"];
    const response=jwt.verify(token!,process.env.secretkey!);
    if(response){
        console.log('next');
        // @ts-ignore
        req.id=response.id
        next();
    }else{
        res.status(401).json({message:'invalid token'})
    }
}
export default authuser;
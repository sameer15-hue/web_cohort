import { Router } from "express";
const houserouter=Router();
import { housemodel  } from "../db.js";
import { authadmin } from "../middlewear/auth.js";
houserouter.post("/purchase",authadmin,async function(req,res){
    const userid=req.id;
    const houseid=req.body.houseid;
    try{
        await housemodel.create({
            userid:userid,
            houseid:houseid
        });
    }catch(error){
        console.log(e);
        return res.json({msg:error});
    }
    res.json({msg:`successfully purchased by ${userid}`});
})
houserouter.get("/preview",async function(req,res){
    const houseitems=await housemodel.find({});
    res.json({houseitems});
})
export {houserouter};
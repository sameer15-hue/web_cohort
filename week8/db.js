import mongoose from "mongoose";
import { type } from "os";
import { string } from "zod";
//improve schema definetely
const schema=mongoose.Schema;
const objectid=mongoose.Types.ObjectId;
const userschema= new schema({
    email:{ type: String, unique: true },
    password:String,
    name:String,
    house:[{
        type:objectid,
        ref:"housemodel"
    }]
});
const adminschema=new schema({
    email:{ type: String, unique: true },
    password:String,
    name:String
});
const housesschema=new schema({
    address:String,
    price:String,
});
/*const purchaseschema=new schema({
    houseid:objectid,
    userid:objectid
});*/
const usermodel=mongoose.model("usermodel",userschema);
const adminmodel=mongoose.model("adminmodel",adminschema);
const housemodel=mongoose.model("housemodel",housesschema);
//const purchasemodel=mongoose.model("purchasemodel",purchaseschema);
export {usermodel,housemodel,adminmodel};
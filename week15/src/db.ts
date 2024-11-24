import mongoose from "mongoose";
import 'dotenv/config';
//     if (!process.env.mongodb_url) {throw new Error("MongoDB URL is not defined in environment variables")}
//           else {mongoose.connect(process.env.mongodb_url).then(() => console.log("DB connected"))}          you can write in this way also 
mongoose.connect(process.env.mongodb_url!).then(() => console.log("DB connected"))//   ! ensures that this values never gets undefined 
//typescript can't verify .env at compile time as not sure that values are defined in .env file and it reads as record type which is Record<type String,String|undefined>
const schema=mongoose.Schema;
const objectid=mongoose.Types.ObjectId
const userschema=new schema({
    username:{type:String,unique:true},
    password:String
});
const tagschema=new schema({
    title:String,
})
const contentschema=new schema({
    link:String,
    type:String,
    title:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'tagschema'}],
    user:{type:mongoose.Types.ObjectId,ref:'userschema',required:true}, 
});
const linkschema=new schema({
    hash:String,   
    user:{type:mongoose.Types.ObjectId,ref:'userschema',required:true}
})
const usermodel=mongoose.model('userschema',userschema);
const contentmodel=mongoose.model('contentschema',contentschema);
const tagmodel=mongoose.model('tagschema',tagschema);
const linkmodel=mongoose.model('linkschema',linkschema);
export {usermodel,contentmodel,tagmodel,linkmodel};

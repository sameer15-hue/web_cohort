import mongoose from "mongoose";
const schema=mongoose.Schema;
const Users=new schema({
    email: { type: String, unique: true },
    name:String,
    password:String
});
const Todos=new schema({
    id:schema.ObjectId,
    todo:String,
    done:Boolean
});
const usermodel=mongoose.model('users',Users);
const todomodel=mongoose.model('todos',Todos);
export {usermodel,todomodel};
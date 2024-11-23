//records
import {z} from 'zod';
//import express from "express";
interface User{
    name:string,
    age:number
}
type people=Record<string,User>;
const users:people={
    'sameer':{name:'shaik',age:21},
    'farooq':{name:'shaik',age:24}
}
console.log(users['farooq'].age);
//pick
interface teacher{
    name:string,
    age:number,
    subject:string
    college?:string //optional
}
type picked =Pick<teacher,'subject'| 'college'>
//type inference in zod 
// const app= express();
// const schema=z.object({
//     name:z.string(),
//     age:z.number(),
//     email:z.string().email()
// });
// const x=schema.safeParse(req.body);
const A = z.string();
type B = z.infer<typeof A>; // string

const u: A = 12; // TypeError
const u: B = "asdf"; // compiles
console.log(u)
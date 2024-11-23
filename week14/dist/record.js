"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//records
const zod_1 = require("zod");
const users = {
    'sameer': { name: 'shaik', age: 21 },
    'farooq': { name: 'shaik', age: 24 }
};
console.log(users['farooq'].age);
//type inference in zod 
// const app= express();
// const schema=z.object({
//     name:z.string(),
//     age:z.number(),
//     email:z.string().email()
// });
// const x=schema.safeParse(req.body);
const A = zod_1.z.string();
const u = 12; // TypeError
const u = "asdf"; // compiles
console.log(u);

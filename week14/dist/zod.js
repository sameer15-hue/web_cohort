"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
let User = zod_1.z.string();
// if (User.safeParse('sameer').success){
//     console.log('correct');
// }
const people = zod_1.z.object({
    name: zod_1.z.string(),
    age: zod_1.z.number(),
    isAdmin: zod_1.z.boolean()
});
// *typescript exists only only at compile time ,it canr validate on runtime*
const data = { name: "Alice", age: 25, isAdmin: false };
const result = people.safeParse(data);
console.log(result);

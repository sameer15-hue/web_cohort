import {z} from "zod";
let User=z.string();
// if (User.safeParse('sameer').success){
//     console.log('correct');
// }
const people=z.object({
    name: z.string(),
    age:z.number(),
    isAdmin:z.boolean()
})
// if (people.safeParse({username:'sameer',age:20})){
//     console.log('eligible');
// }
type x=z.infer<typeof people>
// *typescript exists only only at compile time ,it canr validate on runtime*
const data = { name: "Alice", age: 25, isAdmin: false }; 
const result = people.safeParse(data); 
console.log(result);
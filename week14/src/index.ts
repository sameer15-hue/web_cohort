function callback(fn:(a:number)=>number,a:number):void{
    setTimeout(function(){fn(a)},1000);
}
function greet(a:number){
    console.log('hi sameer');
    return a;
}
// callback(greet,5);


// create a todo to render todos
// interface todo{
//     title:string,
//     completed:boolean
// }
// function todo(todos:todo){
//     return (
//         <div>
        
//     )
// }

type  a=number;
type b=number;
function sum(x:a,y:b){
    return x+y;
}

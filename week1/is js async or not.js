const fs=require("fs");
function print(err,data){
    console.log(data);
}
fs.readFile("week1/a.txt","utf-8",print);
fs.readFile('week1/b.txt','utf-8',print);

console.log("done!");

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    })
}
function callback(){
    console.log("callback is called");
}
let p=wait(3000)
p.then(callback)
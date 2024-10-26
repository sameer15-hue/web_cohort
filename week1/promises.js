const fs=require("fs");
const { resolve } = require("path");
//code 1
console.log("top");
function check(resolve) {
    console.log("check is done");
    setTimeout(resolve,
     5000);
}

function promisified() {
    return new Promise(function(resolve, reject) {
        check(resolve);
    });
}
function callback() {
    console.log("callback is called");
}

let p = promisified();
p.then(callback);
// code 2
function doasyncop(resolv){
    setTimeout(calledfunct,3000);
    console.log("resolve done")
    //resolve();
}
let d=new Promise(doasyncop);
function calledfunct(){
    console.log("calledfunct is called");
}
function callback(){
    console.log("demo is done");
}
d.then(callback)
//code 3
function promisified(time){
    return new Promise(function (resolve){
        setTimeout(calledfunction,time);
        resolve("we can pass /return here too");
    })
}
function calledfunction(){
    console.log("internal funtion called");
}
function callback(str){
    console.log("call back called");
    console.log(str); 
        
}
const v =promisified(5000)
v.then(callback)
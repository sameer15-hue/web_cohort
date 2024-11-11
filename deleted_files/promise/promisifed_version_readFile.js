const fs=require('fs');
function promisified(){
    return new Promise(function(resolve,reject){
        fs.readFile('deleted_files/promise/file.txt','utf-8',function(err,data){
            console.log('done')
            resolve(data);
        })
    })
}
promisified().then(function callback(content){
    console.log(content);
})
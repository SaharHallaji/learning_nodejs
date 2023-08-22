const {readFile, writeFile} = require("fs");
const path = require("path");
/*
console.log("start")
readFile('./content/first.txt',"utf-8", (err, result) => {
    let first = result ;
    readFile('./content/second.txt',"utf-8", (err, result) => {
        writeFile("./content/result-async.txt" , `this is the text ${first} - ${result}` , (err, result)=>{
            console.log(result);
        })
        console.log("done")
    })


})
console.log("starting the next task!")


*/

const getText = (path) =>{
    return new Promise((resolve , reject)=>{
        readFile(path , 'utf8' , (err , data)=>{
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
    .then((result)=> console.log(result))
    .catch((err)=> console.log(err))



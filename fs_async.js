const {readFile, writeFile} = require("fs");
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








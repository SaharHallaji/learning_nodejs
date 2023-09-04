const {readFile, writeFile} = require("fs").promises
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

/*const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)*/
/*
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
*/

/*
getText('./content/first.txt')
    .then((result)=> console.log(result))
    .catch((err)=> console.log(err))


*/

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', 'THIS IS AWESOME')
        console.log(first, second)
    } catch (err) {
        console.log(err)
    }
}


start()

























const names = require('./names')
const sayHi = require('./utiles')
//require('./numbers')
const amount = 12;

//if (amount < 10) console.log('smaller than 10');
//else console.log('larger than 10');

//console.log(__dirname);


//sayHi(names.sahar);

const os = require('os');

const user = os.userInfo();
//console.log(os.uptime());

//console.log(user);

//console.log(names);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
//console.log(currentOs)

const path = require('path')

//console.log(path.sep)
const filePath = path.join('/content', 'subFolder', 'text.txt')
//console.log(filePath)

const base = path.basename(filePath)
//console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subFolder', 'text.txt')
//console.log(absolute)
//-----------------------------------------------------------------------------------------------
//require("./fs_async")
// const http = require('http');
// const server = http.createServer((req,res) => {
//     if (req.url === '/') res.end("Welcome to our Home page!")
//     //res.write("Hello , this is our Home page!")
//     //res.end()
//     if (req.url === '/about') res.end("Welcome to our About page!")
//
//     res.end(`<h1> ooooops ! </h1>`)
// })
// server.listen(5000)
//
//
// const _ = require('lodash')
// const items = [1 , [2 , [3 , [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
//-----------------------------------------------------------------------------------------------------

const http = require('http')


/*
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Home Page")
    }
    if (req.url === '/about') {
        //BLOCKING CODE!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} - ${j}`)
            }
        }
        res.end('About Page')
    }

    res.end("Error Page!")

})


server.listen(5000, () => {
    console.log("Server is listening on port 5000")
})
*/


require("./fs_sync")

const EventEmitter = require("events");
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data received :  ${name} - ${age}`)
})

customEmitter.emit('response', 'john', 34)


const {createReadStream} = require("fs")

const stream = createReadStream('./content/big.txt', {highWaterMark: 9000, encoding: 'utf-8'})

stream.on('data', (result) => {
    console.log(result)
})
stream.on("error", (err) => {
    console.log(err)
})

// -----------------------------------------------------------------------------------------------------------------


const fs = require("fs")
http
    .createServer((req, res) => {
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on("error" , (err)=>{
            res.end(err)
        })
    })
    .listen(5000)
































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
const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === '/') res.end("Welcome to our Home page!")
    //res.write("Hello , this is our Home page!")
    //res.end()
    if (req.url === '/about') res.end("Welcome to our About page!")

    res.end(`<h1> ooooops ! </h1>`)
})
server.listen(5000)


t
























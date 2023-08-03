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
    name : os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
//console.log(currentOs)

const path = require('path')

//console.log(path.sep)
const filePath = path.join('/content' , 'subFolder', 'text.txt')
//console.log(filePath)

const base = path.basename(filePath)
//console.log(base)

const absolute = path.resolve(__dirname , 'content' , 'subFolder', 'text.txt')
//console.log(absolute)


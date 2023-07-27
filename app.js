const names = require('./names')
const sayHi = require('./utiles')
console.log(names)
const amount = 12;

if (amount < 10) console.log('smaller than 10');
else console.log('larger than 10');

console.log(__dirname);


sayHi(names.sahar)

const os = require('os')

const user = os.userInfo()
console.log(user)
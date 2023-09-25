const app = require('express')();

app.get('/',(req, res)=>{
    res.json([{name: 'sahar'} , {name: 'mmd'}])
})

app.get('/api/products/:productID',(req, res)=>{
    console.log(req.params)
    res.send('hi')
})
app.get('/api/v1/query',(req,res)=>{
    // http://localhost:5000/api/v1/query?name=sahar&lastName=hallaji
    console.log(req.query)
    res.send('query')
})
app.listen(5000,()=>{
    console.log("port 5000 is running...! ")
})


const express = require('express')
const app = express() 
const path = require('path')
const bodyParser= require('body-parser')
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

app.use("/admin",adminRouter)
app.use(shopRouter)


app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(9090)
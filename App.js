const express = require('express')
const app = express()
// const routes = require('./routes.js')
// console.log(routes.someText)
app.use((req, res, next) => {
    console.log("middleware ")
    next()
})

app.use((req, res, next) => {
    console.log("middleware Second")
    res.send("<h1>Welcome Back</h1>")
})

app.listen(9090)
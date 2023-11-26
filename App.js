const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const adminData = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminData.routes)
app.use(shopRouter)


app.use('/', (req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  res.status(404).render('404', { docTitle: "404 Page Not Found Error" })
})

app.listen(9090)
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const handleError = require('./controllers/404.js')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes)
app.use(shopRouter)


app.use("/", handleError.getError)

app.listen(9090)
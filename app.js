// Include required packages from node_modules and setting server related parameters
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')


const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000



// Setting view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// 對request做前處理
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
// request送進路由
app.use(routes)


// Listen on localhost://3000
app.listen(port, () => {
  console.log(`Restaurant List is listening on http://localhost:${port}`)
})

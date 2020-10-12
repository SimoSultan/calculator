const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use( express.urlencoded( {extended: false }) )
app.use( express.json() )

app.get('/', (req, res) => {
  res.render('Hello World!')
})

app.listen(port, () => {
  console.log('listening on port:' + port)
})

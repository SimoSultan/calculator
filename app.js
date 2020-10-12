const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.use( express.urlencoded( {extended: false }) )
app.use( express.json() )

const hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    getUsername: () => { console.log('Simon') }
  }
});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/', (req, res, next) => {
  // res.send('Hello World!')
  // let username = ''
  // console.log(username);
  res.render('home', {
    username: getUsername()
  })
})

app.listen(port, () => {
  console.log('listening on port:' + port)
})


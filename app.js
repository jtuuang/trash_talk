const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.job
  const eng = job === '工程師'
  const des = job === '設計師'
  const ent = job === '創業家'
  res.render('index', { sentence: generateTrashTalk(job), eng, des, ent })
})

app.listen(port, () => {
  console.log(`The Express is running on http://localhost:${port}`)
})
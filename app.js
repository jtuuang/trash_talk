const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')

const app = express()

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    ifEquals(selectedJob, jobName, options) {
      return (selectedJob === jobName) ? options.fn(this) : options.inverse(this)
    }
  }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.job
  const sentence = generateTrashTalk(job)
  res.render('index', { sentence, job })
})

app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})
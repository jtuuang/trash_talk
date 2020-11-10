const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const port = 3000

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    ifEquals(job, selectedJob, options) {
      return (job == selectedJob) ? options.fn(this) : options.inverse(this)
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
  res.render('index', { sentence: generateTrashTalk(job), job })
})

app.listen(port, () => {
  console.log(`The Express is running on http://localhost:${port}`)
})
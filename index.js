const express = require('express')

const app = express()

// Set Handlebars (hbs) as the view engine of our app
app.set('view engine', 'hbs');

const Todo = require('./models/todo-model.js')

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.lof(`Express MVC app is running on port ${port}`)
});

app.get('/todos', (req, res) => {
  Todo.find({})
  .then((todos) => {
    res.render('todos/index', {todos})
  })
  .catch(console.error)
})
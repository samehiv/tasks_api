const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const tasksRouter = require('./routes/tasks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/tasks', tasksRouter)




app.listen(port, () => console.log(`listening on port ${port}`))
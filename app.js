const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const tasksRouter = require('./routes/tasks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/tasks', tasksRouter)


app.use((req, res) => {
    res.json({
        code: 404,
        status: 'error',
        message: 'not found'
    })
})

app.use((err, req, res, next) => {
    res.json({
        code: err.code,
        status: 'error',
        message: err.message
    })
})


app.listen(port, () => console.log(`listening on port ${port}`))
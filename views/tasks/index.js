const taskJson = require('./task')

module.exports = tasks => {
    const data = tasks.map(task => taskJson(task))
    return {
        code: 200, 
        status: 'success',
        data
    }
}
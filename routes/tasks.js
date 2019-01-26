const express = require('express')
const router = express.Router()
const Task = require('../models').Task
const TasksJson = require('../views/tasks')

router.get('/', async (req, res) => {
    const tasks = await getTasks(req.query.sort, req.query.dir)
    res.json(TasksJson(tasks))
})




const getTasks = async(sortType, dir) => {
    const sortsTypes = {
        'status': 'statusSorted',
        'date': 'dateSorted'
    }

    const scope = sortsTypes[sortType]
    dir = dir ? dir.toUpperCase() : 'ASC'

    if (scope && ['ASC','DESC'].includes(dir) ) {
        return await Task.scope({ 
            method: [scope, dir] 
        }).findAll()
    } else {
        return await Task.findAll()
    }


}



module.exports = router
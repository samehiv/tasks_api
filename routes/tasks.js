const express = require('express')
const Joi = require('joi');
const router = express.Router()
const Task = require('../models').Task
const TasksJson = require('../views/tasks')
const RecordNotFoundError = require('../errors/RecordNotFoundError')
const AuthorizationError = require('../errors/AuthorizationError')
const ValiationError = require('../errors/ValidationError')


router.get('/', async (req, res) => {
    const tasks = await getTasks(req.query.sort, req.query.dir)
    res.json(TasksJson(tasks))
})



router.patch('/:id', async (req, res, next) => {
    const task = await Task.findByPk(req.params.id)
    try {
        if (!task) {
            throw new RecordNotFoundError
        }

        if (task.status != 'pending') {
            throw new AuthorizationError
        }

        validateStatusValue(req.body)
        
    } catch (err) {
        return next(err)
    }

    next()
})

router.patch('/:id', async (req, res) => {
    await Task.update({ status: req.body.status }, 
        { where : {id: req.params.id } })

    res.json({ code: 200, status: 'success' })
})


const getTasks = async (sortType, dir) => {
    const sortsTypes = {
        'status': 'statusSorted',
        'date': 'dateSorted'
    }

    const scope = sortsTypes[sortType]
    dir = dir ? dir.toUpperCase() : 'ASC'

    if (scope && ['ASC', 'DESC'].includes(dir)) {
        return await Task.scope({
            method: [scope, dir]
        }).findAll()
    } else {
        return await Task.findAll()
    }


}

const validateStatusValue = body => {
    const {error, value} = Joi.validate(body, { 
        status: Joi.string().required().valid('completed', 'failed')
    });
    
    if(error) {
        throw new ValiationError(error.details.map(e => e.message))
    }
}


module.exports = router
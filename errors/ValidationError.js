class ValidationError extends Error {
    constructor(errors ,message = 'invalid input data') {
        super(message)
        this.code = 404
        this.message = message
        this.errors = errors
    }
}

module.exports = ValidationError
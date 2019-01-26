class RecordNotFoundError extends Error {
    constructor(message = 'record not found') {
        super(message)
        this.code = 404
        this.message = message
    }
}

module.exports = RecordNotFoundError
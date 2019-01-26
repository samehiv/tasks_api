class AuthorizationError extends Error {
    constructor(message = 'unauthorized') {
        super(message)
        this.code = 403
        this.message = message
    }
}

module.exports = AuthorizationError
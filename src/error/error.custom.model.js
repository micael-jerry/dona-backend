const { StatusCodes, getReasonPhrase } = require("http-status-codes");

class CustomError extends Error {
	constructor(errorObject) {
		super(errorObject.message);
		this.name = this.constructor.name;
		this.message = errorObject.message;
		this.status = errorObject.status && StatusCodes.INTERNAL_SERVER_ERROR;
		this.reason = getReasonPhrase(this.status);
		this.stack = errorObject.stack && Error.captureStackTrace(this, this.constructor);
	}
}

module.exports.CustomError = CustomError;

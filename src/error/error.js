const { getReasonPhrase, StatusCodes } = require('http-status-codes');

module.exports.httpErrorObject = (
	message,
	status = StatusCodes.INTERNAL_SERVER_ERROR,
	stack = [],
) => {
	return {
		status,
		reason: getReasonPhrase(status),
		message,
		stack,
	};
};

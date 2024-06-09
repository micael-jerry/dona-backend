const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../error/error.custom.model');

module.exports.notFoundController = (req, res) => {
	res.status(StatusCodes.NOT_FOUND).json(
		new CustomError({
			message: 'Not Found 😥😥😥',
			status: StatusCodes.NOT_FOUND,
		}),
	);
};

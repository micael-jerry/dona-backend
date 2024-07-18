const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../../error/error.custom.model');

const validateRequest = schema => async (req, res, next) => {
	try {
		await schema.validate(req.body, { abortEarly: false });
		next();
	} catch (error) {
		res.status(StatusCodes.BAD_REQUEST).json(
			new CustomError({
				message: error.errors[0],
				status: StatusCodes.BAD_REQUEST,
				stack: error,
			}),
		);
	}
};

module.exports.validateRequest = validateRequest;

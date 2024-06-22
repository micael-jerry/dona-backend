const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../../error/error.custom.model');

module.exports.himself = async (req, res, next) => {
	if (req.params.user_id === req.user.user_id) {
		next();
	}
	res.status(StatusCodes.UNAUTHORIZED).json(
		new CustomError({
			message: 'Unauthorized',
			status: StatusCodes.UNAUTHORIZED,
		}),
	);
};

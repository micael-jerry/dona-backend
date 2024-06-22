const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../../error/error.custom.model');

module.exports.authentication = (req, res, next) => {
	const bearerToken = req.headers.authorization;
	try {
		const token = bearerToken.split(' ')[1];
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
			if (err) {
				res.status(StatusCodes.UNAUTHORIZED).json(
					new CustomError({
						message: 'Unauthorized',
						status: StatusCodes.UNAUTHORIZED,
					}),
				);
			} else {
				req.user = {
					user_id: decodedToken.user_id,
				};
				next();
			}
		});
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.UNAUTHORIZED).json(
			new CustomError({
				message: 'Unauthorized',
				status: StatusCodes.UNAUTHORIZED,
			}),
		);
	}
};
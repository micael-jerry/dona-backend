const jwt = require('jsonwebtoken');

module.exports.verifyAuth = (req, res, next) => {
	const bearerToken = req.headers.authorization;
	try {
		const token = bearerToken.split(' ')[1];
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
			if (err) {
				res.status(401).json({
					message: 'Unauthorized',
				});
			} else {
				req.user = {
					userId: decodedToken.userId,
				};
				next();
			}
		});
	} catch (error) {
		res.status(401).json({
			message: 'Unauthorized',
		});
	}
};

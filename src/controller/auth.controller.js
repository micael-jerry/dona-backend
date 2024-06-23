const { StatusCodes } = require('http-status-codes');
const { createUser, loginUser } = require('../service/auth.service');
const { getById } = require('../service/user.service');

module.exports.signUp = (req, res) => {
	createUser(req.body)
		.then(r => res.status(StatusCodes.CREATED).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.UNAUTHORIZED).json(e);
		});
};

module.exports.login = (req, res) => {
	loginUser(req.body)
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			res.status(StatusCodes.UNAUTHORIZED).json(e);
		});
};

module.exports.whoami = (req, res) => {
	getById(req.user.user_id)
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.BAD_REQUEST).json(e);
		});
};

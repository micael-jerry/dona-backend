const { getAll, getById, update } = require('../service/user.service');
const { StatusCodes } = require('http-status-codes');

module.exports.getAllUsers = (req, res) => {
	getAll()
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.BAD_REQUEST).json(e);
		});
};

module.exports.getUserInfo = (req, res) => {
	getById(req.params.id)
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.BAD_REQUEST).json(e);
		});
};

module.exports.updateUser = (req, res) => {
	update(req.params.id, req.body)
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.BAD_REQUEST).json(e);
		});
};

const { getAll, getById, update } = require('../service/user.service');

module.exports.getAllUsers = (req, res) => {
	getAll()
		.then(r => res.status(200).json(r))
		.catch(e => {
			console.log(e);
			res.status(400).json(e);
		});
};

module.exports.getUserInfo = (req, res) => {
	getById(req.params.id)
		.then(r => res.status(200).json(r))
		.catch(e => {
			console.log(e);
			res.status(400).json(e);
		});
};

module.exports.updateUser = (req, res) => {
	update(req.params.id, req.body)
		.then(r => res.status(200).json(r))
		.catch(e => {
			console.log(e);
			res.status(500).json(e);
		});
};

const { createUser, loginUser } = require('../service/auth.service');

module.exports.signUp = (req, res) => {
	createUser(req.body)
		.then(r => res.status(200).json(r))
		.catch(e => {
			res.status(401).json(e);
		});
};

module.exports.login = (req, res) => {
	loginUser(req.body)
		.then(r => res.status(200).json(r))
		.catch(e => {
			res.status(401).json(e);
		});
};

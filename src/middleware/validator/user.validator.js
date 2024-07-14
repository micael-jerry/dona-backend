const Joi = require('joi');

const updateUserSchemaValidator = Joi.object({
	lastname: Joi.string().max(50),
	firstname: Joi.string().max(50),
	bio: Joi.string().max(1000),
	birthday: Joi.date().less(new Date().setFullYear(new Date().getFullYear() - 18)),
});

module.exports.updateUserValidator = (req, res, next) => {
	const { error } = updateUserSchemaValidator.validate(req.body);
	if (error) {
		res.status(400).json(error);
	} else {
		next();
	}
};

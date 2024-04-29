const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const { httpErrorObject } = require('../../error/error');

const signUpValidatorSchema = Joi.object({
	pseudo: Joi.string().min(3).max(50).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	bio: Joi.string().max(1000),
});

const loginValidatorSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

module.exports.signUpBodyValidator = (req, res, next) => {
	const { error } = signUpValidatorSchema.validate(req.body);
	if (error) {
		res
			.status(StatusCodes.BAD_REQUEST)
			.json(
				httpErrorObject(
					error.details[0].message,
					StatusCodes.BAD_REQUEST,
					error,
				),
			);
	} else {
		next();
	}
};

module.exports.loginBodyValidator = (req, res, next) => {
	const { error } = loginValidatorSchema.validate(req.body);
	if (error) {
		res
			.status(StatusCodes.BAD_REQUEST)
			.json(
				httpErrorObject(
					error.details[0].message,
					StatusCodes.BAD_REQUEST,
					error,
				),
			);
	} else {
		next();
	}
};

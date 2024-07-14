const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const { CustomError } = require('../../error/error.custom.model');

const signUpValidatorSchema = Joi.object({
	pseudo: Joi.string().min(3).max(50).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	lastname: Joi.string().max(50).required(),
	firstname: Joi.string().max(50).required(),
	bio: Joi.string().max(1000),
	birthday: Joi.date()
		.less(new Date().setFullYear(new Date().getFullYear() - 18))
		.required(),
});

const loginValidatorSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

module.exports.signUpBodyValidator = (req, res, next) => {
	const { error } = signUpValidatorSchema.validate(req.body);
	if (error) {
		res.status(StatusCodes.BAD_REQUEST).json(
			new CustomError({
				message: error.details[0].message,
				status: StatusCodes.BAD_REQUEST,
				stack: error,
			}),
		);
	} else {
		next();
	}
};

module.exports.loginBodyValidator = (req, res, next) => {
	const { error } = loginValidatorSchema.validate(req.body);
	if (error) {
		res.status(StatusCodes.BAD_REQUEST).json(
			new CustomError({
				message: error.details[0].message,
				status: StatusCodes.BAD_REQUEST,
				stack: error,
			}),
		);
	} else {
		next();
	}
};

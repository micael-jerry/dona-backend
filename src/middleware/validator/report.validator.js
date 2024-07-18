const Joi = require('joi');
const { REPORT_TYPE, LOCATION_TYPE } = require('../../model/types/report.type');
const { StatusCodes } = require('http-status-codes');
const { CustomError } = require('../../error/error.custom.model');

const reportLocationValidatorSchema = Joi.object({
	type: Joi.string.valid(Object.values(LOCATION_TYPE)).required(),
	coordinates: Joi.array().items(Joi.number()).required(),
});

const reportValidatorSchema = Joi.object({
	type: Joi.string().valid(Object.values(REPORT_TYPE)).required(),
	location: reportLocationValidatorSchema.required(),
	description: Joi.string().max(1000),
	reportedBy: Joi.string().required(),
});

module.exports.reportValidator = (req, res, next) => {
	const { error } = reportValidatorSchema.validate(req.body);
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

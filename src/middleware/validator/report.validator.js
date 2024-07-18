const yup = require('yup');
const { REPORT_TYPE, LOCATION_TYPE } = require('../../model/types/report.type');
const { validateRequest } = require('./request.body.validator');

const reportLocationValidatorSchema = yup.object().shape({
	type: yup.string().oneOf(Object.values(LOCATION_TYPE)).required(),
	coordinates: yup.array().of(yup.number()).length(2).required(),
});

const reportValidatorSchema = yup.object().shape({
	type: yup.string().oneOf(Object.values(REPORT_TYPE)).required(),
	location: reportLocationValidatorSchema.required(),
	description: yup.string().max(1000),
	reportedBy: yup.string().required(),
});

module.exports.reportBodyValidator = validateRequest(reportValidatorSchema);

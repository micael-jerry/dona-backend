const yup = require('yup');
const { REPORT_TYPE, LOCATION_TYPE } = require('../../model/types/report.type');

const reportValidatorSchema = yup.object().shape({
	type: yup.string().oneOf(Object.values(REPORT_TYPE)).required(),
	location: yup
		.object()
		.shape({
			type: yup.string().oneOf(Object.values(LOCATION_TYPE)).required(),
			coordinates: yup.array().of(yup.number().required()).length(2).required(),
		})
		.required(),
	description: yup.string().max(1000),
});

module.exports.reportValidatorSchema = reportValidatorSchema;

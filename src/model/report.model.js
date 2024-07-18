const mongoose = require('mongoose');
const { REPORT_TYPE, LOCATION_TYPE } = require('./types/report.type');

const LocationSchema = mongoose.Schema({
	type: {
		type: String,
		enum: Object.values(LOCATION_TYPE),
		required: true,
	},
	coordinates: {
		type: [Number], // [x, y] | [longitude, latitude]
		required: true,
	},
});

const ReportSchema = mongoose.Schema(
	{
		type: {
			type: String,
			enum: Object.values(REPORT_TYPE),
			required: true,
		},
		location: {
			type: LocationSchema,
			required: true,
		},
		description: {
			type: String,
		},
		reportedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

ReportSchema.index('2dsphere');

module.exports.ReportModel = mongoose.model('report', ReportSchema);

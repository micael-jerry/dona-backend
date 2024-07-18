const { ReportModel } = require('../model/report.model');

module.exports.getAll = async () => {
	return ReportModel.find({}, { location: { _id: 0 } });
};

module.exports.getById = async id => {
	return ReportModel.findById(id);
};

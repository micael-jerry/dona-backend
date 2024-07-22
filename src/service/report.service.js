const dayjs = require('dayjs');
const { ReportModel } = require('../model/report.model');

module.exports.getAll = async date => {
	let predicate = {};
	const arg = { __v: 0, location: { _id: 0 } };
	if (date === 'now') {
		predicate = {
			createdAt: {
				$gte: dayjs().startOf('day').toDate(),
				$lte: dayjs().endOf('day').toDate(),
			},
		};
	}
	if (dayjs(date, 'YYYY-MM-DD', true).isValid()) {
		predicate = {
			createdAt: {
				$gte: dayjs(date).startOf('day').toDate(),
				$lte: dayjs(date).endOf('day').toDate(),
			},
		};
	}
	return ReportModel.find(predicate, arg);
};

module.exports.getById = async id => {
	return ReportModel.findById(id);
};

module.exports.save = async (userId, { type, location, description }) => {
	return await ReportModel.create({ type, location, description, reportedBy: userId });
};

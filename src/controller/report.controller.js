const { StatusCodes } = require('http-status-codes');
const { getAll, getById } = require('../service/report.service');

module.exports.getAllReports = (req, res) => {
	getAll()
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.BAD_REQUEST).json(e);
		});
};

module.exports.getReportById = (req, res) => {
	getById(req.params.report_id)
		.then(r => res.status(StatusCodes.OK).json(r))
		.catch(e => {
			console.log(e);
			res.status(StatusCodes.BAD_REQUEST).json(e);
		});
};

const { TEST_USER_ONE, TEST_USER_TWO } = require('./test.utils.user');

module.exports.TEST_REPORT_ONE = {
	_id: '6699431f3e65a2594294af0f',
	type: 'POLICE',
	location: {
		type: 'Point',
		coordinates: [47.523514, -18.906088],
	},
	description: 'Police spotted near Analakely.',
	reportedBy: TEST_USER_ONE._id,
};

module.exports.TEST_REPORT_TWO = {
	_id: '669943373e65a2594294af10',
	type: 'POLICE',
	location: {
		type: 'Point',
		coordinates: [47.522352, -18.890026],
	},
	description: 'Police spotted near Ankorondrano.',
	reportedBy: TEST_USER_TWO._id,
};

module.exports.TEST_REPORT_THREE = {
	_id: '6699434d3e65a2594294af11',
	type: 'POLICE',
	location: {
		type: 'Point',
		coordinates: [47.533568, -18.896257],
	},
	description: 'Police spotted near Andravoahangy.',
	reportedBy: TEST_USER_ONE._id,
};

module.exports.TEST_REPORT_FOUR = {
	_id: '6699435b3e65a2594294af12',
	type: 'POLICE',
	location: {
		type: 'Point',
		coordinates: [47.523059, -18.917757],
	},
	description: 'Police spotted near Anosy.',
	reportedBy: TEST_USER_TWO._id,
};

module.exports.TEST_REPORT_FIVE = {
	_id: '669943673e65a2594294af13',
	type: 'POLICE',
	location: {
		type: 'Point',
		coordinates: [47.528864, -18.911351],
	},
	description: 'Police spotted near Ambohijatovo.',
	reportedBy: TEST_USER_ONE._id,
};

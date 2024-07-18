const mongoose = require('mongoose');

module.exports = {
	async up(db) {
		const reportOne = {
			_id: new mongoose.Types.ObjectId('6699431f3e65a2594294af0f'),
			type: 'POLICE',
			location: {
				type: 'Point',
				coordinates: [47.523514, -18.906088],
			},
			description: 'Police spotted near Analakely.',
			reportedBy: new mongoose.Types.ObjectId('6677d90a45d1db9a3bd0ac8a'), // ID of userOne
		};

		const reportTwo = {
			_id: new mongoose.Types.ObjectId('669943373e65a2594294af10'),
			type: 'POLICE',
			location: {
				type: 'Point',
				coordinates: [47.522352, -18.890026],
			},
			description: 'Police spotted near Ankorondrano.',
			reportedBy: new mongoose.Types.ObjectId('6677d94645d1db9a3bd0ac8d'), // ID of userTwo
		};

		const reportThree = {
			_id: new mongoose.Types.ObjectId('6699434d3e65a2594294af11'),
			type: 'POLICE',
			location: {
				type: 'Point',
				coordinates: [47.533568, -18.896257],
			},
			description: 'Police spotted near Andravoahangy.',
			reportedBy: new mongoose.Types.ObjectId('6677d90a45d1db9a3bd0ac8a'), // ID of userOne
		};

		const reportFour = {
			_id: new mongoose.Types.ObjectId('6699435b3e65a2594294af12'),
			type: 'POLICE',
			location: {
				type: 'Point',
				coordinates: [47.523059, -18.917757],
			},
			description: 'Police spotted near Anosy.',
			reportedBy: new mongoose.Types.ObjectId('6677d94645d1db9a3bd0ac8d'), // ID of userTwo
		};

		const reportFive = {
			_id: new mongoose.Types.ObjectId('669943673e65a2594294af13'),
			type: 'POLICE',
			location: {
				type: 'Point',
				coordinates: [47.528864, -18.911351],
			},
			description: 'Police spotted near Ambohijatovo.',
			reportedBy: new mongoose.Types.ObjectId('6677d90a45d1db9a3bd0ac8a'), // ID of userOne
		};

		await db.collection('reports').insertMany([reportOne, reportTwo, reportThree, reportFour, reportFive]);
	},

	async down(db) {
		await db.collection('users').drop();
	},
};

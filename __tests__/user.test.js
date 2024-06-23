const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH, USERS_PATH } = require('./conf/path');
const {
	USER_ONE_EMAIL,
	USER_ONE_PASSWORD,
	USER_TWO_ID,
	USER_TWO_EMAIL,
	USER_TWO_PASSWORD,
} = require('./conf/test.utils');
const { connectDB, disconnectDB } = require('../src/config/db');
const { StatusCodes } = require('http-status-codes');

require('dotenv').config();

describe(`Test /users`, () => {
	beforeAll(async () => {
		await connectDB();
	});

	it('should return users list', async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: USER_ONE_EMAIL, password: USER_ONE_PASSWORD })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(`${USERS_PATH}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.length >= 2).toBe(true);
	});

	it('should return on user by id', async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: USER_ONE_EMAIL, password: USER_ONE_PASSWORD })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(`${USERS_PATH}/${USER_TWO_ID}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.email).toBe(USER_TWO_EMAIL);
	});

	it('should updated user', async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: USER_TWO_EMAIL, password: USER_TWO_PASSWORD })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.put(`${USERS_PATH}/${USER_TWO_ID}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.send({ bio: 'new bio' })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.bio).toEqual('new bio');
	});
	afterAll(async () => {
		await disconnectDB();
	});
});

const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH, USERS_PATH } = require('./conf/path');
const { USER_ONE_EMAIL, USER_ONE_PASSWORD, USER_TWO_ID, USER_TWO_EMAIL } = require('./conf/test.utils');
const { connectDB, disconnectDB } = require('../src/config/db');
const { StatusCodes } = require('http-status-codes');

require('dotenv').config();

describe(`Test /users`, () => {
	beforeAll(async () => {
		await connectDB();
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

	afterAll(async () => {
		await disconnectDB();
	});
});

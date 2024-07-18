const app = require('../app');
const request = require('supertest');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { REPORTS_PATH, AUTH_LOGIN_PATH } = require('./conf/path');
const { connectDB, disconnectDB } = require('../src/config/db');
const { TEST_USER_ONE } = require('./conf/utils/test.utils.user');
const { StatusCodes } = require('http-status-codes');
const { TEST_REPORT_ONE } = require('./conf/utils/test.utils.report');

require('dotenv').config();

describe(`${REPORTS_PATH} TESTS`, () => {
	beforeAll(async () => {
		await connectDB();
	});

	it(`GET ${REPORTS_PATH} should return reports list`, async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE.email, password: TEST_USER_ONE.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(`${REPORTS_PATH}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.length >= 5).toBe(true);
	});

	it(`GET ${REPORTS_PATH}/:report_id should return reports list`, async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE.email, password: TEST_USER_ONE.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(`${REPORTS_PATH}/${TEST_REPORT_ONE._id}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body).toEqual(TEST_REPORT_ONE);
	});

	afterAll(async () => {
		await disconnectDB();
	});
});

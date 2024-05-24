const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH } = require('./conf/path');
const { USER_ONE_EMAIL, USER_ONE_PASSWORD } = require('./conf/test.utils');
const { connectDB, disconnectDB } = require('../src/config/db');

require('dotenv').config()

describe(`POST ${AUTH_LOGIN_PATH}`, () => {
	beforeAll(async () => {
		await connectDB();
	})

	it('should return token', async () => {
		const res = await request(app)
			.post(`${AUTH_LOGIN_PATH}`)
			.send({ email: USER_ONE_EMAIL, password: USER_ONE_PASSWORD})
			.expect('Content-Type', /json/)
			.expect(200);
		expect(res.statusCode).toBe(200);
		expect(res.body.token).not.toBeNull()
	})

	afterAll(async () => {
		await disconnectDB();
	})
})


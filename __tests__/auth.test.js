const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH, AUTH_SIGNUP_PATH, AUTH_WHOAMI_PATH } = require('./conf/path');
const { TEST_USER_ONE_EMAIL, TEST_USER_ONE_PASSWORD } = require('./conf/test.utils');
const { connectDB, disconnectDB } = require('../src/config/db');
const { StatusCodes } = require('http-status-codes');

require('dotenv').config();

const userTestCreate = {
	pseudo: 'user_test_create',
	email: 'user.test.create@example.com',
	password: 'userTestCreate',
	bio: 'user test create',
};

describe(`Test login and register`, () => {
	beforeAll(async () => {
		await connectDB();
	});

	it('should return token', async () => {
		const res = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE_EMAIL, password: TEST_USER_ONE_PASSWORD })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.token).not.toBeNull();
	});

	it('should return new user created', async () => {
		const res = await request(app)
			.post(AUTH_SIGNUP_PATH)
			.send(userTestCreate)
			.expect('Content-Type', /json/)
			.expect(StatusCodes.CREATED);
		expect(res.statusCode).toBe(StatusCodes.CREATED);
		expect(res.body.email).toEqual(userTestCreate.email);
		expect(res.body.pseudo).toEqual(userTestCreate.pseudo);
		expect(res.body.bio).toEqual(userTestCreate.bio);
	});

	it('should return Incorrect email', async () => {
		const res = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: 'email@email.com', password: 'password' })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.UNAUTHORIZED);
		expect(res.statusCode).toBe(StatusCodes.UNAUTHORIZED);
		expect(res.body.error_message).toEqual('Invalid email');
	});

	it('should return Invalid password', async () => {
		const res = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE_EMAIL, password: 'password' })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.UNAUTHORIZED);
		expect(res.statusCode).toBe(StatusCodes.UNAUTHORIZED);
		expect(res.body.error_message).toEqual('Invalid password');
	});

	it('should return logged user information', async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE_EMAIL, password: TEST_USER_ONE_PASSWORD })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(AUTH_WHOAMI_PATH)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.email).toBe(TEST_USER_ONE_EMAIL);
	});

	afterAll(async () => {
		await disconnectDB();
	});
});

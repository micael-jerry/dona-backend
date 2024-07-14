const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH, AUTH_SIGNUP_PATH, AUTH_WHOAMI_PATH } = require('./conf/path');
const { connectDB, disconnectDB } = require('../src/config/db');
const { StatusCodes } = require('http-status-codes');
const { TEST_USER_ONE } = require('./conf/test.utils');
const { format } = require('date-fns');

require('dotenv').config();

const userTestCreate = {
	pseudo: 'user_test_create',
	email: 'user.test.create@example.com',
	password: 'userTestCreate',
	lastname: 'User',
	firstname: 'Test Create',
	bio: 'user test create',
	birthday: new Date('2000-03-03'),
};

describe(`Test login and register`, () => {
	beforeAll(async () => {
		await connectDB();
	});

	it('should return token and role', async () => {
		const res = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE.email, password: TEST_USER_ONE.password })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.token).not.toBeNull();
		expect(res.body.role).toEqual('ADMIN');
	});

	it('should return new user created', async () => {
		const res = await request(app)
			.post(AUTH_SIGNUP_PATH)
			.send(userTestCreate)
			.expect('Content-Type', /json/)
			.expect(StatusCodes.CREATED);
		expect(res.statusCode).toBe(StatusCodes.CREATED);
		const expected = {
			pseudo: userTestCreate.pseudo,
			email: userTestCreate.email,
			role: 'USER',
			lastname: userTestCreate.lastname,
			firstname: userTestCreate.firstname,
			bio: userTestCreate.bio,
			birthday: format(userTestCreate.birthday, 'yyyy-MM-dd'),
		};
		const result = {
			pseudo: res.body.pseudo,
			email: res.body.email,
			role: res.body.role,
			lastname: res.body.lastname,
			firstname: res.body.firstname,
			bio: res.body.bio,
			birthday: format(res.body.birthday, 'yyyy-MM-dd'),
		};
		expect(result).toEqual(expected);
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
			.send({ email: TEST_USER_ONE.email, password: 'password' })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.UNAUTHORIZED);
		expect(res.statusCode).toBe(StatusCodes.UNAUTHORIZED);
		expect(res.body.error_message).toEqual('Invalid password');
	});

	it('should return logged user information', async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE.email, password: TEST_USER_ONE.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(AUTH_WHOAMI_PATH)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.email).toBe(TEST_USER_ONE.email);
	});

	afterAll(async () => {
		await disconnectDB();
	});
});

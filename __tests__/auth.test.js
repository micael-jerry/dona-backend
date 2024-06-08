const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH, AUTH_SIGNUP_PATH } = require('./conf/path');
const { USER_ONE_EMAIL, USER_ONE_PASSWORD } = require('./conf/test.utils');
const { connectDB, disconnectDB } = require('../src/config/db');
const { StatusCodes } = require('http-status-codes');

require('dotenv').config()

const userTestCreate = {
	pseudo: 'user_test_create',
	email: 'user.test.create@example.com',
	password: 'userTestCreate',
	bio: 'user test create',
}

describe(`Test login and register`, () => {
	beforeAll(async () => {
		await connectDB();
	})
		it('should return token', async () => {
			const res = await request(app)
				.post(AUTH_LOGIN_PATH)
				.send({ email: USER_ONE_EMAIL, password: USER_ONE_PASSWORD})
				.expect('Content-Type', /json/)
				.expect(200);
			expect(res.statusCode).toBe(StatusCodes.OK);
			expect(res.body.token).not.toBeNull()
		})

		it('should return new user created', async () => {
			const res = await request(app)
				.post(AUTH_SIGNUP_PATH)
				.send(userTestCreate)
				.expect('Content-Type', /json/)
				.expect(StatusCodes.CREATED);
			expect(res.statusCode).toBe(StatusCodes.CREATED);
			expect(res.body.email).toEqual(userTestCreate.email)
			expect(res.body.pseudo).toEqual(userTestCreate.pseudo)
			expect(res.body.bio).toEqual(userTestCreate.bio)
		});

	afterAll(async () => {
		await disconnectDB();
	})
})

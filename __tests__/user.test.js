const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { AUTH_LOGIN_PATH, USERS_PATH } = require('./conf/path');
const { connectDB, disconnectDB } = require('../src/config/db');
const { StatusCodes } = require('http-status-codes');
const { TEST_USER_ONE, TEST_USER_TWO } = require('./conf/utils/test.utils.user');
const dayjs = require('dayjs');

require('dotenv').config();

describe(`${USERS_PATH} TESTS`, () => {
	beforeAll(async () => {
		await connectDB();
	});

	it(`GET ${USERS_PATH} should return users list`, async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE.email, password: TEST_USER_ONE.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(`${USERS_PATH}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body.length >= 2).toBe(true);
	});

	it(`GET ${USERS_PATH}/:user_id should return on user by id`, async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_ONE.email, password: TEST_USER_ONE.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.get(`${USERS_PATH}/${TEST_USER_TWO._id}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		expect(res.body._id).toBe(TEST_USER_TWO._id);
		expect(res.body.email).toBe(TEST_USER_TWO.email);
		expect(res.body.role).toBe(TEST_USER_TWO.role);
	});

	it(`PUT ${USERS_PATH}/user_id should updated user`, async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_TWO.email, password: TEST_USER_TWO.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.put(`${USERS_PATH}/${TEST_USER_TWO._id}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.send({ lastname: 'new lastname', firstname: 'new firstname', bio: 'new bio', birthday: new Date('2001-01-01') })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.OK);
		expect(res.statusCode).toBe(StatusCodes.OK);
		const expected = {
			lastname: 'new lastname',
			firstname: 'new firstname',
			bio: 'new bio',
			birthday: dayjs('2001-01-01').format('YYYY-MM-DD'),
		};
		const result = {
			lastname: res.body.lastname,
			firstname: res.body.firstname,
			bio: res.body.bio,
			birthday: dayjs(res.body.birthday).format('YYYY-MM-DD'),
		};
		expect(result).toEqual(expected);
	});

	it(`PUT ${USERS_PATH}/user_id should return Unauthorized`, async () => {
		const logRes = await request(app)
			.post(AUTH_LOGIN_PATH)
			.send({ email: TEST_USER_TWO.email, password: TEST_USER_TWO.password })
			.expect(StatusCodes.OK);

		const res = await request(app)
			.put(`${USERS_PATH}/${TEST_USER_ONE._id}`)
			.set({ Authorization: `Bearer ${logRes.body.token}` })
			.send({ bio: 'new bio' })
			.expect('Content-Type', /json/)
			.expect(StatusCodes.UNAUTHORIZED);
		expect(res.statusCode).toBe(StatusCodes.UNAUTHORIZED);
	});

	afterAll(async () => {
		await disconnectDB();
	});
});

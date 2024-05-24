const { describe, it, expect, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { HELLO_WORLD_PATH } = require('./conf/path');

describe(`GET ${HELLO_WORLD_PATH}`, () => {
	afterAll(() => {
		console.log("VITA");
	})

	it('should return hello world message', async () => {
		const res = await request(app)
			.get(`${HELLO_WORLD_PATH}`)
			.expect('Content-Type', /json/)
			.expect(200);
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toBe('HELLO WORLD ✋😎');
	})
})


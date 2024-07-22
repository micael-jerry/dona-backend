const { describe, it, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../app');
const { HELLO_WORLD_PATH } = require('./conf/path');
const { StatusCodes } = require('http-status-codes');

describe(`GET ${HELLO_WORLD_PATH}`, () => {
	it('should return hello world message', async () => {
		const res = await request(app).get(HELLO_WORLD_PATH).expect('Content-Type', /json/).expect(200);
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toBe('HELLO WORLD ✋😎');
	});

	it('should return not found message', async () => {
		const res = await request(app).get('/anything').expect('Content-Type', /json/).expect(StatusCodes.NOT_FOUND);
		expect(res.statusCode).toBe(StatusCodes.NOT_FOUND);
		expect(res.body.error_message).toEqual('Not Found 😥😥😥');
	});
});

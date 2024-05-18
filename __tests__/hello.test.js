const { describe, it, expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../index')

// TODO: STOP database connection and server listening after testing --detectOpenHandles (jest)

describe('GET /helloworld', () => {
	it('should return hello world message', async () => {
		const res = await request(app)
			.get('/helloworld')
			.expect('Content-Type', /json/)
			.expect(200);
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toBe('HELLO WORLD ✋😎');
	})
})

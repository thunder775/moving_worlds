const {app} = require('./app');
const request = require('supertest');

async function runTests() {
    test('should return a 6 char short code', async () => {
        const res = await request(app).get('/?url=rahul@gmail.com');
        expect(res.data.length).toBe(6)
    });
}

runTests()
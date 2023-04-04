'use strict';

const supertest = require('supertest');

const app = require('./server.js');
const request = supertest(app);

describe('As a user I want to send a request and get an uncapitalized message', () => {

  test('Should return nate when sending a GET request to /capitalize-me', async () => {
    let response = await request.get('/uncapitalize-me?message=Nate');
    expect(response.text).toEqual('nate');
  });
});
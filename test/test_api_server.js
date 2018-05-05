'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const mongoose = require('mongoose');
const faker = require('faker');
const {Event} = require('../app_api/models/model_tasting_event');
const {TastingNote} = require('../app_api/models/model_tasting_note');
const {User} = require('../app_api/models/model_user');

// Start/Stop server WITH testing code in place.
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

// middlewares
chai.use(chaiHttp);

// helper functions.
function createUser() {
  return {
    email: 'joe@test.com',
    password: '123'
  }
}

function tearDownDb() {
  console.warn('Deleting database');
  return mongoose.connection.dropDatabase();
}

// tests
describe('API Server', () => {

  // API test strategy - test_api_server.js:
  //   1) Make request to API endpoints.
  //   2) Inspect response object and prove has right code and have
  //   right keys in response object.

  // If we didn't return the runServer promise here,
  // there's a possibility of a race condition where our tests start
  // running before our server has started.
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });

  // beforeEach(function() {
  //   return seedBlogPostData();
  // });

  afterEach(function() {
    return tearDownDb();
  });

  // Close our server at the end of these tests.
  //
  // Otherwise, if we add another test module that also has a `before` block
  // that starts our server, it will cause an error because the
  // server would still be running from the previous tests.
  after(function() {
    return closeServer();
  });


  // For Mocha tests, when we're dealing with asynchronous operations,
  // we must either return a Promise object or else call a `done` callback
  // at the end of the test. The `chai.request(server).get...` call is asynchronous
  // and returns a Promise, so we just return it.

  // Make POST request to '/api/signup'
  it('should create user on POST to /api/signup', function() {

    const newUser = createUser();

    return chai.request(app)
       .post('/api/signup')
       .send(newUser)
       .then(function(res) {
         expect(res).to.have.status(201);
         expect(res).to.be.json;
         expect(res.body).to.be.a('object');
         expect(res.body).to.include.keys('token');
         expect(res.body.token).to.not.be.null;
       });
  });


  // Make POST request to '/api/signup'
  it('should create user on POST to /api/signin', function() {

    const newUser = createUser();

    return chai.request(app)
       .post('/api/signup')
       .send(newUser)
       .then(function(res) {

         expect(res).to.have.status(201);
         expect(res).to.be.json;
         expect(res.body).to.be.a('object');
         expect(res.body).to.include.keys('token');
         expect(res.body.token).to.not.be.null;

          return chai.request(app)
             .post('/api/signin')
             .send({
               email: newUser.email,
               password: newUser.password
             })
             .then(function(res) {
               expect(res).to.have.status(200);
               expect(res).to.be.json;
               expect(res.body).to.be.a('object');
               expect(res.body).to.include.keys('token');
               expect(res.body.token).to.not.be.null;
             });
       });

  });

});
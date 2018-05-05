'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// // Start server without testing code in place.
// const app = require('../server');

// Start/Stop server WITH testing code in place.
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

// middlewares
chai.use(chaiHttp);

// tests
describe('APP Server', () => {

  // HTML test strategy - test_app_server.js:
  //  1) Make request to content server/view endpoints.
  //  2) Confirm response (HTML) is sent with 200 status code.

  // If we didn't return the runServer promise here,
  // there's a possibility of a race condition where our tests start
  // running before our server has started.
  before(function() {
    return runServer(TEST_DATABASE_URL);
  });

  after(function() {
    return closeServer();
  });

  // for Mocha tests, when we're dealing with asynchronous operations,
  // we must either return a Promise object or else call a `done` callback
  // at the end of the test. The `chai.request(server).get...` call is asynchronous
  // and returns a Promise, so we just return it.

  it('should load index.html on GET to root /', () => {
    return chai.request(app)
      .get('/')
      .then( (res) => {
        expect(res).to.have.status(200);
      })
  });

  // Make HTML/Content Server request to '/signin'
  it('should load signin.html on GET /signin', function() {
    return chai.request(app)
       .get('/signin')
       .then(function(res) {
         expect(res).to.have.status(200);
       });
  });

  // Make HTML/Content Server request to '/signup'
  it('should load signup.html on GET /signup', function() {
    return chai.request(app)
       .get('/signup')
       .then(function(res) {
         expect(res).to.have.status(200);
       });
  });

  // Make HTML/Content Server request to '/events'
  it('should load tasting_events_list.html on GET /events', function() {
    return chai.request(app)
       .get('/events')
       .then(function(res) {
         expect(res).to.have.status(200);

       });
  });

  // Make HTML/Content Server request to '/events/new'
  it('should load tasting_events_list.html on GET /events/new', function() {
    return chai.request(app)
       .get('/events/new')
       .then(function(res) {
         expect(res).to.have.status(200);
       });
  });

  // Make HTML/Content Server request to '/events/new'
  it('should load tasting_events_list.html on GET /tastings/new', function() {
    return chai.request(app)
       .get('/tastings/new')
       .then(function(res) {
         expect(res).to.have.status(200);
       });
  });

  // Make HTML/Content Server request to '/searchresults'
  it('should load tasting_events_list.html on GET /events/new', function() {
    return chai.request(app)
       .get('/searchresults')
       .then(function(res) {
         expect(res).to.have.status(200);
       });
  });

});
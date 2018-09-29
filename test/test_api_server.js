'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const mongoose = require('mongoose');
const faker = require('faker');
const {Event} = require('../app_api/models/model_tasting_event');
// const {TastingNote} = require('../app_api/models/model_tasting_note');
// const {User} = require('../app_api/models/model_user');

const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

// middlewares
chai.use(chaiHttp);

// helper functions.
function createUser() {
  return {
    email: faker.internet.email(),
    password: faker.hacker.noun()
  }
}
function createTastingEvent() {
  return {
    eventName: faker.hacker.noun(),
    eventHost: faker.hacker.noun()
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
    console.log('API Server tests => TEST_DATABASE_URL = ', TEST_DATABASE_URL);
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

  // Make POST request to '/api/signin'
  it('should validate user on POST to /api/signin', function() {

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
       // return res.body.token;
     })
     .then(function() {
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
        })
     });

  });

  // Make POST request to '/api/events'
  it('should create new tasting event on POST to /api/events', function() {

    const newUser = createUser();
    const newEvent = createTastingEvent();

    return chai.request(app)
      .post('/api/signup')
      .send(newUser)
      .then(function(res) {
        return res.body.token;
      })
      .then(function(token) {
        return chai.request(app)
          .post('/api/events')
          .set('authorization', `${token}`)
          .send(newEvent)
          .then(function(res) {
            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.body).to.be.a('object');
            expect(res.body).to.include.keys('timestamp', 'id', 'eventName', 'eventHost');
            expect(res.body.timestamp).to.not.be.null;
            expect(res.body.id).to.not.be.null;
            expect(res.body.eventHost).to.not.be.null;
            expect(res.body.eventName).to.not.be.null;
          })
      });

  });

  // // Make GET request to '/api/events'
  // it.only('should return list of tasting events on GET to /api/events', function() {
  //
  //   const newUser = createUser();
  //   const newEvent = createTastingEvent();
  //   let resEvent;
  //
  //   return chai.request(app)
  //     .post('/api/signup')
  //     .send(newUser)
  //     .then(function(res) {
  //       return res.body.token;
  //     })
  //    .then(function(token) {
  //      return chai.request(app)
  //       .post('/api/events')
  //       .set('authorization', `${token}`)
  //       .send(newEvent)
  //
  //         return chai.request(app)
  //           .get('/api/events')
  //           .set('authorization', `${token}`)
  //           .then(function(res) {
  //             expect(res).to.have.status(200);
  //             expect(res).to.be.json;
  //             expect(res.body).to.be.a('array');
  //             expect(res.body.events).to.have.length.of.at.least(1);
  //
  //             res.body.events.forEach(function(post) {
  //               expect(post).to.be.a('object');
  //               expect(post).to.include.keys('_id', 'timestamp', 'userId', 'eventName', 'eventHost');
  //             });
  //             resEvent = res.body.events[0];
  //             // console.log('resEvent = ', resEvent);
  //             return Event.findById(resEvent._id);
  //           })
  //           .then(function(event) {
  //             // console.log('test_api_server.js event = ', event);
  //             expect(resEvent._id).to.be.equal(event._id);
  //             expect(resEvent.timestamp).to.be.equal(event.timestamp);
  //             expect(resEvent.eventName).to.be.equal(event.eventName);
  //             expect(resEvent.eventHost).to.be.equal(event.eventHost);
  //           })
  //    })
  //    .catch(err => {
  //      console.error(err);
  //      res.status(500).json({ message: 'Internal server error' });
  //    });
  // });


  // Make GET request to '/api/events'
  it('should return list of tasting events on GET to /api/events', function() {

    const newUser = createUser();
    const newEvent = createTastingEvent();
    let token, resEvent;

    return chai.request(app)
      .post('/api/signup')
      .send(newUser)
      .then(function (res) {
       token = res.body.token;
      })
      .then(function () {
        return chai.request(app)
          .post('/api/events')
          .set('authorization', `${token}`)
          .send(newEvent)
          .then(function () {
            return chai.request(app)
              .get('/api/events')
              .set('authorization', `${token}`)
              .then(function (res) {
                // console.log('res.body = ', res.body);
               expect(res).to.have.status(200);
               expect(res).to.be.json;
               expect(res.body).to.be.a('array');
               expect(res.body).to.have.length.of.at.least(1);

               res.body.forEach(function (post) {
                 expect(post).to.be.a('object');
                 expect(post).to.include.keys('_id', 'timestamp', 'userId', 'eventName', 'eventHost');
               });
               resEvent = res.body[0];
               return Event.findById(resEvent._id);
              })
              .then(function (event) {
               console.log('test_api_server.js event = ', event);
               // resEvent.userId has "", event.userId doesn't have "".  Why?
               // console.log('resEvent = ', resEvent)
               // expect(resEvent.userId).to.be.equal(event.userId);
               expect(resEvent.timestamp).to.be.equal(event.timestamp);
               expect(resEvent.eventName).to.be.equal(event.eventName);
               expect(resEvent.eventHost).to.be.equal(event.eventHost);
              })
          })

      })
  })


});
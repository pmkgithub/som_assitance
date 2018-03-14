'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect;

// middlewares
chai.use(chaiHttp);

// tests
describe('Server', () => {

  it('should load index.html on GET to root /', () => {
    return chai.request(app)
      .get('/')
      .then( (res) => {
        expect(res).to.have.status(200);
      })
  });

});
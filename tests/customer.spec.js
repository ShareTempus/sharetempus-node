import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

const ShareTempus = require('./config');

describe('Customers', () => {
  let stubedCreate;
  let stubedRetrieve;
  const customer = {
    email: 'email@test.com',
    legalEntity: {
      type: 'individual',
      firstName: 'Trenton',
      lastName: 'Large',
      birthdate: 637124400000,
      ssnLast4: '1234',
      address: {
        city: 'New York City',
        country: 'US',
        line1: 'East 169th Street',
        line2: 'Apt. 2A Bronx',
        postalCode: '10456',
        state: 'New York',
      },
    },
  };

  beforeEach(() => {
    stubedCreate = sinon.stub(ShareTempus.customers, 'create');
    stubedRetrieve = sinon.stub(ShareTempus.customers, 'retrieve');
  });

  afterEach(() => {
    stubedCreate.restore();
    stubedRetrieve.restore();
  });

  it('should have create method', () => {
    expect(ShareTempus.customers.create).to.exist;
  });

  it('should have retrieve method', () => {
    expect(ShareTempus.customers.retrieve).to.exist;
  });

  it('should create a customers', () => {
    ShareTempus.customers.create(customer);
    expect(stubedCreate).to.have.been.calledOnce;
    expect(stubedCreate).to.have.been.calledWith(customer);
  });

  it('should retrieve a customer', () => {
    ShareTempus.customers.retrieve({ customer: 'cus_oC3ImnDw1Iqw1b3sx5CITtbc' });
    expect(stubedRetrieve).to.have.been.calledOnce;
    expect(stubedRetrieve).to.have.been.calledWith({ customer: 'cus_oC3ImnDw1Iqw1b3sx5CITtbc' });
  });
});

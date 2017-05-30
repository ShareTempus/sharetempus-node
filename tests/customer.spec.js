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
  let stubedUpdate;
  let stubedFind;
  let stubedRetrieve;

  beforeEach(() => {
    stubedCreate = sinon.stub(ShareTempus.customers, 'create');
    stubedUpdate = sinon.stub(ShareTempus.customers, 'update');
    stubedFind = sinon.stub(ShareTempus.customers, 'find');
    stubedRetrieve = sinon.stub(ShareTempus.customers, 'retrieve');
  });

  afterEach(() => {
    stubedCreate.restore();
    stubedUpdate.restore();
    stubedFind.restore();
    stubedRetrieve.restore();
  });

  it('should have create method', () => {
    expect(ShareTempus.customers.create).to.exist;
  });

  it('should have update method', () => {
    expect(ShareTempus.customers.update).to.exist;
  });

  it('should have find method', () => {
    expect(ShareTempus.customers.find).to.exist;
  });

  it('should have retrieve method', () => {
    expect(ShareTempus.customers.retrieve).to.exist;
  });

  it('should create a customers', () => {
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

    ShareTempus.customers.create(customer);
    expect(stubedCreate).to.have.been.calledOnce;
    expect(stubedCreate).to.have.been.calledWith(customer);
  });

  it('should update a customers', () => {
    const customer = {
      id: 'cus_dD2r2Ib8kPMhg5C3YvlqRwb7',
      legalEntity: {
        address: {
          line2: 'Apt. 1A Bronx',
        },
      },
    };

    ShareTempus.customers.update(customer);
    expect(stubedUpdate).to.have.been.calledOnce;
    expect(stubedUpdate).to.have.been.calledWith(customer);
  });

  it('should find a customer', () => {
    const customer = { email: 'email@test.com' };
    ShareTempus.customers.find(customer);
    expect(stubedFind).to.have.been.calledOnce;
    expect(stubedFind).to.have.been.calledWith(customer);
  });

  it('should retrieve a customer', () => {
    const customer = { customer: 'cus_oC3ImnDw1Iqw1b3sx5CITtbc' };
    ShareTempus.customers.retrieve(customer);
    expect(stubedRetrieve).to.have.been.calledOnce;
    expect(stubedRetrieve).to.have.been.calledWith(customer);
  });
});

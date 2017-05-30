import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

const ShareTempus = require('./config');

describe('Policies', () => {
  let stubedCreate;
  let stubedUpdate;
  let stubedQuote;
  let stubedRetrieve;

  beforeEach(() => {
    stubedQuote = sinon.stub(ShareTempus.policies, 'quote');
    stubedCreate = sinon.stub(ShareTempus.policies, 'create');
    stubedUpdate = sinon.stub(ShareTempus.policies, 'update');
    stubedRetrieve = sinon.stub(ShareTempus.policies, 'retrieve');
  });

  afterEach(() => {
    stubedCreate.restore();
    stubedUpdate.restore();
    stubedQuote.restore();
    stubedRetrieve.restore();
  });

  it('should have quote method', () => {
    expect(ShareTempus.policies.quote).to.exist;
  });

  it('should have create method', () => {
    expect(ShareTempus.policies.create).to.exist;
  });

  it('should have update method', () => {
    expect(ShareTempus.policies.update).to.exist;
  });

  it('should have retrieve method', () => {
    expect(ShareTempus.policies.retrieve).to.exist;
  });

  it('should quote a policy', () => {
    const policy = {
      customer: 'cus_dD2r2Ib8kPMhg5C3YvlqRwb7',
      currency: 'usd',
      startDate: 1474473004564,
      endDate: 1475473004564,
      product: {
        name: 'iPhone 7',
        category: 'Electronics',
        subcategory: 'Cell Phones & Accessories',
        manufacturer: 'Apple',
        value: 64900,
      },
      description: 'Policy for iPhone 7',
      metadata: {},
    };
    ShareTempus.policies.quote(policy);
    expect(stubedQuote).to.have.been.calledOnce;
    expect(stubedQuote).to.have.been.calledWith(policy);
  });

  it('should create a policy', () => {
    const policy = { token: 'tok_Q1gBkjj8wdAkOg0pj8bf8uQO' };

    ShareTempus.policies.create(policy);
    expect(stubedCreate).to.have.been.calledOnce;
    expect(stubedCreate).to.have.been.calledWith(policy);
  });

  it('should update a policy', () => {
    const policy = {
      id: 'pol_Re2UTmiZNd6hvn3eklRNOWET',
      description: 'New description for Policy for iPhone 7',
    };

    ShareTempus.policies.update(policy);
    expect(stubedUpdate).to.have.been.calledOnce;
    expect(stubedUpdate).to.have.been.calledWith(policy);
  });

  it('should retrieve a policy', () => {
    const policy = { policy: 'pol_Re2UTmiZNd6hvn3eklRNOWET' };
    ShareTempus.policies.retrieve(policy);
    expect(stubedRetrieve).to.have.been.calledOnce;
    expect(stubedRetrieve).to.have.been.calledWith(policy);
  });
});

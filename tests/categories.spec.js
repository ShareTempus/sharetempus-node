import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

const ShareTempus = require('./config');

describe('Categories', () => {
  let stubedRetrieve;

  beforeEach(() => {
    stubedRetrieve = sinon.stub(ShareTempus.categories, 'retrieve');
  });

  afterEach(() => {
    stubedRetrieve.restore();
  });

  it('should have retrieve method', () => {
    expect(ShareTempus.categories.retrieve).to.exist;
  });

  it('should retrieve the categories', () => {
    ShareTempus.categories.retrieve();
    expect(stubedRetrieve).to.have.been.calledOnce;
  });
});

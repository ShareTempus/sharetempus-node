import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

const ShareTempus = require('./config');

describe('Events', () => {
  let stubedRetrieve;

  beforeEach(() => {
    stubedRetrieve = sinon.stub(ShareTempus.events, 'retrieve');
  });

  afterEach(() => {
    stubedRetrieve.restore();
  });

  it('should have retrieve method', () => {
    expect(ShareTempus.events.retrieve).to.exist;
  });

  it('should retrieve a event', () => {
    const event = { event: 'evt_oC3ImnDw1Iqw1b3sx5CITtbc' };
    ShareTempus.events.retrieve(event);
    expect(stubedRetrieve).to.have.been.calledOnce;
    expect(stubedRetrieve).to.have.been.calledWith(event);
  });
});

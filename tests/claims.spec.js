import { describe, it, beforeEach, afterEach } from 'mocha';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);
chai.use(sinonChai);

const ShareTempus = require('./config');

describe('Claims', () => {
  let stubedCreate;
  let stubedRetrieve;

  beforeEach(() => {
    stubedCreate = sinon.stub(ShareTempus.claims, 'create');
    stubedRetrieve = sinon.stub(ShareTempus.claims, 'retrieve');
  });

  afterEach(() => {
    stubedCreate.restore();
    stubedRetrieve.restore();
  });

  it('should have create method', () => {
    expect(ShareTempus.claims.create).to.exist;
  });

  it('should have retrieve method', () => {
    expect(ShareTempus.claims.retrieve).to.exist;
  });

  it('should create a claims', () => {
    const claim = {
      subject: 'iPhone 7 Damaged',
      type: 'damaged',
      content: 'My iPhone 7 fell and broke the screen',
      policy: {
        id: 'pol_PX7OhipGlRb4QcvOvklkreBv',
        ticket: 'ticket_ONVGqM1k',
      },
    };

    ShareTempus.claims.create(claim);
    expect(stubedCreate).to.have.been.calledOnce;
    expect(stubedCreate).to.have.been.calledWith(claim);
  });

  it('should retrieve a claim', () => {
    const claim = { claim: 'clm_NAlLt3lpam1THwijiL3nCyjR' };
    ShareTempus.claims.retrieve(claim);
    expect(stubedRetrieve).to.have.been.calledOnce;
    expect(stubedRetrieve).to.have.been.calledWith(claim);
  });
});

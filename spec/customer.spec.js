var ShareTempus = require('../lib/ShareTempus')('sk_test_wCPyemzK7r6ZYaiRkEqzNvFN');

describe("Customers", function() {

  it("Should be return a customer not found error", (done) => {
    ShareTempus.customers.retrieve({
      customer: 'cus_dD2r2Ib8kPMhg5C3YvlqRw'
    }, (err, customer) => {
      expect(err.type).toBe('STInvalidRequestError');
      expect(err.message).toBe('Customer not found');
      expect(customer).toBeUndefined();
      done();
    }).catch((err) => {
      expect(err.type).toBe('STInvalidRequestError');
      expect(err.message).toBe('Customer not found');
      done();
    });
  });

  it("Should update a customer", (done) => {
    ShareTempus.customers.update({
      id: 'cus_dD2r2Ib8kPMhg5C3YvlqRwb7',
      legalEntity: {
        ssnLast4: '4321'
      }
    }, (err, customer) => {
      expect(customer).not.toBeUndefined();
      expect(typeof customer).toBe('object');
      expect(customer.legalEntity.ssnLast4).toBe('4321');
      done();
    });
  });

  it("Should retrieve a customer", (done) => {
    ShareTempus.customers.retrieve({
      customer: 'cus_dD2r2Ib8kPMhg5C3YvlqRwb7'
    }, (err, customer) => {
      expect(customer).not.toBeUndefined();
      expect(typeof customer).toBe('object');
      expect(customer.email).toBe('customer@test.com');
      done();
    });
  });

});

var ShareTempus = require('../lib/ShareTempus')('sk_test_bHntEbTLiDkAj7wqptLDwgik');

describe("Customers", function() {

    it("Should be return a customer not found error", function(done) {
        ShareTempus.customers.retrieve({
            customer: 'cus_dD2r2Ib8kPMhg5C3YvlqRw'
        }, function(err, customer) {
            expect(err.type).toBe('STInvalidRequestError');
            expect(err.message).toBe('Customer not found');
            expect(customer).toBeUndefined();
            done();
        });
    });

    it("Should retrieve a customer", function(done) {
        ShareTempus.customers.retrieve({
            customer: 'cus_dD2r2Ib8kPMhg5C3YvlqRwb7'
        }, function(err, customer) {
            expect(customer).not.toBeUndefined();
            expect(typeof customer).toBe('object');
            expect(customer.email).toBe('customer@test.com');
            done();
        });
    });

});

var ShareTempus = require('../lib/ShareTempus')('sk_test_bHntEbTLiDkAj7wqptLDwgik');

describe("Categories", function() {

    it("Should retrieve the categories", function(done) {
        ShareTempus.categories.retrieve(function(err, categories) {
            expect(categories).not.toBeUndefined();
            expect(typeof categories).toBe('object');
            expect(categories['Toys and Games'].length).toBeGreaterThan(1);
            done();
        });
    });
});

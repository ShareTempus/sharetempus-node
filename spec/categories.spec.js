var ShareTempus = require('../lib/ShareTempus')('sk_test_wCPyemzK7r6ZYaiRkEqzNvFN');

describe("Categories", function() {

  it("Should retrieve the categories", (done) => {
    ShareTempus.categories.retrieve(function(err, categories) {
      expect(categories).not.toBeUndefined();
      expect(typeof categories).toBe('object');
      expect(categories['Toys and Games'].length).toBeGreaterThan(1);
      done();
    });
  });
});

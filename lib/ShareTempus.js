"use strict";

const utils = require('./Utils'),
      Categories = require('./models/Categories'),
      Customers = require('./models/Customers'),
      Policies = require('./models/Policies');

class ShareTempus {
    constructor(secretKey) {

        // set secret key
        utils.setKey(secretKey);

        // set models
        this.categories = new Categories();
        this.customers = new Customers();
        this.policies = new Policies();
    }
}

module.exports = function(secretKey) {
    return new ShareTempus(secretKey);
}

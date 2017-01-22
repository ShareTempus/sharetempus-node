"use strict";

const utils = require('./Utils'),
      Categories = require('./models/Categories'),
      Claims = require('./models/Claims'),
      Customers = require('./models/Customers'),
      Events = require('./models/Events'),
      Policies = require('./models/Policies');

class ShareTempus {
    constructor(secretKey) {

        // set secret key
        utils.setKey(secretKey);

        // set models
        this.categories = new Categories();
        this.claims = new Claims();
        this.customers = new Customers();
        this.events = new Events();
        this.policies = new Policies();
    }
}

module.exports = function(secretKey) {
    return new ShareTempus(secretKey);
}

const utils = require('./Utils');
const Categories = require('./models/Categories');
const Claims = require('./models/Claims');
const Customers = require('./models/Customers');
const Events = require('./models/Events');
const Policies = require('./models/Policies');
const Products = require('./models/Products');

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
    this.products = new Products();
  }
}

module.exports = secretKey => new ShareTempus(secretKey);

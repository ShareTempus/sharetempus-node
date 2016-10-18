<img src="https://travis-ci.org/ShareTempus/sharetempus-node.svg?branch=master"/>

# ShareTempus API for node.js

## Installation

`npm install sharetempus --save`

## Documentation

Documentation is available at http://docs.sharetempus.com

## API Overview

Every element is accessed via your `sharetempus` instance:

```js
var ShareTempus = require('sharetempus')('your sharetempus API key');
// ShareTempus.{ ELEMENT_NAME }.{ METHOD_NAME }
```

Every element method accepts an optional callback as the last argument:

```js
ShareTempus.customers.create({
    "email": "email@test.com",
    "legalEntity": {
        "type": "individual",
        "firstName": "Trenton",
        "lastName": "Large",
        "birthdate": 637124400000,
        "ssnLast4": "1234",
        "address": {
            "city": "New York City",
            "country": "US",
            "line1": "East 169th Street",
            "line2": "Apt. 2A Bronx",
            "postalCode": "10456",
            "state": "New York"
        }
    }
}, function(error, customer) {
    if(!error) {
        console.log(customer);
    }
});
```

Additionally, every element method returns a promise, so you don't have to use the regular callback. E.g.

```js
ShareTempus.customers.create({
    "email": "email@test.com",
    "legalEntity": {
        "type": "individual",
        "firstName": "Trenton",
        "lastName": "Large",
        "birthdate": 637124400000,
        "ssnLast4": "1234",
        "address": {
            "city": "New York City",
            "country": "US",
            "line1": "East 169th Street",
            "line2": "Apt. 2A Bronx",
            "postalCode": "10456",
            "state": "New York"
        }
    }
}).then(function(customer) {
    console.log(customer);
}).catch(function(error) {
    console.log(error);
});
```

## Development

Run the tests using [`npm`](https://www.npmjs.com/):

```bash
$ npm install
$ npm test
```

"use strict";

const ShareTempusMethod = require('../ShareTempusMethod');

class Customers extends ShareTempusMethod {
    constructor() {

        super({
            create: {
                method  : 'POST',
                path    : '/customers/create'
            },
            
            retrieve: {
                method  : 'GET',
                path    : '/customers/{customer}',
                params  : ['customer']
            }
        });
    }
}

module.exports = Customers;

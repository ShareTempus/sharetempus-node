"use strict";

const ShareTempusMethod = require('../ShareTempusMethod');

class Customers extends ShareTempusMethod {
    constructor() {

        super({
            create: {
                method  : 'POST',
                path    : '/customers/create'
            },

            update: {
                method  : 'POST',
                path    : '/customers/update'
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

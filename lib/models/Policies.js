"use strict";

const ShareTempusMethod = require('../ShareTempusMethod');

class Policies extends ShareTempusMethod {
    constructor() {

        super({
            quote: {
                method  : 'POST',
                path    : '/policies/quote'
            },

            create: {
                method  : 'POST',
                path    : '/policies/create'
            },
            
            retrieve: {
                method  : 'GET',
                path    : '/policies/{policy}',
                params  : ['policy']
            }
        });
    }
}

module.exports = Policies;

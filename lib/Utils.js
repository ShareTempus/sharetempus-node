'use strict';

class Utils {

    constructor() {
        this.key = undefined;
    }

    setKey(secretKey) {
        this.key = 'Basic ' + new Buffer(secretKey + ':').toString('base64');
    }

    getKey() {
        return this.key;
    }
}

let utils = new Utils()

module.exports = utils;

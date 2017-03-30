"use strict";

var utils = require("./Utils"),
request = require("request");

const DEFAULT_HOST = 'http://api.sharetempus.com/v1';

class ShareTempusMethod {
  constructor(methods) {
    for(let key in methods) {
      this[key] = this.method.bind(key, methods[key]);
    }
  }
  method() {

    let args = [].slice.call(arguments);
    let spec = JSON.parse(JSON.stringify(args[0]));
    let callback = typeof args[args.length - 1] === 'function' && args.pop();
    let body = typeof args[args.length - 1] === 'object' && args.pop();

    if(spec.params) {
      for(let i = 0, len = spec.params.length; i < len; i++) {
        if(body && body[spec.params]) {
          spec.path = spec.path.replace('{' + spec.params[i] + '}', body[spec.params]);
        }
      }
    }

    let requestData = {
      url     : DEFAULT_HOST + spec.path,
      method  : spec.method,
      json    : true,
      headers : { 'Authorization': utils.getKey() },
      body    : body
    }

    return new Promise((resolve, reject) => {
      request(requestData, (err, response, body) => {

        let error = err || body.error;

        if(callback) {
          !error ? callback(undefined, body) : callback(error, undefined);
        }

        !error ? resolve(body) : reject(error);
      });
    })
  }
}

module.exports = ShareTempusMethod;

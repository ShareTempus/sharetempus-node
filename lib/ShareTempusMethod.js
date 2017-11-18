const request = require('request');
const utils = require('./Utils');

const DEFAULT_HOST = 'https://api.sharetempus.com/v1';

class ShareTempusMethod {
  constructor(methods) {
    for (const key in methods) {
      this[key] = this.method.bind(key, methods[key]);
    }
  }
  method(...args) {
    // const args = [].slice.call(arguments);
    const spec = Object.assign({}, args[0]);
    const callback = typeof args[args.length - 1] === 'function' && args.pop();
    const body = typeof args[args.length - 1] === 'object' && args.pop();

    if (spec.params) {
      for (let i = 0, len = spec.params.length; i < len; i += 1) {
        if (body && body[spec.params]) {
          spec.path = spec.path.replace(`{${spec.params[i]}}`, body[spec.params]);
        }
      }
    }

    const requestData = {
      url: `${DEFAULT_HOST}${spec.path}`,
      method: spec.method,
      json: true,
      headers: { Authorization: utils.getKey() },
      body,
    };

    return new Promise((resolve, reject) => {
      request(requestData, (err, response, result) => {
        const error = err || result.error;

        if (!error) {
          if (callback) {
            callback(undefined, result);
          }
          resolve(result);
        } else {
          if (callback) {
            callback(error, undefined);
          }
          reject(error);
        }
      });
    });
  }
}

module.exports = ShareTempusMethod;

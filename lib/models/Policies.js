const ShareTempusMethod = require('../ShareTempusMethod');

class Policies extends ShareTempusMethod {
  constructor() {
    super({
      quote: {
        method: 'POST',
        path: '/policies/quote',
      },

      create: {
        method: 'POST',
        path: '/policies/create',
      },

      update: {
        method: 'POST',
        path: '/policies/update',
      },

      retrieve: {
        method: 'GET',
        path: '/policies/{policy}',
        params: ['policy'],
      },
    });
  }
}

module.exports = Policies;

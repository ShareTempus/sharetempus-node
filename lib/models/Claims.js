const ShareTempusMethod = require('../ShareTempusMethod');

class Claims extends ShareTempusMethod {
  constructor() {
    super({
      create: {
        method: 'POST',
        path: '/claims/create',
      },

      retrieve: {
        method: 'GET',
        path: '/claims/{claim}',
        params: ['claim'],
      },
    });
  }
}

module.exports = Claims;

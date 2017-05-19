const ShareTempusMethod = require('../ShareTempusMethod');

class Events extends ShareTempusMethod {
  constructor() {
    super({
      retrieve: {
        method: 'GET',
        path: '/events/{event}',
        params: ['event'],
      },
    });
  }
}

module.exports = Events;

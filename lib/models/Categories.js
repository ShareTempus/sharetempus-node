const ShareTempusMethod = require('../ShareTempusMethod');

class Categories extends ShareTempusMethod {
  constructor() {
    super({
      retrieve: {
        method: 'GET',
        path: '/categories',
      },
    });
  }
}

module.exports = Categories;

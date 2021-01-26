const ShareTempusMethod = require('../ShareTempusMethod');

class Products extends ShareTempusMethod {
  constructor() {
    super({
      fetch: {
        method: 'POST',
        path: '/products',
      },
    });
  }
}

module.exports = Products;

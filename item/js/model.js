var m = require('mithril');

module.exports = {
  getItems: function() {
    return m.request({
      method: 'GET',
      url: 'https://gist.githubusercontent.com/mtwtkman/a5df6ac4d9c6c0f233e4/raw'
    });
  }
}

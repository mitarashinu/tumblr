var m = require('mithril');

module.exports = {
  controller: function() {
    return {value: 'hoge'};
  },
  view: function(ctrl) {
    return m('h1', ctrl.value);
  }
}

var m = require('mithril');

module.exports = {
  controller: function() {
    return {value: 'earth'};
  },
  view: function(ctrl) {
    return m('h1', ctrl.value);
  }
}

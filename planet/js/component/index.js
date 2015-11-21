var m = require('mithril');

module.exports = {
  controller: function() {
    return {value: 'planet'};
  },
  view: function(ctrl) {
    return m('h1', ctrl.value);
  }
}

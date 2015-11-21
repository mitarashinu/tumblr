var m = require('mithril');

module.exports = {
  controller: function() {
    return {
      links: ['earth']
    };
  },
  view: function(ctrl) {
    return [
      m('h1', {style: {textAlign: 'center'}}, 'planet'),
      m('ul', ctrl.links.map(function(url) {
        return m('li', m('a', {href: '/' + url, config: m.route}, 'earth'));
      }))
    ];
  }
}

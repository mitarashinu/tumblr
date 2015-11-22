var m = require('mithril');
var model = require('./model');

module.exports = {
  controller: function() {
    var props = model.getItems();
    return {
      props: props
    };
  },
  view: function(ctrl) {
    var items = ctrl.props().items;
    return m('div', {id: 'accordion', 'aria-multiselectable': 'true'},
      items.map(function(i) {
        return m('div', {class: 'items'}, [
          m('a', {class: 'name', role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#' + i.id, 'aria-controls': i.id}, i.name),
          m('div', {id: i.id, class: 'collapse'}, [
            m('img', {src: i.url}),
            m('div', {class: 'description'}, i.description)
          ])
        ]);
      })
    );
  }
}
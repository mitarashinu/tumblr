var m = require('mithril');
var numeral = require('numeral');
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
            m('img', {src: i.url, class: 'img-responsive center-block'}),
            m('div', {class: 'description'}, i.description)
          ]),
          m('div', {class: 'price'}, numeral(i.price).format('0,0') + 'yen')
        ]);
      })
    );
  }
}

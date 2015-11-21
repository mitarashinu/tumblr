var m = require('mithril');
var Index = require('./component/index');
var Earth = require('./component/earth');

var mainRegion = document.getElementById('main');

m.route.mode = 'hash';

m.route(mainRegion, '/', {
  '/': Index,
  '/earth': Earth
});

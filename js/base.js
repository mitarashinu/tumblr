$(function() {
  var l = location.pathname;
  if (l === '/tagged/misc') {
    var h = $('#header');
    h.children().detach();
  }
});

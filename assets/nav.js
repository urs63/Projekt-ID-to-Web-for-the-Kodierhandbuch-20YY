
(function() {
  var path = window.location.pathname.split('/').pop();
  document.querySelectorAll('#nav-tree a').forEach(function(a) {
    if (a.getAttribute('href').split('/').pop() === path) {
      a.classList.add('active');
    }
  });
})();

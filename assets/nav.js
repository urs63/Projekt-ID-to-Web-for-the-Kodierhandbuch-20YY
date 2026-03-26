
(function() {
  var path = window.location.pathname.split('/').pop();

  // Aktiven Link markieren + Eltern aufklappen
  document.querySelectorAll('#nav-tree a').forEach(function(link) {
    if (link.getAttribute('href').split('/').pop() === path) {
      link.classList.add('active');
      var el = link.parentElement;
      while (el) {
        if (el.tagName === 'DETAILS') el.open = true;
        if (el.id === 'nav-tree') break;
        el = el.parentElement;
      }
    }
  });

  // Summary-Klick: Link navigiert, Pfeil klappt auf/zu
  document.querySelectorAll('#nav-tree summary.nav-summary').forEach(function(summary) {
    summary.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = e.target.href;
      }
      // Pfeil-Klick: normales details toggle
    });
  });
})();

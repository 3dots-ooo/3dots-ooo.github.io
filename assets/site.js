// Mobile menu: open and close the navigation on small screens.
(function () {
  var header = document.querySelector('[data-header]');
  var button = document.querySelector('[data-nav-toggle]');
  if (!header || !button) return;
  var label = button.querySelector('[data-nav-label]');

  function setOpen(open) {
    if (open) header.setAttribute('data-open', '');
    else header.removeAttribute('data-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? 'Close' : 'Menu';
  }

  button.addEventListener('click', function () {
    setOpen(!header.hasAttribute('data-open'));
  });

  header.querySelectorAll('.site-nav a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && header.hasAttribute('data-open')) {
      setOpen(false);
      button.focus();
    }
  });

  var wide = window.matchMedia('(min-width: 48.0625rem)');
  if (wide.addEventListener) {
    wide.addEventListener('change', function (event) { if (event.matches) setOpen(false); });
  }
})();

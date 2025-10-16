document.addEventListener('keydown', function(e) {
  if (e.key === '/') {
    e.preventDefault();
    document.getElementById('q').focus();
  }
});

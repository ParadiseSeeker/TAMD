$('.hamburger').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('is-active');
  $('.toggle').toggleClass('is-active');
});

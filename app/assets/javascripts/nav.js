// Off canvas navigation
$(document).ready(function() {

  $('body').addClass('js');

  $('.menu-link').click(function() {
    event.preventDefault();
    var footHeight = $('footer').outerHeight();
    $('.unicorn').height(footHeight);
    $('.menu-link').toggleClass('active');
    $('#page').toggleClass('active');
  });

});
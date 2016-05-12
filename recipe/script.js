$(document).ready(function() {
  $('#hide-photos').click(function() {
    $('.photos').hide();
  });

  $('.incredient input').click(function() {
    $(this).parent().toggleClass('purchased');
  });

  $('.direction input').click(function() {
    $(this).parent().toggleClass('done');
  });
});

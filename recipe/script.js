$(document).ready(function() {
  $('#hide-photos').click(function() {
    $('.photos').hide();
  });

  $('.incredient button').click(function() {
    $(this).parent().addClass('purchased');
    $(this).hide();
  });

  $('.direction button').click(function() {
    $(this).parent().addClass('done');
    $(this).hide();
  });
});

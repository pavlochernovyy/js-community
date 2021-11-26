$(document).ready(function () {
  $('.container__input')
    .on('click', function () {
      $(this).find('.placeholder__input').hide().prev('input').focus();
    })
    .on('keyup', function (event) {
      if (event.key === 'Tab') {
        $(this).find('.placeholder__input').hide();
      }
    });

  $(':input').on('blur', function () {
    if ($(this).val()) {
      return;
    }

    $(this).next().show();
  });
});

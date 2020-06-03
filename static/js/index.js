$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
  };

$(function () {
    $('div.skills-prog').find('div.skills-bar').each(function (i) {
      if ($(this).isInViewport()) {
        console.log(this);
        $(this).find('.bar').delay(i * 150).animate({
          width: $(this).parents().attr('data-percent') + '%' },
        1000, 'linear', function () {
          return $(this).css({
            'transition-duration': '.5s' });

        });
      }
    })
});

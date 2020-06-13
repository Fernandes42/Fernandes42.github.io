// $.fn.isInViewport = function() {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();
//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();
//   return elementBottom > viewportTop && elementTop < viewportBottom;
//   };

$(function () {
  $('.skills-prog').waypoint(function() {
      animateBars()
    }, { offset: '75%' });
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function animateBars() {
  var done = false
  if (!done) {
    $('.skills-prog').find('.skills-bar').each(function (i) {
      if (isScrolledIntoView(this)) {
        console.log(this);
        $(this).find('.bar').delay(i * 150).animate({
          width: $(this).parents().attr('data-percent') + '%'
        },
          1000, 'linear', function () {
            return $(this).css({
              'transition-duration': '.5s'
            });
          });
      }
    })
    done = true;
  }
  
}

// animateBars();

// $(window).bind('scroll', animateBars);
// if ($('.skills-prog').visible()) {
//   animateBars();
// }

// $(window).bind('scroll', animateBars);
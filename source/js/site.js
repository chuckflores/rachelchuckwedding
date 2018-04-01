// Responsive nav

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.getElementById("myNav").style.opacity = "0";
}

/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.opacity = "1";
}




// Smooth Scroll
$(document).ready(function() {
  $(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();
      $(document).off("scroll");

			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
          $(document).on("scroll", onScroll);
	    });
	});
});

// Change Nav Link Active Class on Scroll
function onScroll(event){
		var scrollPosition = $(document).scrollTop();

		$('nav a').each(function () {
			var currentLink = $(this);

			var refElement = $(currentLink.attr("href"));

			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav--desktop-link').removeClass('active');
				currentLink.addClass('active');
			}
			else{
				currentLink.removeClass('active');
			}
		});
	}

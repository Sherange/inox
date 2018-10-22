(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    var el = $("#mainNav");
    if (el && el.length){
      if(el.offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
        $("#brand").addClass("fas fa-space-shuttle");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $("#brand").removeClass("fa-space-shuttle fa-rotate-270");
      
      }
    }
   
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

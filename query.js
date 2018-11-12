// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 50) {
//         $(".navbar").addClass("navbar-scroll");
//     } else {
//         $(".navbar").removeClass("navbar-scroll");
//     }
// });

$(document).ready(() => {  
    $(window).bind('scroll', () => {
      const scrollAmount = $(window).scrollTop();
      if (scrollAmount > 50) {
        $('.navbar').addClass('navbar-scroll');
      } else {
        $('.navbar').removeClass('navbar-scroll');
      }
    });
  });
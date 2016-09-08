$(document).on('click', '.smoothscroll', function(event){
  event.preventDefault();
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 800);
});

$(document).on('click', "a[href='#top']", function(event){
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 600);
});

// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

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
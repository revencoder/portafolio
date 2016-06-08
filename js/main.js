function skill() { 
        location.reload(true); 
    } 




var strings = {
  first: [
    'Analisémosla',
    'Planifiquémosla',
    'Codifiquémosla',
    'Hagámosla realidad !!!'
  ],
  second: [
    'hackathons',
    'events'
  ],
  third: ['stuff']
}

$('.txt').typed({
  strings: strings.first,
  typeSpeed: 100,
  backDelay: 1500,
  callback: function () {
    $('.typed-cursor').fadeOut()
  }
})




$('.link').click(function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});



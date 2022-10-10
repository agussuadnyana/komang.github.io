$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.home-img').css({
        'transform' : 'translate(0px, '+ wScroll/25 +'%)'
    });

    $('.home-text h1').css({
        'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
    });

    $('.home-text h2').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });

    $('.home-text p').css({
        'transform' : 'translate(0px, '+ wScroll/6 +'%)'
    });


});


$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.illustration-about img:nth-child(2)').css({
        'transform' : 'translate(0px, '+ wScroll/8 +'%)'
    });

    $('.illustration-about img:nth-child(3)').css({
        'transform' : 'translate(0px, '+ wScroll/7 +'%)'
    });

    $('.illustration-about img:nth-child(4)').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });

    $('.illustration-about img:nth-child(5)').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.illustration-about img:nth-child(6)').css({
        'transform' : 'translate(0px, '+ wScroll/8 +'%)'
    });

    $('.illustration-about img:nth-child(7)').css({
        'transform' : 'translate(0px, '+ wScroll/4.5 +'%)'
    });

});







$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
  
    var footerScroll = wScroll - 1500;
    if(footerScroll < 0){
      footerScroll = 0;
      return false;
    }
  
    const footer = $('.footer');
  
    footer.css({
      'transform' : `translateY(${footerScroll/8}px)`
    });
  
});


(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // HOME SLIDER & COURSES & CLIENTS
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })

    $('.owl-courses').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      nav:true,
      navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });

    $('.owl-client').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

	
	
	<script>
    (function(w,t,c,p,s,e,l,k){
        p=new Promise(function(r){w[c]={client:function(){return p}};
            l=document.createElement('div');l.setAttribute("id", "live-caller-widget");
            s=document.createElement(t);s.async=1;s.setAttribute("data-livecaller", 'script');
            k=document.body || document.documentElement;k.insertBefore(l, k.firstChild);
            l.setAttribute("data-livecaller", 'mount-el');s.src='https://cdn.livecaller.io/js/app.js';
            e=document.getElementsByTagName(t)[0];e ? e.parentNode.insertBefore(s,e) : k.insertBefore(s, l.nextSibling);
            s.onload=function(){r(w[c]);};});return p;
    })(window,'script','LiveCaller').then(function(){
        try{
            LiveCaller.config.merge({"widget":{"id":"7cd4255d-822e-4a9b-92c8-8738ee5fb541"},"app":{"locale":"en"}});
            LiveCaller.liftOff();
        }catch(e){
        }
    });
</script>

})(jQuery);

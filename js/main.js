$(document).ready(function(){
    
$('.slider-active').slick({
    autoplay: true,
  autoplaySpeed: 2000,
   speed: 300,
   prevArrow:".preve-arrow-left",
   nextArrow: ".next-arrow-right",
   dots:true,
  slidesToShow: 1,
  variableWidth: true,
   
  });
$('.team-area-slider').slick({
    autoplay: true,
  autoplaySpeed: 2000,
   speed: 300,
   prevArrow:".preve-icon-prev",
   nextArrow: ".next-icon-next",
    slidesToShow: 1,
  variableWidth: true,
   
  });

$('.testimonial-active').slick({
  autoplay:true,
  autoplaySpeed: 4000,
  speed: 700,
    prevArrow:".testi-prev",
   nextArrow: ".testi-next",
      
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed:700,
    responsive:{
      0:{
          items:1,
                  },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          loop:true,
      }
  }
 
});

  // nice select 
  $('select').niceSelect();

});
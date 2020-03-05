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

// ======================================================
 $('.accordion .one').click(function(){
    $(this).fadeOut();
    $('.two').css({'display': 'inline-block'});
 });
 $('.accordion .two').click(function(){
       $(this).css({'display': 'none'});
    $(".one").fadeIn();
 });
 $('.accordion .three').click(function(){
     $(this).css({'display':'none',});
     $('.four').fadeIn();
 });
 $('.accordion .four').click(function(){
    $(this).fadeOut();
    $('.three').css({'display':'inline-block',});
 });
 $('.accordion .five').click(function(){
  $(this).fadeOut();
  $('.six').css({'display': 'inline-block'});
});
$('.accordion .six').click(function(){
     $(this).css({'display': 'none'});
  $(".five").fadeIn();
});
// =============================================

  // nice select 
  $('select').niceSelect();

});
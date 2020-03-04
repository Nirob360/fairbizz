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

});
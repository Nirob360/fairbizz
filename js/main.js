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

});
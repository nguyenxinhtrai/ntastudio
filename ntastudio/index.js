$(document).ready(function(){
  $("i#btnslide_").click(function(){
    $(".slidedown_").slideToggle("slow");
  });
});


$('.carousel').carousel({
  interval: 3000
});
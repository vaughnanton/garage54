$(document).ready(function(){

  $(".aboutDIV, .contactDIV, .showroomDIV").hide();

  $("#home").click(function(){
      $(".aboutDIV, .contactDIV, .showroomDIV").fadeOut(1000);
  });

  $("#about").click(function(){
      $(".showroomDIV, .contactDIV").fadeOut(1500);
      $(".aboutDIV").show(2000);
  });

  $("#showroom").click(function(){
      $(".aboutDIV, .contactDIV").fadeOut(1500);
      $(".showroomDIV").show(2000);
  });

  $("#contact").click(function(){
      $(".aboutDIV, .showroomDIV").fadeOut(1500);
      $(".contactDIV").show(2000);
  });
});

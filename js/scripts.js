$(function() {
      $(".left").click(function(){
        $("#homeCarousel").carousel("prev");
      });
      $(".right").click(function(){
        $("#homeCarousel").carousel("next");
      });
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
  });

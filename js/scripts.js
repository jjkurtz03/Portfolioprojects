$(function() {
      $(".carousel").carousel( { interval: 4000} );
      $(".left").click(function(){
        $("#homeCarousel").carousel("prev");
      });
      $(".right").click(function(){
        $("#homeCarousel").carousel("next");
      });
      $(".item1").click(function(){
        $("#homeCarousel").carousel(0);
      });
      $(".item2").click(function(){
        $("#homeCarousel").carousel(1);
      });
      $(".item3").click(function(){
        $("#homeCarousel").carousel(2);
      });
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
  });

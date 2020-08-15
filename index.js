$(document).ready(function() {
       function checkOffset() {
           $(".navbar").removeClass("show");
       }
       // Run function when scrolling
       $(window).scroll(function() {
           checkOffset();
       });
       // Run function on Clicking
       $(window).click(function() {
           checkOffset();
       });
   });

$(function () {
  
  /*$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $(".header-identity-wrapper").addClass("reduce");
		}
		else
		{
			$(".header-identity-wrapper").removeClass("reduce");
		}
	});*/

  // Cache the highest
  var highestBox = 0;
  // Select and loop the elements you want to equalise
  $('.view-display-id-homepage_latest_news_block .views-field-field-main-image').each(function(){
    // If this box is higher than the cached highest then store it
    if($(this).height() > highestBox) {
      highestBox = $(this).height(); 
    }
  });
  // Set the height of all those children to whichever was highest 
  $('.view-display-id-homepage_latest_news_block .views-field-field-main-image').height(highestBox);
  $(".view-display-id-homepage_latest_news_block .views-field-field-main-image .field-content").css({"position": "absolute", "bottom": "0"});        

});
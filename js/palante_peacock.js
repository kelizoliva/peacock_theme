$(function () {
  
  // Drop in a search icon, hide and display search field
  $( '.block-system-main-menu' ).after( $( '<span class="ti-search search"></span>' ) );
  
  $(window).on("load resize",function(e){
    var offset = $('.l-header .search').offset();
    var height = $('.l-header .search').height();
    var width = $('.l-header .search').width();
    var top = offset.top + height + "px";
    var left = offset.left - 120 + "px";
  
    $('.l-header .block-search-form').css( {
      'position': 'absolute',
      'left': left,
      'top': top,
      'z-index': '1000'
    });
  });
  
  $('.l-header .search').on('click', function() {
    $('.l-header .block-search-form').slideToggle();
    return false;
  });
  
  $('.l-header .block-search-form').on('click', function(e) {
    e.stopPropagation();
  });
  
  $(document).on('click', function(e) {
    if ($('.l-header .block-search-form').length) {
      $('.l-header .block-search-form').slideUp();
      return false;
    }
  });

  
	new WOW().init();
	
  // Detect window scroll and update navbar
  $(window).scroll(function() {
    if ($(document).scrollTop() > 65){
      $('#l-header').addClass('header-scroll');
      $(".nav-placeholder").height($(".scrollme").outerHeight() + 35);
    } else {
      $(".nav-placeholder").height(0);
      $('#l-header').removeClass('header-scroll');
    }
  });
  
  // Smooth scroll for links with .scrollto classes
  $('.scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;
  
        if ($('#l-header').length) {
          top_space = $('#l-header').outerHeight();
  
          if (! $('#l-header').hasClass('header-scrolled')) {
            top_space = top_space - 65;
          }
        }
  
        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');
  
        return false;
      }
    }
  });

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
  $(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 500);
  });
  $(window).bind('resizeEnd', function() {
    if ($(window).width() >= 768 ){	
      $('.view-display-id-homepage_latest_news_block .views-field-field-main-image').height(highestBox);
      $(".view-display-id-homepage_latest_news_block .views-field-field-main-image .field-content").css({"position": "absolute", "bottom": "0"});   
    } else if ($(window).width() <= 768 ){
      $('.view-display-id-homepage_latest_news_block .views-field-field-main-image').height('auto');
      $(".view-display-id-homepage_latest_news_block .views-field-field-main-image .field-content").css({"position": "relative", "bottom": "0"}); 
    }
  });
  $(window).trigger('resize');
  
});
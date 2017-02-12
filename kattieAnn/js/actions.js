(function() {
  // cach elements
  var $document          = $(document),
      $window            = $(window),
      $bodyhtml          = $('html, body'),
      $body              = $('body');

  var katieAnn = {
  	init: function() {
      $(document).ready(function() {
        katieAnn.ready();        
      });
    },

    ready: function() {
    	katieAnn.header.menu();
    	katieAnn.fullSlide();
    	katieAnn.lookbook();
    },

    header : {
    	menu : function() {
    		var $menu = $('.menu');

    		$menu.on('click',_openMenu);

    		function _openMenu(event) {
    			event.preventDefault()
    			var $this = $(this);

    			$body.toggleClass('isOpenMenu');    			
    		}

    	}
    },

    fullSlide : function () {    	
    	var mySwiper = new Swiper ('.fullslide', {
		    // Optional parameters
		    //autoplay:5000,
		    autoHeight:true,
		    direction: 'vertical',
		    calculateHeight:true,
		    loop: true,
		    centeredSlides: true,		    
		    lazyLoading:true,
		    paginationClickable:true,		    
		    updateTranslate: true,
		    observer: true,
		    mousewheelControl: true,
		    
		    // If we need pagination
		    pagination: '.swiper-pagination',
		    paginationBulletRender: function (swiper, index, className) {
			      return '<li class="' + className + '">0' + (index + 1) + '</li>';
			  },
			  onSlideChangeStart: function (swiper) {
			  	var active 	= $('.swiper-slide-active'),
			  			rel 		= active.attr('rel'),
			  			rel 		= $.parseHTML(rel)
			  			newName = $('.fullslide__name h1');
				  newName.html(rel);				  

				  // height				  
				  var $this = $('.fullslide__image');
				  $this.css('height','100%')				  
				}
		  });

		  $(window).on('resize', function () {
		  	var $this = $('.fullslide__image');
				$this.css('height','100%')		
		  })		  
    },
    lookbook : function () {
    	var mySwiper2 = new Swiper ('.lookbook__slider', {
		    lazyLoading:true,
		    direction: 'horizontal',
		    spaceBetween: 20,
		    slidesPerView: 'auto',
		    loop: true
		  });
    }
	}

  // play script
  katieAnn.init();  

})();
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
    		var $menuOpen = $('.openmenu'),
    				$menu = $('.menu');

    		$menu.on('click',_openMenu);

    		function _openMenu(event) {
    			event.preventDefault()
    			var $this = $(this);	

    			$body.toggleClass('isOpenMenu');
    		}
    	}
    },

    fullSlide : function () {    	
    	var $fullslide 	= $('.fullslide'),
    			$thumbs			= $('.gallery-thumbs');

    	var mySwiper = new Swiper ($fullslide, {
		    // Optional parameters
		    //autoplay:5000,
		    effect: 'slide',
		    autoHeight:true,
		    direction: 'vertical',
		    calculateHeight:true,
		    loop: true,
		    centeredSlides: true,		    
		    lazyLoading:true,
		    paginationClickable:true,		    
		    updateTranslate: true,
		    observer: true,
		    
		    // If we need pagination
		    pagination: '.swiper-pagination-full',
		    paginationBulletRender: function (swiper, index, className) {
			      return '<li class="' + className + '">0' + (index + 1) + '</li>';
			  },
			  onSlideChangeStart: function (swiper) {
			  	var active 	= $('.swiper-slide-active'),
			  			rel 		= active.attr('rel'),
			  			rel 		= $.parseHTML(rel),
			  			newName = $('.fullslide__name h1');
				  newName.html(rel);				  

				  // height				  
				  var $this = $fullslide.find('.fullslide__image');
				  $this.css('height','100%')				  
				}
		  });

		  var galleryThumbs = new Swiper($thumbs, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 0,
        calculateHeight:true,
        slideToClickedSlide: true,        
        centeredSlides: true,
        slidesPerView: '1',
        lazyLoading:true,
        updateTranslate: true,
		    observer: true,
		    mousewheelControl: true,
        effect: 'slide',
			  onSlideChangeStart: function (swiper) {
			  	var active 	= $('.swiper-slide-active a'),
			  			href    = active.attr('href'),				  			
			  			rel 		= active.attr('rel'),
			  			rel 		= $.parseHTML(rel),
			  			newName = $('.gallery-thumbs-name h3');
			  			newHref = $('.gallery-thumbs-name');
				  
				  newName.html(rel);
				  newHref.attr('href', href);
				}
	    });

	    mySwiper.params.control = galleryThumbs;
	    galleryThumbs.params.control = mySwiper;

		  // onresize
		  $(window).on('resize', function () {
		  	var $this = $('.fullslide__image');
				$this.css('height','100%')		
		  });

    },
    lookbook : function () {
    	var $look = $('.lookbook__slider');

    	var mySwiper2 = new Swiper ($look, {
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
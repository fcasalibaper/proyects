(function() {
  // cach elements
  var $document          = $(document),
      $window            = $(window),
      $bodyhtml          = $('html, body'),
      $body              = $('body'),
      vid 							 = document.getElementById("bgvid");

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
    	katieAnn.videoBg();
    },

    header : {
    	menu : function() {
    		var $menuOpen = $('.openmenu'),
    				$menu = $('.menu');

    		// al hacer click ejecuta _openMenu
    		$menu.on('click',_openMenu);

    		function _openMenu(event) {
    			event.preventDefault();
    			var $this = $(this);	
    			// suma clase al body
    			$body.toggleClass('isOpenMenu');

    			// si el emnu esta abierto y se esta reproduciendo el video lo pausa, al cerrarse vuelve a reporducirlo
    			if ($body.hasClass('isOpenMenu') && $('.swiper-slide-video').hasClass('swiper-slide-active')) {
    				vid.pause();
    			} else if (!$body.hasClass('isOpenMenu') && $('.swiper-slide-video').hasClass('swiper-slide-active')) {
    				vid.play();
    			}		
    		}
    	}
    },

    fullSlide : function () {    	
    	var $fullslide 	= $('.half'),
    			$thumbs			= $('.gallery-thumbs');

    	var mySwiper = new Swiper ($fullslide, {
		    initialSlide : 0,
		    autoplay:5000,
		    speed: 1700,
		    effect: 'slide',
		    autoHeight:true,
		    direction: 'horizontal',
		    calculateHeight:true,
		    loop: true,
		    centeredSlides: true,		    
		    lazyLoading:true,
		    mousewheelControl: true,
		    nextButton: '.swiper-button-prev',
        prevButton: '.swiper-button-next',
        runCallbacksOnInit: true,
		    paginationClickable:true,
		    pagination: '.swiper-pagination-full',				        
		    // If we need pagination
		    paginationBulletRender: function (swiper, index, className) {
			      return '<li class="' + className + '">0' + (index + 1) + '</li>';
			  },
			  onSlideChangeStart: function (swiper) {
			  	var active 		= $fullslide.find('.swiper-slide-active'),
			  			rel 			= active.attr('rel'),
			  			relhtml 	= $.parseHTML(rel),
			  			newName  	= $('.fullslide__name h1'),
			  			//
			  			href    = active.data('href'),				  			
			  			relT 		= active.data('text'),
			  			relH 		= $.parseHTML(relT),
			  			newNameT = $('.gallery-thumbs-name h3');
			  			newHref = $('.gallery-thumbs-name');

			  	// texto click
			  	//console.log(relT);				  
				  newNameT.html(relH);
				  newHref.attr('href', href);

				  // texto title
			  	newName.html(relhtml);	

			  	// play pause slide video
				  if (active.hasClass('swiper-slide-video')) {				  	
				  	vid.play();
				  } else {
				  	vid.pause();
				  }
				}
		  });

			/// thumbs
		  var galleryThumbs = new Swiper($thumbs, {
        direction: 'horizontal',
        speed: 1000,
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
        effect: 'slide'
	    });

	    // sincroniza slider y thumbs
	    mySwiper.params.control = galleryThumbs;
	    galleryThumbs.params.control = mySwiper;

		  // onresize
		  $(window).on('resize', function () {
		  	var $this = $('.fullslide__image');
				$this.css('height','100%')		
		  });

    },

    videoBg : function () {

			if (window.matchMedia('(prefers-reduced-motion)').matches) {
		    vid.removeAttribute("autoplay");
		    vid.pause();
			}

			function vidFade() {
			  vid.classList.add("stopfade");
			}

    },

    lookbook : function () {
    	// var $look = $('.lookbook__slider');
    	var $look = $('.lookbook__sliderN');

    	var mySwiper2 = new Swiper ($look, {
		   loop: true,
        spaceBetween: 20,
        calculateHeight:true,
        slideToClickedSlide: true,
        lazyLoading:true,
        updateTranslate: true,
		    observer: true,
		    mousewheelControl: true,
        effect: 'slide',
		    slidesPerView: 'auto',		    
		    
			  onSlideChangeStart: function (swiper) {
				  // height	full size			  
				  var $this = $look.find('.swiper-wrapper');
				  $this.css('height','100%')				  
				}
		  });

		  $(window).on('resize', function () {
		  	var $this = $('lookbook__image > .swiper-wrapper');
				$this.css('height','100%')		
		  });
    }
	}

  // play script
  katieAnn.init();  

})();
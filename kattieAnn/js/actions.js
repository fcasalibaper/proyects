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
		    // Optional parameters
		    //autoplay:5000,
		    effect: 'slide',
		    autoHeight:true,
		    direction: 'horizontal',
		    calculateHeight:true,
		    loop: true,
		    centeredSlides: true,		    
		    lazyLoading:true,
		    paginationClickable:true,		    
		    updateTranslate: true,
		    observer: true,
		    nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		    
		    // If we need pagination
		    pagination: '.swiper-pagination-full',
		    paginationBulletRender: function (swiper, index, className) {
			      return '<li class="' + className + '">0' + (index + 1) + '</li>';
			  },
			  onSlideChangeStart: function (swiper) {
			  	var active 		= $('.swiper-slide-active'),
			  			rel 			= active.attr('rel'),
			  			relhtml 	= $.parseHTML(rel),
			  			newName  	= $('.fullslide__name h1');

			  	newName.html(relhtml);	

			  	// play pause slide video
				  if (active.hasClass('swiper-slide-video')) {				  	
				  	vid.play();
				  } else {
				  	vid.pause();
				  }

				  // height	full size			  
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
			  			relH 		= $.parseHTML(rel),
			  			newName = $('.gallery-thumbs-name h3');
			  			newHref = $('.gallery-thumbs-name');

			  	console.log(rel);				  
				  newName.html(relH);
				  newHref.attr('href', href);
				}
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

			vid.addEventListener('ended', function() {
				// only functional if "loop" is removed 
				vid.pause();
				// to capture IE10
				vidFade();
			}); 

			// pauseButton.on("click", function() {
			//   vid.classList.toggle("stopfade");
			//   if (vid.paused) {
			//     vid.play();
			//   } else {
			//     vid.pause();
			//   }
			// })

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
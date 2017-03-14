(function() {
  // cach elements
  var $bodyhtml          = $('html, body'),
      $body              = $('body'),
      vid 							 = document.getElementById("bgvid");

  var katieAnn = {
  	init: function() {
      $(document).ready(function() {
        katieAnn.ready(); 
        // Preloader         
    		$(window).on('load', function() {
				  katieAnn.preloader();
				  console.log('page loaded');
				});   	
      });
    },

    ready: function() {
    	katieAnn.header.menu();
    	katieAnn.fullSlide();    	
    	katieAnn.modalVideo();    	
    	katieAnn.internas();    	
    	//katieAnn.preloadImage();   	
    	//katieAnn.toolresponsive();        	

    	(function($, viewport){
        if(viewport.is('xs')) {
        	katieAnn.hideVideoMobile();
        }
        if(viewport.is('>=sm')) {
        	katieAnn.videoBg();
	      }
			})(jQuery, ResponsiveBootstrapToolkit);		

    },

    toolresponsive : function () {
      var $allTool  = '<div class="toolresponsive bottom-left"><span class="visible-lg txc">LG</span><span class="visible-md txc">MD</span><span class="visible-sm txc">SM</span><span class="visible-xs txc">XS</span></div>';

      $('.cfull').append($allTool);
    },

    preloader : function () {
    	var $preloader = $('#preloader');
    		$preloader.fadeOut(550);    	
    },

    preloadImage : function () {
    	window.onload = function() {
  
  		var placeholder = document.querySelector('.placeholder'),
      small = placeholder.querySelector('.img-small');  
			  // 1: load small image and show it
			  var img = new Image();
			  img.src = small.src || small.style('background-image');
			  img.onload = function () {
			   small.classList.add('loaded');
			  };
			  
			  // 2: load large image
			  var imgLarge = new Image();
			  imgLarge.src = placeholder.dataset.large; 
			  imgLarge.onload = function () {
			    imgLarge.classList.add('loaded');
			  };
			  placeholder.appendChild(imgLarge);
			}
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

    	// slider Full
    	var mySwiper = new Swiper ($fullslide, {
		    initialSlide : 0,
		    autoplay:5000,
		    speed: 1000,
		    effect: 'slide',
		    autoHeight:true,
		    direction: 'horizontal',
		    calculateHeight:true,
		    loop: true,
		    centeredSlides: true,		    
		    lazyLoading:true,
		    updateTranslate: true,
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
			  			target  = active.data('target'),
			  			relT 		= active.data('text'),
			  			relH 		= $.parseHTML(relT),
			  			newNameT = $('.gallery-thumbs-name h3');
			  			newHref = $('.gallery-thumbs-name');

			  	// texto click
			  	//console.log(relT);				  
				  newNameT.html(relH);
				  newHref.attr({
				  	'href'	: href,
				  	'target': target
				  });

				  // texto title
			  	newName.html(relhtml);

			  	// video en desktop
			  	(function($, viewport){		        
		        if(viewport.is('>=sm')) {
		        	$('.swiper-slide').each(function () {
					  		if ( $('.swiper-slide-video').length > 0) {
							  	// play pause slide video			  	
								  if (active.hasClass('swiper-slide-video')) {				  	
								  	vid.play();
								  } else {
								  	vid.pause();
								  }
							  }
						  });
			      }
					})(jQuery, ResponsiveBootstrapToolkit);			  	
				}
		  });

			/// slider thumbs
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
        effect: 'slide'
	    });

	    // sincroniza slider y thumbs
	    mySwiper.params.control = galleryThumbs;
	    galleryThumbs.params.control = mySwiper;

		  // onresize le vuelve a dar altura a los li´s
		  $(window).on('resize', function () {
		  	var $this = $('.fullslide__image');
				$this.css('height','100%');
		  });
    },

    modalVideo : function () {
    	var url 					= '?rel=0&amp;showinfo=0&amp;autoplay=1',
    			$modalVideo  	= $('#modalVideo'),
    			$embedIframe	= $('.embed-responsive-item'),
    			$modalTarget 	= $('.modal__button__target');

    	$modalTarget.on('click', function () {
    		// toma rel del botton y se lo pasa al src del iframe
    		var rel = $(this).attr('rel');

    		// on show modal
    		$modalVideo.on('show.bs.modal', function (event) {
    			var urlFinal = 'https://www.youtube.com/embed/'+rel+url;    			
				  $embedIframe.attr('src', urlFinal );
				});    	
    	});

    	// on hide modal
    	$modalVideo.on('hidden.bs.modal', function (e) {
			  $embedIframe.attr('src', '' );
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

    hideVideoMobile: function () {
    	$('.videocont').remove();
    },

    internas : function () {
    	// var $interna = $('.lookbook__slider');
    	var $interna = $('.interna__slider');    	

    	var Internas = new Swiper ($interna, {
    		initialSlide : 0,
        spaceBetween: 5,
		    autoplay:5000,
		    speed: 450,
		    effect: 'slide',		    
		    mousewheelControl: true,
		    direction: 'horizontal',		            
				freeMode:true,
		    slidesPerView: 'auto',	
		    centeredSlides: true,		    
        breakpoints: {			    
			    480: {
			      loop: true
			    }
			  }
		  });
    }
	}

  // play script
  katieAnn.init();  

})();
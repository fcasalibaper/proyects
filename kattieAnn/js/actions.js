// $(window).on('load', function() {
//   $('#preloader').fadeOut(350);
//   console.log('page loaded');
// });
(function() {
  // cach elements
  var $bodyhtml          = $('html, body'),
      $body              = $('body'),
      vid 							 = document.getElementById("bgvid");

  var katieAnn = {
  	init: function() {
      $(document).on('ready',function() {
        katieAnn.ready();
      });
    },

    ready: function() {
    	katieAnn.header.menu();
    	katieAnn.fullSlide();
    	katieAnn.modalVideo();
      katieAnn.internas();
    	picturefill();

      // LOADED
    	// $(window).on('load', function () {
    	// });

      // Preloader
      $('#preloader').delay(3000).fadeOut(350);
      //$('#preloader').hide(0);

      // RESOLUTIONS SCREEN
    	(function($, viewport){
        if(viewport.is('xs')) {
        	katieAnn.hideVideoMobile();
        }
        if(viewport.is('>=sm')) {
        	katieAnn.videoBg();
	      }
			})(jQuery, ResponsiveBootstrapToolkit);

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
		    updateTranslate: true,
		    mousewheelControl: true,
		    nextButton: '.swiper-button-prev',
        prevButton: '.swiper-button-next',
        runCallbacksOnInit: true,
		    paginationClickable:true,
		    pagination: '.swiper-pagination-full',

        lazyLoading:true,
        lazyLoadingInPrevNext:true,
        lazyLoadingOnTransitionStart:true,
        lazyLoadingClass:'swiper-lazy',
        lazyStatusLoadingClass:'swiper-lazy-loaded',
        preloadImages: false,
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
        updateTranslate: true,
		    observer: true,
		    mousewheelControl: true,
        effect: 'slide',

        lazyLoading:true,
        lazyLoadingInPrevNext:true,
        lazyLoadingOnTransitionStart:true,
        lazyLoadingClass:'swiper-lazy',
        lazyStatusLoadingClass:'swiper-lazy-loaded',
        preloadImages: false,
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
			  $body.removeClass('isOpenMenu')
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
    	var $interna 			= $('.interna__slider'),
    			$modalVideo  	= $('#modalVideo');

      // $(window).on("load",function(){
      $interna.mCustomScrollbar({
  			scrollInertia:2000,
  			scrollEasing:"easeOut",
				axis:"x",
				documentTouchScroll: true,
				moveDragger:true,
				mouseWheel:{
					enable: true,
          scrollAmount : 475
				},
        keyboard:{ enable: true },
				advanced:{
					updateOnContentResize:true,
          updateOnImageLoad: true,
          updateOnSelectorChange: ".swiper-slide",
          preventDefault : true,
          normalizeDelta : true
					// autoExpandHorizontalScroll: true,
				}
			});


      // $interna.find('img').each(function () {
      //   var $this = $(this);
      //
      //   $($this || window).on('load', function () {
      //     console.log($this.attr('src'));
      //     $(this).parent().addClass('loaded');
      //   })
      // });


    }
	}

  // play script
  katieAnn.init();

})();

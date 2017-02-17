<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<?php include 'includes/head.inc.php'; ?>
</head>

<body>
	<div class="cfull">
		<?php include 'includes/grid.inc.php'; ?>

		<div class="container-fluid">
			<div class="row modulo">
				<!-- header -->
				<?php include 'includes/header.inc.php'; ?>

				<!-- slider -->
				<div class="section fullslide ">

					<!-- slider -->
					<div class="half swiper-container">
						<ul class="fullslide__image swiper-wrapper">						
							<li class="swiper-slide swiper-slide-video" rel="A/W 17" data-text="WATCH LIVE" data-target="_blank" data-href="http://fashionscout.co.uk/live-stream?mc_cid=c9b6e30f58&mc_eid=132768a926" style="background-image: url('images/videoback.jpg'); background-position: top center;">
								<div class="videocont">
								  <video class="fullvideo" poster="images/poster.jpg" id="bgvid" playsinline muted loop>
										  <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
										<source src="videos/katie_westminster_2016.mp4" type="video/webm">
										<source src="videos/katie_westminster_2016.mp4" type="video/mp4">
									</video>
								</div>		
							</li>							
							<li class="swiper-slide" rel="Eline 2017" data-text="VIEW COLLECTION" data-target="_self" data-href="eline.php" style="background-image: url('images/eline/eline0.jpg'); background-position:top center;"></li>
							<li class="swiper-slide" rel="LookBook" data-text="VIEW COLLECTION" data-target="_self" data-href="lookbook.php" style="background-image: url('images/lookbook/lookbook0.jpg')"></li>
						</ul>
					</div>
					<!-- pagination -->
					<div class="pagination-wrapper">
						<div class="fullslide__name fullslide__name--mobile">
							<h1 class="title">								
							</h1>
						</div>

						<!-- move slides -->
						<div class="buttons-leftright">
							<div class="swiper-button-prev">
								<i class="icon-right"></i>
							</div>
		    			<div class="swiper-button-next">
		    				<i class="icon-left"></i>
		    			</div>
	    			</div>

	    			<!-- paginador -->
						<div class="swiper-pagination-full"></div>
						<div class="fullslide__name fullslide__name--desktop">
							<h1 class="title">								
							</h1>
						</div>
					</div>
				</div>

				<!-- thumbs -->
				<div class="swiper-container gallery-thumbs">
	        <div class="swiper-wrapper">
		        <div class="swiper-slide">
	        		<a href="http://fashionscout.co.uk/live-stream?mc_cid=c9b6e30f58&mc_eid=132768a926" target="_blank" class="fullslide__image__thumbs live">								
								<div class="thumb" style="background-image:url('images/showThumb.png')"></div>
							</a>
		        </div>
		        <!-- /.slide -->
		        <div class="swiper-slide">
	        		<a href="eline.php" target="_self" class="fullslide__image__thumbs">								
								<div class="thumb" style="background-image:url('images/elineThumb.png')"></div>
							</a>
		        </div>
		        <!-- /.slide -->
		        <div class="swiper-slide">
	        		<a href="lookbook.php" target="_self" class="fullslide__image__thumbs">								
								<div class="thumb" style="background-image:url('images/lookbookThumb.png')"></div>
							</a>
		        </div>
		        <!-- /.slide -->
	        </div>	        
	    	</div>

	    	<!-- Name slide -->
	    	<a href="" class="gallery-thumbs-name">
	    		<span class="gallery-thumbs-name-text">
						<h3 class="first">VIEW COLLECTION</h3>
						<h3 class="second">VIEW COLLECTION</h3>
					</span>
				</a>

			</div>
		</div>
	</div>
	<!-- scripts -->
  <?php include 'includes/js.inc.php'; ?>	
</body>
</html>
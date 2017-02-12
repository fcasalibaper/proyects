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
				<div class="section fullslide swiper-container">

					<!-- slider -->
					<ul class="fullslide__image swiper-wrapper">						
						<li class="swiper-slide" rel="Eline 2017" style="background-image: url('https://s-media-cache-ak0.pinimg.com/736x/76/46/bc/7646bc218ff6b3c2dbed3f57753b7f7a.jpg')"></li>
						<li class="swiper-slide" rel="LookBook" style="background-image: url('http://1.bp.blogspot.com/-0B2tMRhpAnM/UTqvEpNheUI/AAAAAAAACdQ/9SvqLZJk708/s1600/cara-Delevingne.png')"></li>
						<li class="swiper-slide" rel="Westminster<br>Fashion<br>Show 2017" style="background-image: url('http://basicmodels.com.sg/sites/default/files/styles/original_optimized/public/test_with_faye_hur_6.jpg?itok=0oGfyQbl')"></li>
					</ul>

					<!-- pagination -->
					<div class="pagination-wrapper">
						<div class="swiper-pagination-full"></div>
						<div class="fullslide__name">
							<h1 class="title">
								Eline 2017
							</h1>
						</div>
					</div>
				</div>

				<!-- thumbs -->
				<div class="swiper-container gallery-thumbs">
	        <div class="swiper-wrapper">
		        <div class="swiper-slide">
	        		<a href="eline.php" class="fullslide__image__thumbs" rel="VIEW COLLECTION">								
								<div class="thumb" style="background-image:url('https://s-media-cache-ak0.pinimg.com/736x/97/a0/cf/97a0cf54ef844fb161101ba1ab239e8a.jpg')"></div>
							</a>
		        </div>
		        <!-- /.slide -->
		        <div class="swiper-slide">
	        		<a href="lookbook.php" class="fullslide__image__thumbs" rel="VIEW COLLECTION">								
								<div class="thumb" style="background-image:url('http://4.bp.blogspot.com/-zdJbNQ2WN_4/Ty-q3YTAWZI/AAAAAAAAKc8/rc5PjtPEKzs/s1600/01-rianne-ten-haken.jpg')"></div>
							</a>
		        </div>
		        <!-- /.slide -->
		        <div class="swiper-slide">
	        		<a href="#" class="fullslide__image__thumbs live" rel="WATCH LIVE">								
								<div class="thumb" style="background-image:url('https://pbs.twimg.com/media/ChLfwkTWkAEOG8y.jpg')"></div>
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
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<?php include 'includes/head.inc.php'; ?>
</head>

<body class="int">
	<div class="cfull">
		<?php include 'includes/preloader.inc.php'; ?>
		<?php include 'includes/grid.inc.php'; ?>

		<div class="container-fluid">
			<div class="row modulo">								

				<!-- slider -->
				<div class="section interna">

					<div class="col1 hidden-xs">
						<!-- back button -->
						<aside class="back__button">
							<a href="index.php">
								back home
								<div class="back__icon">
									<i class="icon-left"></i>
								</div>
							</a>
						</aside>

						<!-- modal button -->
						<aside class="modal__button hidden-xs">
							<button class="modal__button__target" rel="-b7mMnqvotc" data-toggle="modal" data-target="#modalVideo">
								WATCH SHOW
							</button>
						</aside>				

						<hgroup>
							<h1 class="title">
								Westminster
							</h1>
						</hgroup>						
					</div>

					<!-- slider -->
					<div class="interna__slider interna__slider--img swiper-container">						
				    <div class="swiper-wrapper">
				    	<div class="swiper-slide">
								<picture>
									<source srcset="images/westminster/westminsterHQ1.jpg" media="(min-width: 1200px)">
									<img srcset="images/westminster/westminster1.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/westminster/westminsterHQ2.jpg" media="(min-width: 1200px)">
									<img srcset="images/westminster/westminster2.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/westminster/westminsterHQ3.jpg" media="(min-width: 1200px)">
									<img srcset="images/westminster/westminster3.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/westminster/westminsterHQ4.jpg" media="(min-width: 1200px)">
									<img srcset="images/westminster/westminster4.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/westminster/westminsterHQ5.jpg" media="(min-width: 1200px)">
									<img srcset="images/westminster/westminster5.jpg" />
								</picture>
							</div>
				    </div>	
					</div>					

					<div class="col1 visible-xs">
						<!-- modal button -->
					<aside class="modal__button visible-xs">
						<button class="modal__button__target" rel="-b7mMnqvotc" data-toggle="modal" data-target="#modalVideo">
							WATCH<br/>
							SHOW
						</button>
					</aside>
						<!-- back button -->
						<aside class="back__button">
							<a href="index.php">
								back home
								<div class="back__icon">
									<i class="icon-left"></i>
								</div>
							</a>
						</aside>	

						<hgroup>
							<h1 class="title title-xs">
								Westminster
							</h1>
						</hgroup>						
					</div>
					
				</div>

			</div>
		</div>
	</div>
	<!-- scripts -->
  <?php include 'includes/js.inc.php'; ?>	
</body>
</html>
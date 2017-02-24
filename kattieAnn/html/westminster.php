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

				<!-- slider -->
				<div class="section interna">

					<div class="col1">
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
					<div class="interna__slider interna__slider swiper-container">						
				    <div class="swiper-wrapper">
			        <!-- Slides -->			        
			        <div class="swiper-slide" style="background-image:url('images/westminster/westminster1.jpg')"></div>
			        <div class="swiper-slide" style="background-image:url('images/westminster/westminster2.jpg')"></div>
			        <div class="swiper-slide" style="background-image:url('images/westminster/westminster3.jpg')"></div>
			        <div class="swiper-slide" style="background-image:url('images/westminster/westminster4.jpg')"></div>
			        <div class="swiper-slide" style="background-image:url('images/westminster/westminster5.jpg')"></div>
				    </div>	
					</div>

					<!-- modal button -->
					<aside class="modal__button visible-xs">
						<button class="modal__button__target" rel="-b7mMnqvotc" data-toggle="modal" data-target="#modalVideo">
							WATCH<br/>
							SHOW
						</button>
					</aside>	
					
				</div>

			</div>
		</div>
	</div>
	<!-- scripts -->
  <?php include 'includes/js.inc.php'; ?>	
</body>
</html>
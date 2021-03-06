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
					<!-- back button -->

					<div class="col1 hidden-xs">						
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
								Huf Magazine Nocturnal Animals
							</h1>
						</hgroup>						
					</div>					

					<div class="interna__slider interna__slider--img swiper-container">						
				    <div class="swiper-wrapper">
				    	<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ1.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf1.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ2.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf2.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ3.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf3.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ4.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf4.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ5.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf5.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ6.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf6.jpg" />
								</picture>
							</div>
							<div class="swiper-slide">
								<picture>
									<source srcset="images/huf/hufHQ7.jpg" media="(min-width: 1200px)">
									<img srcset="images/huf/huf7.jpg" />
								</picture>
							</div>
				    </div>
					</div>
					<!-- /.interna__slider -->

					<div class="col1 visible-xs">						
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
								Huf Magazine Nocturnal Animals
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
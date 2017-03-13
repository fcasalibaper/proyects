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
		<?php include 'includes/preloader.inc.php'; ?>
		<?php include 'includes/grid.inc.php'; ?>

		<div class="container-fluid">
			<div class="row modulo">								

				<!-- slider -->
				<div class="section interna">
					<!-- back button -->

					<div class="col1">						
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

					<aside class="imgHolder">
						<img class="imgHolder__img" src="images/huf/huf1.jpg" />
		        <img class="imgHolder__img" src="images/huf/huf2.jpg" />
		        <img class="imgHolder__img" src="images/huf/huf3.jpg" />
		        <img class="imgHolder__img" src="images/huf/huf4.jpg" />
		        <img class="imgHolder__img" src="images/huf/huf5.jpg" />
		        <img class="imgHolder__img" src="images/huf/huf6.jpg" />
		        <img class="imgHolder__img" src="images/huf/huf7.jpg" />
					</aside>
					<!-- /.imgHolder -->

					<div class="swiper-container">						
				    <div class="swiper-wrapper">			      
				    </div>
					</div>
					<!-- /.interna__slider -->

				</div>
			</div>
		</div>
	</div>
	<!-- scripts -->
  <?php include 'includes/js.inc.php'; ?>	
</body>
</html>
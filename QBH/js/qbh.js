$(function () {
	var flag = false;
	var flag1 = false;
	$('#fullpage').fullpage({
		sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#fff'],
		navigation: true,
		// 滚动到某一屏后的回调函数，接受anchorLink和index两个参数，anchorLink是锚链接的名称，index是序号，从1开始计算
		afterLoad: function (anchorLinK, index) {
			// 第一屏
			if(index == 1){
				$('.down').fadeIn();
			}
			// 第二屏
			if (index == 2 && flag == false) {
				$('.qbh-list .qbh-list-search').show().animate({
					'right': 383
				}, 1000, function () {
					$('.qbh-list .qbh-list-search-font').animate({
						'opacity': 1
					}, 1000, function () {
						$('.qbh-list .qbh-list-search').hide();
						$('.qbh-list .qbh-list-search-finish').show().animate({
							'bottom': 449,
							'right': 250,
							'height': 30,
							'left': 'none'
						}, 1000);
						flag = true;
						$('.qbh-list .qbh-list-sofas').delay(500).show().animate({
							'height': 218
						}, 500)
						$('.qbh-list .qbh-list-wordb').animate({
							'opacity': 1
						},function(){
							$('.down').fadeIn();
						})
					})
				})
			}
			// 第八屏
			if (index == 8) {
				$(document).mousemove(function (ev) {
					var mX = ev.pageX;
					var mY = ev.pageY + 10;

					$('.qbh-shopping  .qbh-shopping-hands').css({
						left: mX,
						top: mY
					})
				})
				$('.qbh-shopping .qbh-shopping-start-shopping').mouseenter(function () {
					$('.qbh-shopping .qhb-shopping-dong').show();
				})
				$('.qbh-shopping .qhb-shopping-dong').mouseleave(function () {
					$('.qbh-shopping .qhb-shopping-dong').hide();
				})
			}
		},
		// 滚动前的回调函数，接收index，nextIndex和direction3个参数
		// index是离开的'页面'的序号，从1开始计算
		// nextIndex是滚动到的‘页面’的序号，从1开始计算
		// direction 判断是网上滚动还是往下滚动,值是up或down
		onLeave: function (index, nextIndex, direction) {
			$('.down').fadeOut();
			var wHeight = $(window).height();
			// 第三屏
			if (index == 2 && nextIndex == 3) {
				$('.qbh-list .qbh-list-sofa-pic').show().animate({
					'bottom': -(wHeight - 250),
					'right': 518,
					'width': 204
				}, 1000, function () {
					$('.qbh-buy .qbh-buy-choose-end').animate({
						'opacity': 1
					});
					$('.qbh-buy .qbh-buy-add-cart-end').animate({
						'opacity': 1
					},function(){
						$('.down').fadeIn();
					});
				});
			}
			// 第四屏
			if (index == 3 && nextIndex == 4 && flag1 == false) {
				$('.qbh-list .qbh-list-sofa-pic').hide();
				$('.qbh-buy .qbh-buy-rotate-sofa').show().animate({
					'bottom': -((wHeight - 250) + 50),
					'right': 260
				}, 1000, function () {
					flag1 = true;
					$('.qbh-buy .qbh-buy-rotate-sofa').hide();
					$('..qbh-info .qbh-info-rotate-sofa').show();
					$('.qbh-info .qbh-info-cart-box').animate({
						'left': 2000
					}, 1500, function () {
						$('.qbh-info .qbh-info-address').animate({
							'opacity': 1
						}, 1000, function () {
							$('.qbh-info .qbh-info-wordb').animate({
								'opacity': 1
							})
							$('.qbh-info .qbh-info-address-font').animate({
								'opacity': 1
							},function(){
								$('.down').fadeIn();
							})
						})
					})
				})
			}
			// 第五屏
			if (index == 4 && nextIndex == 5) {
				$('.qbh-payment .qbh-payment-hands').show().animate({
					'bottom': 0
				}, 1000, function () {
					$('.qbh-payment .qbh-payment-mouse-end').animate({
						'opacity': 1
					}, 10, function () {
						$('.qbh-payment .qbh-payment-rotate-sofa-start').show().animate({
							'bottom': 245
						}, 1000, function () {
							$('.qbh-payment .qbh-payment-rotate-sofa-end').animate({
								'bottom': 70
							}, 800)
							$('.qbh-payment .qbh-payment-bill').animate({
								'bottom': 380
							}, 500,function(){
								$('.down').fadeIn();
							})
						})
					})
				})
			}
			// 第六屏
			if (index == 5 && nextIndex == 6) {
				$('.qbh-payment .qbh-payment-rotate-sofa-continue').show().animate({
					'bottom': -243,
					'width': 80
				}, 1000)
				$('.qbh-delivery .qbh-delivery-box').show().animate({
					'left': 317,
					'bottom': 435
				}, 1000, function () {
					$('.qbh-payment .qbh-payment-rotate-sofa-continue').hide()
					$('.qbh-delivery .qbh-delivery-box').animate({
						'left': 485,
						'bottom': 56,
						'width': 40
					}, 1000, function () {
						$('.qbh-delivery .qbh-delivery-box').hide();
						$('.qbh-delivery').animate({
							'backgroundPositionX': '100%'
						}, 2000, function () {
							$('.qbh-delivery .qbh-delivery-font-end').animate({
								'opacity': 1
							})
							$('.qbh-delivery .qbh-delivery-deliveryman').animate({
								'width': 252,
								'bottom': 117
							}, 1000, function () {
								$('.qbh-delivery .qbh-delivery-deliveryman').animate({
									'right': 600
								}, 1000, function () {
									$('.qbh-delivery .qbh-delivery-shouhuo').show();
									$('.qbh-delivery .qbh-delivery-door').show();
									$('.qbh-delivery .qbh-delivery-buyer').animate({
										'width': 87
									},function(){
										$('.down').fadeIn();
									})
								})
							})
						})
						$('.qbh-delivery .qbh-delivery-shangjia').animate({
							'opacity': 1
						}, 800)
						$('.qbh-delivery .qbh-delivery-truck-font').animate({
							'opacity': 1
						}, 1500)
					})
				})

			}
			// 第七屏
			if (index == 6 && nextIndex == 7) {
				$('.qbh-appraise .qbh-appraise-star').animate({
					'width': 100
				}, 1000, function () {
					$('.qbh-appraise .qbh-appraise-haoping').show().animate({
						'left': 395
					}, 1000, function () {
						$('.qbh-appraise .qbh-appraise-haoping').animate({
							'width': 72
						}, 500,function(){
							$('.down').fadeIn();
						})
					})
				})
			}
		}
	});
});
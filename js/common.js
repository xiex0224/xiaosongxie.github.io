		//works-banner
		var Swiper1 = new Swiper('#swiper1', {
			loop:true,
			centeredSlides: true,
			speed:800,
	
		    breakpoints: { 
		       	320: {  //当屏幕宽度大于等于320
		        	slidesPerView: 1.2,
		        	spaceBetween: 20
		        },
			    768: {  //当屏幕宽度大于等于768 
			        slidesPerView: 2.35,
			        spaceBetween: 14
			    },
			    992: {  //当屏幕宽度大于等于1280
			        slidesPerView: 2.35,
			        spaceBetween: 40
			    },
			    1280: {  //当屏幕宽度大于等于1280
			        slidesPerView: 3.35,
			        spaceBetween: 40
			    }
		    }
		});

		var Swiper2 = new Swiper('#swiper2', {
			controller: {
			    control: Swiper1, //控制Swiper1
			},
			loop:true,
			centeredSlides: true,
			speed:800,
		    navigation: {
		       nextEl: '.IndNext',
		       prevEl: '.IndPrev',
		    },
		    autoplay: {
			    delay: 3000,
			},
		    breakpoints: { 
		       	320: {  //当屏幕宽度大于等于320
		        	slidesPerView: 1.2,
		        	spaceBetween: 20
		        },
			    768: {  //当屏幕宽度大于等于768 
			        slidesPerView: 2.35,
			        spaceBetween: 14
			    },
			    992: {  //当屏幕宽度大于等于1280
			        slidesPerView: 2.35,
			        spaceBetween: 40
			    },
			    1280: {  //当屏幕宽度大于等于1280
			        slidesPerView: 3.35,
			        spaceBetween: 40
			    }
		    }
		});
		
		Swiper1.controller.control = Swiper2;//Swiper1控制Swiper2，需要在Swiper2初始化后
		Swiper2.controller.control = Swiper1;//Swiper2控制Swiper1，需要在Swiper1初始化后

		//导航滚动效果
		$(window).scroll(function(){
			if($(window).scrollTop() > $('.header').height()){
				$('body').addClass("header-change");
			}else{
				$('body').removeClass("header-change");
			} 
		});

		let h = $('.ban-section').height() - $('.header').height();
	    $(".more-a").click(function(){
	        $('body,html').animate({scrollTop:h},800);
	    });

	    $(window).scroll(function(){
            $('.position').each(function(index){
                if ($(window).scrollTop()>=$('.position').eq(index).offset().top-$('header').height()) {
                    $('.menu-item').removeClass('active');
                    $('.menu-item').eq(index).addClass('active');
                }
            })
    	})

    	$('.menu-item').click(function(){
            let index = $(this).index();
            let ih = $('.position').eq(index).offset().top - $('header').height() + 1;
            $('html,body').animate({scrollTop:ih},800);
        })

        $('.menuA').click(function(){
        	if ($(window).width()<959) {
        		$('.hd-nav').fadeOut();
        		$('.wap-hd-nav').removeClass('active');
        		$('body').removeClass('overF');
        	}
        })

        //wap下拉菜单
		$('.wap-hd-nav').click(function(){	  
		  	if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$('.hd-nav').fadeIn(200);
				$('body').addClass('overF');
		  }else{
				$(this).removeClass('active');
				$('.hd-nav').fadeOut(100);
				$('body').removeClass('overF');
		  	}
		});

		//aos
        AOS.init({
            once:"true",
            easing: 'ease',
            duration: 600,
        });
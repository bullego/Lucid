$(document).ready(function() {	

//______________________________burger-menu
	$('#btn__burger-menu').on('click', function() {

		$('.main-nav__list--mobile').toggle('fast');
		/*$('.main-nav__list--mobile').css('display', 'flex');*/
		$('ul.main-nav__list--mobile > li:has(a)').each(function () {
            $(this).removeClass('main-nav__item--active');            
        })        

	});
	$('ul.main-nav__list--mobile > li:has(a)').click( function(){
		
    	$('ul.main-nav__list--mobile > li:has(a)').each(function () { 
            $(this).removeClass('main-nav__item--active-mobile');    
        })        
        $(this).addClass('main-nav__item--active-mobile'); 

    });
//______________________________burger-menu-scroll
	$('.scroll-header-bg #btn__burger-menu').on('click', function() {

		$('.main-nav__list--mobile').toggle('fast');
		/*$('.main-nav__list--mobile').css('display', 'flex');*/
		$('ul.main-nav__list--mobile > li:has(a)').each(function () {
            $(this).removeClass('main-nav__item--active');            
        })        

	});
	$('ul.main-nav__list--mobile > li:has(a)').click( function(){
		
    	$('ul.main-nav__list--mobile > li:has(a)').each(function () { 
            $(this).removeClass('main-nav__item--active-mobile');    
        })        
        $(this).addClass('main-nav__item--active-mobile'); 

    });
//______________________________soft-scroll menu-item for desktop
    $("#menu").on("click","a", function (event) {
    
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке (т.е. переход по ссылке)       
        var idMenu  = $(this).attr('href'); //забираем идентификатор блока с атрибута href        
        var section = $(idMenu).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь       
        
        $('body,html').animate({scrollTop: section}, 1500);
    });
//______________________________soft-scroll menu-item for mobile
    $("#scroll-menu").on("click","a", function (e) {
    
        e.preventDefault(); //отменяем стандартную обработку нажатия по ссылке (т.е. переход по ссылке)        
        var idMenu = $(this).attr('href'); //забираем идентификатор блока с атрибута href        
        var section = $(idMenu).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь         
        var burgerMenuHeight = ($(window).height() - 400); //отнимаем от высоты экрана высоту випадающего меню       
        
        if($("body").width() > 768) {

        	$('body,html').animate({scrollTop: section}, 1500);

        } else if ($("body").width() <= 768) {

        	$('body,html').animate({scrollTop: section - burgerMenuHeight}, 1500);        	
        }
    });

	
	$(window).scroll(function() {
//______________________________change blue marker menu for desktop
		if ($(this).scrollTop() <= 590 && $("body").width() >= 992) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('ul.main-nav__list > li:eq(0)').addClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(0)').addClass('main-nav__item--active');

		} else if ($(this).scrollTop() > 590 && $(this).scrollTop() <= 1175 && $("body").width() >= 992) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(1)').addClass('main-nav__item--active');

		} else if ($(this).scrollTop() > 1175 && $(this).scrollTop() <= 2380 && $("body").width() >= 992) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(2)').addClass('main-nav__item--active');

		}  else if ($(this).scrollTop() > 2380 && $(this).scrollTop() <= 3190 && $("body").width() >= 992) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(3)').addClass('main-nav__item--active');

		}  else if ($(this).scrollTop() > 3190 && $(this).scrollTop() <= 4000 && $("body").width() >= 992) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(4)').addClass('main-nav__item--active');

		}  else if ($(this).scrollTop() > 4000 && $("body").width() >= 992) {		

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(5)').addClass('main-nav__item--active');

		}
//______________________________change blue marker menu for tablet
		if ($(this).scrollTop() <= 590 && $("body").width() < 992 && $("body").width() > 768) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('ul.main-nav__list > li:eq(0)').addClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(0)').addClass('main-nav__item--active');

		} else if ($(this).scrollTop() > 590 && $(this).scrollTop() <= 1475 && $("body").width() < 992 && $("body").width() > 768) {	

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(1)').addClass('main-nav__item--active');

		} else if ($(this).scrollTop() > 1475 && $(this).scrollTop() <= 2590 && $("body").width() < 992 && $("body").width() > 768) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(2)').addClass('main-nav__item--active');

		}  else if ($(this).scrollTop() > 2590 && $(this).scrollTop() <= 3490 && $("body").width() < 992 && $("body").width() > 768) {			

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(3)').addClass('main-nav__item--active');

		}  else if ($(this).scrollTop() > 3490 && $(this).scrollTop() <= 4750 && $("body").width() < 992 && $("body").width() > 768) {			

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(4)').addClass('main-nav__item--active');

		}  else if ($(this).scrollTop() > 4750 && $("body").width() < 992 && $("body").width() > 768) {

			$('ul.main-nav__list > li').removeClass('main-nav__item--active');
			$('.scroll-header-bg  ul.main-nav__list > li:eq(5)').addClass('main-nav__item--active');

		}
//______________________________appear scroll-header		
		if ($(this).scrollTop() > 80) {
			$('.scroll-header-bg').fadeIn();			
		} else {
			$('.scroll-header-bg').fadeOut();			
		}
//______________________________appear scroll-top button		
		if ($(this).scrollTop() > 640) {
			$('.btn__scroll-top').fadeIn();
		} else {
			$('.btn__scroll-top').fadeOut();
		}

	});	
	$('.btn__scroll-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});	
//______________________________form validation
	var inputs = $('input.validate');
	var message = $('textarea.validate');

	$('form').submit(function(e) {

		var error = false;

		for(var i = 0; i < inputs.length; i++) {

			if( inputs.eq(i).val() === '' ) {
				inputs.eq(i).addClass('error-field');				
				error = true;
			} else {
				inputs.eq(i).removeClass('error-field');			
			}
		}		

		if( message.val() === '' ) {				
			message.addClass('error-field');
			error = true;
		} else {
			message.removeClass('error-field');			
		}
		
		if(error) {
			e.preventDefault(); //не отправит форму если error = true
		}
	});	
//______________________________slider
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		//autoplaySpeed: 2000,
		//variableWidth: true,
		//centerMode: true,
		//centerPadding: '60px',
		cssEase: 'ease-in',    
		infinite: true, 	
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 767,

				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,								
					cssEase: 'ease-in'						
				}
			}
		]
	});	
//______________________________animate.css + WOW
	new WOW().init();

});
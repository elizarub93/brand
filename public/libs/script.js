$(document).ready(function(){
	$('.review__items').slick({
		arrows: false,
		dots: true,
		autoplay: true
	});
	//функция показывающая выпадающее меню
	function showDropdown(btn, dropdown){
		$(btn).on('click', function(){
			$(this).siblings(dropdown).toggleClass('active');
		})
	};
	$('.search__item').on('click', function(){
		$('.search__button span').text($(this).text());
		$('.search__menu').removeClass('active');
	});
	$('.sort__list li').on('click', function(){
		$(this).parent('.sort__list').siblings('.sort__choose').text($(this).text());
		$(this).parent('.sort__list').removeClass('active');
	});
	showDropdown('.search__button','.search__menu');
	showDropdown('.header__account','.account__dropdown');
	showDropdown('.sort__choose','.sort__list');

	//раскрывающее меню категорий
	$('.category__header').on('click', function(){
		$(this).toggleClass('active').siblings('.category__items').toggleClass('active')
	});

	$( function() {
	    $( ".filter__slider" ).slider({
	      range: true,
	      min: 0,
	      max: 500,
	      values: [ 52, 400 ],
	      slide: function( event, ui ) {
	      }
	    });
	    $( "#price" ).val( "$" + $( ".range__slider" ).slider( "values", 0 ) +
	      " - $" + $( ".range__slider" ).slider( "values", 1 ) );
	  } );
});
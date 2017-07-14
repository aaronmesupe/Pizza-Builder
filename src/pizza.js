// Write your Pizza Builder JavaScript in this file.
window.onload = function() {
event.preventDefault();
var liPrice = $('.price').find('li');

$('.btn-crust').toggleClass('active');
$('.btn-sauce').toggleClass('active');
$('.sauce').toggleClass('sauce-white');
$(liPrice[3]).hide();
$('.crust').toggleClass('crust-gluten-free');
$(liPrice[4]).hide();
$('strong').text('$13')


/*if( $('section').hasClass('crust-gluten-free') === true) {
	$('section').removeClass('crust-gluten-free');
};

if( $('section').hasClass('sauce-white') === true) {
	$('section').removeClass('sauce-white');
};

if( $('button').hasClass('btn-sauce') === true) {
	$('button').removeClass('btn-sauce');
};*/






$('.btn-pepperonni').click(function(){
		$('.pep').fadeToggle();
		$(liPrice[0]).fadeToggle();
});

$('.btn-mushrooms').click(function(){
		$('.mushroom').fadeToggle();
		$(liPrice[1]).fadeToggle();
});

$('.btn-green-peppers').click(function(){
		$('.green-pepper').fadeToggle();
		$(liPrice[2]).fadeToggle();
});

$('.btn-sauce').click(function(){
		$('.sauce').toggleClass('sauce-white');
		$('.btn-sauce').toggleClass('active');
		$(liPrice[3]).fadeToggle();
});

$('.btn-crust').click(function(){
		$('.crust').toggleClass('crust-gluten-free');
		$('.btn-crust').toggleClass('active');
		$(liPrice[4]).fadeToggle();
});




}
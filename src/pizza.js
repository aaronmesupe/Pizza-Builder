// Write your Pizza Builder JavaScript in this file.
window.onload = function() {

if( $('section').hasClass('crust-gluten-free') === true) {
	$('section').removeClass('crust-gluten-free');
};

if( $('section').hasClass('sauce-white') === true) {
	$('section').removeClass('sauce-white');
};


event.preventDefault();

$('.btn-pepperonni').click(function(){
		$('.pep').fadeToggle();
});

$('.btn-mushrooms').click(function(){
		$('.mushroom').fadeToggle();
});

$('.btn-green-peppers').click(function(){
		$('.green-pepper').fadeToggle();
});

$('.btn-sauce').click(function(){
		$('.sauce').toggleClass('sauce-white');
});

$('.btn-crust').click(function(){
		$('.crust').toggleClass('crust-gluten-free');
});








}
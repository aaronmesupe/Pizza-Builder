// Write your Pizza Builder JavaScript in this file.
window.onload = function() {
event.preventDefault();

$('.btn-crust').toggleClass('active');
$('.btn-sauce').toggleClass('active');
$('.sauce').toggleClass('sauce-white');	
$('.crust').toggleClass('crust-gluten-free');

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
});

$('.btn-mushrooms').click(function(){
		$('.mushroom').fadeToggle();
});

$('.btn-green-peppers').click(function(){
		$('.green-pepper').fadeToggle();
});

$('.btn-sauce').click(function(){
		$('.sauce').toggleClass('sauce-white');
		$('.btn-sauce').toggleClass('active');
});

$('.btn-crust').click(function(){
		$('.crust').toggleClass('crust-gluten-free');
		$('.btn-crust').toggleClass('active');
});




}
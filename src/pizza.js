// Write your Pizza Builder JavaScript in this file.
window.onload = function() {

/*var btnPepperonni = document.getElementsByClassName('btn-pepperonni');
btnPepperonni.addEventListener('click', togglePepperonni, false);

//var btnGreenPeppers =  

function togglePepperonni (){
	$('.btn-pepperonni').click(function(){
		$('.pep').fadeToggle("slow" , "linear");
	
	});
}*/


$('.btn-pepperonni').click(function(){
		$('.pep').fadeToggle("slow" , "linear");
});

$('.btn-mushroom').click(function(){
		$('.mushroom').fadeToggle("slow" , "linear");
});

$('.btn-green-peppers').click(function(){
		$('.green-pepper').fadeToggle("slow" , "linear");
});

$('.btn-sauce').click(function(){
		$('.sauce-white').fadeToggle("slow" , "linear");
});

$('.btn-crust').click(function(){
		$('.crust-gluten-free').fadeToggle("slow" , "linear");
});








}
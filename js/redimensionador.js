$(document).ready(function(){
	var ancho_ventana = $(this).width();
	if(ancho_ventana < 603){
		$(".card").css("width","100%");

	} else{
		$(".card").css("width","18rem");
	}
	
$(window).resize(function(){
	var ancho_ventana = $(this).width();
	if(ancho_ventana < 603){
		$(".card").css("width","100%");

	} else{
		$(".card").css("width","18rem");
	}
});




});
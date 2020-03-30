
//flechas izquierda navbar
$("#boton-prueba").click(function () {
    $(".scrollmenu").animate({
        scrollLeft: "-=50",
    }, 500, function () {
        // Animation complete.
    });
});
//flecha derecha navbar
$("#boton-prueba2").click(function () {
    $(".scrollmenu").animate({
        scrollLeft: "+=50",
    }, 500, function () {

        // Animation complete.
    });
});
//Search header,mostrar y oculta input al presionar la lupa
$(document).ready(function()
	    {
            $("#ocultar").hide()
	    $("#view").on( "click", function() {	 
	        $('#ocultar').toggle();
	         });
        });

//filtar busqueda

        

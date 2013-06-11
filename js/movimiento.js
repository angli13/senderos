var img = document.getElementById('bg'); 
var logo = document.getElementById('logosenderos'); 
//or however you get a handle to the IMG
var height = img.clientHeight;
var width = img.clientWidth;
$('#logosenderos').css('width',width);
$('#page').live('pageshow', function(event) {
$('#logosenderos').addClass('posicion');
$('#logosenderos').removeClass('logoinicio');
});


$('#detailsPage').live('pageshow', function(event) {
$('#logosenderos').addClass('logoinicio');
$('#logosenderos').removeClass('posicion');	
});

$('#clientesListaPagina').live('pageshow', function(event) {
$('#logosenderos').addClass('logoinicio');
$('#logosenderos').removeClass('posicion');	
});
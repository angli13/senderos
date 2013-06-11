$('#paginaMapa').live('pageshow', function(event) {   
   // This is the minimum zoom level that we'll allow
   	var lat = getUrlVars()['lat'];
	var long = getUrlVars()['long'];
	var direccion = getUrlVars()['dir'];

$('#map_canvas').gmap({ 'center': lat+','+long });
$('#map_canvas').gmap('addMarker', { 
				'position': new google.maps.LatLng(lat, long), 
				'bounds': true 
			});
    
});
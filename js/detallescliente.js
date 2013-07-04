$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()['id'];
	$.getJSON(serviceURL + 'getcliente.php?id='+id, mostrarCliente);

});

function mostrarCliente(data) {
	var cliente = data.item;
	console.log(cliente);
	$('#clienteLogo').attr('src', 'http://blackbearapps.net63.net/senderos/directorio/pics/thumbs/' + cliente.LOGO);
	$('#clienteNombre').text(cliente.NOMBRE);
	//$('#clienteDesc').text(cliente.DESCRIPCION);
	$('#headerCliente').text(cliente.NOMBRE);
	$('#clienteSlogan').text(cliente.SLOGAN);
	
	//$('#clienteDir').text(cliente.DIRECCION);

	console.log(cliente.TELEFONO);
		if (cliente.F_PAGO==1) {
			$('#iconitos').append('<a href="#poptarjeta" data-rel="popup" data-transition="pop"><img src="pics/iconos/tarjeta.png"/></a>');
		}
		if (cliente.SERV_DOM==1) {
			$('#iconitos').append('<a href="#popdomicilio" data-rel="popup" data-transition="pop"><img src="pics/iconos/domic.png"/></a>');
		}
		if (cliente.HORARIO) {
			$('#horario').html(cliente.HORARIO);
			$('#iconitos').append('<a href="#horario" data-rel="popup" data-transition="pop"><img src="pics/iconos/horario.png"/></a>');
		}
		if (cliente.DESCRIPCION) {	
		$('#desc').html('<p>'+cliente.DESCRIPCION+'<p>');
		$('#actionList').append('<li><a href="#desc" data-rel="popup" data-transition="pop"><div id="logodesc"><img src="pics/iconos/info.png"/></div><h3>Descripción</h3>' +
				'<p>' + cliente.DESCRIPCION + '</p></a></li>');
	}
	
	if (cliente.DIRECCION) {	
		$('#dir').html('<p>'+cliente.DIRECCION+'<p>');
		$('#actionList').append('<li><a href="#dir" data-rel="popup" data-transition="pop"><div id="direccion"><img src="pics/iconos/mapa.png"/></div><h3>Dirección</h3>' +
				'<p>' + cliente.DIRECCION + '</p></a></li>');
			if((cliente.LAT)||(cliente.LNG)){
				$('#dir').append('<a href="map.html?lat='+cliente.LAT+'&long='+cliente.LNG+'" class="botonmapa">Ver Mapa</a>');
				}
	}
	if (cliente.TELEFONO) {
		$('#actionList').append('<li><a href="tel:' + cliente.TELEFONO + '"><div id="telefono"><img src="pics/iconos/telefono.png"/></div><h3>Llamar</h3>' +
				'<p>' + cliente.TELEFONO + '</p></a></li>');
	}
		if (cliente.PAGINA) {
		$('#actionList').append('<li><a id="listaweb" class="listado" rel="http://'+cliente.PAGINA+'"><div id="web"><img src="pics/iconos/web.png"/></div><h3>Página Web</h3>' +
				'<p>' + cliente.PAGINA + '</p></a></li>');
		}
	
	if (cliente.FACEBOOK) {
		$('#actionList').append('<li><a id="listafacebook" class="listado" rel="http://www.facebook.com/'+cliente.FACEBOOK+'"><div id="facebook"><img src="pics/iconos/facebook.png"/></div><h3>Facebook</h3>' +
				'<p>' + cliente.FACEBOOK + '</p></a></li>');
	}
	if (cliente.TWITTER) {
		$('#actionList').append('<li><a id="listatwitter" rel="http://www.twitter.com/'+cliente.TWITTER+'" class="listado"><div id="twitter"><img src="pics/iconos/twitter.png"/></div><h3>Twitter</h3>' +
				'<p>' + cliente.TWITTER + '</p></a></li>');
	}
		if (cliente.EMAIL) {
		$('#actionList').append('<li><a rel="external" href="mailto:'+cliente.EMAIL+'"><div id="email"><img src="pics/iconos/email.png"/></div><h3>Email</h3>' +
				'<p>' + cliente.EMAIL + '</p></a></li>');
	}


	/*if (true) {
	$('#actionList').append('<li><a href="galleria/plugins/flickr/flickr-demo.html><h3>Galeria</h3>' +
				'<p>Galeria</p></a></li>');
	}*/
	
	$('#actionList').listview('refresh');
		$('.listado').live('tap', function() {
   		url = $(this).attr("rel");   
    	loadURL(url);
		});
	
}



function loadURL(url){
    navigator.app.loadUrl(url, { openExternal:true });
    return false;
} 


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

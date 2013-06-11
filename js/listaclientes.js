var serviceURL = "http://blackbearapps.net63.net/senderos/services/";

var clientes;
function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

$('#clientesListaPagina').live('pageshow', function(event) {
	getClientesLista();
});

function getClientesLista() {
	$.getJSON(serviceURL + 'getclientes.php', function(data) {
		$('#clientesLista li').remove();
		clientes = data.items;
		$.each(clientes, function(index, cliente) {
			$('#clientesLista').append('<li><a href="detallescliente.html?id=' + cliente.ID + '">' +
					'<img  id="clogo" src="http://blackbearapps.net63.net/senderos/directorio/pics/' + cliente.LOGO + '"/>' +
					'<h4 class="grande">'+cliente.NOMBRE+'</h4>' +
					'<p class="fontface">' + encode_utf8(cliente.SLOGAN) + '</p>' +
					'</a></li>');
		});
		
		$('#clientesLista').listview('refresh');
	});
}
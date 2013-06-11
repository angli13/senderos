$(document).bind("mobileinit", function(){
	$.mobile.allowCrossDomainPages=true;
	$.support.cors=true;
    $.extend($.mobile, {
        loadingMessage: "Cargando..."
    });
    $.mobile.page.prototype.options.backBtnText = "&laquo; Atras";
});// Java Document
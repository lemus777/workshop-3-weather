// función que se ejecuta al pulsar el botón buscar dirección
let getCoords = function() {
    // Creamos el objeto geodecoder
    var geocoder = new google.maps.Geocoder();

    address = document.getElementById('search').value;
    if(address!='') {
        // Llamamos a la función geodecode pasandole la dirección que hemos introducido en la caja de texto.
        geocoder.geocode({ 'address': address}, function(results, status) {
            if (status == 'OK') {
                // Mostramos las coordenadas obtenidas en el p con id coordenadas
                let coordenadas = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];

                return coordenadas;
            }
        });
    }
}
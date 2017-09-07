var Maps = function () {
    //function to initiate GMaps
    //Gmaps.js allows you to use the potential of Google Maps in a simple way.
    //For more information, please visit http://hpneo.github.io/gmaps/documentation.html
    var runMaps = function () {
        // Basic Map 
        map = new GMaps({
            el: '#map1',
            lat: -12.043333,
            lng: -77.028333
        });
        //Markers
        map2 = new GMaps({
            div: '#map2',
            lat: -12.043333,
            lng: -77.028333
        });
        map2.addMarker({
            lat: -12.043333,
            lng: -77.03,
            title: 'Lima',
            details: {
                database_id: 42,
                author: 'HPNeo'
            },
            click: function (e) {
                if (console.log)
                    console.log(e);
                alert('You clicked in this marker');
            }
        });
        map2.addMarker({
            lat: -12.042,
            lng: -77.028333,
            title: 'Marker with InfoWindow',
            height: '200px',
            infoWindow: {
                content: '<p>HTML Content</p>'
            }
        });
        //Street View 
        panorama = GMaps.createPanorama({
            el: '#map3',
            lat: 42.3455,
            lng: -71.0983
        });
        //Search Address
        map = new GMaps({
            div: '#map4',
            lat: -12.043333,
            lng: -77.028333
        });
        $('#geocoding_form').submit(function (e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#address').val().trim(),
                callback: function (results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });
        //Interacting
        var map;
        // Update position
        $(document).on('submit', '.edit_marker', function (e) {
            e.preventDefault();
            var $index = $(this).data('marker-index');
            $lat = $('#marker_' + $index + '_lat').val();
            $lng = $('#marker_' + $index + '_lng').val();
            var template = $('#edit_marker_template').text();
            // Update form values
            var content = template.replace(/{{index}}/g, $index).replace(/{{lat}}/g, $lat).replace(/{{lng}}/g, $lng);
            map.markers[$index].setPosition(new google.maps.LatLng($lat, $lng));
            map.markers[$index].infoWindow.setContent(content);
            $marker = $('#markers-with-coordinates').find('li').eq(0).find('a');
            $marker.data('marker-lat', $lat);
            $marker.data('marker-lng', $lng);
        });
        // Update center
        $(document).on('click', '.pan-to-marker', function (e) {
            e.preventDefault();
            var lat, lng;
            var $index = $(this).data('marker-index');
            var $lat = $(this).data('marker-lat');
            var $lng = $(this).data('marker-lng');
            if ($index != undefined) {
                // using indices
                var position = map.markers[$index].getPosition();
                lat = position.lat();
                lng = position.lng();
            } else {
                // using coordinates
                lat = $lat;
                lng = $lng;
            }
            map.setCenter(lat, lng);
        });
        map = new GMaps({
            div: '#map5',
            lat: -12.043333,
            lng: -77.028333
        });
        GMaps.on('marker_added', map, function (marker) {
            $('#map-ui').append('<tr><td><a href="#" class="pan-to-marker" data-marker-index="' + map.markers.indexOf(marker) + '">' + marker.title + '</a></td><td><a href="#" class="pan-to-marker" data-marker-lat="' + marker.getPosition().lat() + '" data-marker-lng="' + marker.getPosition().lng() + '">' + marker.title + '</a></td></tr>');
        });
        GMaps.on('click', map.map, function (event) {
            var index = map.markers.length;
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            var template = $('#edit_marker_template').text();
            var content = template.replace(/{{index}}/g, index).replace(/{{lat}}/g, lat).replace(/{{lng}}/g, lng);
            map.addMarker({
                lat: lat,
                lng: lng,
                title: 'Marker #' + index,
                infoWindow: {
                    content: content
                }
            });
        });
    };
    return {
        //main function to initiate template pages
        init: function () {
            runMaps();
        }
    };
}();
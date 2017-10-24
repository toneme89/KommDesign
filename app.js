function createMap() {
    // Locations
    var city = new google.maps.LatLng(59.118858, 11.3905363);
    var delikatesse = new google.maps.LatLng(59.1254839, 11.4438377);
    var sarpsborg = new google.maps.LatLng(59.2840729, 11.1094028);
    var fredrikstad = new google.maps.LatLng(59.2205369, 10.9347012);
    var spydberg = new google.maps.LatLng(59.617228, 11.080573);
    var hvaler = new google.maps.LatLng(59.0624708, 10.872568);
    var aremark = new google.maps.LatLng(59.2441615, 11.6824333);
    var marker = new google.maps.LatLng(59.4805101, 11.6602541);
    var romskog = new google.maps.LatLng(59.7039495, 11.8005737);
    var trogstad = new google.maps.LatLng(59.64106, 11.3154054);
    var askim = new google.maps.LatLng(59.5853215, 11.1601534);
    var eidsberg = new google.maps.LatLng(59.5537841, 11.3257465);
    var skiptvet = new google.maps.LatLng(59.4732336, 11.162501);
    var rakkestad = new google.maps.LatLng(59.4279935, 11.3430678);
    var rode = new google.maps.LatLng(59.3521984, 10.871493);
    var rygge = new google.maps.LatLng(59.380369, 10.7533953);
    var voler = new google.maps.LatLng(59.4900803, 10.8582484);
    var hobol = new google.maps.LatLng(59.6262219, 11.0256631);

    //Initiate map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: city,
        zoom: 16,

        options: {
            scrollWheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            disableDefaultUI: true
        },


        //https://developers.google.com/maps/documentation/javascript/styling - Style Map.
        styles: [
            {
                elementType: 'geometry', stylers: [{color: '#242f3e'}]
            },
            {
                elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]
            },
            {
                elementType: 'labels.text.fill', stylers: [{color: '#746855'}]
            },
            {
                elementType: 'labels.text.fill', featureType: 'administrative.locality', stylers: [{color: '#d59563'}]
            },
            {
                elementType: 'labels.text.fill', featureType: 'poi', stylers: [{color: '#d59563'}]
            },
            {
                elementType: 'geometry', featureType: 'poi.park', stylers: [{color: '#263c3f'}]
            },
            {
                elementType: 'labels.text.fill', featureType: 'poi.park', stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road', elementType: 'geometry', stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road', elementType: 'geometry.stroke', stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road', elementType: 'labels.text.fill', stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit', elementType: 'geometry', stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water', elementType: 'geometry', stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water', elementType: 'labels.text.fill', stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water', elementType: 'labels.text.stroke', stylers: [{color: '#17263c'}]
            }
        ]
    });

    map.data.loadGeoJson('js/geodata.json');
    map.data.setStyle({
      fillColor: '#FF0000'
    });

    


    //Initiate markers, with a position, which map it belongs to and a mouseover title
   
    //Halden
    var markerDelikatesse = new google.maps.Marker({
        position: delikatesse,
        map: map,
        title: 'Tistedalen Delikatesse'
    });  

    // Create a bounds of all markers in order to calculate center position
    var bounds = new google.maps.LatLngBounds();

    // Delikatesse center
    bounds.extend(markerDelikatesse.position);

    bounds.extend(city);
    bounds.extend(sarpsborg);
    bounds.extend(fredrikstad);
    bounds.extend(spydberg);
    bounds.extend(hvaler);
    bounds.extend(aremark);
    bounds.extend(marker);
    bounds.extend(romskog);
    bounds.extend(trogstad);
    bounds.extend(askim);
    bounds.extend(eidsberg);
    bounds.extend(skiptvet);
    bounds.extend(rakkestad);
    bounds.extend(rode);
    bounds.extend(rygge);
    bounds.extend(voler);
    bounds.extend(hobol);
    
    map.fitBounds(bounds);

    google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
}

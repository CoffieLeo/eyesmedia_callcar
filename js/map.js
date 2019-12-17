var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{ 
        center: new google.maps.LatLng(-33.91722, 151.23064), 
        zoom: 16,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });

    var iconBase = 'img/map/';

    var icons = {
        location:{
            icon: iconBase + 'location.svg'
        },
        user: {
            icon: iconBase + 'user.svg'
        },
        taxi: {
            icon: iconBase + 'taxi.svg'
        }
    };

    var features = [
        {
            position: new google.maps.LatLng(-33.91721, 151.22630),
            type: 'taxi'
        }, {
            position: new google.maps.LatLng(-33.91539, 151.22820),
            type: 'taxi'
        }, {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: 'taxi'
        }, {
            position: new google.maps.LatLng(-33.91910, 151.22907),
            type: 'taxi'
        }, {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: 'taxi'
        }, {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: 'taxi'
        },{
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: 'user'
        }
    ];

    // Create markers.
    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };
}
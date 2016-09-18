var styleArray = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

var coordonate = [
    {lat: 48.736677, lng: 1.368959}
];

var markers = [];
var map;

function initMap() {
    if ($(window).width() < 768) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            zoomControl: true,
            scaleControl: false,
            scrollwheel: false,
            draggable: false,
            center: {lat: 48.736677, lng: 1.368959},
            styles: styleArray,
            disableDefaultUI: true
        });
    } else {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            zoomControl: true,
            scaleControl: false,
            scrollwheel: false,
            draggable: true,
            center: {lat: 48.736677, lng: 1.368959},
            styles: styleArray,
            disableDefaultUI: true
        });
    };
}

function drop() {
    for (var i = 0; i < coordonate.length; i++) {
        addMarkerWithTimeout(coordonate[i], i * 200);
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
        var image = '../static/img/picto_marker.png';
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}
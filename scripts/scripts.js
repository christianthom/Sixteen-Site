var myLatlng = new google.maps.LatLng(-6.148434,106.699523);
var mapOptions = {
  zoom: 15,
  center: new google.maps.LatLng(-6.146591, 106.699604),
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var image = 'images/map-marker-small.png';
var marker = new google.maps.Marker({
    position: myLatlng,
    icon: image
});

// To add the marker to the map, call setMap();
marker.setMap(map);
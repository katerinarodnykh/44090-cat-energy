function initMap() {
  var uluru = {lat: 59.938955, lng: 30.323115};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  image = 'img/map-pin.png'
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
}

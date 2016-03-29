const google = window.google

export function initMap (id) {
  return new google.maps.Map(document.getElementById(id), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  })
}

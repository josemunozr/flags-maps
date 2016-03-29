const google = window.google

export function initMap (id, positions) {
  return new google.maps.Map(document.getElementById(id), {
    center: positions,
    zoom: 12
  })
}

export function geolocation (callback) {
  if (navigator.geolocation) {
    callback(navigator.geolocation)
  }
}


const google = window.google

export function initMap (id, position, zoom) {
  return new google.maps.Map(document.getElementById(id), {
    center: position,
    zoom: zoom
  })
}

export function geolocation (callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      if (callback) callback({ lat: lat, lng: lng })
    }, (err) => {
      if (err) callback(err)
    })
  }
}

export function createMarker (location, map) {
  return new google.maps.Marker({
    position: location,
    title: 'new marker',
    map: map
  })
}

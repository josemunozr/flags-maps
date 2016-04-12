const google = window.google
var map = ''

export function initMap (id, position, zoom) {
  map = new google.maps.Map(document.getElementById(id), {
    center: position,
    zoom: zoom
  })
}

export function geolocation (callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      if (callback) callback(null, { lat: lat, lng: lng })
    }, (err) => {
      if (err) callback(err)
    })
  }
}

export function createMarker (lat, lng) {
  return new google.maps.Marker({
    title: 'new marker',
    map: map,
    position: new google.maps.LatLng(lat, lng)
  })
}

export function autocomplete (input) {
  let autocomplete = new google.maps.places.Autocomplete(document.getElementById(input))

  autocomplete.addListener('place_changed', function () {
    let place = autocomplete.getPlace()

    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry")
      return
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport)
    } else {
      map.setCenter(place.geometry.location)
      map.setZoom(17)
    }

    createMarker(place.geometry.location.lat(), place.geometry.location.lng())
  })
}

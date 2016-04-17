import window from 'global/window'

const google = window.google
var map = ''

export function initMap (id, position, zoom) {
  map = new google.Map(document.getElementById(id), {
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
  return new google.Marker({
    title: 'new marker',
    map: map,
    position: new google.LatLng(lat, lng)
  })
}

export function autocomplete (input, callback) {
  let autocomplete = new google.places.Autocomplete(document.getElementById(input))

  autocomplete.addListener('place_changed', () => {
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

    if (callback) callback(null, {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
  })
}

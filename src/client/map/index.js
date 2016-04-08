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

      if (callback) callback(null, { lat: lat, lng: lng })
    }, (err) => {
      if (err) callback(err)
    })
  }
}

export function createMarker (map) {
  return new google.maps.Marker({
    title: 'new marker',
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  })
}

export function autocomplete (input, map) {
  let marker = createMarker(map)

  let autocomplete = new google.maps.places.Autocomplete(document.getElementById(input))

  autocomplete.addListener('place_changed', function () {
    let place = autocomplete.getPlace()
    marker.setVisible(false)
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
    marker.setIcon(({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }))

    marker.setPosition(place.geometry.location)
    marker.setVisible(true)
  })
}

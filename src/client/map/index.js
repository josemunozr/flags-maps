const google = window.google

export function initMap (id, position, zoom) {
  return new google.maps.Map(document.getElementById(id), {
    center: position,
    zoom: zoom
  })
}

export function geolocation (idDom) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      return initMap(idDom, { lat: lat, lng: lng }, 13)
    }, (err) => {
      if (err) {
        // lat and lng of Santiago, Chile
        return initMap(idDom, {lat: -33.4488897, lng: -70.6692655}, 13)
      }
    })
  }
}


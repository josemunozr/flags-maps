const google = window.google

function _initMap (id, positions) {
  return new google.maps.Map(document.getElementById(id), {
    center: positions,
    zoom: 13
  })
}

export function geolocation (idDom) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lng = position.coords.longitude

      return _initMap(idDom, { lat: lat, lng: lng })
    }, (err) => {
      if (err) {
        // lat and lng of Santiago, Chile
        let lat = -33.4488897
        let lng = -70.6692655

        return _initMap(idDom, { lat: lat, lng: lng })
      }
    })
  }
}


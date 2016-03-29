import $ from 'jquery'
import 'materialize'
import {initMap, geolocation} from './map'

let lat = ''
let lng = ''

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

geolocation((geo) => {
  let myPosition = {}

  geo.getCurrentPosition((position) => {
    lat = position.coords.latitude
    lng = position.coords.longitude

    myPosition = { lat: lat, lng: lng }
    initMap('map', myPosition)
  }, (err) => {
    if (err) {
      // lat and lng of Santiago, Chile
      lat = -33.4488897
      lng = -70.6692655

      myPosition = { lat: lat, lng: lng }
      initMap('map', myPosition)
    }
  }
  )
})

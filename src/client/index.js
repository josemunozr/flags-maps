import $ from 'jquery'
import 'materialize'
import {initMap, geolocation, createMarker, autocomplete} from './map'

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

initMap('map', {lat: -33.4488897, lng: -70.6692655}, 8)

geolocation((err, position) => {
  if (err) return console.log('error location')
  initMap('map', position, 13)
  createMarker(position.lat, position.lng)
})

autocomplete('direction', (err, position) => {
  if (err) return console.log(err)
  createMarker(position.lat, position.lng)
})


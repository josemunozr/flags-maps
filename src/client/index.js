import $ from 'jquery'
import 'materialize'
import {initMap, geolocation, createMarker, autocomplete} from './map'

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

let map = initMap('map', {lat: -33.4488897, lng: -70.6692655}, 8)

geolocation((err, position) => {
  if (err) return console.log('error location')

  map = initMap('map', position, 13)
  let marker = createMarker(map)
  marker.setPosition(position)
})

autocomplete('direction', map)


import $ from 'jquery'
import 'materialize'
import {initMap, geolocation, createMarker} from './map'

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

var map = initMap('map', {lat: -33.4488897, lng: -70.6692655}, 8)

geolocation((position) => {
  map = initMap('map', position, 13)
  let marker = createMarker(position, map)
  console.log(marker)
})


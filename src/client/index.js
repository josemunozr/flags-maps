import $ from 'jquery'
import 'materialize'
import {initMap, geolocation} from './map'

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

let map = initMap('map', {lat: -33.4488897, lng: -70.6692655}, 8) // Coordenadas Santiago, Chile
map = geolocation('map')
console.log(map)

import $ from 'jquery'
import 'materialize'
import {initMap} from './map'

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

const map = initMap('map')
console.log(map)

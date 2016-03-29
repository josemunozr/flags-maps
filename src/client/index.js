import $ from 'jquery'
import 'materialize'
import {geolocation} from './map'

$('.button-collapse').sideNav({
  menuWidth: 500,
  edge: 'right'
})

const map = geolocation('map')
console.log(map)

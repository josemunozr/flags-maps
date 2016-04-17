// import $ from 'jquery'
// import 'materialize'
import socketio from 'socket.io-client'
import {initMap, geolocation, createMarker, autocomplete} from 'src/server/map'

const socket = socketio()

initMap('map', {lat: -33.4488897, lng: -70.6692655}, 8)

geolocation((err, position) => {
  if (err) return console.log('error location')
  initMap('map', position, 13)
  createMarker(position.lat, position.lng)
})

autocomplete('direction', (err, position) => {
  if (err) return console.log(err)
  socket.emit('marker', position)
  createMarker(position.lat, position.lng)
})


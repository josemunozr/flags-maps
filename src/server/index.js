import http from 'http'
import express from 'express'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT || 3000

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log(`Connected ${socket.id}`)
})

server.listen(port, () => console.log(`Server runing at http://localhost:${port}/`))

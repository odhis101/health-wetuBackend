import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const ambulanceLocation = {};

io.on('connect', (socket) => {
  console.log('Socket.IO client connected');


  socket.on('chat message', (message) => {
    console.log(`Socket.IO message received: ${message}`);

    // Echo the message back to the client
    socket.emit('chat message', 'message');
  });
  socket.on('user location', (location) => {
    console.log(`Socket.IO user location received: ${location}`);
    socket.emit('user location', location);
  });
  socket.on('ambulance location', (location) => {
    console.log(`Socket.IO ambulance location received: ${location}`);
    ambulanceLocation[socket.id] = location;
    console.log(ambulanceLocation);
    io.emit('ambulance location updated', ambulanceLocation);

 });

  socket.on('disconnect', () => {
    console.log('Socket.IO client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Socket.IO server listening on port 8080');
});





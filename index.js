import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Socket.IO client connected');

  socket.on('chat message', (message) => {
    console.log(`Socket.IO message received: ${message}`);

    // Echo the message back to the client
    socket.emit('chat message', message);
  });
  socket.on('user location', (location) => {
    console.log(`Socket.IO user  location received: ${location}`);

    // Echo the message back to the client
    socket.emit('user location', location);
  });

  socket.on('disconnect', () => {
    console.log('Socket.IO client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Socket.IO server listening on port 8080');
});





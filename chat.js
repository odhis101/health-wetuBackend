import io from 'socket.io-client';

const socket = io('http://192.168.0.29:8080');

socket.on('connect', () => {
  console.log('Socket.IO client connected');
  
  // Send a message to the server after the connection is established
  socket.emit('chat message', 'Hello, joshua!');
});

socket.on('chat message', (message) => {
  console.log(`Socket.IO message received: ${message}`);
});

socket.on('disconnect', () => {
  console.log('Socket.IO client disconnected');
});



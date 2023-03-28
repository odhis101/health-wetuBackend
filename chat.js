import io from 'socket.io-client';

const socket = io('http://10.66.5.84:8080');

socket.on('connect', () => {
  console.log('Socket.IO client connected');
  
  // Send a message to the server after the connection is established
  socket.emit('chat message', 'Hello, joshua!');
  socket.emit('user location', 'Trying to get location!');
});

socket.on('chat message', (message) => {
  console.log(`Socket.IO message received: ${message}`);
});
socket.on('userLocation', (locationData) => {
  console.log(`Received location data: ${locationData}`);
})

socket.on('disconnect', () => {
  console.log('Socket.IO client disconnected');
});



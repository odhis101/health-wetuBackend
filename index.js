
import WebSocket from 'ws';
const server = new WebSocket.Server({ port: 8080  });
console.log('Server listening on port 8080...')

server.on('connection', (socket) => {
    console.log('Client connected');
  
    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
  
      // Echo the message back to the client
      socket.send(message);
    });
  
    socket.on('close', () => {
      console.log('Client disconnected');
    });
  });
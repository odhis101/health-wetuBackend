
import io from 'socket.io-client';

const socket = io('wss://healthwetu.nw.r.appspot.com', { transports: ['websocket'] });

    socket.on('connect', () => {
      console.log('Socket.IO connected');

      // Send a message to the server after the connection is established
      socket.emit('chat message', 'Hello, server this is base testing !!!!');
    })


import express from 'express';
import http from 'http';
import os from 'os';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const apiRouter = express.Router();
app.use('/api', apiRouter);

server.listen(3000, () => {
  console.log('Listening on port 3000...');
});

const io = new Server(server, {
  path: '/socket.io',
});
io.on('connection', (socket) => {
  // WebSocketの接続が確立したときの処理
  console.log(`[connect] ${socket.id}`);
  console.log(Array.from(io.sockets.sockets.keys()));

  // convenience function to log server messages on the client
  function log(text: string) {
    socket.emit('log', `Message from server: ${text}`);
  }

  socket.on('message', (message) => {
    log(`Client said: ${message}`);
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  // eslint-disable-next-line complexity
  socket.on('create or join', (room) => {
    log(`Received request to create or join room ${room}`);

    const clientsInRoom = io.sockets.adapter.rooms.get(room);
    const numClients = clientsInRoom instanceof Set ? clientsInRoom.size : 0;

    if (typeof clientsInRoom !== 'undefined') {
      log(`Room ${room} now has ${numClients} client(s)`);
    } else {
      log(`Room ${room} does not exist`);
    }

    if (clientsInRoom instanceof Set) {
      // Set<string> の場合の条件を追加
      if (numClients === 0) {
        socket.join(room);
        log(`Client ID ${socket.id} created room ${room}`);
        socket.emit('created', room, socket.id);
      } else if (numClients === 1) {
        log(`Client ID ${socket.id} joined room ${room}`);
        io.to(room).emit('join', room);
        socket.join(room);
        socket.emit('joined', room, socket.id);
        io.to(room).emit('ready');
      } else {
        // max two clients
        socket.emit('full', room);
      }
    }
  });

  socket.on('ipaddr', () => {
    const ifaces = os.networkInterfaces();

    if (typeof ifaces === 'object') {
      for (const dev in ifaces) {
        if (Object.prototype.hasOwnProperty.call(ifaces, dev)) {
          const interfaceDetails = ifaces[dev];
          // eslint-disable-next-line max-depth
          if (Array.isArray(interfaceDetails)) {
            interfaceDetails.forEach((details) => {
              if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
                socket.emit('ipaddr', details.address);
              }
            });
          }
        }
      }
    }
  });

  socket.on('bye', () => {
    console.log('Received bye');
  });

  socket.on('connect', () => {
    console.log('Connect');
  });

  socket.on('disconnect', () => {
    console.log(`[disconnect] ${socket.id}`);
    console.log(Array.from(io.sockets.sockets.keys()));
  });
});

io.on('connect', (socket) => {
  console.log(`[connect] ${socket.id}`);
  console.log(Array.from(io.sockets.sockets.keys()));
});

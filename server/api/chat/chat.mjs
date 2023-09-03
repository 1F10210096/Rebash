import ws from 'ws';

const { Server } = ws;

const wss = new Server({ port: 5000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (data, isBinary) => {
    for (const client of wss.clients) {
      if (client.readyState === ws.OPEN) {
        client.send(data, { binary: isBinary });
      }
    }
  });

  ws.on('close', () => console.log('closed!'));
});

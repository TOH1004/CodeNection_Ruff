// signaling-server.js
const WebSocket = require('ws');

// Use Render's assigned PORT or 8080 locally
const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`Signaling server starting on port ${PORT}`);

wss.on('connection', ws => {
  console.log('New client connected');

  ws.on('message', message => {
    try {
      // We simply forward every message to the other connected clients
      // (For production, add rooms/auth and validate JSON.)
      console.log('Received:', message.toString());
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    } catch (e) {
      console.error('Error handling message', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

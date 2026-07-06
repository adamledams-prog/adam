const express = require('express');
const http    = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);

// Socket.io — gestion temps réel
io.on('connection', (socket) => {
  console.log(`[+] Joueur connecté : ${socket.id}`);

  socket.on('creer-partie', (data) => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    socket.join(code);
    socket.emit('partie-creee', { code });
    console.log(`Partie créée : ${code}`);
  });

  socket.on('rejoindre-partie', ({ code }) => {
    const room = io.sockets.adapter.rooms.get(code);
    if (!room) return socket.emit('erreur', { msg: 'Code invalide.' });
    socket.join(code);
    io.to(code).emit('joueur-rejoint', { id: socket.id });
  });

  socket.on('disconnect', () => {
    console.log(`[-] Joueur déconnecté : ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));

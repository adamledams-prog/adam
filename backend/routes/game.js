const express = require('express');
const router  = express.Router();

// GET /api/game/parties — liste les parties ouvertes
router.get('/parties', (req, res) => {
  // TODO: récupérer depuis la DB
  res.json({ parties: [] });
});

// POST /api/game/creer — créer une partie
router.post('/creer', (req, res) => {
  const { host } = req.body;
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  res.json({ success: true, code });
});

module.exports = router;

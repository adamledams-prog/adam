const express = require('express');
const router  = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  // TODO: enregistrer en base de données
  res.json({ success: true, message: `Compte créé pour ${username}` });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // TODO: vérifier en base de données
  res.json({ success: true, token: 'placeholder-token' });
});

module.exports = router;

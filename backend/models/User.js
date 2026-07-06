// Modèle utilisateur (à connecter avec une vraie DB ex: MongoDB)
class User {
  constructor(id, username, passwordHash, skin = 'red', coins = 0) {
    this.id           = id;
    this.username     = username;
    this.passwordHash = passwordHash;
    this.skin         = skin;
    this.coins        = coins;
    this.createdAt    = new Date();
  }
}

module.exports = User;

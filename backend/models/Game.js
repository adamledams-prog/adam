// Modèle partie
class Game {
  constructor(code, hostId) {
    this.code      = code;
    this.hostId    = hostId;
    this.players   = [hostId];
    this.status    = 'waiting'; // waiting | playing | finished
    this.createdAt = new Date();
  }

  addPlayer(playerId) {
    if (this.players.length < 10) {
      this.players.push(playerId);
      return true;
    }
    return false;
  }
}

module.exports = Game;

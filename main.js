function goTo(page) {
  switch (page) {
    case 'boutique':
      location.href = 'boutique.html';
      break;
    case 'compte':
      location.href = 'compte.html';
      break;
    case 'creer':
      alert('🎮 Créer une partie — bientôt disponible !');
      break;
    case 'trouver':
      alert('🔍 Trouver une partie — bientôt disponible !');
      break;
  }
}

function joinByCode() {
  const code = document.getElementById('codeInput').value.trim().toUpperCase();
  if (code.length < 4) {
    alert('❌ Entre un code valide (min. 4 caractères).');
    return;
  }
  alert(`🔑 Rejoindre la partie avec le code : ${code}`);
}

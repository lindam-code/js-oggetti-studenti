$(document).ready(function(){

  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  var oggettoStudente = {
    'nome': 'Linda',
    'cognome': 'Minotti',
    'eta': 34
  };
  // Stampare a schermo attraverso il for in tutte le proprietà.
  for (var key in oggettoStudente) {
    console.log(oggettoStudente[key]);
  };




});

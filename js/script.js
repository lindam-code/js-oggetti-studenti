$(document).ready(function(){

  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  var oggettoStudente = {
    'nome': 'Linda',
    'cognome': 'Minotti',
    'eta': 34
  };
  // Stampare a schermo attraverso il for in tutte le proprietà.
  // for (var key in oggettoStudente) {
  //   console.log(oggettoStudente[key]);
  // };

  // Creare un array di oggetti di studenti.
  var arrayClasse = [
    {
      'nome': 'Linda',
      'cognome': 'Minotti',
      'eta': 34
    },
    {
      'nome': 'Alice',
      'cognome': 'Doro',
      'eta': 27
    },
    {
      'nome': 'Lady',
      'cognome': 'Gaga',
      'eta': 32
    }
  ];
  // Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
  for (var i = 0; i < arrayClasse.length; i++) {
    var studente = arrayClasse[i];
    console.log(studente.nome + ' ' + studente.cognome);
  };



});

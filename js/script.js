// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// var oggettoStudente = {
//   'nome': 'Linda',
//   'cognome': 'Minotti',
//   'eta': 34
// };
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
console.log(arrayClasse);
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// for (var i = 0; i < arrayClasse.length; i++) {
//   var studente = arrayClasse[i];
//   console.log(studente.nome + ' ' + studente.cognome);
// };

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {};
nuovoStudente.nome = prompt('Scrivi il tuo nome');
nuovoStudente.cognome = prompt('Scrivi il tuo cognome');
nuovoStudente.eta = parseInt(prompt('Scrivi la tua eta'));
arrayClasse.push(nuovoStudente);
console.log(arrayClasse);

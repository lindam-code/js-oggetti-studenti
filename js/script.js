$(document).ready(function(){
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  var oggettoStudente = {
    'nome': 'Pippo',
    'cognome': 'Franco',
    'eta': 89
  };

  // Stampare a schermo attraverso il for in tutte le proprietà.
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(oggettoStudente);
  $('.single_student').append(html);

  // for (var key in oggettoStudente) {
  //
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
  var listaNomi = {};
  for (var i = 0; i < arrayClasse.length; i++) {
    var studente = arrayClasse[i];
    listaNomi.nome = studente.nome;
    listaNomi.cognome = studente.cognome;
    console.log(listaNomi);
  };
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < arrayClasse.length; i++) {
    var singoloStudente = arrayClasse[i];
    var html = template(singoloStudente);
    $('.class_name').append(html);
  }

  // L'utente attraverso prompt aggiunge uno studente
  var nuovoStudente = {};
  nuovoStudente.nome = prompt('Scrivi il tuo nome');
  nuovoStudente.cognome = prompt('Scrivi il tuo cognome');
  nuovoStudente.eta = parseInt(prompt('Scrivi la tua eta'));
  arrayClasse.push(nuovoStudente);
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < arrayClasse.length; i++) {
    var singoloStudente = arrayClasse[i];
    var html = template(singoloStudente);
    $('.class_new').append(html);
  }

  // FUNZIONI
  // Creo funzione per stampare a schermo un singolo oggetto studente
  function stampaStudente(infoStudente) {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(infoStudente);
    $('.student_container').append(html);
  };

  // Creo la funzione per stampare la lista degli studenti in un array con handlerbars
  function stampaListaStudenti() {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < arrayClasse.length; i++) {
      var singoloStudente = arrayClasse[i];
      var html = template(singoloStudente);
      $('.class_container').append(html);
    }
  }
});

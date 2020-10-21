// costo euro/km
var costoKm = 0.21;
console.log('COSTOKM', costoKm)

// creazione selettori da utilizzare
var campoTesto = document.getElementById('campoTesto');
var passeggero = document.getElementById('passeggero');
var percorrenza = document.getElementById('percorrenza');
var costoBiglietto = document.getElementById('costoBiglietto');
var fasciaDeta = document.getElementById('fasciaDeta');
var sconto = document.getElementById('sconto');
var numeroCarrozza = document.getElementById('numeroCarrozza');
var prenotazione = document.getElementById('prenotazione');
var tuobiglietto = document.getElementById('tuobiglietto');


// click bottone Genera biglietto
// creazione selettore bottone genera
var generabiglietto = document.getElementById('generabiglietto');
// avvenimenti al click del bottone genera
generabiglietto.addEventListener('click',
function() {
  // stampa nome passeggero nel campo specifico del biglietto
  passeggero.innerHTML = campoTesto.value;
  // calcolo costo biglietto ed eventuale sconto da applicare e stampa nel campo del biglietto
  if (fasciaDeta.value === "Sconto Minorenne 20%") {
    costoBiglietto.innerHTML = ((costoKm * parseInt(percorrenza.value)) - ((costoKm * parseInt(percorrenza.value)/100)*20)).toFixed(2) + " &#8364;";
  } else if (fasciaDeta.value === "Sconto Over 65 40%") {
    costoBiglietto.innerHTML = ((costoKm * parseInt(percorrenza.value)) - ((costoKm * parseInt(percorrenza.value)/100)*40)).toFixed(2) + " &#8364;";
  } else {
    costoBiglietto.innerHTML = (costoKm * parseInt(percorrenza.value)).toFixed(2) + " &#8364;";
  }
  // stampa sconto applicato nel campo specifico del biglietto
  sconto.innerHTML = fasciaDeta.value;
  // stampa numero carrozza nel campo specifico del biglietto
  numeroCarrozza.innerHTML = Math.ceil(Math.random() * 10);
  // stampa codice prenotazione nel campo specifico del biglietto
  prenotazione.innerHTML = Math.floor(Math.random() * 10000) + 90000;
  // far apparire anteprima biglietto
  tuobiglietto.style.display = "initial";

});


// click input annulla
// creazione selettore input annulla
var annulla = document.getElementById('annulla');
// avvenimenti al click dell'input annulla
annulla.addEventListener('click',
function() {
  // far scomparire al reset dei dati inseriti anteprima biglietto
  tuobiglietto.style.display = "none";
});

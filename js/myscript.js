// costo euro/km
var costoKm = 0.21;
console.log('COSTOKM', costoKm)


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

var generabiglietto = document.getElementById('generabiglietto');

generabiglietto.addEventListener('click',
function() {
  passeggero.innerHTML = campoTesto.value;

  if (fasciaDeta.value === "Sconto Minorenne 20%") {
    costoBiglietto.innerHTML = ((costoKm * parseInt(percorrenza.value)) - ((costoKm * parseInt(percorrenza.value)/100)*20)).toFixed(2) + " &#8364;";
  } else if (fasciaDeta.value === "Sconto Over 65 40%") {
    costoBiglietto.innerHTML = ((costoKm * parseInt(percorrenza.value)) - ((costoKm * parseInt(percorrenza.value)/100)*40)).toFixed(2) + " &#8364;";
  } else {
    costoBiglietto.innerHTML = (costoKm * parseInt(percorrenza.value)).toFixed(2) + " &#8364;";
  }

  sconto.innerHTML = fasciaDeta.value;

  numeroCarrozza.innerHTML = Math.ceil(Math.random() * 10)

  prenotazione.innerHTML = Math.ceil(Math.random() * 100000)

  tuobiglietto.className = ".apparizione"

});


// click bottone Annulla

var annulla = document.getElementById('annulla');


annulla.addEventListener('click',
function() {
  window.location.reload();
});

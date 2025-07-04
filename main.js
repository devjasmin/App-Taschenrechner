let aktuelleEingabe = 0;

// Zahl ins Eingabefeld eingeben
function number(zahl) {
  aktuelleEingabe = aktuelleEingabe * 10 + zahl;
  console.log(aktuelleEingabe);
  updateAktuellerInput();
}

// Zahlen sollen addiert werden
function add() {}

// Zahlen sollen subrahiert werden
function subtact() {}

// Zahlen sollen multipliziert werden
function multiply() {}

// Zahlen sollen dividiert werden
function divide() {}

// Summe soll ausgegeben werden
function enter() {}

// Soll alles löschen
function clearCalculator() {}

function updateAktuellerInput() {
  document.getElementById("eingabe").innerHTML = aktuelleEingabe;
}

let aktuelleEingabe = 0;
let vorherigeEingabe = 0;
let operator = "+";

// Zahl ins Eingabefeld eingeben
function number(zahl) {
  aktuelleEingabe = aktuelleEingabe * 10 + zahl;
  console.log(aktuelleEingabe);
  updateAktuellerInput();
}

// Zahlen sollen addiert werden
function add() {
  performOperator();
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Zahlen sollen subrahiert werden
function subtract() {
  performOperator();
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Zahlen sollen multipliziert werden
function multiply() {
  performOperator();
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Zahlen sollen dividiert werden
function divide() {
  performOperator();
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Summe soll ausgegeben werden
function enter() {}

// Schleife für Operator soll ausgeführt werden
function performOperator() {
  let currentResult = 0;
  if (operator === "+") {
    currentResult = vorherigeEingabe + aktuelleEingabe;
  } else if (operator === "-") {
    currentResult = vorherigeEingabe - aktuelleEingabe;
  } else if (operator === "*") {
    currentResult = vorherigeEingabe * aktuelleEingabe;
  } else if (operator === "/") {
    currentResult = vorherigeEingabe / aktuelleEingabe;
  }
  vorherigeEingabe = currentResult;
}

// Soll alles löschen
function clearCalculator() {}

function updateAktuellerInput() {
  document.getElementById("zwischenergebnis").innerHTML = aktuelleEingabe;
}

function updateVorherigerInput() {
  document.getElementById("eingabe").innerHTML = vorherigeEingabe + "+";
}

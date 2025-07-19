let aktuelleEingabe = 0;
let vorherigeEingabe = 0;
let operator = "+";

// Zahl ins Eingabefeld eingeben
function number(zahl) {
  aktuelleEingabe = aktuelleEingabe * 10 + zahl;
  updateAktuellerInput();
}

// Zahlen sollen addiert werden
function add() {
  performOperator();
  operator = "+";
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Zahlen sollen subrahiert werden
function subtract() {
  performOperator();
  operator = "-";
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Zahlen sollen multipliziert werden
function multiply() {
  performOperator();
  operator = "*";
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

// Zahlen sollen dividiert werden
function divide() {
  performOperator();
  operator = "/";
  aktuelleEingabe = 0;
  updateVorherigerInput();
  aktuelleEingabe = vorherigeEingabe;
  updateAktuellerInput;
}

// Summe soll ausgegeben werden
function enter() {
  performOperator();
  operator = "=";
  aktuelleEingabe = 0;
  updateVorherigerInput();
  updateAktuellerInput();
}

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
  document.getElementById("eingabe").innerHTML = vorherigeEingabe + operator;
}

function updateListe() {
  document.getElementById("Liste").innerHTML = Liste;
}

function getNumber(num) {
  var result = document.getElementById("result");

  result.value += num;
}

function clrResult() {
  var clr = document.getElementById("result");

  clr.value = "";
}

function getResult() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
}

function getCos() {
  var cos = document.getElementById("result");
  cos.value = Math.cos(cos.value);
}

function getSin() {
  var sin = document.getElementById("result");
  sin.value = Math.sin(sin.value);
}

function preValue() {
  var value = document.getElementById("result").value;
  document.getElementById("result").value = value.substr(0, value.length - 1);
}

function getSqureRoot() {
  var squareRoot = document.getElementById("result");
  squareRoot.value = Math.sqrt(squareRoot.value);
}

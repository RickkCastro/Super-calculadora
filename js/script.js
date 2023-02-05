function start() {
  var calcularButton = document.querySelector('#calcular-button');
  calcularButton.addEventListener('click', handleCalcular);
}

function handleCalcular() {
  var numAInput = document.querySelector('#input-numA');
  var numBInput = document.querySelector('#input-numB');

  var a = Number(numAInput.value);
  var b = Number(numBInput.value);

  setSomaText(a, b);
  setSubText(a, b);
  setMultiText(a, b);
  setDivisaoText(a, b);
  setPotenText(a, b);
  setRaizText(a, b);
  setFatorialText(a, b);
  setPorcenText(a, b);
  setMediaText(a, b);
}

function setSomaText(a, b) {
  var somaText = soma(a, b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var somaResultHtml = document.querySelector('#soma-result');
  somaResultHtml.textContent = somaText;
}

function setSubText(a, b) {
  var subTextA = subtracao(a, b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var subTextB = subtracao(b, a)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var subResultHtmlA = document.querySelector('#sub-result-a');
  var subResultHtmlB = document.querySelector('#sub-result-b');
  subResultHtmlA.textContent = subTextA;
  subResultHtmlB.textContent = subTextB;
}

function setMultiText(a, b) {
  var multiplicacaoText = multiplicacao(a, b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var multiResultHtml = document.querySelector('#multi-result');
  multiResultHtml.textContent = multiplicacaoText;
}

function setDivisaoText(a, b) {
  var divisaoTextA = divisao(a, b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');
  var divisaoTextB = divisao(b, a)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var divResultHtmlA = document.querySelector('#divisao-result-a');
  var divResultHtmlB = document.querySelector('#divisao-result-b');
  divResultHtmlA.textContent = divisaoTextA;
  divResultHtmlB.textContent = divisaoTextB;
}

function setPotenText(a, b) {
  var pontenciaTextA = potenciacao(a, b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');
  var pontenciaTextB = potenciacao(b, a)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var potenResultHtmlA = document.querySelector('#poten-result-a');
  var potenResultHtmlB = document.querySelector('#poten-result-b');
  potenResultHtmlA.textContent = pontenciaTextA;
  potenResultHtmlB.textContent = pontenciaTextB;
}

function setRaizText(a, b) {
  var raizTextA = raizQuadrada(a)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');
  var raizTextB = raizQuadrada(b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var raizResultHtmlA = document.querySelector('#raiz-result-a');
  var raizResultHtmlB = document.querySelector('#raiz-result-b');
  raizResultHtmlA.textContent = raizTextA;
  raizResultHtmlB.textContent = raizTextB;
}

function setFatorialText(a, b) {
  var fatorialTextA = fatorial(a)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');
  var fatorialTextB = fatorial(b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var fatorialResultHtmlA = document.querySelector('#fatorial-result-a');
  var fatorialResultHtmlB = document.querySelector('#fatorial-result-b');
  fatorialResultHtmlA.textContent = fatorialTextA;
  fatorialResultHtmlB.textContent = fatorialTextB;
}

function setPorcenText(a, b) {
  var porcentagemTextA =
    porcentagem(b, a)
      .toLocaleString('pt-PT', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(/,00$/, '') + '%';
  var porcentagemTextB =
    porcentagem(a, b)
      .toLocaleString('pt-PT', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(/,00$/, '') + '%';

  var porcenResultHtmlA = document.querySelector('#porcen-result-a');
  var porcenResultHtmlB = document.querySelector('#porcen-result-b');
  porcenResultHtmlA.textContent = porcentagemTextA;
  porcenResultHtmlB.textContent = porcentagemTextB;
}

function setMediaText(a, b) {
  var mediaText = media(a, b)
    .toLocaleString('pt-PT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,00$/, '');

  var mediaResultHtml = document.querySelector('#media-result');
  mediaResultHtml.textContent = mediaText;
}

function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function potenciacao(base, expoente) {
  return Math.pow(base, expoente);
}

function raizQuadrada(num) {
  return Math.sqrt(num);
}

function fatorial(num) {
  var result = num;

  for (var i = 1; i < num; i++) {
    result *= i;
  }

  return result;
}

function porcentagem(num1, num2) {
  return Math.ceil((num1 * 100) / num2);
}

function media(num1, num2) {
  return (num1 + num2) / 2;
}

start();

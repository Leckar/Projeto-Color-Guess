// Variáveis necessárias para o funcionamento da aplicação;
const rgbText = document.getElementById('rgb-color');
const ballsParent = document.getElementById('color-balls');
const balls = document.getElementsByClassName('ball');
const gameState = document.getElementById('answer');
const resetBttn = document.getElementById('reset-game');
const score = document.getElementById('score');
let points = 0;
// Função que cria o altera a contagem de pontos do placar;
function addPoints() {
  const success = 3 + points;
  points = success;
  return points;
}
// Gerador dos valores aleatórios do rgb;
function randomRGBNumber() {
  return Math.round(Math.random() * 230);
}
// Gerador do rgb com números aleatórios;
function randomRGBColor() {
  return `rgb(${randomRGBNumber()}, ${randomRGBNumber()}, ${randomRGBNumber()})`;
}
// Função que atribui as cores às paletas;
function rgbCodeSetter() {
  rgbText.innerText = randomRGBColor();
}
// Função que atribui aleatoriamente a um dos círculos a classe 'correct-color';
function correctColorRandomizer() {
  for (let i = 0; i < balls.length - 1; i += 1) {
    if (balls[i].id) {
      balls[i].removeAttribute('id');
    }
  }
  balls[Math.floor(Math.random() * 5)].setAttribute('id', 'correct-color');
}
// Função que gera as cores dos círculos;
function circleFilling() {
  correctColorRandomizer();
  for (let i = 0; i < balls.length; i += 1) {
    if (balls[i].id) {
      balls[i].style.backgroundColor = `${rgbText.innerText}`;
    } else {
      balls[i].style.backgroundColor = randomRGBColor();
    }
  }
}
// Função que gera os círculos que serão coloridos;
function createCircle() {
  const newCircle = document.createElement('div');
  newCircle.classList.add('ball');
  return newCircle;
}
// Função que chama a criação dos círculos e os alinha;
function circleLine() {
  for (let i = 1; i <= 6; i += 1) {
    const circle = createCircle();
    ballsParent.appendChild(circle);
  }
  circleFilling();
}
// Função handler dos eventListeners;
function listenersHandler(e) {
  const ball = e.target;
  if (ball.id) {
    gameState.innerText = 'Acertou!';
    score.innerText = `Placar: ${addPoints()}`;
  } else {
    gameState.innerText = 'Errou! Tente novamente!';
  }
}
// Função que dispara os listeners das cores que verifica se a cor correta
// foi pressionada e interrompe os listeners:
function circleListeners() {
  for (let i = 0; i < balls.length - 1; i += 1) {
    balls[i].addEventListener('click', (e) => listenersHandler(e));
  }
}
// Função do listener do botão de reset que refresca o jogo;
function resetBttnListener() {
  resetBttn.addEventListener('click', () => {
    gameState.innerText = 'Escolha uma cor';
    rgbCodeSetter();
    circleFilling();
  });
}
// Listener do carregamento da página que dispara sequencialmente diversas funções;
window.onload = () => {
  rgbCodeSetter();
  circleLine();
  circleListeners();
  resetBttnListener();
};

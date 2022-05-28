// Variáveis necessárias para o funcionamento da aplicação;
const rgbText = document.getElementById('rgb-color');
const ballsParent = document.getElementById('color-balls');
const balls = document.getElementsByClassName('ball');
const correctColor = document.getElementById('correct-color');
const gameState = document.getElementById('answer');

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
	if (correctColor) {
		correctColor.removeAttribute('id');
	}
	balls[Math.floor(Math.random() * 5)].setAttribute('id', 'correct-color')
}
// Função que gera as cores dos círculos;
function circleFilling() {
	correctColorRandomizer()
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
	circleFilling()
}
// Função que verifica se a cor correta foi pressionada;
function hitCheck(e) {
	const ball = e;
	if (ball.id) {
		gameState.innerText = `Acertou!`;
	} else {
		gameState.innerText = `Errou! Tente novamente!`;
	}
}
// Função que dispara os listeners das cores:
function circleListeners() {
	for (let i = 0; i < balls.length; i += 1) {
		balls[i].addEventListener('click', (e) => hitCheck(e.target));		
	}
}
window.onload = () => {
	rgbCodeSetter();
	circleLine();
	circleListeners()
};

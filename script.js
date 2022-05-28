const rgbText = document.getElementById('rgb-color');
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
rgbCodeSetter();
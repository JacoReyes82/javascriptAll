const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const parrafo = document.querySelector('#parrafo');
const cardColor = document.querySelector('#cardColor');

btnVisualizar.addEventListener('click', () => {
    parrafo.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
})
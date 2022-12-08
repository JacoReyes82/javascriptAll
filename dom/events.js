const h1 = document.getElementById('titulo');
const boton = document.querySelector('.btn-primary');

boton.addEventListener('click', () => {
    console.log('Me diste click');
    h1.textContent = 'Cambiado desde JS';
    h1.style.color = "red";
})

console.log('-------------------------------------------------------------------------------------------------------------');
const lista = document.querySelector('#lista');
const arrayPaises = ['Peru', 'Colombia', 'Venezuela'];
const fragment = document.createDocumentFragment();

arrayPaises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = pais;
    fragment.appendChild(li);
});

lista.appendChild(fragment);
console.log(document);
console.log(document.head);
console.log(document.domain);
console.log(document.title);
console.log('---------------------------------------------------------------------------------');

console.log(document.getElementById('titulo')); 
console.log(document.getElementById('titulo').textContent);
console.log(document.getElementById('titulo').innerHTML); 

console.log(document.querySelector('.text-danger'));
console.log('---------------------------------------------------------------------------------');
console.log(document.querySelectorAll('.text-primary'));
console.log('---------------------------------------------------------------------------------');
console.log(document.querySelectorAll('.container .text-primary'));
console.log('---------------------------------------------------------------------------------');

const h1 = document.getElementById('titulo');
console.log(h1.className);
console.log(h1.style);
console.log(h1.id);
console.log(h1.textContent);
console.log('---------------------------------------------------------------------------------');
h1.textContent = 'DISIP';
console.log(h1.textContent);
console.log('---------------------------------------------------------------------------------');
h1.style.backgroundColor = 'black';
h1.style.color = 'yellow';

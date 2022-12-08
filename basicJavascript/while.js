let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++; /* Es lo mismo que numero + 1 */
}
console.log('Fin de Numero ' + numero);


let frutas = ["manzana", "sandía", "pera"];
frutas. forEach ((fruta, index) => {
    console. log(`${index}: ${fruta}`);
 });

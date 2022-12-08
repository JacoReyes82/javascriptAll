const gato = {
    nombre: "valiente",
    duerme: true,
    edad: 10,
    enemigos: ['agua', 'perro']
}
console.log(gato.enemigos[1]);

gato.color = 'blanco';
gato.patas = 4;

delete gato.duerme;

console.log(gato);
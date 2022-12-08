let opcionUsuario = prompt(`
Elija una opcion:
1: Libros
2: Peliculas
3: Juegos
`)
console.log(opcionUsuario);

switch (opcionUsuario) {
    case '1':
        console.log('Harry Potter');
        break;
    case '2':
        console.log('El Origen');
        break;
    case '3':
        console.log('Black Ops III');
        break;
        default:
    console.log('Opcion no valida');
    break;
}
/* Crear el enlace en el index.html para que se ejecute */
// 2.B - Agregar dos personajes al inicio del archivo
const fs = require('fs').promises;

const agregarAlInicio = async (p1, p2) => {
    try {
        const datos = await fs.readFile('./personajes.json', 'utf-8');
        const personajes = JSON.parse(datos);

        // Agregar los dos personajes al inicio
        personajes.unshift(p1, p2);

        await fs.writeFile('./personajes.json', JSON.stringify(personajes, null, 2));
        console.log('Dos personajes agregados al inicio correctamente.');
        console.log('Nuevo primer personaje:', personajes[0]);
        console.log('Nuevo segundo personaje:', personajes[1]);
    } catch (error) {
        console.log(`Error! ${error}`);
    }
};

const nuevoP1 = {
    id: 54,
    firstName: "Aegon",
    lastName: "Targaryen",
    fullName: "Aegon Targaryen",
    title: "The Conqueror",
    family: "House Targaryen",
    image: "aegon.jpg",
    imageUrl: "https://i.pinimg.com/originals/63/bd/ad/63bdad5f400106646698c9d5a34678c6.jpg"
};

const nuevoP2 = {
    id: 55,
    firstName: "Rhaenyra",
    lastName: "Targaryen",
    fullName: "Rhaenyra Targaryen",
    title: "Queen of the Seven Kingdoms",
    family: "House Targaryen",
    image: "rhaenyra.jpg",
    imageUrl: "https://lacasadeldragon.org/wp-content/uploads/2024/09/rhaenyra-targaryen-e1726552569666.jpg"
};

agregarAlInicio(nuevoP1, nuevoP2);


// 2.C - Eliminar el primer personaje y mostrarlo en consola
const eliminarPrimero = async () => {
    try {
        const datos = await fs.readFile('./personajes.json', 'utf-8');
        const personajes = JSON.parse(datos);

        // Eliminar y guardar el primer personaje
        const eliminado = personajes.shift();

        console.log('Personaje eliminado:');
        console.log(eliminado);

        await fs.writeFile('./personajes.json', JSON.stringify(personajes, null, 2));
        console.log('Archivo actualizado correctamente.');
    } catch (error) {
        console.log(`Error! ${error}`);
    }
};

eliminarPrimero();

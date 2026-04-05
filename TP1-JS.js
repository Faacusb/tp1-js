
const fs = require('fs').promises;
const url = 'https://thronesapi.com/api/v2/Characters'; 


// -------- 1.A -------------
async function obtenerPersonajes() {

try {
    
const rep =await fetch(url) ;


      if(!rep.ok){
            console.log('error!');
          return;
        }
    
    const personajes= await rep.json() ;
    console.log(personajes);
    return personajes;

    }catch (error){
        console.log(`Error! ${error}`);
    } 
}

// Llamamos a la función para obtener los personajes
//obtenerPersonajes();



// -------- 1.B -------------   
async function agregarPersonajeApi(pj) {
    try {
        const rep = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(pj)
        });

        if (rep.ok || rep.status === 201) {
            const data = await rep.json();
            console.log("¡Personaje agregado con éxito!");
            console.log(data);
        } else {
            console.log(`Error del servidor: ${rep.status}`);
        }

    } catch (error) {
        console.log(`Error de red: ${error}`);
    }
}

// Ejemplo de personaje a agregar
const pj1 = {
        id: 53,
        firstName: "Daeron II",
        lastName: "Targaryen",
        fullName: "Daeron II Targaryen",
        title: "Daeron el Bueno",
        family: "House Targaryen",
        image: "daeron.jpg",
        imageUrl: "https://i.ibb.co/Lz2ZtJ2X/daeron.jpg"
    };

// Llamamos a la función para agregar el personaje
//agregarPersonajeApi(pj1);



// -------- 1.C -------------
async function buscarPorId(id) {
    try {
        const rep = await fetch(`${url}/${id}`);

        if (!rep.ok) {
            console.log(`Error: No se encontró el personaje con ID ${id} (Status: ${rep.status})`);
            return;
        }

        const personaje = await rep.json();

        console.log("--- Datos del personaje encontrado ---");
        console.log(personaje);
        
        return personaje; 

    } catch (error) {
        console.log("Error de conexión al buscar por ID:", error);
    }
}

// Ejemplo:
/*(async () => {
    await buscarPorId(10);
    })();*/


// -------- 1.D -------------
async function crearJson() {
    try{
        const datos = await obtenerPersonajes();
        await fs.writeFile("personajes.json", JSON.stringify(datos, null, 2));
        console.log("Archivo creado correctamente.");
    } catch (error) {
        console.error("Error", error);
    }
}

// Llamamos a la función para crear el archivo JSON
//crearJson();



// -------- 2.A ------------
const agregarPersonaje = async (p) => {
    try {
        const datos = await fs.readFile('./personajes.json', 'utf-8');
        const  personajes= JSON.parse(datos);

        // Agregar el  nuevo personaje
       personajes.push(p);

        // Guardar archivo actualizado
        await fs.writeFile('./personajes.json', JSON.stringify(personajes ,null, 2));

        console.log ('Personaje agregado correctamente');
    } catch (error) {
        console.log(`Error! ${error}`);
    }
};

// Ejemplo de agregar personaje
const p1 = {
    id: 53,
    firstName: "Joaquin",
    lastName: "kratos",
    fullName: "Joaquin kratos",
    title: "Mother of Dragons",
    family: "House Targaryen",
    Image :  "joaquin.kratos.JPG",
 imageUrl: "https://i.ibb.co/wzN0TZj/God-of-War-20190818191541.jpg "
};

//agregarPersonaje(p1);



// -------- 2.B -------------
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

// Ejemplo de agregar dos personajes al inicio
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

//agregarAlInicio(nuevoP1, nuevoP2);



// -------- 2.C -------------
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

// Llamamos a la función para eliminar el primer personaje
//eliminarPrimero();
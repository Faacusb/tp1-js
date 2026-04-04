//  1.A
const fs = require('fs');

const url = 'https://thronesapi.com/api/v2/Characters'; 

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

//  1.B
async function agregarPersonaje(pj) {
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

// Llamamos a la función
agregarPersonaje(pj1);

//  1.C
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
(async () => {
    await buscarPorId(10);
    })();

//  1.D
async function crearJson() {
    try{
        const datos = await obtenerPersonajes();
        fs.writeFileSync("personajes.json", JSON.stringify(datos, null, 2));        console.log("Archivo creado correctamente.");
    } catch (error) {
        console.error("Error", error);

    }
    
}


crearJson();

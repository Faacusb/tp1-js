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


async function crearJson() {
    try{
        const datos = await obtenerPersonajes();
        fs.writeFileSync("personajes.json", JSON.stringify(datos, null, 2));
    } catch (error) {
        console.error("Error", error);

    }
    
}


crearJson();

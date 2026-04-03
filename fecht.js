
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


    }catch (error){
        console.log(`Error! ${error}`);
    } 
}

obtenerPersonajes();


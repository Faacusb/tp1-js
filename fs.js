
// 1 B POST 

const fs = require('fs').promises;

const agregarPersonaje = async (p) => {
    try {
        const datos = await fs.readFile('./personajes.json', 'utf-8');
        const  personajes= JSON.parse(datos);

        // Agregar el  nuevo personaje
       personajes.push(p);

        // Guardar archivo actualizado
        await fs.writeFile('./personajes.json', JSON.stringify(personajes ,null, 2));

        console.log ('personajes agregado correctamente');
    } catch (error) {
        console.log(`Error! ${error}`);
    }
};

//  El nuevo personaje  que se agrega en el archivo personajes.JSON
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

agregarPersonaje(p1);
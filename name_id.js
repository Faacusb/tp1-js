const fs = require("fs");

const personajes = JSON.parse(
  fs.readFileSync("personajes.json", "utf-8")
);

const personajesReducidos = personajes.map(p => ({
  id: p.id,
  nombre: p.fullName
}));

personajesReducidos.sort((a, b) =>
  b.nombre.localeCompare(a.nombre)
);

fs.writeFileSync(
  "personajes_id_nombre.json",
  JSON.stringify(personajesReducidos, null, 2)
);


personajesReducidos.forEach(p =>
  console.log(`${p.id} - ${p.nombre}`)
);


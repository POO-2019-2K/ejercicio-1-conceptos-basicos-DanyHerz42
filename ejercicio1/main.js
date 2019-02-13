import Contacto from "./Contacto.js"

// -----------------Objeto CONTACTO----------------------//
let c1 = new Contacto("Juan Perez", "Operador", "312-189-7690", "juan.perez@gmail.com");

c1.imprimirContacto();
console.log(c1.nombre);
console.log(c1.puesto);
console.log(c1.telefono);
console.log(c1.correo);

c1.puesto = "Jefe de departamento";
c1.imprimirContacto();

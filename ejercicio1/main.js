import Contacto from "./Contacto.js"
import Reservacion from "./Reservacion.js"
import Banco from "./Banco.js"
import Movimiento from "./Banco.js";

// -----------------Objeto CONTACTO----------------------//

let c1 = new Contacto("Juan Perez", "Operador", "312-189-7690", "juan.perez@gmail.com");

c1.imprimirContacto();
console.log(c1.nombre);
console.log(c1.puesto);
console.log(c1.telefono);
console.log(c1.correo);
c1.puesto = "Jefe de departamento";
c1.imprimirContacto();

// -----------------Objeto RESERVACION----------------------//

let reservacion = new Reservacion("Daniel Hernández", "2019-02-18", "2019-02-22", "312-189-7690", 22, 200);

reservacion.imprimirValores();
reservacion.calcularDiasNoches();
console.log(reservacion.fechaLlegada);
console.log(reservacion.fechaSalida);
console.log(reservacion.nombre);
reservacion.numHabitacion = 34;
reservacion.imprimirValores();

// -----------------Objeto CUENTA BANCARIA----------------------//

let movimiento = new Movimiento("Daniel Hernández", 5000, 200, "retiro", "2019-02-18");

movimiento.imprimirTransaccion();
console.log(movimiento.nombre);
console.log(movimiento.saldo);
console.log(movimiento.tipoTransaccion);
movimiento.fecha = "2018-02-23";


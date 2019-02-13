export default class Contacto{
    constructor (nombre,puesto,telefono,correo){
        this._nombre = nombre.toUpperCase();
        this._telefono= telefono.toUpperCase();
        this._puesto = puesto.toUpperCase();
        this._correo = correo;
    }

    imprimirContacto(){
        console.log(`${this._nombre}, ${this._telefono}, ${this._puesto}, ${this._correo},`)
    }

    //Metodos de lectura//

    get nombre(){
        return this._nombre;
    }
    get telefono(){
        return this._telefono;
    }
    get puesto(){
        return this._puesto;
    }
    get correo(){
        return this._correo;
    }

    set puesto(puesto){
        this._puesto = puesto.toUpperCase();
    }
}
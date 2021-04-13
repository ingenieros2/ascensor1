class Boton { 
    id;
    texto;
    activo;

    constructor(id) {
        this.id = id;
        this.texto =  id === 0? 'PB' : id;
        this.activo = false;
        
    }

    cambiarEstado(estado) {
        this.activo = estado;
        var contenedor = document.getElementById(`contenedor-${this.texto}`)
        contenedor.innerHTML = ` 
        <button 
            class="${this.activo? 'active' : ''}"
            onclick="edificio.botonera.botones[${this.id}].apretarBoton()"
        > ${this.texto} </button>`  
    }

    apretarBoton(){
        /* var estado = edificio.ascensor.agregarPiso(this.id) */ 
        this.cambiarEstado(true);
    }
}
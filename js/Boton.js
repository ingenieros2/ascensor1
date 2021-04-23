class Boton { 
    id;
    texto;
    activo;

    constructor(id) {
        this.id = id;
        this.texto =  id === 0? 'PB' : id;
        this.activo = false;
        
    }

    cambiarEstadoBoton(estado) {
        console.log(this);
        this.activo = estado;
        var contenedor = document.getElementById(`contenedor-${this.id}`);
        contenedor.innerHTML = `
        <button 
            class="${estado? 'active' : ''}"
            onclick = "edificio.botonera.apretarBoton(${this.id})"
        > ${this.texto} </button>`
    }

    apretarBoton(boton) {

        var estado = edificio.ascensor.agregarPiso(boton.id)
        this.cambiarEstadoBoton(estado);
    }

}
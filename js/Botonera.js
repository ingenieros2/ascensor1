class Botonera {
    pisoActual;
    direccion;
    botones;

    constructor(cantidadPisos) {
        this.botones = [];
        for(var i = cantidadPisos - 1; i >= 0; i--) {
            this.botones.push(new Boton(i))
        }
    }

    dibujarBotones() {
        var html = '';
        this.botones.forEach(function(boton, i){
            
            html +=
            `
            <div class="contenedor-boton" id="contenedor-${boton.texto}">
                <button 
                    class="${boton.activo? 'active' : ''}"
                    onclick="edificio.botonera.botones[${i}].apretarBoton()"
                > ${boton.texto} </button>
            </div>

            `
        });
        var contenedorBotones = document.getElementById('botonera');
        contenedorBotones.innerHTML = html; 

    }
}
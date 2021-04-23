class Botonera {
    pisoActual;
    direccion;
    botones;

    constructor(cantidadPisos) {
        this.botones = [];
        for (var i = cantidadPisos - 1; i >= 0; i--) {
            this.botones.push(new Boton(i))
        }
    }

    dibujarBotones() {
        var html = '';
        this.botones.forEach(function(boton) {
            
            html +=
            `
            <div class="contenedor-boton" id="contenedor-${boton.id}">
                <button 
                    class="${boton.activo? 'active' : ''}"
                    onclick="edificio.botonera.apretarBoton(${boton.id})"
                > ${boton.texto} </button>
            </div>

            `
        });
        var contenedorBotones = document.getElementById('botonera');
        contenedorBotones.innerHTML = html; 
    }
    
    apretarBoton(id) {
        var boton = this.botones.find(function(boton) {
            return boton.id === id;
        });
    
        boton.apretarBoton(boton);
    }
    
    
    
    cambiarPantalla(nuevoPiso) {
    
        if (this.pisoActual > nuevoPiso) {
            this.direccion = 'down';
        } else {
            this.direccion = 'up';
        }
    
        this.pisoActual = nuevoPiso;
    
        var muestraActual = 
            `
            <h2 class="${this.direccion}">
                ${this.pisoActual === 0? 'PB' : this.pisoActual}
            </h2>
            `;
    
        var pantalla = document.getElementById('pantalla');
        pantalla.innerHTML = muestraActual;
    
        var boton = this.botones.find(function(boton) {
            return boton.id === nuevoPiso;
        })
        setTimeout(function() {
            boton.cambiarEstadoBoton(false);
        }, 2000);
        
    }


}
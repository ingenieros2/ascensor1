class Ascensor {
    cantidadPisos;
    pisoActual;
    filaLlamadas;
    moviendose;

    constructor (cantidadPisos) {
        this.cantidadPisos = cantidadPisos;
        this.pisoActual = 0; 
        this.filaLlamadas = []; 
        this.moviendose = false;
    }

    cambiarAscensor(estado) {
        this.moviendose = estado;
    }

        moverAscensor() {
            if (this.filaLlamadas.length === 0) {
                this.moviendose = false;
                return;
            }

            var ascensor = document.getElementById('ascensor');
            this.cambiarAscensor(true);
            var siguientePiso = this.filaLlamadas[0];
            var posicion = (this.cantidadPisos * 100) - (siguientePiso * 100) - 100; 
            ascensor.style.top = `${posicion}px`;
            this.pisoActual = siguientePiso;
            
            edificio.botonera.cambiarPantalla(siguientePiso)
            var _this = this;
            setTimeout(function() {
                _this.filaLlamadas.splice(0, 1);
                _this.cambiarAscensor(false);
                _this.moverAscensor();
            }, 2000);
        
            
        }

    iniciarAscensor() {
        var ascensor = document.getElementById('ascensor');
        var posicion = (this.cantidadPisos * 100) - 100;
        ascensor.style.top = `${posicion}px`;
    }

    agregarPiso(piso) {
        if (this.filaLlamadas.length < 4 && !this.filaLlamadas.includes(piso)) {
            this.filaLlamadas.push(piso);
            if (!this.moviendose) {
                this.moverAscensor();
            }
            return true;
        }else {
            return false;
        }
    }   

}


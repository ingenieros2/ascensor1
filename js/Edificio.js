class Edificio {
    pisos;
    ascensor;
    botonera;

    constructor(cantidadDePisos) {
        this.pisos = [];
        this.botonera = new Botonera(cantidadDePisos);
        this.ascensor = new Ascensor(cantidadDePisos);

    for (var i = 0; i < cantidadDePisos ; i++) {
            var numeroDeImagenes = Math.floor(Math.random()*8);
            this.pisos.push(`<div class="pisos"><img src="./img/Piso${numeroDeImagenes}.png" alt=""></div>`);
        }
    }
    
    generarPisos() {
        var contenedorDeEdificio = document.getElementById('edificio');
        var cadenaDePisos = this.pisos.reduce(function(acc, floor){
            return acc + floor;
        }, '');
        contenedorDeEdificio.innerHTML = cadenaDePisos;
        this.botonera.dibujarBotones();
    }

}


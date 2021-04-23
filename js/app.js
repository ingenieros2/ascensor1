
var contenido = document.getElementById('contenido');
var pisos = [];
var edificio = null;

function generarLayout() {
    var campo = document.getElementById('numero').value;
    edificio = new Edificio(campo);
    var nuevaVista = 
`
<div class="container-fluid">
    <div class="row">
        <div class="col-6 m-0 p-0 d-flex flex-row">
            <div id="edificio" class="edificio">
            
            </div>
            <div id="ascensor">
                <img src="./img/ascensor.svg" alt="">
            </div>
        </div>   
        <div class="col-6 bg-dark m-0 p-5">
            <div class="panel">
                <div class="pantalla" id="pantalla">
                    <h2 class="up">10</h2>
                </div>
                <div class="botonera" id="botonera">
                    
                </div>  
            </div>    
        </div>
    </div>
</div>
`

    contenido.innerHTML = nuevaVista;
    edificio.generarPisos();
    edificio.ascensor.iniciarAscensor();
}

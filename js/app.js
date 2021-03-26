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
        <div class="col-6 m-0 p-0">
            <div id="edificio" class="edificio">
               
            </div>
        </div>
    <div class="col-6 bg-dark m-0 p-0">     
</div>
`

 contenido.innerHTML = nuevaVista;
 edificio.generarPisos();
}
var content = document.getElementById('content');
var floors = [];
var building = null;

function generateLayout() {
    var field = document.getElementById('number').value;
    building = new Building(field);
    var newView = 
`
<div class="container-fluid">
    <div class="row">
        <div class="col-6 m-0 p-0">
            <div id="building" class="building">
               
            </div>
        </div>
    <div class="col-6 bg-dark m-0 p-0">     
</div>
`

 content.innerHTML = newView;
 building.generateFloors();
}
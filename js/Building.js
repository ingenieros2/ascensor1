class Building {
    floors;
    elevator;
    keypad;

    constructor(floorAmount) {
        this.floors = [];
        for (var i = 0; i < floorAmount ; i++) {
            var imgNumber = Math.floor(Math.random()*8);
            this.floors.push(`<div class="floors"><img src="/img/Floor${imgNumber}.png" alt=""></div>`);
        }
    }

    generateFloors() {
        var buildingContainer = document.getElementById('building');
        var floorString = this.floors.reduce(function(acc, floor){
            return acc + floor;
        }, '');

        buildingContainer.innerHTML = floorString;
        console.log(buildingContainer);
    }

}


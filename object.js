function Building(floors) {
    this.what = 'building';
    this.floors = floors;
}
var myHouse = new Building(3);


Building.prototype.countFloors = function () {
    console.log('I have ' + this.floors + 'floors')
}

function bigHouse(rooms, floors){
    this.rooms = rooms;
    this.floors = floors;
}

bigHouse.prototype.house = function () {
    console.log('my house has ' + this.rooms + ' rooms ' + 'and' + ' ' + this.floors + ' floors')
}
let myHouse = new bigHouse(5,3);

console.log(myHouse.house) ;
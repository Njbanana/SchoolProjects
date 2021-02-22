class Vehicle {
    Constructor(make,model,year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return 'beep'
    }
    toString(){
        `This is the ${this.make},${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make,model,year){
        super(make,model, year)
        this.numwheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year)
        this.numWheels = 2
    }
    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity
        this.vehicle = []
    }
    add(newVehicles){
        if((newVehicles instanceof Vehicle) === false){
            return"Only vehicles are allowed in here!"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle)
        return "Vehicle added!"
    }
}
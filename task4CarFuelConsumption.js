function Car(model, milesPerGallon) {
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometr = 0
}

Car.prototype.fill = function(gallons) {
    this.tank = gallons
}

Car.prototype.drive = function(distance) {
    if(this.tank < distance * this.milesPerGallon) {
        throw Error(`I ran out of fuel at ${this.tank / this.milesPerGallon} miles!`)
     }
    this.odometr += distance
    this.tank -= distance * this.milesPerGallon
}

const car1 = new Car("mers", 2 )
car1.fill(100)
car1.drive(40)


console.log(car1.tank)
console.log(car1.odometr)
car1.drive(15)



class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        let availableSeats = this.capacity - this.passengers.length
        return availableSeats
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index += 1) {
            let currentPassenger = this.passengers[index]
            if (currentPassenger.isHealthy === false) {
                return true
            }
        }
        return false
    }
    totalFood() {
        let amountOfFood = 0 
        for (let index = 0; index < this.passengers.length; index++) {

        amountOfFood = amountOfFood + this.passengers[index].food
        }
        return amountOfFood
    }
}
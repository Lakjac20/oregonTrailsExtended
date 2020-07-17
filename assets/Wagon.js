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
        for (let index = 0; index >= this.passengers.length; index += 1) {
            if (index >= 1) {
                return true
            } else {
                return false
            }
        }
    }
    totalFood() {
        for (let index = 0; index < this.passengers.length; index++) {

            let amountOfFood = this.food + this.passengers[i]
        }
        return amountOfFood
    }
}
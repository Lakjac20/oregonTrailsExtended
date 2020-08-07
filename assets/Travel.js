class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt() {
        this.food = this.food + 2
    }

    eat() {
        if (this.food > 0) {// += 1 ( value of food for consumption)
            this.food = this.food - 1
        } else {
            this.isHealthy = false
        }
    }
}

class Doctor extends Traveler {
    constructor (name){
        super(name)

    }
    heal(Traveler){
        Traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor (name){
        super (name)
        this.food = 2
        
    }
    hunt() {
        this.food = this.food + 5
    }
    eat () {
        if (this.food >= 2) {
            this.food = this.food - 2
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }
    giveFood (Traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits ){
            this.food = this.food - numOfFoodUnits
            Traveler.food = numOfFoodUnits + Traveler.food
        }
      
    }
}
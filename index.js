class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        "magia"
    }
}

let mago = new hero("Mago", 40, "mago")

console.log(mago.attack)
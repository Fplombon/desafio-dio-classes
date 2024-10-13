class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        if (this.type == "mago"){
            return "magia"
        }else if(this.type == "gerreiro"){
            return "espada"
        }else if(this.type == "monge"){
            return "artes marciais"
        }else if(this.type == "ninja"){
            return "shuriken"
        }        
    }

    message(){
        console.log(`o ${this.type} atacou usando ${this.attack()}`)
    }
}

let mago = new hero("Hyago", 40, "mago")
mago.message()

let ninja = new hero("Hyury", 37, "ninja")
ninja.message()
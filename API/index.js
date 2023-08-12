class Person {
    #firstName = ""; // hashtag makes the property private
    constructor (firstName) {
        this.#firstName = firstName
    }
    walk (){
        console.log(`${this.#firstName}`);;
    }
    dancing (){
        console.log("I am dancimg");
    }
     
}

const person1 = new Person("Kgodisho")
person1.walk()
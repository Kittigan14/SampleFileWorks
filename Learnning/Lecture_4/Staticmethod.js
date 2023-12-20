class Dog {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log('This is ' + this.name + " !");
    }

    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();

Dog.bark();
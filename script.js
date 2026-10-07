class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

const john = new Person("John", 54);
john.introduce();
console.log(john.age);
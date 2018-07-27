
class Person {
    constructor(name = 'Not provided', age = 'Unknown') {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name} and I am ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        
        if(this.hasMajor) {
            greeting += ` Their major is ${this.major}.`
        }
        return greeting;
    }
}

class Traveler extends Person {
    constructor(name, age, location = 'New York') {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.location) {
            greeting += ` and my location is ${this.location}.`
        }
        return greeting;
    }
}

const me = new Student('Bence Madar', 28, 'Idiot');
console.log(me);
console.log(me.hasMajor());
console.log(me.getGreeting());

const other = new Student();
console.log(other);
console.log(other.hasMajor());
console.log(other.getGreeting());

const you = new Traveler('Jon Kenny', 85, 'Enfield');
console.log(you);
console.log(you.getGreeting());
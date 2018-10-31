class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name; 
        this.age = age;
    }
    getGreeting() {
        return 'Hi. I am '+ this.name + '!';
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
 }

 class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major; 
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` with major ${this.major}`;
        }
        return description;
        //return `${this.name} is ${this.age} year(s) old.`;
    }
 }

 class Traveller extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting () {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` with home location ${this.homeLocation}`;
        }
        return greeting;
    }
 } 

const me = new Traveller('Harjeet', 27, 'Chandigarh');
console.log(me.getGreeting());

 const other = new Traveller(undefined, undefined, 'nowhere');
 console.log(other.getDescription());
 console.log(other.getGreeting());
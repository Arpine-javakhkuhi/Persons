class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.init();
    }

    init() {
        let increaseAgeInterval = setInterval(() => {
            if (this.age <= 40) {
                this.age++;
            } else {
                clearInterval(increaseAgeInterval);
            }
        }, 1000);
    }
}

let persons = [];
persons.push(new Person('Tigran', 17), new Person('Aram', 23), new Person('Astghik', 31), new Person('Anahit', 26));
console.log('persons', persons);

let displayAndUpdatePersons = setInterval(() => {
    persons = persons.filter((person) => {
        if (person.age < 40) {
            console.log(`${person.name} is ${person.age}`);
        }
        return person.age < 40;
    });
    if (persons.length == 0) {
        clearInterval(displayAndUpdatePersons);
    }
}, 1000);


let addPerson = setInterval(() => {

    /* Random names without faker.js */

    /*
    let name = '';
    for(let i = 0; i < 6; i++){
       const random = Math.floor(Math.random() * 26);
       name += String.fromCharCode(97 + random);
    };
    */

    /* Random names using faker.js */
    let name = faker.name.findName();

    let age = Math.floor(Math.random() * 50) + 1;
    persons.push(new Person(name, age));
}, 2000);



// can't get access to args with arrow functions
// whenever we need args stick with es15 functions as below

// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };

// console.log(add(55, 1, 1001));

const user = {
    name: 'Bence',
    cities: ['Dunaujvaros', 'Byfleet', 'Budapest'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6, 8, 10],
    multiplyBy: 4,

    multiply() {
        return this.numbers.map((newArray) => newArray * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
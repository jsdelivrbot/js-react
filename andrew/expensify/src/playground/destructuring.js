//array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [cup, , medium] = item;

console.log(`A medium ${cup} costs ${medium}.`);
//A medium coffee costs $2.50.


//object destructuring
const person = {
    name: 'John',
    age: 26,
    location: {
        city: 'Byfleet',
        temp: 17
    }
};

const {name: firstName = 'Anonymous', age} = person;
//if person.name doesn't exist it will use Anonymous as firstName
console.log(`${firstName} is ${age}.`);

//messy code
if(person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}
//good code
const { temp: temperature, city: krumpli} = person.location;
if(krumpli && temperature) {
    console.log(`It's ${temperature} in ${krumpli}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}
const { name: publisherName = 'Unknown' } = book.publisher;


console.log(publisherName);
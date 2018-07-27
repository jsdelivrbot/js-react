const square = function(x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrowNew = (x) => x * x;

console.log(square(4));
console.log(squareArrow(5));
console.log(squareArrowNew(6));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

// console.log(getFirstName('Mike Smiths'));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Bence Madar'));
function square(x) {
    return x*x;
};

console.log(square(8));


const squareArrow = (x) => {
    return x*x;
};

console.log(squareArrow(5));

const squareArrow1 = (x) => x*x;


console.log(squareArrow1(9));


function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName("harjeet kaur"));

const getFirstName1 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName1("kaur gill"));


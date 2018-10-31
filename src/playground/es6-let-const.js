var nameVar = 'har';
var nameVar = 'gill';
console.log('nameVar', nameVar);

let nameLet = 'jan';
nameLet = 'feb';
console.log('nameLet', nameLet);

const nameConst = 'frank';
console.log('nameConst', nameConst);

//block scoping

const fullName = 'harjeet gill';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
const user = {
    name: 'parry',
    cities: ['batala', 'mohali', 'chandigarh'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + ' has lived in '+city);
        }
};
console.log(user.printPlacesLived());



const multiplier = {
    numbers : ['10', '20'],
    mulitplyBy : 2,
    mulitply() {
        return this.numbers.map((number) => number*this.mulitplyBy);
    }
}
console.log(multiplier.mulitply());
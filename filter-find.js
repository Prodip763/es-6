const numbers = [5, 12, 14, 57, 65, 82];
const bigNumbers = numbers.filter(Number => Number > 20);
const smallNumbers = numbers.filter(Number => Number < 20);
console.log(bigNumbers, smallNumbers);
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 12000, color: 'black' },
    { name: 'watch band', price: 500, color: 'yellow' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' }

]
const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);
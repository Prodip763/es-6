const friends = ['tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom solaiman'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 12000, color: 'black' },
    { name: 'watch band', price: 500, color: 'yellow' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 5, color: 'white' }

]
const productName = products.map(product => product.name);
const q = products.map(product => product.price);
const r = products.map(product => product.color);
console.log(productName, q, r);

// products.map(product => console.log(product));
products.forEach(product => console.log(product));
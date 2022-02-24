const fish = { Id: 53, name: 'hilsa', price: 900, phone: '01745555', address: 'chandpur', dress: 'silver' };
const { phone, price, dress, id } = fish;
console.log(phone, price);
console.log(phone);
console.log(phone, dress);
console.log(phone, fish);

const company = {
        name: 'GP',
        ceo: { id: 3, name: 'akol', food: 'fucka' },
        web: { work: 'website development', employee: 23, framework: 'rect' }

    }
    // const work = company.ceo.name;
    // const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
console.log(work, framework, food);
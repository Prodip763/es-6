class Support {
    name;
    designation = 'Support web dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');

    }
}

const prodip = new Support('antora', 'cp');
const antora = new Support('prodip', 'dk');
console.log(prodip, antora);
prodip.startSession();
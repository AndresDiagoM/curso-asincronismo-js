const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1/';

async function getData(API) {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fn = async () => {
    try {
        const data1 = await getData(`${API}products`);
        const data2 = await getData(`${API}categories/${data1[0].category.id}`);
        console.log(data1[0]);
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before');
fn();
console.log('After');
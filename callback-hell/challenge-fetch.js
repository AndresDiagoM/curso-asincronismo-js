const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1/';

const fetchData = (url_api) => {
    return fetch(url_api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error(`There has been a problem with your fetch operation: ${error.message}`);
        });
}

const fetchAllData = async () => {
    try {
        const data1 = await fetchData(API + 'products');
        const data2 = await fetchData(API + 'categories');
        const data3 = await fetchData(API + 'users');
        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        console.error(error);
    }
}

fetchAllData();
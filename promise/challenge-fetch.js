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

fetchData(`${API}products`)
    // .then(response => console.log(response[3]))
    .then(products => {
        console.log(products[0])
        return fetchData(`${API}categories/${products[0].category.id}`);
    })
    .then(response => console.log(response))
    .catch(err => console.error(err))
    .finally(() => console.log('Fin'))

//using async await
const fetchAllData = async () => {
    try {
        const data1 = await fetchData(`${API}products`);
        console.log(data1[0]);

        if (data1[0].category && data1[0].category.id) {
            const data2 = await fetchData(`${API}categories/${data1[0].category.id}`);
            console.log(data2);
        } else {
            console.log('data1 does not have a category or the category does not have an id');
        }
    } catch (error) {
        console.error(error);
    }
}

fetchAllData();

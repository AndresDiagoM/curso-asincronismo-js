const fetch = require('node-fetch');
const API = 'https://api.escuelajs.co/api/v1/';

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
    return response;
}

const data = {
    "title": "Nunca pares de aprender",
    "price": 2,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
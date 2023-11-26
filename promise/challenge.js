const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1/';

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new xmlHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) { // 4: operación completada
                if(xhttp.status === 200){
                    console.log('Status: ', xhttp.status);
                    // console.log(JSON.parse(xhttp.responseText));
                    return resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new Error('Error', url_api));
                }
            }
        });
        xhttp.send();
    });
}

const fetchAllData = async () => {
    try {
        const data1 = await fetchData(`${API}products`);
        const data2 = await fetchData(`${API}categories`);
        const data3 = await fetchData(`${API}users`);
        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        console.error(error);
    }
}

fetchAllData();


// function delay(time, message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(message);
//         }, time);
//     });
// }

// delay(2000, "Hello after 2s")
//     .then((message) => console.log(message))
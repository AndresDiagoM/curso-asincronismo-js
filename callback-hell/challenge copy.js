const XMLHttppRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1/';

function fetchData(urlApi, callback){ 
	let xhttp = new XMLHttppRequest(); 

	xhttp.open('GET', urlApi, true); 
	xhttp.onreadystatechange = function(event) { 
	if(xhttp.readyState === 4) { 
		if(xhttp.status === 200 ){ 
			callback(null, JSON.parse(xhttp.responseText)); 
		}
	} else {
		const error = new Error('Error' + urlApi);
		return callback(error,null); 
	}
	}
	xhttp.send();
}

const fetchAllData = () => {
    // this is the callback hell
    fetchData(`${API}products`, (error1, data1) => {
        if(error1) return console.error(error1);
        console.log(data1);
        fetchData(`${API}categories`, (error2, data2) => {
            if(error2) return console.error(error2);
            console.log(data2);
            fetchData(`${API}users`, (error3, data3) => {
                if(error3) return console.error(error3);
                console.log(data3);
            });
        });
    });
    
}

fetchAllData();

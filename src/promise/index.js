// callbacks are functions that are passed as arguments to other functions

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function (value) { // function (value) is a no name function
    // do something
    console.log(value);
});

myFunc((value) => { // (value) => is an arrow function
    // do something
    console.log(value);
});

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);



// ejemplo 2
console.time('todo');
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}; //No necesariamente se debe llamar callback

console.log(calc(2, 2, sum)); //sum debe estar sin () y sin argumentos

setTimeout(() => {
    console.log('Hola mundo');
}, 3000);

console.timeEnd('todo');
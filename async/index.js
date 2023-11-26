const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const fn = async () => {
    const hello = await fnAsync();
    console.log(hello);
    console.log('After hello'); 
    // here the code has to wait for the promise to be resolved
}

console.log('Before');
fn();
console.log('After');
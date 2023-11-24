// generators

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        yield arrays[i];
    }
}

const array = [1, 2, 3, 4, 5];

const gen2 = iterate(array);

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

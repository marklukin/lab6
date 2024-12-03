const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== 'function') {
            throw new Error('Argument must be a function.');
        }
    }
    return x => fns.reduce((v, f) => f(v), x);
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x);
function memoize(fn)
{
    const caches = new Map();

    return function ( ...args) {
        const key = args.toString();

        if (caches.has(key)){
            return caches.get(key);
        }
        caches.set(key,fn(...args));
        return caches.get(key);

    }
}

function add(a,b)
{ 
    return a+b;
}

const memoizeadd = new memoize(add);

console.time('First')
console.log(memoizeadd(100,100));
console.timeEnd('First')


console.time('Second')
console.log(memoizeadd(100,100));
console.timeEnd('Second')


console.time('Third')
console.log(memoizeadd(200,300));
console.timeEnd('Third')


console.time('Fourth')
console.log(memoizeadd(200,300));
console.timeEnd('Fourth')


function withCache(func) {
    const cache = new Map(); 

    return function arr(...args) {
        const key = JSON.stringify(args); 

    if (cache.has(key)) {
        return cache.get(key); 
    }

    const result = func.apply(this, args); 
    cache.set(key, result); 

    if (cache.size > 10) {
        const firstKey = cache.keys().next().value;
    cache.delete(firstKey); 
    }

    return result;
    arr(result)
    };
}

function add(phone) {
    console.log('Додаємо тел. в кеш...');
    return ('tel:' + ' ' + phone);
}

const cachedAdd = withCache(add); 

console.log(cachedAdd(123)); 
console.log(cachedAdd(456)); 
console.log(cachedAdd(789)); 
console.log(cachedAdd(1011)); 
console.log(cachedAdd(1012));
console.log(cachedAdd(1013));
console.log(cachedAdd(1014));
console.log(cachedAdd(1015));
console.log(cachedAdd(1016));
console.log(cachedAdd(1017));
console.log(cachedAdd(1018));
console.log(cachedAdd(1019));


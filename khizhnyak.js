function onlyString(input){
    if (typeof input !== 'string') return;
    if (/\d/.test(input)) return;
    return input.toUpperCase();
};

function sumOfNumbers(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') return;
    return a+b;
};

console.log(onlyString('Привет мир'));
console.log(onlyString(123));
console.log(sumOfNumbers('sadsadasd', 'asfsaf'));
console.log(sumOfNumbers(2, 3));
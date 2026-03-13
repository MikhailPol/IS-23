// Первая функция:
function string(input) {
    if (typeof input !== 'string' || /\d/.test(input)) {
        return;
    }
    return input.toUpperCase();
}
console.log(string("hello"));
console.log(string("hello 123"));
console.log(string(123));
console.log(string(null));

// Вторая функция:
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
console.log(sum(5, 10));
console.log(sum(5, "10"));
console.log(sum("a", 10));
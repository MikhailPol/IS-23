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
    if (!(typeof a === 'number' && Number.isFinite(a))){return;}
    if (!(typeof b === 'number' && Number.isFinite(b))){return;}
    return a + b;
}
console.log(sum(5, 10));
console.log(sum(5, "10"));
console.log(sum(5, "abc"));
console.log(sum(5, Infinity));
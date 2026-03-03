// Классическая функция (Function Declaration)
function sayHi(){
    console.log('Hello');
};
sayHi();
// Выведет Hello

// Стрелочныя функция. Идёт в одну линию и со знаком "=>"
const sum = (p1, p2) =>{ return p1 + p2};
sum(2, 3); // Выведет 5

// Функция выражение Функция создаётся как значение и присваивается переменной. Пример:
const greet = function(age) { return `Привет, мне ${age} лет!`; };
console.log(greet(18)); // Привет, мне 18 лет!
//1) классические
function sum(a, b) { return a + b; }
console.log(sum(3, 5)); // 8
//2)Стрелочные... грубо говоря те которые используют стрелки типо такого: =>
    const multiply = (a, b) => a * b;
console.log(multiply(4, 5));
//3) Функция выражение Функция создаётся как значение и присваивается переменной. Пример:
const greet = function(name) { return `Привет, ${name}!`; };
console.log(greet("Алекс")); // Привет, Алекс!


//Даю коментарий. Сотрите этот файл под ноль. удалите мой код. мне больно видеть это...
//Короче поскольку код не удалил я.... Хз займусь наукой. Буду скрещивать котов и создам кота ядерку

function returnText(tex){
    if (typeof tex === 'string'){
        return tex.toUpperCase();}
        return ""
}
function sum(a,b){
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b
    }
    return "";
}
//Примеры
console.log (returnText("asa"))
console.log (returnText(1))
console.log (sum(1,"dio"))
console.log (sum(4,5))  
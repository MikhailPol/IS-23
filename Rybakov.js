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

function UpperCase(tex){
    if (typeof tex === 'string' && !tex.match(/[0-9]/)){
        return tex.toUpperCase();}
        return ""
}
function sum(a,b){
    if (typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)){
        return a + b
    }
    return "";
}
//Примеры
console.log (UpperCase("asa"))
console.log (UpperCase("asa123"))
console.log (UpperCase(1))
console.log (sum(1,"dio"))
console.log (sum(NaN,5))  
console.log (sum(1,5))  
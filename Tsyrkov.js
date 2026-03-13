//                  Функция 1

function Funct1(str) {
    if (typeof str === 'string' && str.length > 0 && !str.match(/[0-9]/)) {
        return str.toUpperCase();
    }
}
console.log(Funct1(`Ответ`))

//                  Функция 2

const Funct2 = (a,b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
}
let a2 = 1;
let b2 = 2;
console.log(Funct2(a2,b2))
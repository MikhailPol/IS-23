function convert_string(string) {
    "Функция, которая принимает на вход строку," 
    "и должна вернуть эту строку в ВЕРХНЕМ РЕГИСТРЕ" 
    "Если передана не строка или в ней есть цифра - ничего не должно происходить."
    if (!(typeof string === 'string')){return;}
    if(/\d/.test(string)){return;}
    return string.toUpperCase();
}

console.log(convert_string(10)); // undefined
console.log(convert_string("dvb89")); // undefined
console.log(convert_string("dvb")); // DVB


function sum_int(int1, int2){
    "Функция, принимающая на вход 2 числа и возвращает сумму этих чисел."
    "Если хотя бы одно не число - ничего не должно возвращаться."
    if (!(typeof int1 === 'number' && !Number.isNaN(int1) && Number.isFinite(int1))){return;}
    if (!(typeof int2 === 'number' && !Number.isNaN(int2) && Number.isFinite(int2))){return;}
    return int1 + int2;
}


console.log(sum_int(10, 20)); // 30
console.log(sum_int(2, 3.6)); // 5.6 
console.log(sum_int("jnd", 8)); // undefined
console.log(sum_int(NaN, 8)); // undefined
console.log(sum_int(Infinity, 8)); // undefined
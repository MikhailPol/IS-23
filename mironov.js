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
    if (!(typeof int1 === 'number' && Number.isFinite(int1))){return;}
    if (!(typeof int2 === 'number' && Number.isFinite(int2))){return;}
    return int1 + int2;
}


console.log(sum_int(10, 20)); // 30
console.log(sum_int(2, 3.6)); // 5.6 
console.log(sum_int("jnd", 8)); // undefined
console.log(sum_int(NaN, 8)); // undefined
console.log(sum_int(Infinity, 8)); // undefined





function hoar_sort(arr) {
    "Рекурсивная сортировка Тони-Хоара или же быстрая сортировка, O(n log n)"
    "Используется на практике довольно часто, одна из лучших сортировок"
    "Данная реализация с дополнительной памятью"
    if(!Array.isArray(arr)) {
        console.log("Это не массив!");
        return;
    }
    if(arr.length <= 1){
        return arr;
    }
    let M = [], B = [], R = [];
    let barrier = arr[Math.floor(arr.length / 2)];
    for (const i of arr) {
        if (i > barrier) {
            B.push(i);
        } else if (i < barrier) {
            M.push(i);
        } else {
            R.push(i);
        }
    }
    return [...hoar_sort(M), ...R, ...hoar_sort(B)];
}


let M1 = [45, 12, 89, 3, 56, 21, 7, 99, 34, 10]; // [3,  7, 10, 12, 21, 34, 45, 56, 89, 99]
let M2 = ['g', 'A', 'z', 'L', 'p', 'Q', 'r', 's', 'b', 'W']; // ['A', 'L', 'Q', 'W', 'b', 'g', 'p', 'r', 's', 'z']
let M3 = []; // []
let M4 = 908787; // undefined и лог что не массив
let M5 = NaN; // undefined и лог что не массив
let M6 = "fwwfg"; // undefined и лог что не массив
let M7 = "fwwfg"; // undefined и лог что не массив


console.log(hoar_sort(M1));
console.log(hoar_sort(M2));
console.log(hoar_sort(M3));
console.log(hoar_sort(M4));
console.log(hoar_sort(M5));
console.log(hoar_sort(M6));
console.log(hoar_sort(M7));

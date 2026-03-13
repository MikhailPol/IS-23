// Функция, которая принимает на вход строку, и должна вернуть эту строку в ВЕРХНЕМ РЕГИСТРЕ. Если передана не строка или в ней есть цифра - ничего не должно происходить.
// Функция, принимающая на вход 2 и возвращает сумму этих чисел. Если хотя бы одно не число - ничего не должно возвращаться.
// Следите за названием функций и переменных, и проверяйте результат выполнения своего кода перед отправкой.
// // Все изменения делайте в своих ветках.

// задание 1
function UP(str) {
  if (typeof str !== "string") {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i])) && str[i] !== " ") {
      return str;
    }

    return str.toUpperCase();
  }
}
console.log(UP("dfdfdfd"));
console.log(UP[1234]);
// задание2
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return;
  }
  return a + b;
}
console.log(sum(2, "r"));
console.log(sum(10, 11));

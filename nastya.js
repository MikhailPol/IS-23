
function toUpperString(str) {
  let result = "";

  for (let char of str) {
    let code = char.codePointAt(0);


    if (code >= 97 && code <= 122) {
      result += String.fromCodePoint(code - 32);
    }

    else if (code >= 1072 && code <= 1103) {
      result += String.fromCodePoint(code - 32);
    }

    else if (code === 1105) {
      result += String.fromCodePoint(1025);
    }
    else {
      result += char;
    }
  }

  return result;
}

function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number' && Number.isFinite(a) && Number.isFinite(b)) {
    return a + b;
  }
}

console.log(sum(10, 20));     // 30
console.log(sum(10, "20"));   // undefined
console.log(sum(NaN, 5));     // undefined


console.log(toUpperString("hello world!")); // "HELLO WORLD!"
console.log(toUpperString("Apple123"));     // "APPLE123"
console.log(toUpperString("тест"));         // "тест"
function UpperCase_messege (messege) {
    let text = messege
    if (typeof messege === "string" && isNaN(messege)) {
        console.log(text.toUpperCase(messege))
    }
    else {
        console.log("error")
    }
}
UpperCase_messege("Hello")

function sum_of_numbers (num1, num2) {
   const numbers = (data) => {
    return typeof data === "number" && !isNaN(data)
   }
   if (!numbers(num1) || !numbers(num2)) {
    return null;
   }
    const sum = num1 + num2;
    console.log(sum);
    return sum;
  }
sum_of_numbers(10, 10)
function alert_messege (messege) {
    if (typeof messege === "string" && isNaN(messege)) {
        alert(messege)
    }
    else {
        console.log("error")
    }
}
alert_messege("1")

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
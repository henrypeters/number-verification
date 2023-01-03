const userNumber = document.getElementById("your-number");
const output = document.getElementById("answer");

let odd = "odd";
let even = "even";

function evenOrOdd(userNumber) {
    if (userNumber % 2) {
        return odd;
    }else{
        return even;
    }
}

function outputContent() {
    output.textContent = evenOrOdd(Number.parseInt(userNumber.value, 10));
}

userNumber.addEventListener("keyup", outputContent);
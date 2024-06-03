// main.js
const input = document.getElementById("input");
function checkPalindrome() {
    const value = input.value;
    const reversedValue = value.split('').reverse().join('');
    if (value === reversedValue) {
        alert("It is a palindrome!");
    } else {
        alert("It is not a palindrome!");
    }
input.value = "";
}



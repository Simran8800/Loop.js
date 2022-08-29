let num=require("readline-sync")
const number = num.question('Enter a three-digit positive integer: ');
let temp = number;
let sum=0
while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
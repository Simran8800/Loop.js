// var a=2
// i=1
// do {
//   console.log(a*i);
//   i++
// }while(i<=10);

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// }); 


// outer function
function greet() {
// variable defined outside the inner function
 let name = 'John';
 function displayName() {
    return 'Hi' + ' ' + name;

 }
 return displayName;
}
const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

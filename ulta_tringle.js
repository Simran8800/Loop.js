let string = "";
for (let i = 1; i <=5; i++) {

  for (let k = 5; k >=i; k--) {
    string += k;
  }
  string += "\n";
}
console.log(string);


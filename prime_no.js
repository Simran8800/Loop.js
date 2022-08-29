var p= require("readline-sync");
var num=p.question("enter the number:-")
count=0
i=1
while (i<=num){
       if (num%i==0){
              count++
       }
       i++
}
if (count==2){
       console.log("prime no")
}else{
       console.log("not a prime no")
}


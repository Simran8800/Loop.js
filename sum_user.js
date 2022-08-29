var i=1
sum=0
while (i<=10){
       var num=require("readline-sync")
       var a=num.questionInt("enter the number");
       sum=sum+a
       i++
}
console.log(sum)
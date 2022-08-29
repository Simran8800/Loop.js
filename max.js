let c=require("readline-sync");
let loop_time=c.questionInt("enter loop time: ");
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++) {
   let num=c.question("enter number: ")
   lis.push(num)
}
console.log(lis)
i=0
m=lis[0]
while (i<lis.length){
       if (lis[i]>m){
           m=lis[i]
       }
       i++   
}
console.log("maximum =",m)

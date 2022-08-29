var num=require("readline-sync")
i=num.question("enter the number:-")
n=1
while (i>0){
    n=n*i
    i=i-1
    if (n>=i){
       //     console.log("factorial =",n)
    }
    else{
       //     console.log("not a factoril no =",n)
    }
}console.log(n)
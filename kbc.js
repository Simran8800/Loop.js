console.log("****WELCOME TO KBC GAME****")
var question_list = [
"How many continents are there?",
"What is the capital of India?",
"NG mei kaun se course padhaya jaata hai?",
"who founded microsoft?"
]

let options_list = [
["Four", "Nine", "Seven", "Eight"],
["Chandigarh", "Bhopal", "Chennai", "Delhi"],
["Software Engineering", "Counseling", "Tourism", "Agriculture"],
["elon musk","jeff","mark","bill gates"]
]
let solution_list = [3, 4, 1,2]
var answer_list=[
             ["1.four","3.seven"],
             ["2.bhopal","4.delhi"],
             ["1.softwere engineering","3.agriculture"],
             ["2.jeff","4.bill gates"]]
console.log("******KAUN BANEGA CROREPATI  (KBC)********")
var s=0
var count=0

let sim=require("readline-sync")
for(var i=0;i<question_list.length;i++){
    console.log(question_list[i])
    a=0
    var b=0
    for(var a=0;a<options_list.length;a++){
        k=options_list[i][a]
        console.log(a+1,k)
    }
    var num=sim.question("DO YOU WANT 50-50 LIFE LINE")
    if (num=="yes"){
        console.log("accept")
    
        if (count<1){
            console.log(answer_list[b])
            let bb=require("readline-sync")
            var num1=bb.questionInt("enter the answer:-")
            if (num1==solution_list[i]){
                s+=1
                console.log("your answer is correct")
                console.log("you win Rs/",s)
            }
            else{
                console.log("incorrect answer")
                console.log("you win Rs/",s)
                break
            count+=20000
            }
        }
        else{
            console.log("you already use lifeline")
            var cc=require("readline-sync")
            var num2=cc.question("enter the your answer:-")
            if (num2==solution_list[i]){
                console.log("congrats your answer is right")
                s+=100
                console.log("you win Rs/",s)
            }
            else{
                console.log("your answer is wrong")
                console.log("you win Rs/",s)
                break 
            } 
        }
    }
    else{
        console.log();
        let aa=require("readline-sync")

        var k=aa.questionInt("enter your answer")
        if (k==solution_list[i]){
            console.log("right answer")
            s+=10000
            console.log("you win Rs/",s)
        }
        else{
            console.log("your answer is worng")
            console.log("you win rss/",s)
            break
        }
    }
}
console.log("congratulations...your participated in KBC game")
console.log("you win Rs/",s)
console.log("thankyou for particapting.....")
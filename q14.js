const input=require("readline-sync")
let x=input.questionInt("enter the first number")
let y=input.questionInt("enter the second number")

if(x>=2*y){
    console.log("yes");
}
else{
    console.log("no");
}
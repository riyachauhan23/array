/*The Savings Goal:
Emily wants to save up for a new bicycle that costs $150.
 She decides to save a fixed amount of money each week until she reaches her goal. 
 Write a program that calculates how many weeks it will take Emily to save enough money for the bicycle. 
 Prompt the user to input the amount of money Emily saves each week, then output the number of weeks needed to reach the savings goal.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the number");

let b=150;
let t=0;
let w=0;
while(t<b){
    t+=n;
    w++;
}
console.log(w);
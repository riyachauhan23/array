/*Write a program to create an array of natural numbers till 20 and print it.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the number")

let a=[];
let i=0;
while(i<n){
    
    a[i]=input.questionInt("enter the element no")

     i=i+1

}
console.log(a)
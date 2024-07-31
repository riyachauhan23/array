/*Write a program to print all the numbers from the given array using a loop.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the array")
let a=[1,0,0,1,1,0,0];

let i=0;
 while (i<n) {
    
         a[i] = input.questionInt("enter The element no:")
    
     i=i+1
 }
 console.log(a)

// let x=input.questionInt("enter the first number")
// let y=input.questionInt("enter the second number")

// if(x>=2*y){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

// let N=input.questionInt("enter the  friend number")
// let X=input.questionInt("enter the slices number")
// let a=4;
// let b=N*X;
// let c=0;

// while(b>0){
//     b -=a;
//     c = c+1;
// }
// console.log(c);

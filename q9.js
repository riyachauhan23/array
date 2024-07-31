/*Write a program to take value N from the user and print the following pattern based on the user input.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the lenth of first number")
 let a=[];

 for(let i=0; i<n; i=i+1){
    a[i]=input.questionInt("enter the element of first number")
 }

 for(let i=0; i<n; i++){
    let riya="";
    for(let j=0;j<a[i]; j++){
        riya+="<";
    }
    console.log(riya);

 }

 

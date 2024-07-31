/*Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.
*/

const input=require("readline-sync");
let n = input.questionInt("enter the length of the array");
 let a=[];
 let c=0;
let t=input.questionInt("enter the target");

 for( let i=0; i<n; i=i+1)
 {

    a[i]=input.questionInt("enter the element")

    if(a[i]==t)
    {
        c=c+1;
        n=i;
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
 }
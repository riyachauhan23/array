/*Write a program to reverse the array and print the reversed array.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the number")

 let a=[10,20,30,40,50,60,80,70];
let i=0;
while(i<n){
     
    a[i]=input.questionInt("enter the element")
    i=i+1
}
let j=n-1
while(j>=0){

    console.log(a[j]);
    j=j-1
}


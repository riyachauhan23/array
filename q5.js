/*Write a program to print the sum of all the odd numbers and even numbers in the given array.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the lenth of number")
let a=[];
let es=0;
let os=0;
for(i=0; i<n; i=i+1){
    a[i]=input.questionInt("enter the element number")
}
for(i=0; i<n; i=i+1){
    if(a[i]%2==0){
        es=es+a[i];
    }
    else{
        os=os+a[i];
    }
}
console.log(es,os);

// for (i=0;i<n;i++)
// {
//     a[i]=input.questionInt("enter a element ")
// }
// i=0;
// while(i<n)
// {
//     if(a[i]%2==0)
//     {
//        es+=a[i];
//     }

//     else
//     {
//         os+=a[i];
//     }
//     i++
// }
// console.log(es,os);

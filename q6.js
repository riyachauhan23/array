/*Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.
*/

const input=require("readline-sync")
let n=input.questionInt("enter the lenth of number")
let a=[];
let c;

for(let i=0;i<n;i=i+1)
{
    a[i]=input.questionInt("enter the element number")
}
for(let i=0;i<n;i=i+1){

    c=1;

    for(let j=i+1;j<n;j=j+1){

        if(a[i]==a[j]){

            c=c+1;
            for(let k=j; k<n; k=k+1){
                a[k]=a[k+1];
            }
            n=n-1;
        
    }
}
if(c>1){
    console.log(a[i]);
}
}
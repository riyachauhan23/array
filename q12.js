const input=require("readline-sync")
let n=input.questionInt("enter the lenth of number")

let a=[];
for(i=0;i<n;i++){
    a[i]=input.questionInt("enter the element number")
}
for (i=0;i<n;i++){
    console.log(a[i]);
}
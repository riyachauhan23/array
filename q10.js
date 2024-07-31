const input=require("readline-sync")
let n=input.questionInt("enter the number")
let a=[];

for(let i=0; i<n; i=i+1){
    a[i]=input.questionInt("enter the element")
}
for(let i=0;i<n; i=i+1){
    let riya="";
    for(let j=0; j<a[i]; j=j+1){
        riya+="*";
    }
    console.log(riya);
}
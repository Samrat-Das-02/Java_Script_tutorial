const prompt=require("prompt-sync")();
let n=Number.parseInt(prompt("Enter the number upto which you want to print the series: "));
let i=0;
//while loop
while(i<=n)
{
  console.log("Hello  "+i);
  i++;
}  
//same thing 

// functions
let a=Number.parseInt(prompt("Enter the first number: "));
let b=Number.parseInt(prompt("Enter the second number: "));
console.log("The sum of the two numbers is: "+sum(a,b));
function sum(x,y) //old javascript method 
{
  return x+y;
}
const diff = (x,y)=>{ //arrow function new javascript method and it should be used before the function call
  return x-y;
}
console.log("The difference of the two numbers is: "+diff(a,b));

//if else statement

const prompt=require("prompt-sync" )(); 
let a = prompt("Enter your age : ");
console.log(typeof a)
a=Number.parseInt(a)
console.log(typeof a)

if(a<0)
  console.log("This is an invalid age ")
else if(a==0)
  console.log("Please enter an age greater than 0")
else if(a>0&&a<=6)
  console.log("You are a baby")
else if(a>6&&a<=12)
  console.log("You are a kid")
else if(a>12&&a<=19)
  console.log("You are a Teenager")
else 
  console.log("You are an adult")
//switch statement 
let f=prompt("Enter your favourite fruit : ")
switch(f)
  {
    case "apple": console.log("The entered fruit is apple")
      break
      
    case "banana": console.log("The entered fruit is banana")
      break
      
    case "orange": console.log("The entered fruit is orange")
      break
    default : console.log("The entered fruit is not apple, banana or orange")  
  }
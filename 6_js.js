//Strings
let name="Samrat"
console.log("My name is "+name)
console.log("The length of the string : "+name+" : "+name.length)
const prompt=require("prompt-sync")();
let a=prompt("Enter your string : ")
console.log("The characters of the string are : ")
for(let i=0;i<a.length;i++)
  {
    console.log(a[i])
  }
//Template literals
let boy1="Samrat"
let boy2="Raj"
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)

//Escape sequence characters
let fruit='Bana\'na'
console.log(fruit)
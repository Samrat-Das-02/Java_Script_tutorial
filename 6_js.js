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
//concat()
let concat_string = name.concat(" is a friend of ", a1);
console.log(concat_string);
//trim()
let name1 = "    Samrat    ";
console.log(name1);
console.log("performing the trim() operation : " + name1.trim());
//replace()
let text = "Please visit Microsoft";
console.log(text.replace("Microsoft", "Google"));
//slice()
console.log(text.slice(13, 22));
//toUppercase()
console.log(text.toUpperCase());
//toLowercase()
console.log(text.toLowerCase());
//split
console.log(text.split(" "));

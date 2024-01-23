//can we add a number with a string ?
let a = "Samrat";
let b = 6;
console.log("the type of a is :");
console.log(typeof a);
console.log("the type of b is :");
console.log(typeof b);

console.log(a + b);
console.log("the type of (a+b) is :");
console.log(typeof (a + b));
//can we change the const object ?
const a1 = {
  name: "Samrat",
  age: 22,
  hobby: "coding",
};
console.log(a1);
console.log(a1.name);
console.log(a1["name"]); // both are same a1.name and a1['name']
a1["name"] = "Sam";
console.log(a1);
a1["friend"] = "Rohan";
console.log(a1);
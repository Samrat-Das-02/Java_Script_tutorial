let a=null;
let b=345;
let c="Samrat";
let d=Symbol("I am a nice symbol");
let e=true;
let f=BigInt("567")+BigInt("3");
let g=undefined;

console.log(a,b,c,d,e,f,g);

console.log(typeof d);
console.log(typeof c);

const item={
  "Samrat":true,
  "Shubh":false,
  "Lovish":67,
  "Rohan":undefined
}
console.log(item);
console.log(item["Samrat"]);
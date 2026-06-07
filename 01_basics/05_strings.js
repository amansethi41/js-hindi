const name = "aman"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('aman-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-6, 5)
console.log(anotherString);

const newStringOne = "   aman   "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hitesh://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20', '_'))

console.log(
 url.includes('sundar'))

 console.log(gameName.split('-'));
 
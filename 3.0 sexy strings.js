// template literal
// 자바스크립트에서 variable을 가진 문자열을 쓰는 방법에 대한 개선

const sayHi = (name = 'anon') => 'hello ' + name + 'lovely to have you.';
const sayHi02 = (name = 'anon') => `Hello ${name} lovely to have you`;
const sayHi03 = (name = 'anon') => `Hello ${1000 + 30000} lovely to have you`;
const sayHi04 = (name = 'anon') => `Hello ${() => 1000 + 30000} lovely to have you`;
console.log(sayHi()); // Hello anon lovely to have you
console.log(sayHi02()); // Hello anon lovely to have you
console.log(sayHi03()); // Hello 31000 lovely to have you
console.log(sayHi04());  // Hello () => 1000+30000 lovely to have you

//만약 template litral에서 함수를 실행하고 싶다면?
const add = (a, b) => a + b;
console.log(`this value: ${add(6, 6)}`); // this value: 12
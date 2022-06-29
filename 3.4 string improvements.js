// string method

// 1. String.includes() : 내가 찾고 싶은 문자가 있는지 찾는다
const isEmail = email => email.includes('@');
console.log(isEmail('nico@gmail.com')) // true

// 2. String.repeat(): 원하는문자 반복가능
const LAST_NUMBER = '6060';
const displayName = `${'*'.repeat(10)}${LAST_NUMBER}`;
console.log(displayName); // **********6060

// 3. String.startsWith()
const nicoName = 'Mr. Nicolas';
console.log(nicoName.startsWith('Mr')); // true
console.log(nicoName.endsWith('Nicolas')); // true
// boolean으로 나오기 때문에 유효성검사할 수 있다
console.log(email.endsWith('.com')); // 이메일유효성
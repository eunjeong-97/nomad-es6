// variable swapping
let mon01 = 'Sat';
let sat01 = 'Mon';

// array destructuring을 통해 가능하다
[sat01, mon01] = [mon01, sat01];
// 우변에 있는 mon = 'Sat은 변수 sat에 가도록
// 우변에 있는 sat = 'mon'은 변수 mon에 가도록
// let변수이기 때문에 overwrite가 가능하다

// array에서 omitting(생략하는)방법
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const [, , , thu, fri] = days;
console.log(thu, fri); // thu fri
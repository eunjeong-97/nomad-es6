// Array method 더 알아본다

// Array.prototype.find(): 각각의 요소마다 해당 조건에 해당한 첫번째 조건을 반환한다
const friends = ['nico@gmail.com', 'lynn@naver.com', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', 'test@gorea.com'];
friends.find(friend => friend.includes('@korea.com')); // flynn@korea.com

// Array.prototype.findIndex().:배열에서 해당 요소가 어디에 위치하는지 확인가능 인덱스값을 반환한다
// 요소를 반환하는것이 아니라 index를 반환하기 때문에 해당하는 요소를 수정하고 싶을때 유용하다
const check = () => friends.findIndex(friend => friend.includes('@gorea.com'));
let target = check();
console.log(target); // 5
const [userName] = friends[target].split('@');
const email = 'korea.com';
console.log(`${userName}@${email}`); // test@korea.com
friends[target] = `${userName}@${email}`; // 올바른 이메일로 교체
target = check(); // 변경된 friends에서 index찾기 때문에 target값이 바뀐다
console.log(target); // -1
// 니꼬는 find()보다는 findIndex()가 더 유용할것같다고 한다

// Array.prototype.fill(): 시작index부터 마지막index까지 value로 array를 채운다
const friends02 = ['nico@gmail.com', 'lynn@naver.com', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', 'test@gorea.com'];
friends02.fill('*', repeat(5), friends02.findIndex(friend => friend.includes('@gorea.com')));
console.log(friends02); // ['nico@gmail.com', 'lynn@naver.com', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', '*****']

const friends03 = ['nico@gmail.com', 'lynn@naver.com', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', 'test@gorea.com'];
friends03.fill('*'.repeat(5), 1, 3);
console.log(friends03); // ['nico@gmail.com', '*****', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', 'test@gorea.com']

const friends04 = ['nico@gmail.com', 'lynn@naver.com', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', 'test@gorea.com'];
friends04.fill('*'.repeat(5));
console.log(friends04); // ['*****', '*****', '*****', '*****', '*****']

// Array.prototype.includes() : array에서 해당 요소를 가지고 있는지 알고 싶을때 사용한다
const friends05 = ['nico@gmail.com', 'lynn@naver.com', 'dal@yahoo.com', 'mark@hotmail.com', 'flynn@korea.com', 'test@gorea.com'];
console.log(friends05.includes('nico@gmail.com'));// true
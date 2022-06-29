// spread: 기본적으로 변수를 가져와서 풀어서 전개하는것
// ...연산자를 통해 사용한다
const friends = [1, 2, 3, 4];
console.log(friends); // [1,2,3,4]
console.log(...friends); // 1 2 3 4

const family = ['a', 'b', 'c', 'd'];
console.log(friends + family); // 1,2,3,4a,b,c,d (문자열로 변환된다)
console.log([friends, family]); // [Array(4), Array(4)]
console.log([...friends, ...family]); // [1,2,3,4,'a','b','c','d']

const sexy = {
    name: 'nico',
    age: 24
};
const hello = {
    sexy: true,
    hello: 'hello'
}
console.log({ ...sexy, ...hello }); // {name: 'nico',age:24,sexy:true,hello:'hello'}
console.log({ sexy, hello }); // {sexy: {...}, hello:{...}}
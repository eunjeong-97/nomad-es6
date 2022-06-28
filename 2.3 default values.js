// ES6에서 function에서 default value가 추가되었다
// 기본값은 arrow function뿐만 아니라 function키워드로 만든 함수에서도 활용할 수 있다

function sayHi(name) {
    return 'Hello ' + name;
}

console.log(sayHi('nico')); // Hello nico
console.log(sayHi()); // Hello undefined

// 만약 name이 정의되지 않았다면 hello anonymous라고 하면 좋겠다
function sayHi02(name) {
    // 만약 name이 존재하지 않는다면 'anon'을 선택해서 return할것이다
    return 'Hello ' + (name || 'anon');
}
console.log(sayHi02());

// name의 값이 없다면 default value인 'anon'값을 대신 넣어준다
function sayHi03(name = 'anon') {
    return 'Hello ' + name;
}
console.log(sayHi03());

//arrow function사용
const sayHi04 = (name = 'anon') => 'Hello ' + name;
console.log(sayHi04()); // Hello anon

// 아니면 상수를 선언해서 활용해도 된다
const DEFAULT = 'haha';
const sayHi05 = (name = DEFAULT) => 'Hello ' + name;
console.log(sayHi05()); // Hello haha

// default value를 string 뿐만아니라 상수(변수)나 array, object로도 만들 수 있다
// default value이기 때문에 어떤값이던 상관이 없다

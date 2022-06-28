// temporal dead zone은 let이랑 같이 소개되는 개념이다
// temporal dead zone이 없을때는 어떻게 작동되었는지 보기 위해 var 사용

var name = 'nico';
console.log(name); // nico: 문제없음

console.log(name02); // undefined
var name02 = 'nicoo';

console.log(name03); // Uncaught ReferenceError: name03 is not defined
// name03이 에러가 발생하는 이유는 자바스크립트가 호이스팅을 하기 때문이다

// 호이스팅은 자바스크립트가 프로그램을 실행하기 전에 이런것들을 어딘가로 가지고 가는것이다
// 무조건 위나 아래로 이동하는것이 아니다
// 그래서 name02코드에서 실제로 일어나는 것은 var로 선언되는 걸 보고 아래와 같이 작동된다

/*
var name02;
console.log(name02);
name02 = 'nicoo';
*/

// var로 선언된 variable들을 미리 위로 끌어올린다
// hoisted: 프로그램이 시작되면 그들이 제일 위로 올라가는걸 말한다

// name02의 경우 실제로는 에러를 발생하는게 맞는데 undefined를 출력하기 때문에 좋지 않다
// 이런 문제를 해결하기 위해 let 키워드로 변수를 선언하는 것이 생겼다

console.log(name04);
let name04 = 'nico'; // Uncaught ReferenceError: name04 is not defined
// let으로 선언된 변수는 자바스크립트가 호이스트하지 않고 (=변수를 위로 끌어올리지 않는다)
// 정의하지 않았는데 let에 접근하려고 하면 에러를 일으킨다
// 내가 멍청하게... 코드를 작성했을때 에러를 발생시켜주는 것이 좋은 거다 (엄격해지면 좋음)



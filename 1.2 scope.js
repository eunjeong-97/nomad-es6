// let, const의 또 다른 장점은 block scope가 있다는 점이다
// scope는 기본적으로 버블이다 
// 이러한 버블이 variable들이 접근가능한지의 여부를 감지해준다

if (true) {
    const hello = 'hello';
}

console.log(hello); // Uncaught ReferenceError: hello is not defined
// let, const 모두 block scope로 이루어져있다 즉, 해당 block {} 안에서만 존재한다


if (true) {
    var hello = 'hello';
}
console.log(hello); // hello

// 만약 var를 사용한다면 block scope은 없다
// 즉, if, while, for 구문 안에서 var로 변수를 만들 수 있다
// var는 block scope가 아니라 function scope를 가지고 있다.
// function scope는 var가 function 안에서 접근이 가능하다는 뜻이다

function a() {
    var hello = 'hello';
}
console.log(hello); // Uncaught ReferenceError: hello is not defined

// 이러한 var의 스코프문제를 해결하기 위해 block scope를 가진 let, const가 생겼다
// 반대로 밖에서 선언하고 블록 안에서 사용하는건 문제가 되지 않는다

let hello = 'hello';
if (true) {
    console.log(hello); // hello
    const a = 'a';
}
console.log(a);// Uncaught ReferenceError: hello is not defined

// 만약에 블록 바깥에서 선언하고 블랙 내부에서 값을 변경해도 작동은 잘 된다

let hello;
if (true) {
    hello = 'hello';
}
console.log(hello); // hello

// hello변수는 scope(버블) 외부에 있기 때문에 잘 된다
// {} 괄호 안에는 버블이 있고, 그 버블 외부에서는 안으로 접근이 안된다

// 만약 버블 안에 다른 버블이 있다고 한다면
let hello;
if (true) {
    const a = 'a';
    if (true) {
        console.log(a); // a
    }
}

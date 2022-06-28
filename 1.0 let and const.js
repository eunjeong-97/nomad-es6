

// let, const 이전에는 var를 사용했다
var hello = 'hello';
// 하지만 큰 어플리케이션을 만들거나 협업할 땐 문제가 생길 수 있다
var name = 'nico';
// 다른파일에서 동일한 변수에 값을 지정해도 에러를 발생시키지 않는다
// 어떤 값을 덮어쓰거나 정의할 땐 괜찮지만 항상 괜찮은건 아니다
// 그래서 variable이 변하는 것을 막는 메커니즘이 필요하기 때문에 const가 생겼다
name = 'eunjeong';


// const는 변하지 않는다
const test02 = 'test02';
test02 = 'test02'; // Error: 'test02' is read-only
// 왜냐하면 const는 variable의 내용이 변하는것을 막기 때문이다 (const의 장점)

// 하지만 무조건 read-only인것은 아닌데
const person = {
    name: 'nico'
};
person.name = 'eunjeong'; // 여기서는 에러를 발생시키지 않는다
// person object 안에서 어떤 걸 바꿀 수 있기 때문에 마냥 안전한건 아니다
// const키워드로 person을 정의하면, person을 20이나 true처럼 다시 할당할 수는 없다
// 하지만 이처럼 object의 내용을 막아주지는 못한다

// let: 이전의 var같은 것이다
// 즉, 값을 변경할 수도 있다
let nico = 'las';
nico = 'test'; // 에러발생안함

// 그래서 const를 기본적으로 사용하고 값을 변경해야할 때만 let을 사용하는것이 좋다
// 만약 variable값을 overwrite해야하는 상황이 온다면 그때만 let사용
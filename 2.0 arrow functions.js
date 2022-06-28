// arrow function 자바스크립트에서 함수의 모습을 변화시킨것이다
// let, const처럼 새로 생긴게 아니라 보기 좋아진것이다

// 기존에는 function키워드를 사용하고 함수이름을 쓰거나 안쓰고 argument, {} 블록을 사용했다
function functionName(argument) { }

// 익명함수
function (argument) { }

// 변수에 익명함수 지정
const hello = function (argument) { }

// arrow function은 기본적으로 =>을 arrow이라고 한다
// arrow function은 코드를 좀더 보기 편하다

const names = ['nico', 'lynn', 'eunjeong'];
// 이런 names array에 각각의 이름들에 ♥ 를 붙이고 싶다면
// names.map() 메서드를 활용하면 되는데 map은 function을 받는다
// 그리고 모든 item들에게 function을 실행시켜준다
// 모든 items들을 가지고 와서 기본적으로 old es6부터 작동된다
// 각각의 아이템들에 대해 return을 해준다
const hearts = names.map(function (item) {
    return item + ' ♥';
})

console.log(hearts); // ['nico ♥', 'lynn ♥', 'eunjeong ♥']

// 이처럼 map()이 하는 일은 각각의 아이템마다 함수를 호출하는 것이다

function addHeart(item) {
    return item = ' ♥';
}

const hearts02 = names.map(addHeart);
// map()함수는 무언갈 return해야 한다
// 그래서 무엇을 return하던간에 새로운 array가 생긴다
// 뭔가를 return하던 아무것도 return하지 않던 결국 새로운 array를 반환하게 된다
// 위처럼 요즘엔 다른 함수를 만들어서 넣지 않는다 

// 위처럼 새로운 함수를 만들어서 넣거나 function키워드를 사용해서 함수를 전달하는대신 => 형식으로 하는것이 더 좋아보이기 때문에 arrow function이 도입되었다
const hearts03 = names.map((item, index) => {
    console.log('we are on ', index);
    return item + ' ♥';
});
console.log(hearts03);

// 그리고 위처럼 표현식을 하나만 쓰고 그 표현식만을 return할땐 
// implict return을 한다
const hearts04 = names.map(item => item + ' ♥');
// implict return의 뜻은 같은 줄에 뭘 적던지 간에 return된다는것이다
// 만약 이 상태에서 블록을 추가한다면 implict return은 없어지게 되면서 아무것도 return하지 않는게 된다
const hearts05 = names.map(item => {
    item + ' ♥';
})
console.log(hearts05); // [undefined, undefined, undefined]
// 그래서 내용이 추가되어 블록을 추가하고 싶다면 function의 body를 만들기 위해 중괄호 {}를 추가한다
// 이렇게 되면 implict return기능은 사라지게 된다
// 엄청 기능이 바뀌는것은 아니지만 자바스크립트와 함수형 프로그래밍을 위해 가독성이 좋아졌다
// 그리고 arguments가 하나만 오는경우 ()를 생략할 수 있다


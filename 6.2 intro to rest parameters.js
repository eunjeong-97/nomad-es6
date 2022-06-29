// rest parameter
// parameter(매개변수)는 우리가 함수에게 전달하는 인자를 말하는데
// parameter를 수없이 많이 받는 함수에서 rest parameter를 활용하면 좋다
const infiniteArguments = (...potato) => console.log(potato);
infiniteArguments('1', 2, true, 'lala', [1, 2, 3, 4]);
// ['1', 2, true, 'lala', [1, 2, 3, 4]]
// 함수에 전달한 인자들을다 확인할 수 있다

// 즉, ...seperate 연산자는 변수를 unpack하지만, rest는 모든 값을 하나의 변수로 contract 축소시키는 것이다
// 함수에서 parameter자리에 ...이라고 하면 parameter로 무슨 값이 오던간에 전부 potato 변수에 넣어버리자는 뜻이다

const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(potato); // rest
}
bestFriendMaker('nico', 'lynn', 'dal', 'mark'); // 아래 두개의 콘솔로 출력된다
// My best friend is nico
// ['lynn', 'dal', 'mark']

// rest: 기본적으로 변수들을 하나로 축소시켜준다 (활용도 많음)
// spread는 변수를 확장시키고, rest는 값들을 리스트로 취한다음 하나의 변수에 넣는다
// 그래서 rest변수는 array형태로 출력된다
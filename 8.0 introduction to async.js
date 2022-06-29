// async

// 멀티테스킹은 한 가지 이상의 작업을 한 번에 동시에 하는 것이 아니라, 단지 사이를 빠르게 스위칭하는 것이다
// 니꼬가 이 코스를 녹화하고, 쉴 때 내일 볼 영화에 대해 생각하고 다시 코스 녹화로 돌아옴
// 한 쪽에서 어떤 일을 하고 있어도 프로그램은 그대로 실행된다

// 만약 자바스크립트에서 API에서 데이터를 가지고 올 때
const hello = fetch('https://google.com');
console.log('something');
console.log(hello);

// something이 먼저 콘솔에 찍히고 그 다음 google을 fetch하지 못했다는 에러문구가 콘솔에 찍힌다
// 이론적으로는 이러한 에러는 something 전에 나와야되는데 // google.com을 fetch하고 에러를 얻고, 그 다음에 something을 콘솔에 출력해야 하지만 비동기성으로 인해 위와같은 결과가 나온다
// 자바스크립트는 위에서 아래방향으로 순서대로 실행하지만 fetch를 실행하자마자 한쪽에서 어떤 action을 시작한다
// console.log(something)하고 이쪽에서 action이 문제가 생기고 다시 돌아와서 에러가 있다고 말해준다
// 이것이 비동기적 프로그래밍의 특징이다

// 순차적으로 처리되는 것이 아니라 한꺼번에 실행된다
// Promise의 기초
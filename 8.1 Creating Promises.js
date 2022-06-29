// Promise는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과갑을 나타낸다
// 그래서 Promise를 만들 때에는 실행할 수있는 function을 넣어야 한다

// 이 Promise를 호출할 때, 자바스크립트는 내가 설정한 function과 함께 Promise를 실행할 것이다

const amISexy01 = new Promise((resolve, reject) => {
    // Promise를 resolve하거나 reject하면 되는데
    // resolve는 값을 주고 자바스크립트로 보낸다
    // reject는 에러가 있는걸 알려준다  

    // 8.0에서 google을 fetch했는데 Promise가 reject된거다 (에러가 생겨서 값이 없음)
});

console.log(amISexy01); // Promise {<pending>}: 대기중
// 자바스크립트가 이 파일의 실행을 끝내고 우리가 새로운 Promise를 시작했고 이 Promise가 끝나기를 기다리는 중이다


const amISexy02 = new Promise((resolve, reject) => {
    // resolve function을 실행함으로써 대기중인 상태를 끝낼 수 있다
    // setTimeout은 handler를 가지고 있는데 timeout과 인자를 가지고 있어서 아래 표현식처럼 쓸 수 있다
    // setTimeout(() => {
    //     resolve('Yes you are!');
    // }, 3000);
    setTimeout(console.log, 3000, 'Yes you are!')

});
// Promise를 만들었고 3초뒤에 'Yes you are!' 텍스트와 함께 resolve될 것이다
// 밖에선 Promise를 매 초마다 console.log할 것이다
console.log(amISexy02);
setInterval(console.log, 1000, amISexy02);

// 아래 콘솔이 1초마다 순서대로 출력된다
// Promise{<pending>} 
// Promise{<pending>}
// Promise{<pending>}
// Promise{<resolved>: 'Yes you are!'}

// Promise의 핵심은 내가 아직 모르는 value와 함께 작업할 수있게 해준다
// 자바스크립트에서 작업요청을 하면 요청이 다 되면 알려준다
// 여기서 'Yes you are!' 값을 어떻게 꺼낼지 알아봐야 한다
// 만약 Promise가 API를 호출하거나 파일 시스템에서 파일을 열거나 유저의 설정을 연다면?
// 로딩이 다 되면 그 데이터를 다시 자바스크립트에게 돌려줘야 한다
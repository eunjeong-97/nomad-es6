// promise를 사용하려면 then을 사용할 것이다
// 자바스크립트에 promise가 끝난 이후의 명령어를 전달하려면
// 언제 끝나는지는 중요하지 않고 끝나는 이후에 값을 돌려달라고 명령을 하면 된다

const amISexy = new Promise((resolve, reject) => {
    // API호출, 유저의 localStorage이나 쿠키에서 정보 가져옴
    setTimeout(resolve, 3000, 'Yes you are!');
    // resolve('Yes you are!'); 을 3초뒤에 실행한다
});

// resolve('Yes you are!')라고 resolve의 인자로 들어간 값이 여기서 value에 들어간다
amISexy.then(value => console.log(value)); // 3초 뒤에 Yes you are! 콘솔에 찍힘

// 대부분 본인이 사용할 promise를 만들지 않을거다
// 보통 다른 사람들을 위해 promise를 만드는 작업을 할텐데
// 라이브러리나 다른 작업을 할 때나 promise를 사용하게 된다
// promise를 return하게 되면 then을 사용할 수 있다

const thenFn = value => console.log(value);
amISexy.then(thenFn); // 이렇게 함수를 만들어서 사용해도 되지만 보통은 arrow function으로 사용할듯

// 만약 promise에서 값을 가져오지 못해서 resolve를 적용하지 못하고 error가 있다고 하면 reject를 사용하면 된다
// promise에 에러가 있다면 우리는 catch하면 된다
const amISexy02 = new Promise((resolve, reject) => {
    // 에러가 발생했고, 3초뒤에 에러값으로 'you are ugly...' 가 return된다
    setTimeout(reject, 3000, 'you are ugly...');
});

amISexy02.then(value => console.log(value)); // Uncaught (in promise) You are ugly...
// Uncaught라는건 아무것도 잡지 못한 에러라는 뜻이다
// 그래서 이러한 에러를 잡기 위해 catch를 사용한다

amISexy02
    // .then(value => console.log(value))
    // .catch(value => console.log(value));
    .then(result => console.log(result))
    .catch(error => console.log(error));
    // catch()를 사용했기 때문에 에러값을 catch할 수 있고 그 결과 콘솔에서 'you are ugly...' 에러값을 확인할 수 있다


// amISexy02라는 promise가 두가지 작업을 하는데
// promise가 resolve되면 then()안에 있는 함수를 실행하고,
// promise가 reject되면 catch() 안에 있는 함수를 실행한다
// then이 먼저 실행되고 catch가 실행되는 것이 아니라
// then이 실행되면 catch는 실행되지 않고, 반대로 catch가 실행되면 then은 실행되지 않는다
// 이렇게 promise를 통해 value를 얻는다

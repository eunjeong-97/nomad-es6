// Promise.all은 주어진 모든 promise를 실행한 후 진해오디는 하나의 promise를 반환한다
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'First');
});

const p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, 'Second');
});

const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Third');
});

// 수많은 then을 하는것보단 Promise.all()을 사용하면 된다
// Promise.all()은 한 개의 Promise를 리턴값으로 주는데 
// 모든 Promise가 전부 resolve되면 마지막 Promise를 리턴값으로 준다

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise.then(values => console.log(values));
// 5초뒤에 ['First' , 'Second', 'Third'] array형태로 콘솔에 찍힌다

// 즉, Promise.all()이 다른 promise들이 전부 진행될 때까지 기다렸다가 진행되었다는 뜻이다
// 그리고 p1, p2, p3 각각 언제 끝나는지 상관이 없고 순서에 맞게 값들을 얻을 수 있다
// 이론에 따르면 'First'가 제일 늦게 처리되기 때문에 마지막 값이 될것같지만
// Promise.all() 내가 요청한 순서를 지켜서 값을 반환해준다
// 모든 값을 얻을 때까지 기다렸다가 반환한다

// 만약 한 promise에서 reject를 한다면
const p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'I hate JS');
});

const rejectTest = Promise.all([p1, p4, p3]);
rejectTest.then(values => console.log(values)); // Uncaught (in promise) I hate JS

// 즉, Promise.all()은 여러 개의 promise가 필요한데, 제공한 promise 중에 하나라도 reject하면 
// rejectTest또한 reject하게 된다

rejectTest
    .then(values => console.log(values))
    .catch(error => console.log(error)); // I hate JS 콘솔에 찍힌다
// 하나의 promise라도 reject된다면, 다른 promise들도 같이 reject된다
// 이러한 특성은 제대로 작동되는지 확인해볼 때 매우 유용하다
// 이 예시에서도 3개 전부 제대로 진행되어야 하고 그게 아니면 에러를 반환해야 하는것이 맞다
// 그리고 then이나 catch를 여러개 넣지 않아도 된다
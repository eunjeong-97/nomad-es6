// Promise.race()는 Promise.all()이랑 사용방법은 동일하지만 기능은 다르다
// Promise.race()는 여러개의 promise 중에서 하나라도 resolve되거나 reject되면 된다
// Primise.race()가 resolve되어서 then으로 넘어가거나 reject되서 catch()로 넘거가려면
// 여러개의 promise 중에서 하나라도 resolve나 reject되면 된다
// 이러한 promise 들 중에서 가장 빠른게 결과를 정한다

const p1 = new Promise(resolve => setTimeout(resolve, 100000, 'First'));
const p2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'I hate JS'));
const p3 = new Promise(resolve => setTimeout(resolve, 4000, 'Third'));
const p4 = new Promise((resolve, reject) => setTimeout(reject, 5000, 'I hate JS'));

const motherPromise = Promise.race([p1, p2, p3]);
const faterPromise = Promise.race([p1, p3, p4]);

motherPromise.then(values => console.log(values)).catch(error => console.log(error));
// p2가 제일 빨리 처리되기 때문에 catch()메서드로 처리된 console.log('I hate JS')가 실행된다

faterPromise.then(values => console.log(values)).catch(error => console.log(error));
// p3가 resolve나 reject가 가장 빠르기 때문에 콘솔에서 'Third'만 출력된것을 확인할 수 있다
// reject('I hate JS')나 resolve('First')는 따로 실행되지 않는다

// 즉, Promise.race()는 어느 것이 먼저 되는지 상관없을 때 사용하면 된다
// 보통은 여러개의 promise가 모두 잘 작동되는지 확인하려 하기 때문에 Promise.race()는 많이 쓰이지 않는다
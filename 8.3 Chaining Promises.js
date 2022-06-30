const amIsexy = new Promise((resolve, reject) => {
    resolve(2);
});
amIsexy.then(number => console.log(number));

// 결과값이 여러개가 나와야하는경우 여러 개의 Promise를 사용해야 된다
// API에서 데이터를 받아오고, 암호화된 data를 받고나서는 암호화된 부분을 풀어줘야한다
// 그렇게 암호를 푼 data를 받을 때 파일로 저장을 해야한다면 promise를 두번 수행해야 한다
// then은 서로의 순서가 끝나기를 기다리기 때문에 갯수는 상관없다
// 시간이 좀 걸리는 과정을 거친다면 then을 쓰는것이 좋다

amIsexy
    .then(number => console.log(number * 2))
    .then(otherNumber => console.group(otherNumber * 2));
// 실행하면 처음의 promise 결과로 4는 콘솔에 잘 찍히지만 (promise resolving)
// 두번째 promise는 NaN으로 콘솔에 찍힌다: otherNumber가 undefined로 나온다
// 즉, 두번째 then()이 제대로 작동이 되지 않는다는 말이다
// 작동이 되지 않는 이유는 promise들을 역고 싶을 때에는 앞의 then에서 return 값이 있어야하기 때문이다

amIsexy
    .then(number => {
        console.log(number * 2);
        return number * 2;
    })
    .then(otherNumber => console.log(otherNumber * 2));
// 4 8이 각각 콘솔에서 찍히는 것을 확인이 가능하다
// 여러 개중 하나가 error가 발생한다면 reject해주면 되는데

const timeTwo = number => number * 2;

amIsexy
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(() => { throw Error('Somthing is wrong'); })
    .then(lastNumber => console.log(lastNumber));
// Uncaught (in promise) Error: Somthing is wrong 

amIsexy
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(() => { throw Error('Somthing is wrong'); })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error));
// Error: Something is wrong 이라고 콘솔에 찍히는걸 확인할 수있다
// catch가 다른 then이랑 function 안의 에러들을 다 포함해서 에러를 잡아줄 것이다

const amIsexy02 = new Promise((resolve, reject) => {
    reject(2);
});

amIsexy02
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(timeTwo)
    .then(() => { throw Error('Somthing is wrong'); })
    .then(lastNumber => console.log(lastNumber))
    .catch(error => console.log(error));
// 이런경우, catch()의 error에 2가 들어가서 콘솔에 2가 찍힌다

// promise chaining 하려면 return을 해야 다음 then에 값이 전달된다




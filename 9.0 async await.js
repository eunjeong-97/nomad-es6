// async/await는 두 Promise의 업데이트이다
// 가독성이 좋은 코드를 만들기 위해
// promise.then().catch()같이 사용하는건 구식 자바스크립트코드
// 많은 사람들이 then을 사용해야 하는 문제가 있는데 보기 좋지 않고 많은 함수를 사용하게 된다


// async/await는 기본적으로 Promise를 보기좋게 하기 위한 모던자바스크립트이다
// Promise 밖에서 값을 가져올 수 있는 방법이다

const getMoviesPromise = () => {
    fetch('https://ys.am/api/v2/list_movies.json')
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(e));
};

// await은 항상 async function안에서만 사용할 수있다
const getMoviesAsync01 = async () => {
    // Promise를 끝내기 위해 수많은 then들을 사용하는 것 대신 await을 사용하면 된다
    const response = fetch('https://ys.am/api/v2/list_movies.json');
    console.log(response);
}
// async function () {} 이렇게 작성해도 된다

const getMoviesAsync = async () => {
    // await는 기본적으로 Promise가 끝나길 기다린다
    // 그리고 promise로부터 받은 값을 response 변수에 넣어준다
    // 즉, 기본적으로 resolve되었을때의 값
    const response = await fetch('https://ys.am/api/v2/list_movies.json');
    console.log(response);
}

const getMoviesAsyncJson = async () => {
    const response = await fetch('https://ys.am/api/v2/list_movies.json');
    const json = await response.json();
    console.log(json);
}


getMoviesAsync01(); // Promise{<pending>}
getMoviesAsync(); // Response {...}: 영화리스트데이터
getMoviesAsyncJson(); // 영화리스트데이터를 JSON형태로 받을 수있다

// 따라서 promise를 사용하는것보단 async await구문을 사용하는게 더 보기 좋기 때문에
// async await 함수를 사용하면 된다
// await는 Promise가 성공을 기다리는것이 아니라 끝나길 기다린다
// 즉 promise가 resolve이던 reject던 상관없이 기다린다

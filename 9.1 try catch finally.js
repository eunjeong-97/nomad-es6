// async await를 이용해서 then()연속을 피할 수 있게 되었다
// 기존에 promise.catch()를 쓰는대신 try catch문을 사용하게 된다

const getMovie = async () => {
    try {
        // http가 아니라 https를 사용하기 때문에 에러가 발생할 것이다
        const response = await fetch('https://yts.am/api/v2/movie_list.json');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};
getMovie();
// GET https://yts.am/api/v2/movie_list.json net::ERR_ABORTED 404
// Access to fetch at 'https://yts.am/api/v2/movie_list.json' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: ~~ 
// TypeError: Failed to fetch

// fetch할 access가 중단되어서 에러메시지를 콘솔에 찍힌다

// 만약 json을 처리하다가 error가 발생한다면?

const getMovieJson = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/')
        // response는 단지 String이기 때문에 json으로 변환하려고 하면 에러를 발생시킬 것이다
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('We are Done!');
    }
};
getMovieJson(); // SyntaError: Unexpected token < in JSON 콘솔에 찍힘

// 즉, catch는 await안에 있는 error뿐만 아니라 모든 에러를 잡아낸다
// 마찬가지로 여기서의 finally에서도 resolve가 되던 reject가 되던 처리된 나중에 실행된다

const getMovieError = async () => {
    try {
        const response = await fetch('http://yts.am/api/v2/movie_list.json')
        const json = await response.json();
        throw Error("I'm Hungry");
    } catch (error) {
        console.log(error);
    } finally {
        console.log('We are Done!');
    }
};
getMovieError();

// throe Error()로 발생한 에러또한 catch가 잡는다

// async await을 사용하는 더 좋은 이유
// 간격하고 깔끔하고 catch를 활용한 error handling이 더 낫다
// 중간값 활용도 가능
// https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9 링크참고
// 
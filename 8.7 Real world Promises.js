// 실제로 만들어진 promise를 활용해본다

// 1. Promise를 return하는 fetch
fetch('https://google.com')
    .then(response => console.log(response))
    .catch(error => console.log(error));
// TypeError: Failed to fetch가 콘솔에 찍힌다

fetch('http://127.0.0.1:8000/')
    .then(response => console.log(response))
    .catch(error => console.log(error));
// Response {...}

// Scream: 기본적으로 0과 1로 이루어진 byte
// 만약 이러한 response를 json으로 변환한다면

fetch('http://127.0.0.1:8000/')
    .then(response => console.log(response.json()))
    .catch(error => console.log(error));
// Promise{<rejected>} 콘솔에 찍힘
// 다른 Promise를 console.log한것이다
// 왜냐하면 response가 Promise를 return하는 함수를 가지고 있기 때문이다

fetch('http://127.0.0.1:8000/')
    .then(response => console.log(response.text()))
    .catch(error => console.log(error));
// Promise{<pending>}
// response를 텍스트로 변환한걸 return한 것이다
// 그렇기 때문에 한번더 다시 then()메서드를 활용해서 promise에서 return된 값을 처리해야 한다

fetch('http://127.0.0.1:8000/')
    .then(response => console.log(response.text()))
    .then(potato =>console.log(potato))
    .catch(error => console.log(error));
// http://127.0.0.1:8000 페이지의 HTML요소가 콘솔에 찍힌다

fetch('https://yts.am/api/v2/list_movies.json')
.then(response => {
    console.log(response);
    return response.json();
})
.then(json => console.log(json))
.catch(e=>console.log(e));
// Response {...}: 
// {...}: 영화리스트받음
// 두개의 결과를 콘솔에서 확인할 수잇다

// promise는 보통 내가 직접 만들다기보다는, 만들어진 Promise를 활용할 일이 많다
// fetch를 사용한 것처럼 다른 사람이 만든 Promise를 사용하게 된다

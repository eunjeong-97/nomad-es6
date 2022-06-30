// Async Parallel

// 두개의 API를 얻는다고 가정해보자: 인기있는 영화와 곧 개봉하는 영화리스트
const getMovie = async () => {
    try {
        //array형태로 데이터를받기 때문에 구조분해할당 가능
        const [moviesRes, suggestionsRes] = await Promise.all([
            fetch('http://yts.am/api/v2/list_movies.json'),
            fetch('http://yts.am/api.vw/movie_suggestions.json?movie_id=100')
        ]);
        const [movies, suggestions] = await Promise.all([moviesRes.json(), suggestionsRes.json()]);
        console.log(movies, suggestions); // 두개모두 json형태로 콘솔에서 확인가능
    } catch (error) {
        console.log(error);
    } finally {
        console.log('We are Done!');
    }
};
getMovie();

// async함수를 만들어야 await 동작이 가능하다
// fetch대신 Axios이라는 라이브러리를 활용하면 내가 json으로 변환해주지 않아도 된다
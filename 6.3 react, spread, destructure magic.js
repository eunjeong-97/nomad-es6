// rest 활용01: 특정 속성property값을 제외시킨다
const user = {
    name: 'nico',
    age: 24,
    password: 123
}

// 여기서 password property제거
user[password] = null;
console.log(user); // {name: 'nico', age: 24, password: undefined}
// 여전히 password property남음

// function에서의 destructure사용
// rest만 return한다 (나머지 속성만)
const killPassword = ({ password, ...rest }) => rest;

const cleanedUser = killPassword(user);
console.log(cleanedUser); // {name: 'nico', age: 24}
// password를 선택적으로 가져오고 나머지는 rest로 정의했는데 rest에 뭐가있던 rest만 return

// rest02: 기본값설정
const setCountry = ({ country = 'KR', ...rest }) => ({ country, ...rest });
console.log(setCountry(user)); // {name: 'nico', age: 24, country: 'KR', password: 123}
// 'KR' 을 기본값으로 하는 country라는 속성을 가지고 있는 nico object
// rest구문을 이용해서 입력 인자의 나머지 값들을 하나로 축소하고
// 그리고 나서 country와 함께 나머지 값을 담고 있는 rest변수를 전개해서 return했다

// rest03: rename
const user02 = {
    NAME: 'nico',
    age: 24,
    password: 12345
};

// NAME key값을 name key값으로 rename (변수이름변경)
// implict return 특히 object return
const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
console.log(rename(user02)); //{name: 'nico', age: 24, password:12345}
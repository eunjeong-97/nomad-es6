// spread 연산자 활용

const friends = ['nico', 'lynn'];
const newFriends = [...friends, 'dal'];
console.log(newFriends); // ['nico', 'lynn', 'dal']
// 이런방식으로 하면 friends.push('dal') 처럼 기존의 데이터 friends를 건들지 않고
// 기존데이터를 복사해서 새로운 데이터를 만들고 싶을때 사용할 수 있다
const newFriends02 = ['dal', ...friends];
console.log(newFriends02); // ['dal', 'nico', 'lynn' ]

const nico = {
    username: 'nico'
};
console.log({ ...nico, password: 123 }); // {username: 'nico', password: 123}
// 기존의 데이터를 건들지 않고 새로운 데이터 추가 가능

const first = ['mon', 'tue', 'wed'];
const weeked = ['sat', 'sun'];
const fullWeek = [...first, 'thu', 'fri', ...weeked];
console.log(fullWeek); // ['mon', 'tue', 'wed', 'thu', 'fri','sat', 'sun']

// 조건부object
const lastName = prompt('Last name');
console.log(typeof lastName); // string
const user = {
    username: 'nico',
    age: 24,
    lastName: lastName !== '' ? lastName : undefined
};
// 여기서 어떻게 하면 object에 속성 property을 조건부로 추가할 수 있는가

// 아무것도 입력하지 않고 console에서 확인하면
console.log(user); // {username: 'nico' , age: 24, lastname: undefined}

// 입력하지 않아서 undefined가 되면 user를 콘솔로 확인했을때 lastname property가 보이지 않았으면 좋겠다
const user02 = {
    username: 'nico',
    age: 24,
    // 이 두가지 조건은 모두 true여야 한다
    // 만약 lastName에 값이 입력되면 첫번째 조건은 true가 되서 lastName에 값이 할당되고, lastName: lastName이 되는데 shorthand property로 인해 lastName이라고쓸 수 있다
    // ...연산자가 ()괄호 안에 있는 조건의 결과를 전개한다
    // ...(true && lastName) === lastName
    ...(lastName !== '' && lastName)
};

// lastName을 입력하지 않고 user02객체를 콘솔로 확인해보면
console.log(user02); // {username: 'nico', age:24}

// 만약 lastName으로 가나다라마바사아 라고 입력하면
// {0:'가', 1:'나', 2:'다', 3:'라', 4:'마', 5:'바', 6:'사', 7:'아', username:'nico', age:24} 라고 나오는데
// 이경우 spread로 전개하려면 데이터가 object여야 하기 때문에 lastName을 중괄호로 감싸줘야 한다

const user03 = {
    username: 'nico',
    age: 24,
    ...first(lastName !== '' && { lastName })
};

// lastName으로 가나다라마바사아 라고 입력하면
console.log(user03); // {username: 'nico', age:24, lastName:'가나다라마바사아'}
// 이렇게 선택적으로 object를 구성할 수 있다

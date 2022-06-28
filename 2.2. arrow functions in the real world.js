// arrow function 실제예시연습

// Array.prototype.find는 제공되는 테스트조건을 만족하는 첫번째 element값을 리턴하는 함수이다
const email = ['nco@no.com', 'naver@google.com', 'lynn@gmail.com', 'nico@nomad.com', 'nico@gmail.com'];
// 만약 여기서 gmail.com인 주소를 찾는다고 했을때

// 인자로 받는 함수에서 true로 나오는 첫번재 인자를 반환함
const foundMail = email.find(item => true);
console.log(foundMail); // nco@no.com

const test02 = email.find(item => item.includes('@gmail.com'));
// String.includes(문자열); 은 찾으면 true, 없으면 false를 반환한다
console.log(test02); // lynn@gmail.com

// 만약 arrow function이없다면 아래처럼 작성했을것같다
const test03 = email.find(function (item) {
    return item.includes('@gmail.com')
})

// Array.prototype.filter() 메서드는 제공된 함수의 조건을 만족한 모든 element로 새로운 array로 만든다
// 그래서 find()메서드처럼 첫번째 element만이 아니라 모든 element를 반환한다

// 만약 '@gmail.com'을 없앤다고 가정했을때
// filter내부 함수에서 true값이 된다면 새로운 array에 저장하고 싶다는 말이다
const noGmail = email.filter(potato => !potato.includes('@gmail'))
console.log(noGmail); // ['nco@no.com', 'naver@google.com', 'nico@nomad.com']

// Array.prototype.forEach(): 각 element에게 제공된 함수를 실행해준다
// 만약 username만을 알고 싶다면 
// splict: 무언가를 자르는것이다(string을 구분자를 기준으로 나누서 하나의 array에 element로 만들어준다)
const name = 'nicolas serrano';
name.split(" ") // ['nicolas', 'serrano'] 여기서는 2개의 element로 만들어줌
const getName = email.forEach(item => {
    console.log(item.split('@')[0]) // 'nco', 'naver', 'lynn', 'nico', 'nico' 각각의 콘솔로 출력된다
})

const cleaned = [];
email.forEach(item => cleaned.push(item.split('@')[0]));
console.log(cleaned); // ['nco', 'naver', 'lynn', 'nico', 'nico']

// 위와같은경우 코드가 길어지기 때문에 map()메서드를 활용하면 된다
// map()메서드: forEach() + element들을 새로운 array로 만들어준다
const cleaned02 = email.map(item => item.split('@')[0]);
console.log(cleaned02); // ['nco', 'naver', 'lynn', 'nico', 'nico']

// arrow function이 콜백함수를 활용한 기능들을 사용할때 한줄로 되면 읽기 쉬워진다
// implict return때문에 더 편해짐

// 뭔가를 return할때만 item => item.split('@')[0] 형식으로 사용하는건 아니다
// item => item.split('@')[0]은 값을 return하는거
// 만약 object를 리턴하고 싶다면? 예를 들어 name만 return 하는것이 아니라 순서도 같이 return
console.log(email.map((item, index) => { userName: item.split('@')[0], index }))
// 위처럼 코드를 작성한다면 중괄호{}를 사용하게 되는데, 중괄호는 implict return을 사용하지 못하게 한다
// 이럴땐 아래와 같이 작성해서 object를 return할 수 있다
const cleaned03 = email.map((item, index) => ({
    userName: item.split('@')[0],
    index
}));
console.log(cleaned03); // [{userName: 'nco', index: 0}, {useName: 'naver', index:1}, {userName:'lynn', index:2}, {userName:'nico', index:3},{userName:'nico', index:4}]
console.table(cleaned03); // 테이블형식으로 console창에 출력된다

// 즉, implict return은 {}을 쓰면 사용하지 못하고, ()을 같이 쓰면 object를 가능해진다

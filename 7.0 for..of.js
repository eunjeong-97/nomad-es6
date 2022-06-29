// 자바스크립트의 for..of loop
// 루프는 기본적으로 동일한 일을 계속 반복하는 것이다
// 어디서든 루프 가능
const friends = ['nico', 'lynn', 'dal', 'mark'];
for (let i = 0; i < 20; i++) {
    console.log('I Love Potato');
}
// I Love Potato 20번 콘솔에 출력된다
// 만약 요소 각각에 대해 뭔가 처리를 하고 싶다면
for (let i = 0; i < friends.length; i++) {
    console.log(`${friends[i]}loves potato`);
}

// forEach(): 배열에 있는 각각의 요소에 대해 특정한 액션을 실행한다
// 내가 특정한 액션을 선언하고 각각의 요소에게 실행할 수 있음
const addHeart = (currentItem, currentIndex, currentArray) => {
    console.log(currentItem, currentIndex); // 각각의 요소 출력
    console.log(currentArray); // ['nico', 'lynn', 'dal', 'mark']
};

friends.forEach(addHeart);
// 첫번째 인자: 현재 요소
// 두번재 인자: index
// 세번째 인자: 원래 array 원본

friends.forEach(friend => console.log(friend));

// for...of loop으로 변환
for (const friend of friends) {
    console.log(friend); // 각각의 요소 콘솔에 출력   
}

// forEach()메서드와 구분되는 for...of loop의 특징
// const, let 키워드로 선언가능: forEach()에서는 const로 선언할지 let으로 선언할지 선택못함
// array뿐만 아니라 iterable(루프 가능)한 자료형에서 모두 가능하기 때문에 문자열에서도 가능
// array 뿐만 아니라 Array, Iterables, NodeList, Strings 등등
for (const letter of 'Hello this is very lovely loop.') {
    console.log(letter); // 각각의 H같은 글자가 콘솔에서 출력된다   
}

// 루프를 멈출 수 있다
// 요소를 반복하면서 진행하다가 '6'을 만나게 되면 루프를 멈추고 싶다 
// 이름들을 DB에 보내다가 'lynn'을 만나면 stop
// 루프를 멈추고 싶다면 for...of loop사용
const array = ['1', '2', '3', '4', '5', '6', '7'];
for (const item of array) {
    if (item === '6') {
        break;
    }
    else {
        console.log(item);
        // 1부터 5까지 차례대로 콘솔에 출력된다
    }
}
// 만약 DB에 데이터를 전송하고 싶을 때 DB가 꽉 찼다면 확인하고 DB에 공간이 있으면 전송한다
// DB에 공간이 없으면 error를 뱉으면서 전송중단

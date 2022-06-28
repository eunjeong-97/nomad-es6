// template literal html fragment에 관한 예제를 다시 해보자면
const wrapper = document.querySelector('.wrapper');
const friends = ['me', 'lynn', 'dal', 'mark'];

// 내가 좋아하는 친구들 목록을 만들고 싶다
const ul = document.createElement('ul');
friends.forEach(friend => ul.append(`<li>${friend}</li>`));
wrapper.append(ul); // 이렇게 하면 HTML코드도 그대로 보이기 때문에 좋지 않다

const list = `
    <h1>People I Love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`)}
    </ul>
`;

wrapper.innerHTML = list; // 이렇게 하면 작동은 되지만 ,도 같이 나오게 된다
// 이렇게 ,도 나오는 이유는 friends가 array이기 때문이라 join하면된다

console.log(friends.join('🎈')); // me🎈lynn🎈dal🎈mark
// join메서드를 활용하면 모든 element들을 🎈로 분리하게 된다

// 그래서 아래와 같이 " "로 join메서드로 합치면 ,가 사라진다

const list02 = `
<h1>People I Love</h1>
<ul>
    ${friends.map(friend => `<li>${friend}</li>`).join(' ')}
</ul>
`

wrapper.innerHTML = list02; 
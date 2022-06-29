// array method
// Array.of(): 어떤 걸 array로 만들고 싶을때 사용한다
const friends = Array.of('nico', 'lynn', 'dal', 'mark');
console.log(friends); // ['nico', 'lynn', 'dal', 'mark']
// elements가 많을때 사용하면 도움이 될것같다
console.log(Array.of(1, 4, 6, true, 'red')); // [1, 4, 6, true, 'red']

// Array.from(): array-like object로부터 array를 만드는 메서드이다.
/*
이런코드가 있다고 가정했을때 각각의 버튼에 이벤트리스너를 달고 싶을경우
<body>
    <button class='btn'>1</button>
    <button class='btn'>2</button>
    <button class='btn'>3</button>
    <button class='btn'>4</button>
    <button class='btn'>5</button>
    <button class='btn'>6</button>
    <button class='btn'>7</button>
    <button class='btn'>8</button>
    <button class='btn'>9</button>
    <button class='btn'>10</button>
  </body>
*/

const buttons = document.querySelectorAll('button');
const buttons02 = document.getElementsByClassName('btn');
console.log(buttons); // NodeList [button, button, ..., button]
console.log(buttons02); // HTMLCollection(10) [button.btn, button.btn, ..., button.btn] 
// 이러한 NodeList와 HTMLCollection(10)은 array같이 생겼지만 실제로 array는 아니기 때문에 array-like object라고 한다

// array라면 할수 있는 작업을 못하기 때문에 array가 아니라고 한다
// 만약 각각의 버튼을 가져와서 이벤트리스너를 붙이고 싶다면
// 이론상 array라면 아래와 같이 해야한다
buttons.forEach(button => button.addEventListener('click', () => console.log('click'))); // Uncaught TypeError: buttons.forEach is not a function.
// 즉, buttons가 forEach 메서드를 가지고 있지 않다는 뜻이다 따라서 array가 아님

// 그래서 Array.from()메서드를 활용해줄 것이다
Array.from(buttons).forEach(button => button.addEventListener('click', () => console.log('click'))); // 작동잘됨

// array-like object를 만나면 array로 바꾸고 array method를 활용하면 된다.

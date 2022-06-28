// string안에 표현식을 넣을수도 있지만, template literal을 멋지게 사용하는 방법
// 자바스크립트 안에서 html을 사용할때도 활용한다
const wrapper = document.querySelector('.wrapper');

// 만약 인터넷에서 어떤걸 가져오는 작업을 하는 function이 있을때
// 이름이나 정보 같은

const addWelcome = () => {
    // 변수명은 내 마음대로 지으면 됨
    const potato = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = 'hello';
    h1.className = 'sexyTitle';
    potato.append(h1);
    wrapper.innerHTML = potato;
    wrapper.append(potato);
};

setTimeout(addWelcome, 5000); // 5초뒤에 addWelcome()함수 실행
//그리고 로딩되고 user가 로그인되었다고 가정한다면 그 뒤에 hello를 보여주고 싶다
// 이렇게 HTML를 위한 코드가 많을때 template literal을 사용하면 좀 편하다

const addWelcome02 = () => {
    const div = `
    <div class='hello'>
        <h1 class='title'>Hello</h1>
    </div>
    `;
    wrapper.innerHTML = div;
};

setTimeout(addWelcome02, 5000); // 백틱을 활용해서 HTML요소를 만들었다

// html을 위한 fragments뿐만 아니라 내가 만드는 space도 고려해준다
// enter를 통해 줄바꿈을 하면 실제로도 줄바꿈이 적용된다
// 홑따옴표나 쌍따옴표는 줄바꿈을 지원하지 않지만 백틱은 줄바꿈을 지원해준다

const addWelcome03 = () => {
    const div = '<div class="hello"><h1 class="title">Hello</h1></div>';
    wrapper.innerHTML = div;
}

// 위와같이 작성해도 똑같이 보이긴 하겠지만 template literal를 사용하면 텍스트를 더 편하게 만들 수있다

console.log(`


hello



`);
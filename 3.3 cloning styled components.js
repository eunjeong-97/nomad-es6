// styled components를 클론코딩해보자!
// 자바스크립트에서 css를 쓸 수 있게 해준다
// template literal를 활용해서 따라해볼것이다

// function은 우리가 만들고 싶은 element를 받고 적용하고 싶은 CSS도 받은 다음에 
// CSS를 적용한 element를 반환할 것이다

const styled01 = (css) => console.log(css);

// argument에 줄바꿈을 하고 싶을땐 괄호를 치지 않고 ``백틱으로만 감싸줘도 된다
styled01`border-radius:10px;
color: blue;`
// styled01('arguments') 같은 동작을 한다
// 단, 줄바꿈을 했기 때문에 엄청 긴 argument string 하나만 나온다
// 이것이 바로 styled-component가 동작하는 방식이다

// text로만 함수를 호출할 수 있다는 점에서 template literal의 또 다른 장점이다

// == styled components cloning ===

const styled = (element) => {
    const el = document.createElement(element);
    return el;
}

const box = styled('div');
console.log(box); // <div></div>

const title = styled('h1')`
    border-radius:10px;
    color: blue;
`;
console.log(title); // Uncaught TypeError: styled(...) is not a function
// 즉, 내가 function을 두번 호출해서 발생한 에러다
// styled()()이라고 작성하면, 기본적으로 function을 호출하고 바로 또 function을 호출한것과 동일하다
// styled함수는 el을 리턴하기 때문에 이런 상태에서 함수를 두번 호출하게 되면 작동하지 않는다

// 따라서 function안에서 function을 리턴해야 한다
const styled02 = element => {
    const el = document.createElement(element);
    // function return
    return (args) => {
        // console.log(args[0]); // border-radius:10px (줄바꿈) color: blue;
        const styles = args[0];
        el.style = styles; // el요소의 스타일을 args[0]으로 지정한다
        return el; // 스타일이 지정된 HTML 요소를 반환한다
    }
}

const title02 = styled02('h1')`
    background-color: red;
    color: white;
`;

const subtitle = styled02('span')`
    color: green;
`;

title.innerText = 'we just cloned';
subtitle.innerText = 'Styled Components';
document.body.append(title, subtitle); // 화면에 정상적으로 반영된다

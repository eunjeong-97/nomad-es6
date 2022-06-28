// arrow function을 사용하지 않아야 하는 경우
// this키워드를 사용할때를 제외하면 대부분의 경우 arrow function을 사용할 수 있다

const button = document.getSelector("button");
button.addEventListener("click", function () {
    // this: HTMLButtonElement 자바스크립트의 룰이다
    // HTML요소에 이벤트리스너를 붙이고, 이벤트리스너에 함수가 있으면
    // 자바스크립트는 우리가 클릭한 버튼을 this키워드에 넣는다
    console.log(this); // <button>Click me</button>
    // 이러한것도 scope라고 부른다
    // 어떤 이론을 배우던지 간에 자바스크립트가 this를 활용할 수 있다
    // 만약 색을 변경하고 싶을때 this를 사용할 수 있는데,
    this.styles.backgroundColor = "red"; // 버튼배경색이 빨간색으로 된다

    console.log("i have been clicked");
    // 어떠한 이유로 arrow function을 사용하지 않았다
});

// 만약 이벤트리스터에 arrow함수가 있다면
button.addEventListener("click", () => {
    console.log(this); // window 객체나옴
    this.style.backgroundColor = "red"; // Uncaught TypeError: Cannot set property 'backgroundColor' of undefined at HTMLButtonElement.
    // 즉, arrow 함수에서 this는 더이상 button을 가리키지 않게 된다
    // arrow function안의 this는 window를 가리키기 때문에 바깥의 bubble(scope)를 참조한다
    // this도 이러한 bubble 안에 존재한다

    // 즉, this를 사용하고 싶다면 arrow function을 사용하면 안된다
    // this가 button을 참조하게 하고 싶은데 arrow function을 사용하면 reference을 잃게 된다
});

const handleClick = () => {
    console.log(this);
};

button.addEventListener("click", handleClick); // 이렇게 실행했을때에도 this는 window객체를 가리키게 된다

function handleClick02() {
    console.log(this);
}

button.addEventListener("click", handleClick02); // this === button요소

// arrow function은 this를 이벤트로부터 가지고 있지 않다
// arrow function은 this를 window object로 가지고 있다
// this를 가리키고 싶다면 function키워드를 사용해서 함수를 선언해서 사용해야한다

// 만약 arrow function을 사용하고 싶지 않은경우
const nico = {
    name: 'Nico',
    age: 24,
    // arrow function으로 만들어서 바로 실행되지 않도록 한다면
    addYear: () => { this.age++; }
};
console.log(nico); // {name: 'Nico', age: 24, addYear: func}
nico.addYear();
nico.addYear();
console.log(nico) // {name: 'Nico', age:24, addYear: func}

// addYear()함수를 두번이나 호출했지만 nico.age는 변하지 않은것을 알 수 있다
// 왜냐하면 arrow function에서 this는 window를 가리키기 때문이다

// 즉, addYear에서 this가 nico를 가리키길 원한다면
const nico02 = {
    name: 'Nico',
    age: 24,
    addYear() {
        this.age++;
    }
}

console.log(nico02); // {name: 'Nico', age: 24, addYear: func}
nico.addYear();
nico.addYear();
console.log(nico02) // {name: 'Nico', age:26, addYear: func}

// arrow function을 사용하지 않아야되는경우: this와 scope에 관련된 내용
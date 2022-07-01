/*
  <body>
    <span id="count"></span>
    <button id="add">+</button>
    <button id="minus">-</button>
    <span id="count2"></span>
    <button id="add2">+</button>
    <button id="minus2">-</button>
  </body>
*/

class Counter {
    constructor({ initialNumber = 0, counterId, plusId, minusId }) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.counter.innerText = initialNumber;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners(); //자체적으로 이벤트리스너 추가가능
    }
    addEventListeners() {
        console.log(this); // 따로 이벤트를 진행하지 않아도 실행
        // {count:0, counter: span#count, plusBtn:button#add, minusBtn:button#minus}
        this.plusBtn.addEventListener('click', this.increase);
        this.minusBtn.addEventListener('click', this.decrease);
    }
    // increase() {
    //     console.log(this); // +버튼을 누르면 실행
    //     // <button id="add">+</button>
    //     // 즉, class를 가리키지 않고 이벤트가 작동된 대상을 가리킨다
    //     this.counter = this.counter + 1;
    //     this.repaintCount();
    // }
    // decrease() {
    //     this.counter = this.counter - 1;
    //     this.repaintCount();
    // }

    // this를 class를 가리키게 하고 싶은경우 arrow function을 사용하면 된다
    increse = () => {
        this.counter = this.counter + 1;
        this.repaintCount();
    }
    decrease = () => {
        this.counter = this.counter - 1;
        this.repaintCount();
    }
    repaintCount = () => {
        this.counter.innerText = this;
    }
};

new Counter({ counterId: 'count', plusId: 'add', minusId: 'minus' });
new Counter({ counterId: 'count2', plusId: 'add2', minusId: 'minus2', initialNumber: 111 });

console.log(this); //window object

// react, django에서 class를 활용해서 사용한다 (직접 만드는 일은 거의 없음)

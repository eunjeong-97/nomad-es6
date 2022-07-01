class User {
    constructor({ username, lastName, email, password }) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`);
    }
    updatePassword(newPw, currentPw) {
        if (currentPw === this.password) {
            this.password = newPw;
        } else {
            console.log(`Can't change password.`);
        }
    }
};

class Admin extends User {
    // constructor(userOptions, adminOptions) {
    constructor({ username, lastName, email, password, superAdmin, isActive }) {
        // 기존에 extends한 User 클래스의 constructor를 유지하면서 Admin 클래스에서만 유효한 함수 호출
        // super(userOptions);
        super({ username, lastName, email, password });
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    };
    deleteWebsite() {
        console.log(`Deleting the whole website...`);
    }
}

const user01 = new User({
    username: 'Nicolas',
    lastName: 'Serrano',
    email: 'nico@gmail.com',
    password: 12345
});

// User, Admin클래스 더함
const admin01 = new Admin({
    username: 'Nicolas',
    lastName: 'Serrano',
    email: 'nico@gmail.com',
    password: 12345,
    superAdmin: true,
    isActive: true
});

console.log(admin01.email) // nico@gmail.com
// 기존에 만들어진 Class를 extends해서 내가 원하는 Class를 만들어서 활용하는 일이 많을 것이다

/*
  <body>
    <span id="count">0</span>
    <button id="add">+</button>
    <button id="minus">-</button>
  </body>
*/

class Counter {
    constructor({ initialNumber = 0, counterId, plusId, minusId }) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners(); //자체적으로 이벤트리스너 추가가능
    }
    addEventListeners() {
        this.plusBtn.addEventListener('click', this.increate);
        this.minusBtn.addEventListener('click', this.decrease);
    }
    repaintCount() {
        this.counter.innerText = this;
    }
    increate() {
        this.counter = this.counter + 1;
        this.repaintCount(); // Uncaught TypeError: this.repaintCount is not a function.
    }
    decrease() {
        this.counter = this.counter - 1;
        this.repaintCount(); // Uncaught TypeError: this.repaintCount is not a function.
    }

};

const counter = new Counter({
    counterId: 'count',
    plusId: 'add',
    minusId: 'minus'
});
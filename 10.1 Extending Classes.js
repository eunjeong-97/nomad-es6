// this는 기본적으로 클래스 안에서 볼 수있고, 클래스 그 자체를 가리킨다
// 그래서 this는 클래스 전체를 가리킨다
// 내가 언제든 추가하고 싶거나 클래스로부터 어떤 것을 불러오고 싶을 때 this를 사용하게 된다
// 만약 클래스 안에ㅅ만 둔다면 그냥 개념이겠지만, 함수에서 활용하게 된다

class User {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log(this); // {username: 'nico'}
        console.log(this.username); // Nico
    }
};

const sexyUser = new User('Nico');
sexyUser.sayHello();

// 어떻게 class와 function을 정의하느냐에 따라 달라진다
class UserArraow {
    constructor(name) {
        this.username = name;
    }
    sayHello = () => {
        console.log(this.username);
    }
};

const arrowUserTest = new UserArraow('Nico');
arrowUserTest.sayHello(); // arrow function을 쓰면 다르게 나올것같다

class User02 {
    constructor(name, lastName, email, password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.something = 'i like potato';
    }
    sayHello() {
        console.log(`Hello i'. ${this.username}`);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`)
    }
    // 내가 원하는만큼 class 내부에 argument를 활용한 function을 만들 수있다
    // data를 불러올 수도, 변경할 수도 있다
    updatePassword(newPassword, currentPassword) {
        if (currentPassword === this.password) {
            this.password = newPassword;
            return;
        }
        console.log(`Can't change password`);
    }
};

const userTest02 = new User02('Nicolas', 'Serrano', 'nico@gmail.com', 12345);

// extending class
// 지금은 클래스를 가지고 있고, 새로고침을 하면 아무 반응이 없다


userTest02.updatePassword('hello', 12345);
console.log(userTest02.password); // hello

userTest02.updatePassword('test', '12345'); // Can't change password
console.log(userTest02.password); // hello

// 만약 User클래스를 가지고 있고 User 클래스의 어느 부분을 약간 수정하고 싶다면
// admin과 admin person을 추가해야 한다
// 그래서 User클래스를 extend해서 새로운class를 만들 것이다

// Admin 클래스를 만들 때, User 클래스를 extend했기 때문에
// 기존에 User 클래스가 가지고 있던 usename, lastname, email, password를 가지게 된다
class Admin extends User {
    // constructor를 정의하면 기존의 sonctructor를 잃어버리게 된다
    // 즉, 'Nicolas', 'Serrano', 'nico@gmail.com', 12345의 정보를 잃게 된다
    constructor(superAdmin) {
        this.superAdmin = superAdmin;
    }
    deleteWebsite() {
        console.log('Deleting the whole website...');
    }
}

// User 클래스인 new Admin을 생성했고
// parameter로 보낸 값들이 User 속으로 forwarding하고 있다
// 즉, Admin은 User의 extension이다

const admin01 = new Admin('Nicolas', 'Serrano', 'nico@gmail.com', 12345, true);
admin01.deleteWebsite(); // Deleting the whole website...
console.log(admin01.email); // nico@gmail.com
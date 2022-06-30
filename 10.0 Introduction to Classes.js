// Classes: fancy한 object
// 내가 class를 직접 만들진 않고 다른사람들이 만든 class를 활용하게 될 것이다
// 보통 많은 사람들이 라이브러리를 만들 때 Classes를 export하고 그 다음에 Classes를 이용한다
// class들은 코드를 구상하는데 도와준다

// 만약 내가 엄청 많은 코드를 가지고 있고 이러한 코드들을 구조화하려고 할때 Class를 이용한다면 유용하다
// Class를 재사용하면 된다

// Class는 blueprint이다
// blueprint: 비행기설계도같은...: 진짜 비행기는 아니지만 비행기에 대한 specification들을 준다
// 만약 비행기를 만들 수 있는 재료들을 다 가지고 있다면 실제로 만들 수 있게 된다

// Class는 constructor(생성자)를 안에 가지고 있다
// constructor는 Class를 말 그대로 constuct(구성)한다는 뜻이다
// 또한 class 안에는 뭔가 좀 이상한 this도 있다
class User {
    constructor() {
        this.username = 'Nicolas';
    }
    sayHello() {
        console.log("Hello, I'm Nicolas.");
    }
}
// 위의 코드는 단지 blueprint일 뿐이고 이러한 blueprint로 Class를 생성해줘야 한다 (죽은 Class)
console.log(User.username); // undefined

// 그래서 위의 class부분을 가지고 와서 선언을 해서 class를 생성한다
const sexyUser = new User();
// sexyUser는 User Class의 instance이다
// instance는 살아있는 Class이다
console.log(sexyUser.username); // Nicolas
setTimeout(sexyUser.sayHello, 4000); // 4초뒤에 console.log("Hello, I'm Nicolas.");가 실행된다

// 이렇게 class는 원하는만큼 instance들을 가질 수 있게 된다

const uglyUser = new User();
sexyUser.sayHello(); // Hello, I'm Nicolas.
uglyUser.sayHello(); // Hello, I'm Nicolas.

const baseObject = {
    username: 'Nicolas',
    sayHello: () => console.log("Hello I'm Nicolas")
};
const instanceEx = baseObject;
instanceEx.sayHello(); // Hello, I'm Nicolas.

// 이처럼 class와 instance를 만들어서 메서드를 호출하거나
// 직접 object를 만들어서 메서드를 호출해도 똑같이 작동하는데 
// 굳이 class & instance로 만들어야 하는 이유는?
// 이미 object를 하나 만들어 버린다는 차이가 있다
// Class를 만들면 실제로 object를 만드는게 아니기 대문에 아래와 같이 다른 object를 만들 수도 잇다

class User02 {
    constructor(name) {
        this.username = name;
    }
    sayHello() {
        console.log(`Hello, I'm ${this.username}`);
    }
};
const sexyUser02 = new User02('Nicolas');
const uglyUser02 = new User02('las');
console.log(sexyUser02.username, uglyUser02.username); // Nicolas las
// class의 constuctor에 argument를 주고 있고 construction을 통해 this.username을 지정할 수 있다
// 그리고 sexyUser02를 이용해서 .username 값을 얻을 수 있게 된다
// 이러한 특성은 object로는 활용할 수 없다
// class는 정의를 해줘야하고, 어떤 특정을 가지지 않았고, 뭐든 넣어도 되는 username같은 변수도 있다
// Class는 object의 공장같은거다
sexyUser02.sayHello(); // Hello, I'm Nicolas
uglyUser02.sayHello(); // Hello, I'm las

// 많은 Classes를 가지게 되면 구조적인 코드를 만들 수 있게 된다
// sayHello()는 스코프에 존재하지 않고, 오직 class안에 존재하는 함수이다
// 그냥 class도 아니고 class의 instance에서만 존재하는 함수(-> 메서드)이다

// new 키워드를 보게 되면 Class를 만들 수있다고 생각만 하면 될것같다



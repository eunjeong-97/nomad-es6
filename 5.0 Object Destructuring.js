// object, array, function의 destructuring(비구조화)
// desctructuring은 object나 array, 그 외 요소들 안의 변수를 바깥으로 꺼내서 사용할 수 있게 하는것

const settings = {
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: 'dark'
    }
};

// 이전에는 이런식으로 follow 의 여부를 판별했지만, 만약 notification이 undefined라면 TypeError가 난다
if (settings.notifications.follow) {
    // send email
}

// destructuring 활용
const { notifications: { follow } } = settings;
// 처음에는 notifications안으로 접근하는데, notifications은 settings 안에 있고
// notifications에서 follow만을 가져온다

// 만약 color를 가지고 오고 싶다면 아래와 같이 작성가능
const { notifications: { follow }, color } = settings; // 위에서 follow변수를 선언했기 때문에 에러발생
console.log(color); // {theme: 'dark'}; 
// 이런 방식은 큰 object나 특정 변수나 그 안에 속한 작은 object에 접근할 수 있도록 해준다
// 그래서 const 키워드를 통해 변수를 생성해주는 역할을 하게 된다
// 지금 여기서는 follow나 color 변수를 생성했다 즉, notifications를 변수로서 가져오는 것이 아니라 notifications를 통해 변수를 가져올 수 있게 되는것이다 
// settings바깥으로 꺼내질않음
console.log(notifications); // Uncaught ReferenceError: notifications is not defined

const { notifications } = settings; // 만약 notifications객체를 가져오고 싶다면 이런식으로 작성!


// 만약 notifications 객체가 없을때 notifications object안으로 접근하고 싶다면
const settings02 = {
    notifications: {
        alerts: true,
        unfollow: false
    },
    color: {
        theme: 'dark'
    }
};
const { notifications: { folow } } = settings02;
console.log(follow); // Uncaught TypeError: Cannot destructure property 'follow' of 'undefined' or 'null'.
// 이렇게 TypeError가 나오는것을 방지하기 위해 default value를 넣어줄 수 있다
const { notifications: { folow = false } } = settings02;
// settings02안의 notifications 안으로 들어가서 follow가 있는지 찾아본 다음, follow가 없다면 
// follow = false라고 선언해주라는말
console.log(follow); // false

const settings03 = {
    color: {
        theme: 'dark'
    }
};

// notifications의 default value 설정
const { notifications: { follow = 'potato' } = {} } = settings03;
// settings03의 notificatons안에 들어가서 follow값을 찾는데,
// 만약 notifications 자체가 없다면 기본값으로 빈객체를 지정해주고
// notifications의 follow값이 없다면 'potato'로 지정해주라는 말
console.log(follow); // potato

// 이러한 방식을 one-line-statement를 사용하는것인데
// if()문을 하는것보다는 훨씬 보기 좋다
const { color: { theme = 'lignt' } } = settings03;
console.log(theme); // dark


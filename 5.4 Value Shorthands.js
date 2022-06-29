// value shorthands: 변수명단축
const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications: {
        follow: follow,
        alert: alert
    }
}

// 위처럼 변수이름을 동일하게 하고 싶다면 sherthand property(단축속성명)을 사용할 수 있다
// 쓸데없이 반복되는 부분을 안써도 되게 해준다
const settings = {
    notifications: { follow, alert }
}; // 위 object와 동일하다 (key값과 value값이 서로 동일하다)



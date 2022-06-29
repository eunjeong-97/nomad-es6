// array destructuring
// 가져온 정보를 조작하지 않는것이 좋다

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// object 에서는 key값이 있긴하지만 array에서는 위치값만 존재한다
const [mon, tue, wed = '3'] = days; // 앞의 3개만 가지고 온다 마찬가지로 기본값설정가능
// destructuring하면서 key값 이름변경
const settings = { color: { chosen_color: 'dark' } };
const { color: { chosen_color = 'light' } } = settings;
console.log(chosen_color);

// chosen_color 변수명으로 사용하고 싶지 않을때
const testColor = settings.color.chosen_color || 'light'; // 이전에 사용한 방법
const { color: { chosen_color: chosenColor = 'light' } } = settings;
//settings안의 color에 들어가서 chosen_color값을 가지고 올건데 가져온 변수의 이름을 바꾸고
// 만약 chosen_color값이 존재하지 않는다면 light을 넣어준다
console.log(chosenColor); //dark
// let키워드를 사용해도 된다

// 만약 기본값이 있고, API에서 받은 객체값으로 업데이트한다고 가정한다면
let settingColor = 'blue';
// 동일한 let변수를 두번 만들 수 없기 때문에 let settingsColor를 또 사용하면 동작하지 않을것이다
// 만약 const를 사용하면 이름만 동일한 다른 chosenColor를 만드는게 된다
// 그래서 const, let 모두 사용할 수 없기 때문에 아래 방법을 따라해보자
console.log(settingColor); // blue
({ color: { chosen_color: settingColor = 'light' } } = settings);
// 위 코드가 실행될 때 새 변수를 생성하는 대신 let변수인 settingColor를 업데이트하게 된다
console.log(settingColor); // dark

// const, let키워드를 넣지 않았기 때문에 새로운 변수를 만든게 아니라
// let settingcolor로 선언된 변수를 찾아서 업데이트 해준게 된다
// 당연히 처음에 const settingColor = 'blue';로 선언해줬다면 TypeError가 발생하게 된다
// 왜냐하면 const변수는 overwrite, 변경할 수 없기 때문이다
// let 변수 업데이트할 때 좋은 방법이다
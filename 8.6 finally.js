// promise가 성공하거나 실패하던 상관없이 뭔가 하고 싶을 경우
// 예를들어 코멘트를 API를 통해 저장할 때 유저가 SAVE버튼을 누르면 spinner를 보여주고 싶은경우
// 만약 에러가 발생하면 spinner를 멈추고 유저에게 에러메시지를 보여주고, 업로드를 성공적으로 처리하면 spinner를 멈추고 싶을 때

// finally: resolve, reject되었을때 모두 실행된다
const p1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'))
    .then(value => console.log(value))
    .finally(() => console.log("I'm Done!"));
// First가 콘솔에 찍히고 I'm Done!도 그 다음에 콘솔에 찍힌다

const p2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Fail'))
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log("I'm Done!"))
// 콘솔에 'Fail'이 찍히고 I'm Done!도 순서대로 콘솔에 찍힌다

// finally를 API호출할 때 많이 사용된다 (로딩을 멈추거나 뭔가를 처리할 때)



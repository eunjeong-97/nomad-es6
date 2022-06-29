// 함수와 함께하는 object 구조분해할당

// 유저세팅을 저장하는 함수
// 이처럼 인자를 많이 받는게 좋지 않기 때문에
function saveSettings01(settings) {
    console.log(settings);
    //만약 마케팅수신을 중단했을때 내가 알고 싶다면
    if (!settings.markAlert) {

    }
    // 만약 notifications정보를 저장한다고 했을때
    // followAlert, unfollowAlert, markAlert 값은 A api로 전송하고
    // themeAlert값은 B api로 전송한다면
    saveColor(settings.color); // 만약 color를 설정하지 않는다면 undefined일텐데
}

saveSettings01({
    followAlert: true,
    unfollowAlert: true,
    markAlert: true,
    themeAlert: 'green'
}); // 이렇게 사용하는게 협업할 때 더 좋을것같다
saveSettings01(true, true, true, 'green'); // BAD

// object destructring
function saveSettings02({ notifications, color: { theme = 'blue' } }) {
    console.log(theme); // 값이 없어도 blue
}

saveSettings02({
    notifications: {
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: 'blue'
    }
})





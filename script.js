window.onload = function() {
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.time').textContent = timeString;
    }
    setInterval(updateTime, 500);
    updateTime();
};
document.addEventListener('DOMContentLoaded', function () {
    // 点滅させたい要素を取得
    const circleContainer = document.querySelector('.circle-container');
    
    // setIntervalを使って背景色を交互に変更
    setInterval(() => {
        if (circleContainer.style.backgroundColor === 'rgb(178, 198, 227)') {
            circleContainer.style.backgroundColor = '#eff1f7'; // 切り替え先の色
        } else {
            circleContainer.style.backgroundColor = '#b2c6e3'; // 元の色
        }
    }, 1500); // 2秒ごとに色を切り替え
});
